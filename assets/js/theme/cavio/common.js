import $ from 'jquery';
import 'slick-carousel';
import utils from '@bigcommerce/stencil-utils';

export default (function(context) { 
    const topMenu = document.querySelector('.top-menu');
    const screenWidth = window.innerWidth;

    // Get computed styles to retrieve padding
    const topMenuStyle = window.getComputedStyle(topMenu);
    const topMenuHeight = topMenu.offsetHeight; // Equivalent of outerHeight (height including padding and borders)
    
    // Get original padding values
    const originalPaddingTop = topMenuStyle.paddingTop;
    const originalPaddingBottom = topMenuStyle.paddingBottom;
    window.addEventListener('scroll', function () {
      if (screenWidth > 1023) {
          if (window.scrollY > 70) {
              // Add class to hide the top-menu and remove padding
              topMenu.classList.add('top-menu-hidden');
              topMenu.style.height = '0px'; // Collapse the top-menu height
              topMenu.style.paddingTop = '0px'; // Remove top padding
              topMenu.style.paddingBottom = '0px'; // Remove bottom padding
          } else {
              // Remove the hidden class and reapply the original padding and height
              topMenu.classList.remove('top-menu-hidden');
              topMenu.style.height = `${topMenuHeight}px`; // Reset the top-menu height
              topMenu.style.paddingTop = originalPaddingTop; // Reapply top padding
              topMenu.style.paddingBottom = originalPaddingBottom; // Reapply bottom padding
          }
      }
    });
    window.addEventListener('resize', function() {
        var $window_width = window.innerWidth;
        
        if ($window_width > 1023) {
            const navBar = document.querySelector('.navPages-list');
            const items = navBar.querySelectorAll('.navPages-item');
            const navHeight = document.querySelector('.navPages-container');
            const navTopSpacing = navHeight.offsetTop;

            // Reset all items to be visible first
            
              items.forEach(item => {
                  item.style.display = 'block';
              });
                // navHeight.style.height = 'auto'; // Set height to auto
                // navHeight.style.overflow = 'visible'; // Allow overflow to be visible
            
            
              items.forEach(item => {
                const navBar = document.querySelector('.navPages-list');
                const items = navBar.querySelectorAll('.navPages-item');
                const navHeight = document.querySelector('.navPages-container');
                const navTopSpacing = navHeight.offsetTop;                
                  const itemHeight = item.offsetHeight; // Get the height of the item
                  const itemTopSpacing = item.offsetTop; // Get the distance from the top of the navBar to the item
                  const itemTopSpacingmain = itemTopSpacing - navTopSpacing;

                  // Check if the item's top spacing is greater than or equal to its height
                  if (itemTopSpacingmain >= itemHeight) {
                      item.style.display = 'none'; // Hide the item if top spacing is larger than its height
                  }
                  // navHeight.style.height = 'auto'; // Set height to auto
                  // navHeight.style.overflow = 'visible'; // Allow overflow to be visible                  
              });
            
        } else {
            const navBar = document.querySelector('.navPages-list');
            const items = navBar.querySelectorAll('.navPages-item');
            const navHeight = document.querySelector('.navPages-container');          
            items.forEach(item => {
                item.style.display = '';
            });    
        }
    });
  // Initial check on page load
  window.dispatchEvent(new Event('resize'));
    // Product Page Start
    if(context.pageType === 'product'){      
        $(document).ready(function() {      
        // Related Products slider start
          var $relproslideer= $('.product-panel-section .productCarousel');
          
          // Initialize Slick slider
          $relproslideer.slick({
              arrows: true,
              dots: true,
              infinite: false,
              speed: 300,
              slidesToShow: 5,
              slidesToScroll: 1,
              responsive: [
                  {
                      breakpoint: 1200,
                      settings: {
                          slidesToShow: 3,
                          slidesToScroll: 1
                      }
                  },             
                  {
                      breakpoint: 767,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1
                      }
                  },            
                  {
                      breakpoint: 568,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  }
              ]
          });
      
          // Function to update the slide info and active dot
            function updaterelslider() {
                var totalSlides = $relproslideer.find('.slick-dots li button').length;
                var activeSlideIndex = $relproslideer.find('.slick-dots li.slick-active').index() + 1;
                $('.related-product-panel .current-slide').text(activeSlideIndex);
                $('.related-product-panel .total-slides').text(totalSlides);
                // Update slick-active-dot
                var $activeDot = $('.related-products .slick-active-dot');
                if ($activeDot.length === 0) {
                    $activeDot = $('<li class="slick-active-dot"></li>');
                    $('.related-products .slick-dots').append($activeDot);
                }
        
                var dotWidth = 100 / totalSlides;
                $activeDot.css('width', dotWidth + '%');
        
                var dotLeft = dotWidth * (activeSlideIndex - 1);
                $activeDot.css('left', dotLeft + '%');
                if (totalSlides  < 2) {
                  $('.product-panel-section').addClass("hide-pagination");
                } else{
                    $('.product-panel-section').removeClass("hide-pagination");
                }
                if (activeSlideIndex  == 1) {
                    $('.product-panel-section .slick-prev').addClass('disabled-btn');
                    $('.product-panel-section .slick-next').removeClass('disabled-btn');
                } else if (activeSlideIndex  == totalSlides) {
                    $('.product-panel-section .slick-next').addClass('disabled-btn');
                    $('.product-panel-section .slick-prev').removeClass('disabled-btn');
                }   
                if (activeSlideIndex  > 1) {
                    $('.product-panel-section .slick-prev').removeClass('disabled-btn');
                } 
                if (activeSlideIndex  < totalSlides) {
                    $('.product-panel-section .slick-next').removeClass('disabled-btn');
                }                             
            }
            // Ensure the function runs on initial load and after each slide change
            function relinitAndUpdate() {
                setTimeout(function() {
                    updaterelslider();  // Delay to ensure Slick has completed setup
                }, 100);  // Adjust delay as needed
            }
        
            // Call relinitAndUpdate function on slider events
            $relproslideer.on('init reInit afterChange', relinitAndUpdate);
        
            // Custom navigation buttons
            $('.related-product-panel .slick-prev').click(function() {
                $relproslideer.slick('slickPrev');
                updaterelslider();
            });
        
            $('.related-product-panel .slick-next').click(function() {
                $relproslideer.slick('slickNext');
                updaterelslider();
            });
            // Initial call to set up the active dot and slide info
            relinitAndUpdate();  
          // Related Products slider end 
        });
    }
    // Product Page End

    // Gloabal Scripts Start
      $(document).ready(function() {  
        // category category list slider start
          var $catslider = $('.subcategories');
          
          if ($catslider.hasClass('subcategories-buttons')) {
              // Apply this slick initialization if "subcategories-buttons" is present
              $catslider.slick({
                  arrows: true,
                  variableWidth: true,
                  dots: true,
                  infinite: false,
                  speed: 300,
                  slidesToShow: 1
              });
          } else {
              // Apply this slick initialization if "subcategories-buttons" is not present
              $catslider.slick({
                  arrows: true,
                  dots: true,
                  infinite: false,
                  speed: 300,
                  slidesToShow: 5,
                  slidesToScroll: 1,
                  responsive: [
                      {
                          breakpoint: 767,
                          settings: {
                              slidesToShow: 2,
                              slidesToScroll: 1
                          }
                      }
                  ]
              });
          }
      
          // Function to update the slide info and active dot
          function updateSlideInfo() {
              var totalSlides = $catslider.find('.slick-dots li button').length;
              var activeSlideIndex = $catslider.find('.slick-dots li.slick-active').index() + 1;
              $('.subcategory-nav .current-slide').text(activeSlideIndex);
              $('.subcategory-nav .total-slides').text(totalSlides);
              // Update slick-active-dot
              var $activeDot = $('.subcategories .slick-active-dot');
              if ($activeDot.length === 0) {
                  $activeDot = $('<li class="slick-active-dot"></li>');
                  $('.subcategories .slick-dots').append($activeDot);
              }
      
              var dotWidth = 100 / totalSlides;
              $activeDot.css('width', dotWidth + '%');
      
              var dotLeft = dotWidth * (activeSlideIndex - 1);
              $activeDot.css('left', dotLeft + '%');

                if ($catslider.hasClass('subcategories-buttons')) {
                  var totalSlickSlideWidth = 0;
                  $('.subcat.slick-slide').each(function() {
                      totalSlickSlideWidth += $(this).outerWidth(true); // Include margins
                  });

                  // Get the width of the .subcategories-buttons element
                  var subcategoriesButtonsWidth = $('.subcategories-buttons').outerWidth(true);

                  // Compare widths and add a class to the body if condition is met
                  if (totalSlickSlideWidth > subcategoriesButtonsWidth) {
                    $('.subcat-section').removeClass("hide-pagination");
                  }
                  else {
                    $('.subcat-section').addClass("hide-pagination");
                  }
                } else {
                  if (totalSlides  < 2) {
                    $('.subcat-section').addClass("hide-pagination");
                  } else{
                      $('.subcat-section').removeClass("hide-pagination");
                  }
                }
                if (activeSlideIndex  == 1) {
                    $('.subcat-section .slick-prev').addClass('disabled-btn');
                    $('.subcat-section .slick-next').removeClass('disabled-btn');
                } else if (activeSlideIndex  == totalSlides) {
                    $('.subcat-section .slick-next').addClass('disabled-btn');
                    $('.subcat-section .slick-prev').removeClass('disabled-btn');
                }    
                if (activeSlideIndex  > 1) {
                    $('.subcat-section .slick-prev').removeClass('disabled-btn');
                } 
                if (activeSlideIndex  < totalSlides) {
                    $('.subcat-section .slick-next').removeClass('disabled-btn');
                }                            
          }
      
          // Ensure the function runs on initial load and after each slide change
          function initAndUpdate() {
              setTimeout(function() {
                  updateSlideInfo();  // Delay to ensure Slick has completed setup
              }, 100);  // Adjust delay as needed
          }
      
          // Call initAndUpdate function on slider events
          $catslider.on('init reInit afterChange', initAndUpdate);
      
          // Custom navigation buttons
          $('.subcategory-nav .slick-prev').click(function() {
              $catslider.slick('slickPrev');
              updateSlideInfo();
          });
      
          $('.subcategory-nav .slick-next').click(function() {
              $catslider.slick('slickNext');
              updateSlideInfo();
          });
      
          // Initial call to set up the active dot and slide info
          initAndUpdate();
          // Function to update the slide info and active dot
          function carouselupdateSlideInfo() {
              var totalSlides = $('.heroCarousel').find('.slick-dots li button').length;
              var activeSlideIndex = $('.heroCarousel').find('.slick-dots li.slick-active').index() + 1;
              // Update slick-active-dot
              var $activeDot = $('.heroCarousel .slick-active-dot');
              if ($activeDot.length === 0) {
                  $activeDot = $('<li class="slick-active-dot"></li>');
                  $('.heroCarousel .slick-dots').append($activeDot);
              }
      
              var dotWidth = 100 / totalSlides;
              $activeDot.css('width', dotWidth + '%');
      
              var dotLeft = dotWidth * (activeSlideIndex - 1);
              $activeDot.css('left', dotLeft + '%');
          }
      
          // Ensure the function runs on initial load and after each slide change
          function carouselinitAndUpdate() {
              setTimeout(function() {
                  carouselupdateSlideInfo();  // Delay to ensure Slick has completed setup
              }, 100);  // Adjust delay as needed
          }
      
          // Call carouselinitAndUpdate function on slider events
          $('.heroCarousel').on('init reInit afterChange', carouselinitAndUpdate);          
          // categorypage category list slider end  
          $('.slick-prev.carousel-banner-left').click(function() {
              $('.heroCarousel').slick('slickPrev');
              carouselupdateSlideInfo();
          });           
          $('.slick-next.carousel-banner-next').click(function() {
              $('.heroCarousel').slick('slickNext');
              carouselupdateSlideInfo();
          });
          carouselinitAndUpdate();
          $(".top-menu-wrapper").addClass("visible-section");
          $(".header-bottom-wrapper").addClass("visible-section");
          $(".productView").addClass("visible-section");
          $(".breadcrumbs").addClass("visible-section");
          $(".product-panel-section").addClass("visible-section");    
          const accountBodyClass = 'active-account';
          const cartBodyClass = 'active-cart';

          // Click event for .navUser-action--account
          $('.navUser-action--account').on('click', function(event) {
              $('body').toggleClass(accountBodyClass);

              // Optionally, remove the cart class if it's open
              $('body').removeClass(cartBodyClass);
          });
          $('.navUser-action--storeCredit').on('click', function(event) {
              $('body').toggleClass("active-store-credit");
          });
          // Click event for .header-logo-layout-left-stacked .navUser-item--cart > a.navUser-action
          $('.header-logo-layout-left-stacked .navUser-item--cart > a.navUser-action').on('click', function(event) {
              $('body').toggleClass(cartBodyClass);

              // Optionally, remove the account class if it's open
              $('body').removeClass(accountBodyClass);
          });

          // Click event on the document
          $(".mobile-menu-overlay").on('click', function(event) {
            const $toggleButton = $('.mobileMenu-toggle.is-open');
                  if ($toggleButton.length) {
                      $toggleButton.trigger('click'); // Trigger click to close menu
                  }
            });    
          $(document).on('click', function(event) {
              // If the click is not on .navUser-action--account
              if (!$(event.target).closest('.navUser-action--account').length) {
                  $('body').removeClass(accountBodyClass);
              }
            if (!$(event.target).closest('.navUser-action--storeCredit').length) {
              $('body').removeClass("active-store-credit");
            }
              // If the click is not on .header-logo-layout-left-stacked .navUser-item--cart > a.navUser-action
              if (!$(event.target).closest('.header-logo-layout-left-stacked .navUser-item--cart > a.navUser-action').length) {
                  $('body').removeClass(cartBodyClass);
              }              
          });          
      });  
    /* Js for Wishlist Button */
    $('.wishList').click(function (e) {
      e.preventDefault();
      if (!$('#commonwishlist').length) {
          $('<form id="commonwishlist" method="post" style="display:none;" action="' + $(this).attr('data-href') + '"><input type="submit" value="submit"></form>').appendTo('body');
      } else {
          $('#commonwishlist').attr('action', $(this).attr('data-href'));
      }
      $('#commonwishlist input').click();
    });
    /* Js for Wishlist Button */

    $('.rotating-banner').slick({
        arrows: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: '<svg class="cavio-arrow-right"><use href="#icon-cavio_angle-right" /></svg>',
        prevArrow: '<svg class="cavio-arrow-left"><use href="#icon-cavio_angle-left" /></svg>'
    });
    $('.footer-info-nav .footer-info-heading').click(function(){
        $(this).siblings().slideToggle(250);
        $(this).toggleClass("is-active");
        $(this).find(".cavio-dropdown-nav").toggleClass("is-active");
    });
    $('.shop-menu-simple .navPages-item-category').hover(function(){
        $("body").toggleClass("category-nav-active-two");
    }); 
    $('.close-menu-cavio').click(function(){
        $('.navPages-item-category > .navPages-action').trigger("click");
        $("body").removeClass("category-nav-active");
        $('.navPage-subMenu-action.navPages-action.has-subMenu.active-menu').trigger("click");
        $(".navPage-subMenu-mega-menu").removeClass("is-open");
    });
    $('.collapsible-icon-wrapper-cavio-mobile').click(function(event){
        $(this).parent().siblings(".navPage-childList").toggleClass("is-open");
        $(this).parent().siblings(".navPage-subMenu").toggleClass("is-open");
        $(this).siblings(".navPage-third-child-list").toggleClass("is-open");
        $(this).toggleClass("is-active");
    });    
    function adjustBodyPadding() {
      // Get the height of the header
      
      const topheader = document.querySelector('.top-menu');
      const header = document.querySelector('.header-bottom');
      const headerHeight = header.offsetHeight;
      const topheaderHeight = topheader.offsetHeight;
      // Get the height of the div with the 'category-filter-right-active' class
      const filterDiv = document.querySelector('.category-filter-right-active');
      if (filterDiv) {
        const filterDivHeight = filterDiv.offsetHeight;
        // Sum of both heights
        if (window.innerWidth < 1024) {
          const totalHeight = headerHeight + filterDivHeight + topheaderHeight;
                  // Optional: Set body padding based on the total height
          document.body.style.paddingTop = totalHeight + 'px';
        } else {
          const totalHeight = headerHeight + topheaderHeight;
                  // Optional: Set body padding based on the total height
        document.body.style.paddingTop = totalHeight + 'px';
        }

      } else{
        const totalHeight = headerHeight + topheaderHeight;
        document.body.style.paddingTop = totalHeight + 'px';
      }
    }
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    }

