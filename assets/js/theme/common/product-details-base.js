import Wishlist from '../wishlist';
import { initRadioOptions } from './aria';

const optionsTypesMap = {
    INPUT_FILE: 'input-file',
    INPUT_TEXT: 'input-text',
    INPUT_NUMBER: 'input-number',
    INPUT_CHECKBOX: 'input-checkbox',
    TEXTAREA: 'textarea',
    DATE: 'date',
    SET_SELECT: 'set-select',
    SET_RECTANGLE: 'set-rectangle',
    SET_RADIO: 'set-radio',
    SWATCH: 'swatch',
    PRODUCT_LIST: 'product-list',
};

export function optionChangeDecorator(areDefaultOptionsSet) {
    return (err, response) => {
        const attributesData = response.data || {};
        const attributesContent = response.content || {};

        this.updateProductAttributes(attributesData);
        if (areDefaultOptionsSet) {
            this.updateView(attributesData, attributesContent);
        } else {
            this.updateDefaultAttributesForOOS(attributesData);
        }
    };
}

export default class ProductDetailsBase {
    constructor($scope, context) {
        this.$scope = $scope;
        this.context = context;
        this.initRadioAttributes();
        Wishlist.load(this.context);
        this.getTabRequests();
        this.getaccordionRequests();
        this.thumbimgRequests();

        $('[data-product-attribute]').each((__, value) => {
            const type = value.getAttribute('data-product-attribute');

            this._makeProductVariantAccessible(value, type);
        });
    }

    _makeProductVariantAccessible(variantDomNode, variantType) {
        switch (variantType) {
        case optionsTypesMap.SET_RADIO:
        case optionsTypesMap.SWATCH: {
            initRadioOptions($(variantDomNode), '[type=radio]');
            break;
        }

        default: break;
        }
    }

    /**
     * Allow radio buttons to get deselected
     */
    initRadioAttributes() {
        $('[data-product-attribute] input[type="radio"]', this.$scope).each((i, radio) => {
            const $radio = $(radio);

            // Only bind to click once
            if ($radio.attr('data-state') !== undefined) {
                $radio.on('click', () => {
                    if ($radio.data('state') === true) {
                        $radio.prop('checked', false);
                        $radio.data('state', false);

                        $radio.trigger('change');
                    } else {
                        $radio.data('state', true);
                    }

                    this.initRadioAttributes();
                });
            }

            $radio.attr('data-state', $radio.prop('checked'));
        });
    }

    /**
     * Hide or mark as unavailable out of stock attributes if enabled
     * @param  {Object} data Product attribute data
     */
    updateProductAttributes(data) {
        const behavior = data.out_of_stock_behavior;
        const inStockIds = data.in_stock_attributes;
        const outOfStockDefaultMessage = this.context.outOfStockDefaultMessage;
        let outOfStockMessage = data.out_of_stock_message;

        if (behavior !== 'hide_option' && behavior !== 'label_option') {
            return;
        }

        if (outOfStockMessage) {
            outOfStockMessage = ` (${outOfStockMessage})`;
        } else {
            outOfStockMessage = ` (${outOfStockDefaultMessage})`;
        }

        $('[data-product-attribute-value]', this.$scope).each((i, attribute) => {
            const $attribute = $(attribute);
            const attrId = parseInt($attribute.data('productAttributeValue'), 10);


            if (inStockIds.indexOf(attrId) !== -1) {
                this.enableAttribute($attribute, behavior, outOfStockMessage);
            } else {
                this.disableAttribute($attribute, behavior, outOfStockMessage);
            }
        });
    }

