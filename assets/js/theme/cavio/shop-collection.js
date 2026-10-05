import $ from 'jquery';
import 'slick-carousel';
import utils from '@bigcommerce/stencil-utils';

export default (function(context) {
    var token = context.bearerToken;
    var productIds = context.collectionProducts.replaceAll(' ', '');    // Get product ids and remove possible white-spaces.
    var defaultProductImage = context.defaultProductImage;
    var pdp_sale_badge_label_cavio = context.pdp_sale_badge_label_cavio;
    var pdp_sold_out_label_cavio = context.pdp_sold_out_label_cavio;
    var pdp_price_label = context.pdp_price_label ? context.pdp_price_label : "";
    var pdp_sale_price_label = context.pdp_sale_price_label ? context.pdp_sale_price_label : "";
    var pdp_non_sale_price_label = context.pdp_non_sale_price_label ? context.pdp_non_sale_price_label : "";
    var pdp_retail_price_label = context.pdp_retail_price_label ? context.pdp_retail_price_label : "";

    fetchProducts(token, productIds, defaultProductImage, pdp_sale_badge_label_cavio, pdp_sold_out_label_cavio, pdp_price_label, pdp_sale_price_label, pdp_non_sale_price_label, pdp_retail_price_label);
});
function fetchProducts(token, productIds, defaultProductImage, pdp_sale_badge_label_cavio, pdp_sold_out_label_cavio, pdp_price_label, pdp_sale_price_label, pdp_non_sale_price_label, pdp_retail_price_label ) {
    // Fetch the products using GraphQL
    fetch('/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            query: `query getProducts {
                site {
                    products(entityIds: [${productIds}], first: 50) {
                        edges {
                            node {
                                entityId
                                name
                                path
                                addToCartUrl
                                inventory {
                                    isInStock
                                    hasVariantInventory
                                }
                                images{
                                    edges {
                                        node {  
                                            url(width: 500)
                                        }
                                    }                               
                                }
                                defaultImage {
                                    url(width: 500)
                                }
                                brand {
                                    name
                                }
                                prices {
                                    price {
                                        value
                                    }
                                    basePrice {
                                        value
                                    }
                                    salePrice {
                                        value
                                    }
                                    retailPrice {
                                        value
                                    }
                                    priceRange {
                                        min {
                                            value
                                        }
                                        max {
                                            value
                                        }
                                    }
                                }
                                productOptions {
                                    edges {
                                        node {
                                            displayName
                                            entityId
                                            ... on MultipleChoiceOption {
                                                __typename
                                                values {
                                                    edges {
                                                        node {
                                                            ... on SwatchOptionValue {
                                                                imageUrl(width: 292)
                                                                hexColors
                                                                entityId
                                                                label
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                reviewSummary {
                                    numberOfReviews
                                    summationOfRatings
                                }
                            }
                        }
                    }
                }
            }`
        })
    })
    .then(res => res.json())
    .then(function(res) {
        const fetchedProductIds = res.data.site.products.edges.map(product => product.node.entityId);

        // Hide any product card not in the fetched list
        $('.collection_products_list .card').each(function() {
            const productId = $(this).data('product-id');
            if (!fetchedProductIds.includes(productId)) {
                $(this).parent(".product").remove(); // Hide the card if the product ID wasn't fetched
            }
        });        
        for (let i = 0; i < res.data.site.products.edges.length; i++) {

            // Find the card that matched the product id
            var productCard = $('.collection_products_list').find('.card[data-product-id="'+res.data.site.products.edges[i].node.entityId+'"]');

            // Check if options are available. If yes, show Choose Option button and if not, show Add to Cart button.
            if(res.data.site.products.edges[i].node.productOptions.edges.length) {
                var productAtc = '<a href="' + res.data.site.products.edges[i].node.path + '" data-event-type="product-click" class="button button--small card-figcaption-button" data-product-id="' + res.data.site.products.edges[i].node.entityId + '" tabindex="0">Choose Options</a>'
            } else if(!res.data.site.products.edges[i].node.productOptions.edges.length) {
                var productAtc = '<a href="' + res.data.site.products.edges[i].node.addToCartUrl + '" data-event-type="product-click" data-button-type="add-cart" class="button button--small card-figcaption-button" tabindex="0">Add to Cart</a>'
            }
            var product_img_test = res.data.site.products.edges[i].node;
            let secondaryImage = ''
            if (product_img_test.images && product_img_test.images.edges.length > 1) {
                secondaryImage = '<img src="' + product_img_test.images.edges[1].node.url + '" data-src="' + product_img_test.images.edges[1].node.url + '" alt="' + res.data.site.products.edges[i].node.name + '" title="' + res.data.site.products.edges[i].node.name + '" class="card-image secondary-image lazyload">';
            }
            // Add product image if available
             if(res.data.site.products.edges[i].node.inventory.isInStock === true) {
                var solbadge = '';
                var hidesale = "";
             } else {
                var hidesale = "hide-sale";
                var solbadge = '<div class="sold-out-flag-sash"><span class="sold-out-text">'+ pdp_sold_out_label_cavio +'</span></div><div class="sold-out-flag-side"><span class="sold-out-text">'+ pdp_sold_out_label_cavio +'</span></div><div class="starwrap"><div class="sold-out-text-burst">'+ pdp_sold_out_label_cavio +'</div><div class="sold-out-flag-star"></div></div>';
             }
            if(res.data.site.products.edges[i].node.defaultImage) {
                var cardImage = '<figure class="card-figure '+ hidesale +'">'+ solbadge +'<div class="sale-flag-sash"><span class="sale-text">'+ pdp_sale_badge_label_cavio +'</span></div><div class="starwrap"><div class="sale-text-burst">'+ pdp_sale_badge_label_cavio +'</div><div class="sale-flag-star"></div></div><div class="sale-flag-side"><span class="sale-text">'+ pdp_sale_badge_label_cavio +'</span></div><a href="' + res.data.site.products.edges[i].node.path + '" class="card-figure__link" aria-label="' + res.data.site.products.edges[i].node.name + '" data-event-type="product-click"><div class="card-img-container"><img src="' + res.data.site.products.edges[i].node.defaultImage.url + '" data-src="' + res.data.site.products.edges[i].node.defaultImage.url + '" alt="' + res.data.site.products.edges[i].node.name + '" title="' + res.data.site.products.edges[i].node.name + '" class="card-image primary-image lazyload">' + secondaryImage + '</div></a><figcaption class="card-figcaption"><div class="card-figcaption-body"><a class="button button--icon card-figcaption-button wishList" href="javascript:void(0)" data-wishlist data-tooltip="Wish List" rel="no-follow" data-href="/wishlist.php?action=add&product_id=' + res.data.site.products.edges[i].node.entityId + '" aria-label="wishlist"><span>Wishlist</span><i class="icon"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cavio_heart"></use></svg></i></a> <button type="button" class="button button--small card-figcaption-button quickview" data-event-type="product-click" data-product-id="' + res.data.site.products.edges[i].node.entityId + '">Quick view <i class="icon"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cavio_quick-view"></use></svg> </i> </button></div><div class="cart-action-buttons">' + productAtc + '</div></figcaption></figure>';

            } else {
                var cardImage = '<figure class="card-figure" '+ hidesale +'">'+ solbadge +'<div class="sale-flag-sash"><span class="sale-text">'+ pdp_sale_badge_label_cavio +'</span></div><div class="starwrap"><div class="sale-text-burst">'+ pdp_sale_badge_label_cavio +'</div><div class="sale-flag-star"></div></div><div class="sale-flag-side"><span class="sale-text">'+ pdp_sale_badge_label_cavio +'</span></div><a href="' + res.data.site.products.edges[i].node.path + '" class="card-figure__link" aria-label="' + res.data.site.products.edges[i].node.name + '" data-event-type="product-click"><div class="card-img-container"><img src="' + defaultProductImage + '" alt="' + res.data.site.products.edges[i].node.name + '" title="' + res.data.site.products.edges[i].node.name + '" class="card-image primary-image lazyload"></div></a><figcaption class="card-figcaption"><div class="card-figcaption-body"><a class="button button--icon card-figcaption-button wishList" href="javascript:void(0)" data-wishlist data-tooltip="Wish List" rel="no-follow" data-href="/wishlist.php?action=add&product_id=' + res.data.site.products.edges[i].node.entityId + '" aria-label="wishlist"><span>Wishlist</span><i class="icon"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cavio_heart"></use></svg></i></a> <button type="button" class="button button--small card-figcaption-button quickview" data-event-type="product-click" data-product-id="' + res.data.site.products.edges[i].node.entityId + '">Quick view <i class="icon"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cavio_quick-view"></use></svg> </i></button>' + productAtc + '</div></figcaption></figure>';
            }

            // Add product brand name if available
            if(res.data.site.products.edges[i].node.brand) {
                var productBrand = '<p class="card-text card-brand-text" data-test-info-type="brandName">' + res.data.site.products.edges[i].node.brand.name + '</p>';
            } else {
                var productBrand = '<p class="card-text card-brand-text" data-test-info-type="brandName"></p>';
            }

            // Add product name
            var productName = '<h3 class="card-title"><a href="' + res.data.site.products.edges[i].node.path + '" data-event-type="product-click" aria-label="' + res.data.site.products.edges[i].node.name + '">' + res.data.site.products.edges[i].node.name + '</a></h3>';

            // Add product price
            if(res.data.site.products.edges[i].node.prices.priceRange.min.value != res.data.site.products.edges[i].node.prices.priceRange.max.value) {
                // If product has price range, show price range.
                var productPrice = '<div class="card-text card-price-text"><span class="price-label"><div class="price-section price-section--withoutTax purchase-price">$' + res.data.site.products.edges[i].node.prices.priceRange.min.value + ' - $' + res.data.site.products.edges[i].node.prices.priceRange.max.value + '</span></div></div>';
            } else if(res.data.site.products.edges[i].node.prices.priceRange.min.value == res.data.site.products.edges[i].node.prices.priceRange.max.value) {
                // If prices are available instead of price range, check for retail price, base price and current price.
                var retailPrice = '', basePrice = '', currentPrice = '';
                
                // If retail price is available, show 'MSRP'.
                if ((res.data.site.products.edges[i].node.prices.retailPrice != null) && (res.data.site.products.edges[i].node.prices.retailPrice.value != res.data.site.products.edges[i].node.prices.price.value)) {
                    retailPrice = '<div class="price-section price-section--withoutTax rrp-price--withoutTax actual-price"><span class="price-label">'+ pdp_retail_price_label + ' </span><span data-product-rrp-price-without-tax="" class="price price--rrp">$' + res.data.site.products.edges[i].node.prices.retailPrice.value.toFixed(2) + '</span></div>';
                }
                // If base price is available, show 'WAS'.
                if ((res.data.site.products.edges[i].node.prices.basePrice != null) && (res.data.site.products.edges[i].node.prices.basePrice.value != res.data.site.products.edges[i].node.prices.price.value)) {
                    basePrice = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax default-price"><span class="price-label">' + pdp_non_sale_price_label + ' </span><span data-product-non-sale-price-without-tax="" class="price price--non-sale">$' + res.data.site.products.edges[i].node.prices.basePrice.value.toFixed(2) + '</span></div>';
                }
                // Show current price in any case as 'NOW'.
                if ( res.data.site.products.edges[i].node.prices.price != null) {
                    currentPrice = '<div class="price-section price-section--withoutTax sale-price"><span class="price-label">' +  pdp_price_label + ' </span><span class="price-now-label">' + pdp_sale_price_label + ' </span><span data-product-price-without-tax="" class="price price--withoutTax">$' + res.data.site.products.edges[i].node.prices.price.value.toFixed(2) + '</span></div>';
                }
                
                var productPrice = '<div class="card-text card-price-text" data-test-info-type="price">' + retailPrice + basePrice + currentPrice + '</div>';
                if (retailPrice && basePrice) {
                    productCard.addClass("visible-sale-flag-side");
                } else if( retailPrice ) {
                    productCard.addClass("visible-sale-flag-side");
                } else if(basePrice && currentPrice) {
                    productCard.addClass("visible-sale-flag-side");
                }
            }

            // Add product ratings/stars
            var starRatings='';
            if(res.data.site.products.edges[i].node.reviewSummary.summationOfRatings > 0) {
                for (let j = 0; j < 5; j++) {
                    if((res.data.site.products.edges[i].node.reviewSummary.summationOfRatings/res.data.site.products.edges[i].node.reviewSummary.numberOfReviews) > j) {
                        starRatings += '<span class="icon icon--ratingFull"><svg><use href="#icon-cavio_rating" /></svg></span>';
                    } else {
                        starRatings += '<span class="icon icon--ratingEmpty"><svg><use href="#icon-cavio_rating" /></svg></span>';
                    }
                }
                starRatings = '<p class="card-text" data-test-info-type="productRating"><span class="rating--small"><span role="img" aria-label="Product rating">' + starRatings + '</span></span></p>';
            }

            // Add swatch options
            var productSwatches = '';
            if(res.data.site.products.edges[i].node.productOptions.edges.length) {
                for (let j = 0; j < res.data.site.products.edges[i].node.productOptions.edges.length; j++) {
                    // Traverse all the available product options
                    if(res.data.site.products.edges[i].node.productOptions.edges[j].node.values) {
                        // Traverse each option's value if it has a value
                        var swatch = '';
                        for (let k = 0; k < res.data.site.products.edges[i].node.productOptions.edges[j].node.values.edges.length; k++) {
                            // Check if value has hexColor or imageUrl
                            if(res.data.site.products.edges[i].node.productOptions.edges[j].node.values.edges[k].node.hexColors || res.data.site.products.edges[i].node.productOptions.edges[j].node.values.edges[k].node.imageUrl) {  // If hexColor or imageUrl is available
                                if(res.data.site.products.edges[i].node.productOptions.edges[j].node.values.edges[k].node.hexColors) {
                                    if (res.data.site.products.edges[i].node.productOptions.edges[j].node.values.edges[k].node.hexColors.length == 1) { // If swatch has 1 color
                                        swatch += '<div class="form-option form-option-swatch"><div id="color_'+ res.data.site.products.edges[i].node.productOptions.edges[j].node.values.edges[k].node.entityId +'" data-option-id="'+ res.data.site.products.edges[i].node.productOptions.edges[j].node.entityId +'" data-value-id="'+ res.data.site.products.edges[i].node.productOptions.edges[j].node.values.edges[k].node.entityId +'" class="card_swatch"><span style="background: ' + res.data.site.products.edges[i].node.productOptions.edges[j].node.values.edges[k].node.hexColors[0] + '"></span><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cavio_done"></use></svg></div></div>';

                                    } else if (res.data.site.products.edges[i].node.productOptions.edges[j].node.values.edges[k].node.hexColors.length > 1) { // If swatch has 2 colors
                                        var multiColorSwatch = '';
                                        for (let hexLength = 0; hexLength < res.data.site.products.edges[i].node.productOptions.edges[j].node.values.edges[k].node.hexColors.length; hexLength++) {
                                            multiColorSwatch += '<span class="swatch-color" style="background-color: ' + res.data.site.products.edges[i].node.productOptions.edges[j].node.values.edges[k].node.hexColors[hexLength] + '" title="' + res.data.site.products.edges[i].node.productOptions.edges[j].node.values.edges[k].node.label + '"></span>';
                                        }
                                        swatch += '<div class="swatch-item" data-option-value="'+ res.data.site.products.edges[i].node.productOptions.edges[j].node.values.edges[k].node.entityId +'">' + multiColorSwatch + '</div>';
                                    }
                                }
                                if(res.data.site.products.edges[i].node.productOptions.edges[j].node.values.edges[k].node.imageUrl) {   // If imageUrl is available
                                    swatch += '<div class="swatch-item" data-option-value="'+ res.data.site.products.edges[i].node.productOptions.edges[j].node.values.edges[k].node.entityId +'"><span class="swatch-image" style="background-image: url(' + res.data.site.products.edges[i].node.productOptions.edges[j].node.values.edges[k].node.imageUrl + ')" title="' + res.data.site.products.edges[i].node.productOptions.edges[j].node.values.edges[k].node.label + '"></span></div>';
                                }

                                // Product swatch container if swatches exist.
                                productSwatches = '<div class="card-swatches card-swatch" data-product-id="' + res.data.site.products.edges[i].node.entityId + '" data-option-id="'+ res.data.site.products.edges[i].node.productOptions.edges[j].node.entityId +'" data-option-name="'+ res.data.site.products.edges[i].node.productOptions.edges[j].node.displayName +'" data-url="'+ res.data.site.products.edges[i].node.path +'">'+ swatch +'</div>';
                            }
                        }
                    }
                }
            }

            // Add compenents of card body
            var cardBody = '<div class="card-body">' + productSwatches + productBrand + productName + productPrice + starRatings + '</div>';
            productCard.append(cardImage, cardBody);
        }
    })
    .then(function() {
        $('.collection_products_list .card-swatches').each(function() {
          $(this).find(".card_swatch").append('<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cavio_done"></use></svg>');
          $(this).children().each(function(index) {
            if(index > 4)
            {
              $(this).hide();
            }
            if(index == 4)
            {
              $(this).addClass("hidemobileswatch");
            }        
          });

          if($(this).children().length > 4) {
            var remaningswatch = $(this).children().length - 5;
            var mobremaningswatch = $(this).children().length - 4;
            $(this).append("<a href='"+$(this).attr('data-url')+"' class='lable-more-card desktop'> +" + remaningswatch + "</a>");
            $(this).append("<a href='"+$(this).attr('data-url')+"' class='lable-more-card mobile'> +" + mobremaningswatch + "</a>");
          }
        });
    })
    .then(function() {
        // Apply slider to product list
      // Recent Posts Start
      var $collectionlist = $('.collection_products_list');
      
      // Initialize Slick slider
      $collectionlist.slick({
          arrows: true,
          dots: true,
          infinite: false,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
              {
                  breakpoint: 1200,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                  }
              },  
              {
                  breakpoint: 1024,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
              },                
              {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                  }
              },              
              {
                  breakpoint: 551,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
              }
          ]
      });
  
      // Function to update the slide info and active dot
      function collectionupdateSlideInfo() {
          var totalSlides = $collectionlist.find('.slick-dots li button').length;
          var activeSlideIndex = $collectionlist.find('.slick-dots li.slick-active').index() + 1;
          $('.collection-nav .current-slide').text(activeSlideIndex);
          $('.collection-nav .total-slides').text(totalSlides);
          // Update slick-active-dot
          var $activeDot = $('.collection_products_list .slick-active-dot');
          if ($activeDot.length === 0) {
              $activeDot = $('<li class="slick-active-dot"></li>');
              $('.collection_products_list .slick-dots').append($activeDot);
          }
  
          var dotWidth = 100 / totalSlides;
          $activeDot.css('width', dotWidth + '%');
  
          var dotLeft = dotWidth * (activeSlideIndex - 1);
          $activeDot.css('left', dotLeft + '%');
            if (totalSlides  < 2) {
            } else{
                $('.collection-information').removeClass("hide-pagination");
            }    
            if (activeSlideIndex  == 1) {
                $('.collection-information .slick-prev').addClass('disabled-btn');
                $('.collection-information .slick-next').removeClass('disabled-btn');
            } else if (activeSlideIndex  == totalSlides) {
                $('.collection-information .slick-next').addClass('disabled-btn');
                $('.collection-information .slick-prev').removeClass('disabled-btn');
            }     
          if (activeSlideIndex  > 1) {
              $('.collection-information .slick-prev').removeClass('disabled-btn');
          } 
          if (activeSlideIndex  < totalSlides) {
              $('.collection-information .slick-next').removeClass('disabled-btn');
          }                         
      }
  
      // Ensure the function runs on initial load and after each slide change
      function collectioninitAndUpdate() {
          setTimeout(function() {
              collectionupdateSlideInfo();  // Delay to ensure Slick has completed setup
          }, 100);  // Adjust delay as needed
      }
  
      // Call collectioninitAndUpdate function on slider events
      $collectionlist.on('init reInit afterChange', collectioninitAndUpdate);
  
      // Custom navigation buttons
      $('.collection-nav .slick-prev').click(function() {
          $collectionlist.slick('slickPrev');
          collectionupdateSlideInfo();
      });
  
      $('.collection-nav .slick-next').click(function() {
          $collectionlist.slick('slickNext');
          collectionupdateSlideInfo();
      });
          /* Js for Wishlist Button */
        $('.collection-information .wishList').click(function (e) {
          e.preventDefault();
          if (!$('#commonwishlist').length) {
              $('<form id="commonwishlist" method="post" style="display:none;" action="' + $(this).attr('data-href') + '"><input type="submit" value="submit"></form>').appendTo('body');
          } else {
              $('#commonwishlist').attr('action', $(this).attr('data-href'));
          }
          $('#commonwishlist input').click();
        });
        /* Js for Wishlist Button */
      // Initial call to set up the active dot and slide info
      collectioninitAndUpdate();
      // Recent Posts End
        $('.shop-collection .card_swatch').on('click', function() {
          var thismn = $(this);
          var productId = thismn.parents('.card-swatches').attr('data-product-id');
          var attr_name = thismn.attr('data-option-id');
          var attr_val = thismn.attr('data-value-id');
          var form_data = 'action=add&attribute%5B'+ attr_name +'%5D='+ attr_val +'&product_id='+ productId +'&qty%5B%5D=1';
          utils.api.productAttributes.optionChange(productId, form_data, (err, response) => {
            if(response.data.image !== null) {
              var get_img = response.data.image.data;
              var updt_img = get_img.replace("{:size}","500x659");
              thismn.parents('.card, .listItem').find('.card-img-container .card-image, .listItem-figure__link .listItem-image').attr('src',updt_img);
              thismn.parents('.card, .listItem').find('.card-img-container .card-image, .listItem-figure__link .listItem-image').attr('srcset',updt_img);  
              $(thismn).addClass('swatch-selected');
              $(thismn).parent(".form-option-swatch").siblings().find(".card_swatch").removeClass("swatch-selected");
            }
          });
        });
        // Show product slider and hide loader
        $('.collection_products_list').css('display', 'block')
        $('.collection-loader').css('display', 'none');
            // Function to adjust the position of the elements
            function adjustTop() {
                var windowWidth = $(window).width();
                var $sourceDiv = $('.collection-info-wrapper-desktop');
                var $targetDiv = $('.collection-nav');
                var $targettwoDiv = $('.collection-information .slick-dots');

                if (windowWidth > 1023) {
                    var sourceDivHeight = $sourceDiv.outerHeight();
                    $targetDiv.css({
                        'top': sourceDivHeight - 51 + 'px',
                        'opacity': '1'
                    });
                    $targettwoDiv.css({
                        'top': sourceDivHeight - 51 + 'px',
                        'opacity': '1'
                    });
                } else {
                    $targetDiv.css('top', '');
                    $targettwoDiv.css('top', '');
                }
            }

            // Run on page load
            adjustTop();

            // Debounced resize event
            let resizeTimer;
            $(window).resize(function() {
                $('.collection-nav').css('opacity', '0');
                $('.collection-information .slick-dots').css('opacity', '0');               
                clearTimeout(resizeTimer); // Clear any existing timer
                resizeTimer = setTimeout(function() {
                    adjustTop();
                }, 250); // Delay in milliseconds, adjust as needed
            });  
    })
    .catch((error) => {
    });
}
