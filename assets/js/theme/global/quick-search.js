import _ from 'lodash';
import utils from '@bigcommerce/stencil-utils';
import StencilDropDown from './stencil-dropdown';

export default function () {
    const TOP_STYLING = 'top: 49px;';
    const $quickSearchResults = $('.quickSearchResults');
    const $quickSearchForms = $('[data-quick-search-form]');
    const $quickSearchExpand = $('#quick-search-expand');
    const $searchQuery = $quickSearchForms.find('[data-search-quick]');
    const stencilDropDownExtendables = {
        hide: () => {
            $quickSearchExpand.attr('aria-expanded', false);
            $searchQuery.trigger('blur');
            $("body").removeClass("visible-search");
        },
        show: (event) => {
            $quickSearchExpand.attr('aria-expanded', true);
            $searchQuery.trigger('focus');
            event.stopPropagation();
            productwidth();
            $(window).resize(productwidth);  
            $("body").addClass("visible-search");
        },
    };
    const stencilDropDown = new StencilDropDown(stencilDropDownExtendables);
    stencilDropDown.bind($('[data-search="quickSearch"]'), $('#quickSearch'), TOP_STYLING);

    // stencilDropDownExtendables.onBodyClick = (e, $container) => {
    //     if ($(e.target).closest('[data-prevent-quick-search-close], .modal-background').length === 0) {
    //         stencilDropDown.hide($container);
    //     }
    // };

    // Function to set a cookie
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
    }

    // Function to get a cookie value
    function getCookie(name) {
        var nameEQ = name + "=";
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1, cookie.length);
            }
            if (cookie.indexOf(nameEQ) === 0) {
                return decodeURIComponent(cookie.substring(nameEQ.length, cookie.length));
            }
        }
        return null;
    }

    // Initialize custhtml with existing value from cookie or empty string
    var custhtml = getCookie('saved_custhtml') || '';
    $(".recent-search-box .productGrid-search").append(custhtml); // Append existing custhtml on page load
     if (custhtml.length > 0) {
        $('.clear-all-recent').addClass('active'); // Add class if length > 0
    } else {
        $('.clear-all-recent').removeClass('active'); // Remove class if length == 0
    }        
    // Event delegation for handling click on delete search
    $(".recent-search-box .productGrid-search").on('click', '.delet-search', function(event) {
        // event.preventDefault();
        var $parentLi = $(this).parent('li');
        var searchQuery = $parentLi.find('a').text(); // Get the search query from the anchor href
        searchQuery = decodeURIComponent(searchQuery); // Decode the search query

        // Update custhtml and save to cookie without hiding dropdown
        custhtml = custhtml.replace('<li><a href=/search.php?search_query='+ `${encodeURIComponent(searchQuery)}` + '>' + searchQuery + '</a><span class="delet-search"><svg><use xlink:href="#icon-close"></use></svg></span></li>', '');
        $(this).parent('li').addClass("hide");

        setCookie('saved_custhtml', custhtml, 1); // Update the custhtml in the cookie for 30 days
         if (custhtml.length > 0) {
            $('.clear-all-recent').addClass('active'); // Add class if length > 0
        } else {
            $('.clear-all-recent').removeClass('active'); // Remove class if length == 0
        }
    });
    $(".populer-search-box .productGrid-search").on('click', '.delet-search', function(event) {
        // event.preventDefault();
        var $parentLi = $(this).parent('li');
        var searchQuery = $parentLi.find('a').text(); // Get the search query from the anchor href
        searchQuery = decodeURIComponent(searchQuery); // Decode the search query

        // Update custhtml and save to cookie without hiding dropdown
        $(this).parent('li').addClass("hide");

        setCookie('saved_custhtml', custhtml, 1); // Update the custhtml in the cookie for 30 days
    });  
    $(".clear-all-recent").click(function(){
        $(".recent-search-box .delet-search").trigger("click");
        $(this).removeClass('active');
    });    
    $("#nav-quick-search").focus(function(){
        $(".navUser-item.navUser-item--search").addClass("search--open");
        $("body").addClass("visible-search");
        $(".search-layout-two .quickSearchResults.desktop-search").addClass("search-product-open");
        productwidth();
    });
    $(".navUser-action--quicksearch-mobile").click(function(){
         $("#nav-quick-search").trigger("focus");
    });    
    $("#nav-quick-search").focus(function(){
        $(".dropdown--quickSearch").removeClass("search-popup-disable");
    });   
    $(".layout-two-close").click(function(){
        $(".search-layout-two .quickSearchResults.desktop-search").removeClass("search-product-open");
        $(".navUser-item.navUser-item--search").removeClass("search--open");
        $("body").removeClass("visible-search");
        $(".dropdown--quickSearch").addClass("search-popup-disable");
    });
    $(document).on("click focusout", function(event) {
        // Check if the click is outside of the dropdown
  if (
        !$(event.target).closest(".search-layout-one .dropdown--quickSearch").length &&
        $(".dropdown--quickSearch").hasClass("is-open") &&
        !$(event.target).closest(".navUser-action").length // Prevent conflict with other dropdowns
    ) {
        // Trigger the close button for the quick search dropdown
        $(".search-layout-one .search-close-button .modal-close").trigger("click");
    }
        if (!$(event.target).closest(".search-layout-two .navUser-item--search.search--open").length) {
            // Trigger the close button if clicked outside
            // $(".search-layout-two .layout-two-close").trigger("click");
            $(".search-layout-two .quickSearchResults.desktop-search").removeClass("search-product-open");
            $(".search-layout-two .navUser-item.navUser-item--search").removeClass("search--open");
            $("body.search-layout-two-active").removeClass("visible-search");
            $(".search-layout-two .dropdown--quickSearch").addClass("search-popup-disable");            
        }        
    });
    const debounceWaitTime = 1200;
    const doSearch = _.debounce((searchQuery) => {
        utils.api.search.search(searchQuery, { template: 'search/quick-results' }, (err, response) => {
            if (err) {
                return false;
            }

            // Update custhtml and save to cookie if searchQuery does not exist
            if (custhtml.indexOf(encodeURIComponent(searchQuery)) === -1) {
                var newHtml = '<li><a href=/search.php?search_query='+ `${encodeURIComponent(searchQuery)}` + '>' + searchQuery + '</a><span class="delet-search"><svg><use xlink:href="#icon-close"></use></svg></span></li>';
                custhtml += newHtml;
                $(".recent-search-box .productGrid-search").html(custhtml); // Update HTML with new content

                setCookie('saved_custhtml', custhtml, 1); // Update the custhtml in the cookie for 30 days
                if (searchQuery.length > 0) {
                   $(".clear-all-recent").addClass('active'); // Add class if length > 0
                } else {
                    $(".clear-all-recent").removeClass('active'); // Remove class if length == 0
                }
            }

            $quickSearchResults.html(response);
            const $quickSearchResultsCurrent = $quickSearchResults.filter(':visible');

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
                            }
                        });
                    
                        if (shouldClear) {
                            clearInterval(Quickpopup);
                        }
                    }, 500); // 500ms delay gives time for popup content to load
                });
            });
            /* Multiple Swatches Js */
            