    /**
     * Check for fragment identifier in URL requesting a specific tab
     */
    getTabRequests() {
        if (window.location.hash && window.location.hash.indexOf('#tab-') === 0) {
            const $activeTab = $('.tabs').has(`[href='${window.location.hash}']`);
            const $tabContent = $(`${window.location.hash}`);

            if ($activeTab.length > 0) {
                $activeTab.find('.tab')
                    .removeClass('is-active')
                    .has(`[href='${window.location.hash}']`)
                    .addClass('is-active');

                $tabContent.addClass('is-active')
                    .siblings()
                    .removeClass('is-active');
            }
        }
    }
    /* Product Page Details Toggle */
    getaccordionRequests() {

    // Show the first accordion item
    $(".accordion-contents .productDetailsView-section.show-descp .tab-content").show().addClass("show-tab-cnt");
    $(".accordion-contents .productDetailsView-section.show-descp .productView-title").addClass("toggle-active");

              if ($('.modal-body.quickView').length > 0) {
      $(".modal-body.quickView .accordion-contents .productView-title").click(function() {
        $(this).toggleClass("toggle-active").parent().find(".tab-content").slideToggle(400);
      });                
    } else {
      $(".accordion-contents .productView-title").click(function() {
        $(this).toggleClass("toggle-active").parent().find(".tab-content").slideToggle(400);
      });
    }
      $("#productReview_link").click(function() {
        $(".productView-reviewTabLink .productView-title").addClass("toggle-active").parent().find(".productView-description").slideDown(400);
      });   
    }
    thumbimgRequests() {
        if ($('.modal-body.quickView').length > 0) {
            var $thumbimgslider = $('.modal-body.quickView .productView-thumbnails');
        } else {
            var $thumbimgslider = $('.productView-thumbnails');
        }
      // Initialize Slick slider
      $thumbimgslider.slick({
          vertical: true,
          arrows: true,
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
              {
                  breakpoint: 1024,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
              }
          ]
      });
  
      // Function to update the slide info and active dot
      function updatethumbslider() {
          var totalSlides = $thumbimgslider.find('.slick-dots li button').length;
          var activeSlideIndex = $thumbimgslider.find('.slick-dots li.slick-active').index() + 1;
          $('.thumb-img-nav .current-slide').text(activeSlideIndex);
          $('.thumb-img-nav .total-slides').text(totalSlides);
          // Update slick-active-dot
          var $activeDot = $('.productView-thumbnails .slick-active-dot');
          if ($activeDot.length === 0) {
              $activeDot = $('<li class="slick-active-dot"></li>');
              $('.productView-thumbnails .slick-dots').append($activeDot);
          }
          if (totalSlides === 1) {
            $(".thumb-img-nav .slider-arrows").addClass("is-srOnly");
          }
  
          var dotWidth = 100 / totalSlides;
          $activeDot.css('width', dotWidth + '%');
  
          var dotLeft = dotWidth * (activeSlideIndex - 1);
          $activeDot.css('left', dotLeft + '%');
        if (activeSlideIndex  == 1) {
            $('.productView-thumbnails .slick-prev').addClass('disabled-btn');
            $('.productView-thumbnails .slick-next').removeClass('disabled-btn');
        } else if (activeSlideIndex  == totalSlides) {
            $('.productView-thumbnails .slick-next').addClass('disabled-btn');
            $('.productView-thumbnails .slick-prev').removeClass('disabled-btn');
        }  
          if (activeSlideIndex  > 1) {
              $('.productView-thumbnails .slick-prev').removeClass('disabled-btn');
          } 
          if (activeSlideIndex  < totalSlides) {
              $('.productView-thumbnails .slick-next').removeClass('disabled-btn');
          }                  
      }
  
      // Ensure the function runs on initial load and after each slide change
      function thumbimginitAndUpdate() {
          setTimeout(function() {
              updatethumbslider();  // Delay to ensure Slick has completed setup
          }, 100);  // Adjust delay as needed
      }
  
      // Call thumbimginitAndUpdate function on slider events
      $thumbimgslider.on('init reInit afterChange', thumbimginitAndUpdate);
  
      // Custom navigation buttons
      $('.thumb-img-nav .slick-prev').click(function() {
          $thumbimgslider.slick('slickPrev');
          updatethumbslider();
          $(".productView-thumbnail.slick-current.slick-active .productView-thumbnail-link").trigger("click");
      });
  
      $('.thumb-img-nav .slick-next').click(function() {
          $thumbimgslider.slick('slickNext');
          updatethumbslider();
          $(".productView-thumbnail.slick-current.slick-active .productView-thumbnail-link").trigger("click");
      });
  