$(document).ready(function () {
    function handleNavigation() {
        var $window_width = window.innerWidth;

        if ($window_width < 1024) {
            $(".navPages-container").addClass('mobile-nav').removeClass('desktop-nav');
            $("body").removeClass("header-active");
            adjustBodyPadding();

            $(".shop-menu-simple .mobile-nav .navPages-item-category > .navPages-action").off('click').on('click', function (event) {
                event.preventDefault();
                const element = document.querySelector('.navPages-item.navPages-item-category .navPages-action.has-subMenu');
                
                $(this).toggleClass('is-open');
                $(".nav-pages-horizonal").toggleClass('is-open');
                $("body").toggleClass('category-nav-active');

                if (!element || !element.classList.contains('is-open')) {
                    $('.navPage-subMenu-action.navPages-action.has-subMenu.active-menu').trigger("click");
                }
            });
        } else {
            $(".navPages-container").removeClass('mobile-nav').addClass('desktop-nav');
            $("body").removeClass("header-active");

            /*$(".shop-menu-simple .desktop-nav .navPages-item-category > .navPages-action").off('click').on('click', function (event) {
                event.preventDefault();
                $(".shop-menu-simple .desktop-nav .navPages-item-category > .navPages-action").removeClass('is-open');
                $(".shop-menu-simple .desktop-nav .navPages-item-category .nav-pages-horizonal").removeClass('is-open');
            }); */

            $(".shop-menu-simple .desktop-nav .navPages-item-category > .navPages-action").removeClass('is-open');
            $(".shop-menu-simple .desktop-nav .navPages-item-category .nav-pages-horizonal").removeClass('is-open');
            document.body.style.paddingTop = '';
            const stickyactive = document.querySelector('.active-sticky-header');
            if (stickyactive) {
              adjustBodyPadding();
            }
            $('.navPage-subMenu.navPage-subMenu-mega-menu .navPage-subMenu-action.has-subMenu').off('click').on('click', function (event) {
                event.preventDefault();
                var notremove = $(this);
                $(".navPage-child-second-level").not($(this).parent().siblings(".navPage-child-second-level")).removeClass("is-open");
                $(this).parent().siblings(".navPage-child-second-level").toggleClass("is-open");
                $(this).toggleClass('active-menu');
                $('.navPage-subMenu.navPage-subMenu-mega-menu .navPage-subMenu-action.has-subMenu').not($(this)).removeClass('active-menu');
            });
            $(window).on("resize", function () {
                var $activeMenu = $(".navPage-subMenu.navPage-subMenu-mega-menu .navPage-subMenu-action.has-subMenu.active-menu");
                if ($activeMenu.length) {
                    var $activeCategory = $activeMenu.closest(".navPage-subMenu-item"); 
                    $activeCategory.find(".navPage-child-second-level").addClass("is-open");
                } else {
                    $(".navPage-child-second-level").removeClass("is-open");
                }
            });
        }
    }

    // INITIALIZE ON DOCUMENT READY
    handleNavigation();

    // REAPPLY LOGIC ON WINDOW RESIZE
    $(window).resize(function () {
        handleNavigation();
    });
});

    $(".shop--mega-menu-alternate .navPages-item-category > .navPages-action").on('click', function(event) {
        event.preventDefault();
        const element = document.querySelector('.navPages-item.navPages-item-category .navPages-action.has-subMenu');
        
        // Check if the element exists and has the 'is-open' class
        $(this).toggleClass('is-open');
        $(".navPage-subMenu-mega-menu").toggleClass('is-open');
        $("body").toggleClass('category-nav-active');
        if (element && element.classList.contains('is-open')) {
        } else {
            $('.navPage-subMenu-action.navPages-action.has-subMenu.active-menu').trigger("click");
        }
    }); 

    $(".overlay-menu").on("click", function () {
        $(".navPage-subMenu-mega-menu").removeClass('is-open');
        $('.navPage-subMenu-action.navPages-action.has-subMenu.active-menu').trigger("click");
    });

    if ($(".navUser-action--currencySelector").length) {
        const navUserActioncurrency = document.querySelector('.navUser-action--currencySelector');
        navUserActioncurrency.addEventListener('click', () => {
            if (navUserActioncurrency.classList.toggle('is-open')) {
                $("body").addClass("top-bar-dropdown-currency");
            } else {
                $("body").removeClass("top-bar-dropdown-currency");
            }
        }); 
        document.addEventListener('click', (event) => {
            // Check if the click was outside the store info div
            if (!navUserActioncurrency.contains(event.target)) {
                document.body.classList.remove('top-bar-dropdown-currency');
            }    
        });  
    }
    if ($(".help-nav-menu").length) {
        const navUserAction = document.querySelector('.help-nav-menu .navUser-action');
   
        navUserAction.addEventListener('click', () => {
            if (navUserAction.classList.toggle('is-open')) {
                $("body").addClass("top-bar-dropdown-active");
            } else {
                $("body").removeClass("top-bar-dropdown-active");
            }
        }); 
        
        document.addEventListener('click', (event) => {
            // Check if the click was outside the store info div
            if (!navUserAction.contains(event.target)) {
                document.body.classList.remove('top-bar-dropdown-active');
            }    
        });  
    }
    
              
      function handleMouseEnter() {
          document.body.classList.add("top-bar-active");
      }

      function handleMouseLeave() {
          document.body.classList.remove("top-bar-active");
      }

      function checkWindowSize() {
          const topMenu = document.querySelector('.top-menu');
          if (window.innerWidth >= 1024) {
              topMenu.addEventListener('mouseenter', handleMouseEnter);
              topMenu.addEventListener('mouseleave', handleMouseLeave);
          } else {
              topMenu.removeEventListener('mouseenter', handleMouseEnter);
              topMenu.removeEventListener('mouseleave', handleMouseLeave);
          }
      }

      // Initial check
      checkWindowSize();

      // Listen for resize events
      window.addEventListener('resize', checkWindowSize);
      function updateSidebarTop() {
          if (window.innerWidth < 768) {
              const headerBottomHeight = $('.header-bottom').outerHeight() || 0;
              const topMenuHeightt = $('.top-menu').outerHeight() || 0;
              const totalHeightt = headerBottomHeight + topMenuHeightt;

              $('.page-sidebar').css('top', totalHeightt);
          } else {
              // Reset the top value when the screen width is 1024px or more
              $('.page-sidebar').css('top', '');
          }
      }

      // Call the function on page load and on window resize
      $(document).ready(updateSidebarTop);
      $(window).resize(updateSidebarTop);      

      /* Multiple Swatches Js */
    $(".productGrid .product").each(function () {
        var buttonClick = $(this).find(".button.quickview");
        $(buttonClick).on("click", function () {
            var Quickpopup = setInterval(() => {
                let shouldClear = false;
            
                $(".form-option-wrapper").each(function () {
                    var formOptionWrapperOption = $(this).find(".form-option.form-option-swatch span.form-option-variant");
            
                    if (formOptionWrapperOption.length > 1) {
                        $(this).find(".form-option.form-option-swatch").addClass("multiple-swatch");
                        shouldClear = true;
                    }
                });
            
                if (shouldClear) {
                    clearInterval(Quickpopup);
                }
            }, 100); // 100ms delay gives time for popup content to load
        });
    });
    $(".product-page-body .form-option-wrapper").each(function () {
        var ProductOptions = setInterval(() => {
        var swatch_limit = $(this).find(".form-option.form-option-swatch span.form-option-variant").length;
        if(swatch_limit > 1){
            clearInterval(ProductOptions);
            $(this).find(".form-option.form-option-swatch").addClass("multiple-swatch");       
        }
        }, 0);
    });
    $(".cart-list .cart-item").each(function () {
        var EditClick = $(this).find(".edit-otpion-text");
        $(EditClick).on("click", function () {
            var Cartpopup = setInterval(() => {
                let shouldClear = false;

                $(".form-option-wrapper").each(function () {
                    var cartOption = $(this).find(".form-option.form-option-swatch span.form-option-variant");
            
                    if (cartOption.length > 1) {
                        $(this).find(".form-option.form-option-swatch").addClass("multiple-swatch");
                        shouldClear = true;
                    }
                });
            
                if (shouldClear) {
                    clearInterval(Cartpopup);
                } 
            }, 100); // Adjust the delay time if needed
        });
    });
    /* Multiple Swatches Js */

    // Hide pagitnation of Recommended Products when value is 0
    $(document).ready(function () {
    function checkAndHidePanel() {
        var currentSlide = $('.product-panel-section .total-slides').text();
        if (parseInt(currentSlide) === 0) {
            $('.product-panel-section .related-product-panel').hide();
        } else {
            $('.product-panel-section .related-product-panel').show();
        }
    }
    checkAndHidePanel();
    $(window).on('resize', function () {
        checkAndHidePanel();
    });
    setInterval(function () {
        checkAndHidePanel();
    }, 2000); 
    });
});