$(document).ready(function() {
    function initializeSlider(selector) {
        var $catslider = $(selector + ' .productGrid');
        
        // Initialize Slick slider
        $catslider.slick({
            arrows: true,
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1366,
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
                    breakpoint: 359,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        // Function to update the slide info and active dot
        function updateSlideInfo() {
            var $activeDot = $(selector + ' .productGrid .slick-active-dot');
            if ($activeDot.length === 0) {
                $activeDot = $('<li class="slick-active-dot"></li>');
                $(selector + ' .productGrid .slick-dots').append($activeDot);
            }                
            
            // Calculate totalSlides specifically for this slider instance
            var totalSlides = $catslider.find('.slick-dots li button').length;
            var activeSlideIndex = $catslider.find('.slick-dots li.slick-active').index() + 1;
            
            $(selector + ' .slider-info .current-slide').text(activeSlideIndex);
            $(selector + ' .slider-info .total-slides').text(totalSlides);

            // Update slick-active-dot
            var dotWidth = 100 / totalSlides;
            $(selector + ' .productGrid .slick-active-dot').css('width', dotWidth + '%');
              
            var dotLeft = dotWidth * (activeSlideIndex - 1);
            $(selector + ' .productGrid .slick-active-dot').css('left', dotLeft + '%');
            
            if (totalSlides < 2) {
                $(selector).addClass("hide-pagination");
            } else {
                $(selector).removeClass("hide-pagination");
            }
            if (activeSlideIndex  == 1) {
                $(selector + ' .slick-prev').addClass('disabled-btn');
                $(selector + ' .slick-next').removeClass('disabled-btn');
            } else if (activeSlideIndex  == totalSlides) {
                $(selector + ' .slick-next').addClass('disabled-btn');
                $(selector + ' .slick-prev').removeClass('disabled-btn');
            } 
              if (activeSlideIndex  > 1) {
                  $(selector + ' .slick-prev').removeClass('disabled-btn');
              } 
              if (activeSlideIndex  < totalSlides) {
                  $(selector + ' .slick-next').removeClass('disabled-btn');
              }                        
        }

        // Ensure the function runs on initial load and after each slide change
        function initAndUpdate() {
            setTimeout(updateSlideInfo, 100); // Delay for Slick setup
        }

        // Trigger `init` event on slider initialization
        $catslider.on('init', function() {
            updateSlideInfo();  // Update slide info on first load
        });

        // Call initAndUpdate function on slider events
        $catslider.on('init reInit afterChange', initAndUpdate);

        // Custom navigation buttons
        $(selector + ' .slick-prev').off('click').on('click', function() {
            $catslider.slick('slickPrev');
            updateSlideInfo();
        });

        $(selector + ' .slick-next').off('click').on('click', function() {
            $catslider.slick('slickNext');
            updateSlideInfo();
        });

        // Initial call to set up the active dot and slide info
        setTimeout(initAndUpdate, 100); // Slight delay to ensure everything is ready
    }

    // Initialize slider for mobile and desktop search
    initializeSlider('.quickSearchResults.mobile-search');
    initializeSlider('.quickSearchResults.desktop-search');
});


            const $noResultsMessage = $quickSearchResultsCurrent.find('.quickSearchMessage');
            if ($noResultsMessage.length) {
                $noResultsMessage.attr({
                    role: 'status',
                    'aria-live': 'polite',
                });
            } else {
                const $quickSearchAriaMessage = $quickSearchResultsCurrent.next();
                $quickSearchAriaMessage.addClass('u-hidden');

                const predefinedText = $quickSearchAriaMessage.data('search-aria-message-predefined-text');
                const itemsFoundCount = $quickSearchResultsCurrent.find('.product').length;

                $quickSearchAriaMessage.text(`${itemsFoundCount} ${predefinedText} ${searchQuery}`);

                setTimeout(() => {
                    $quickSearchAriaMessage.removeClass('u-hidden');
                }, 100);
            }
        });
    }, debounceWaitTime);

    utils.hooks.on('search-quick', (event, currentTarget) => {
        const searchQuery = $(currentTarget).val();

        if (searchQuery.length < 3) {
            return;
        }

        doSearch(searchQuery);
    });

    $quickSearchForms.on('submit', event => {
        event.preventDefault();

        const $target = $(event.currentTarget);
        const searchQuery = $target.find('input').val();
        const searchUrl = $target.data('url');

        if (searchQuery.length === 0) {
            return;
        }

        window.location.href = `${searchUrl}?search_query=${encodeURIComponent(searchQuery)}`;
    });

    var $myDiv = $('.search-box-cavio');
    var $myDiv2 = $('.dropdown--quickSearch .container');
    // Function to check the right side space
    function productwidth() {
        var divWidth = $myDiv.outerWidth();
        var paddingRight = parseInt($myDiv2.css('padding-right'));
        var marginRight = parseInt($myDiv2.css('margin-right'));
        var mainwidth = divWidth + paddingRight + marginRight;
        $(".dropdown--quickSearch .quickSearchResults").outerWidth(mainwidth);
    }
    window.addEventListener('resize', productwidth);
}