      // Initial call to set up the active dot and slide info
      thumbimginitAndUpdate();
      // var salebadge = $(".price-section--saving-tag").html();
        if (!$('.price-section--saving-tag').hasClass('is-srOnly')) {
            // If 'is-srOnly' is not present, add 'visible' class to the body tag
            $('.productView-image .sale-flag-side').removeClass('is-srOnly');
        }      
    }
    /* Product Page Details Toggle */ 

    /**
     * Since $productView can be dynamically inserted using render_with,
     * We have to retrieve the respective elements
     *
     * @param $scope
     */
    getViewModel($scope) {
        return {
            $priceWithTax: $('[data-product-price-with-tax]', $scope),
            $priceWithoutTax: $('[data-product-price-without-tax]', $scope),
            rrpWithTax: {
                $div: $('.rrp-price--withTax', $scope),
                $span: $('[data-product-rrp-with-tax]', $scope),
            },
            rrpWithoutTax: {
                $div: $('.rrp-price--withoutTax', $scope),
                $span: $('[data-product-rrp-price-without-tax]', $scope),
            },
            nonSaleWithTax: {
                $div: $('.non-sale-price--withTax', $scope),
                $span: $('[data-product-non-sale-price-with-tax]', $scope),
            },
            nonSaleWithoutTax: {
                $div: $('.non-sale-price--withoutTax', $scope),
                $span: $('[data-product-non-sale-price-without-tax]', $scope),
            },
            priceSaved: {
                $div: $('.price-section--saving', $scope),
                $span: $('[data-product-price-saved]', $scope),
            },
            priceNowLabel: {
                $span: $('.price-now-label', $scope),
            },
            priceLabel: {
                $span: $('.price-label', $scope),
            },
            $weight: $('.productView-info [data-product-weight]', $scope),
            $increments: $('.form-field--increments :input', $scope),
            $addToCart: $('#form-action-addToCart', $scope),
            $addToCartForm: $('form[data-cart-item-add]', $scope),
            $wishlistVariation: $('[data-wishlist-add] [name="variation_id"]', $scope),
            stock: {
                $container: $('.form-field--stock', $scope),
                $input: $('[data-product-stock]', $scope),
            },
            sku: {
                $label: $('dt.sku-label', $scope),
                $value: $('[data-product-sku]', $scope),
            },
            upc: {
                $label: $('dt.upc-label', $scope),
                $value: $('[data-product-upc]', $scope),
            },
            quantity: {
                $text: $('.incrementTotal', $scope),
                $input: $('[name=qty\\[\\]]', $scope),
            },
            $bulkPricing: $('.productView-info-bulkPricing', $scope),
            $walletButtons: $('[data-add-to-cart-wallet-buttons]', $scope),
        };
    }

    /**
     * Hide the pricing elements that will show up only when the price exists in API
     * @param viewModel
     */
    clearPricingNotFound(viewModel) {
        viewModel.rrpWithTax.$div.hide();
        viewModel.rrpWithoutTax.$div.hide();
        viewModel.nonSaleWithTax.$div.hide();
        viewModel.nonSaleWithoutTax.$div.hide();
        viewModel.priceSaved.$div.hide();
        viewModel.priceNowLabel.$span.hide();
        viewModel.priceLabel.$span.hide();
    }

    /**
     * Update the view of price, messages, SKU and stock options when a product option changes
     * @param  {Object} data Product attribute data
     */
    updateView(data, content = null) {
        const viewModel = this.getViewModel(this.$scope);

        this.showMessageBox(data.stock_message || data.purchasing_message);

        if (data.price instanceof Object) {
            this.updatePriceView(viewModel, data.price);
        }

        if (data.weight instanceof Object) {
            viewModel.$weight.html(data.weight.formatted);
        }

        // Set variation_id if it exists for adding to wishlist
        if (data.variantId) {
            viewModel.$wishlistVariation.val(data.variantId);
        }

        // If SKU is available
        if (data.sku) {
            viewModel.sku.$value.text(data.sku);
            viewModel.sku.$label.show();
        } else {
            viewModel.sku.$label.hide();
            viewModel.sku.$value.text('');
        }

        // If UPC is available
        if (data.upc) {
            viewModel.upc.$value.text(data.upc);
            viewModel.upc.$label.show();
        } else {
            viewModel.upc.$label.hide();
            viewModel.upc.$value.text('');
        }

        // if stock view is on (CP settings)
        if (viewModel.stock.$container.length && typeof data.stock === 'number') {
            // if the stock container is hidden, show
            viewModel.stock.$container.removeClass('u-hiddenVisually');

            viewModel.stock.$input.text(data.stock);
        } else {
            viewModel.stock.$container.addClass('u-hiddenVisually');
            viewModel.stock.$input.text(data.stock);
        }

        this.updateDefaultAttributesForOOS(data);
        this.updateWalletButtonsView(data);

        // If Bulk Pricing rendered HTML is available
        if (data.bulk_discount_rates && content) {
            viewModel.$bulkPricing.html(content);
        } else if (typeof (data.bulk_discount_rates) !== 'undefined') {
            viewModel.$bulkPricing.html('');
        }

        const addToCartWrapper = $('#add-to-cart-wrapper');

        if (addToCartWrapper.is(':hidden') && data.purchasable) {
            addToCartWrapper.show();
        }
    }

    /**
     * Update the view of price, messages, SKU and stock options when a product option changes
     * @param  {Object} data Product attribute data
     */
    updatePriceView(viewModel, price) {
        this.clearPricingNotFound(viewModel);

        if (price.with_tax) {
            const updatedPrice = price.price_range ?
                `${price.price_range.min.with_tax.formatted} - ${price.price_range.max.with_tax.formatted}`
                : price.with_tax.formatted;
            viewModel.priceLabel.$span.show();
            viewModel.$priceWithTax.html(updatedPrice);
        }

        if (price.without_tax) {
            const updatedPrice = price.price_range ?
                `${price.price_range.min.without_tax.formatted} - ${price.price_range.max.without_tax.formatted}`
                : price.without_tax.formatted;
            viewModel.priceLabel.$span.show();
            viewModel.$priceWithoutTax.html(updatedPrice);
        }

        if (price.rrp_with_tax) {
            viewModel.rrpWithTax.$div.show();
            viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
        }

        if (price.rrp_without_tax) {
            viewModel.rrpWithoutTax.$div.show();
            viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
        }

        if (price.saved) {
            viewModel.priceSaved.$div.show();
            viewModel.priceSaved.$span.html(price.saved.formatted);
        }

        if (price.non_sale_price_with_tax) {
            viewModel.priceLabel.$span.hide();
            viewModel.nonSaleWithTax.$div.show();
            viewModel.priceNowLabel.$span.show();
            viewModel.nonSaleWithTax.$span.html(price.non_sale_price_with_tax.formatted);
        }

        if (price.non_sale_price_without_tax) {
            viewModel.priceLabel.$span.hide();
            viewModel.nonSaleWithoutTax.$div.show();
            viewModel.priceNowLabel.$span.show();
            viewModel.nonSaleWithoutTax.$span.html(price.non_sale_price_without_tax.formatted);
        }
    }

    /**
     * Show an message box if a message is passed
     * Hide the box if the message is empty
     * @param  {String} message
     */
    showMessageBox(message) {
        const $messageBox = $('.productAttributes-message');

        if (message) {
            $('.alertBox-message', $messageBox).text(message);
            $messageBox.show();
        } else {
            $messageBox.hide();
        }
    }

    updateDefaultAttributesForOOS(data) {
        const viewModel = this.getViewModel(this.$scope);
        if (!data.purchasable || !data.instock) {
            viewModel.$addToCart.prop('disabled', true);
            viewModel.$increments.prop('disabled', true);
        } else {
            viewModel.$addToCart.prop('disabled', false);
            viewModel.$increments.prop('disabled', false);
        }
    }

    updateWalletButtonsView(data) {
        const viewModel = this.getViewModel(this.$scope);
        const isValidForm = viewModel.$addToCartForm[0].checkValidity();

        this.toggleWalletButtonsVisibility(isValidForm && data.purchasable && data.instock);
    }

    toggleWalletButtonsVisibility(shouldShow) {
        const viewModel = this.getViewModel(this.$scope);

        if (shouldShow) {
            viewModel.$walletButtons.show();
        } else {
            viewModel.$walletButtons.hide();
        }
    }

    enableAttribute($attribute, behavior, outOfStockMessage) {
        if (this.getAttributeType($attribute) === 'set-select') {
            return this.enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
        }

        if (behavior === 'hide_option') {
            $attribute.show();
        } else {
            $attribute.removeClass('unavailable');
        }
    }

    disableAttribute($attribute, behavior, outOfStockMessage) {
        if (this.getAttributeType($attribute) === 'set-select') {
            return this.disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
        }

        if (behavior === 'hide_option') {
            $attribute.hide(0);
        } else {
            $attribute.addClass('unavailable');
        }
    }

    getAttributeType($attribute) {
        const $parent = $attribute.closest('[data-product-attribute]');

        return $parent ? $parent.data('productAttribute') : null;
    }

    disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
        const $select = $attribute.parent();

        if (behavior === 'hide_option') {
            $attribute.toggleOption(false);
            // If the attribute is the selected option in a select dropdown, select the first option (MERC-639)
            if ($select.val() === $attribute.attr('value')) {
                $select[0].selectedIndex = 0;
            }
        } else {
            $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
        }
    }

    enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
        if (behavior === 'hide_option') {
            $attribute.toggleOption(true);
        } else {
            $attribute.html($attribute.html().replace(outOfStockMessage, ''));
        }
    }
}
