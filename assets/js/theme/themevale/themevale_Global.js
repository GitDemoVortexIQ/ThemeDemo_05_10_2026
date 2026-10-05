import $ from 'jquery';
import classie from 'classie';
import Countdown from './themevale_Countdown';
import Countdown2 from './themevale_Countdown2';
import utils from '@bigcommerce/stencil-utils';


export default function(context) {

    // ========================================================================
    // Top Promotion
    // ========================================================================
    function topPromotion() {
        $('.close-banner-promotion').on('click', function(){
            $('#themevale_top-promotion').remove();
        });
        $(".accordion").on("click", "dd", function (event) {
            $("dd.active").slideToggle("slow");
            $(this).find(".content").slideToggle("slow");
        }); 
    }
    topPromotion();


    function currency() {
        $('.navUser-action--currencySelector').on('click', function(event){
            event.preventDefault();
            $(this).toggleClass('is-open');
            $(this).next().toggleClass('is-open');
        });

        $('body').on('click', function(event) {
        if ($(event.target).closest('.navUser-action--currencySelector').length === 0 && $(event.target).closest('#currencySelection').length === 0) {
            $('.navUser-action--currencySelector').removeClass('is-open');
            $('.navUser-action--currencySelector').next().removeClass('is-open');
        }
    });
    }
    currency();

    // ========================================================================
    // Back to top
    // ========================================================================
    function back_to_top() {
        var offset = $(window).height()/2;
        const backToTop = $('#back-to-top');

        $(window).scroll(function() {
            ($(this).scrollTop() > offset) ? backToTop.addClass('is-visible') : backToTop.removeClass('is-visible ');
        });

        backToTop.on('click', function(event) {
            event.preventDefault();
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
        });
    }
    back_to_top();

    // ========================================================================
    // Login dropdown
    // ========================================================================
    function login_dropdown() {
        if ($('#login-dropdown').length) {
            $('[data-login-form]').on('click', event => {
                const $target = $(event.currentTarget);
                event.preventDefault();
                $target.toggleClass('is-open');
            });
            $('.login-close').on('click', event => {
                event.preventDefault();
                $('[data-login-form]').removeClass('is-open');
            });
        }

        $('.navUser-action--myaccount').on('click', event => {
            event.preventDefault();
            const $target = $(event.currentTarget);
            if ($target.hasClass('is-open')) {
                $target.removeClass('is-open');
            } else {
                $target.addClass('is-open');
            }
        });
        $(document).on('click', event => {
            if ($('[data-login-form]').hasClass('is-open')) {
                if (($(event.target).closest('[data-login-form]').length === 0) && ($(event.target).closest('#login-dropdown').length === 0)) {
                    $('[data-login-form]').removeClass('is-open');
                }
            }
            if ($('.navUser-action--myaccount').hasClass('is-open')) {
                if (($(event.target).closest('.navUser-action--myaccount').length === 0) && ($(event.target).closest('#navPages-account-topbar').length === 0)) {
                    $('.navUser-action--account').removeClass('is-open');
                }
            }
        });
    }
    login_dropdown();

    // ========================================================================
    // hover dropdown menu
    // ========================================================================
    function navigation_hover() {
        // Hover navigation
        if ($(window).width() > 1024) {
            $( ".themevale_header-layout-1 #menu .navPages-list" )
                .on( "mouseenter", function() {
                    $('body').addClass("themevale_navigationHover");
                })
                .on( "mouseleave", function() {
                    $('body').removeClass("themevale_navigationHover");
            });
        }
    }
    navigation_hover();

    function menu_mobile() {
        $('#menu-mobile .themevale_close').on('click', function(){
            $('.mobileMenu-toggle').trigger('click');
        });

        $('.themevale_background').on('click', function() {
            if ($('body').hasClass('has-activeNavPages')) {
                $('.mobileMenu-toggle').trigger('click');
            }
        });
    }
    menu_mobile();

    // ========================================================================
    // Sidebar mobile
    // ========================================================================
    function sidebar_mobile() {
        var $sidebar = $('.page .page-sidebar'),
            $sidebarMobile = $("#sidebar-mobile .page-sidebar");
        if ($(window).width() <= 1024) {
            if ($sidebar.length) {
                if ($sidebar.find('nav').length) {
                    var id_name = $sidebar.attr('id');
                    $sidebar.removeAttr('id');
                    $sidebar.find('nav').appendTo($sidebarMobile);
                    $sidebarMobile.attr('id', id_name);
                }
            }
        } else {
            if ($sidebar.length) {
                if (!$sidebar.find('nav').length) {
                    var id_name = $sidebarMobile.attr('id');
                    $sidebarMobile.removeAttr('id');
                    $sidebarMobile.find('nav').appendTo($sidebar);
                    $sidebar.attr('id', id_name);
                }
            }
        }
        if (!$sidebar.length) {
            $('.themevale_sidebar-mobile-wrapper').remove();
        }
    }
    sidebar_mobile();

    function toggleSidebar_mobile() {
        
        $(document).on('click','.themevale_sidebar-mobile', function(e) {
            $('body').addClass('themevale_open-Sidebar');
        });

        $(document).on('click','#sidebar-mobile .themevale_close', function(e) {
            $('body').removeClass('themevale_open-Sidebar');
        });

        $(document).on('click','.themevale_background', function(e) {
            if ($('body').hasClass('themevale_open-Sidebar')) {
                $('body').removeClass('themevale_open-Sidebar');
            }
        });
    }
    toggleSidebar_mobile();

    // ========================================================================
    // Account mobile
    // ========================================================================
    function toggleAccount_mobile() {
        
        $('.accountMobile').on('click', function(e) {
            $('body').addClass('themevale_open-Account');
        });

        $('#account-mobile .themevale_close').on('click', function(e) {
            $('body').removeClass('themevale_open-Account');
        });

        $('.themevale_background').on('click', function(e) {
            if ($('body').hasClass('themevale_open-Account')) {
                $('body').removeClass('themevale_open-Account');
            }
        });
    }
    toggleAccount_mobile();

    // ========================================================================
    // Cart mobile
    // ========================================================================
    function toggleCart_mobile() {
        
        $('.cartMobile').on('click', function(e) {
            $('body').addClass('themevale_open-Cart');
            if ($(window).width() <= 551) {
                var position_top =  $('.header').position().top + $('.header').outerHeight();
                $('.themevale_open-Cart .themevale_MobileCart').css('top', position_top);
            }
        });

        $('#cart-mobile .themevale_close2').on('click', function(e) {
            $('body').removeClass('themevale_open-Cart');
            if ($(window).width() <= 551) {
                $('.themevale_MobileCart').css('top', '120%');
            }
        });

        $('.themevale_background').on('click', function(e) {
            if ($('body').hasClass('themevale_open-Cart')) {
                $('body').removeClass('themevale_open-Cart');
                if ($(window).width() <= 551) {
                    $('.themevale_MobileCart').css('top', '120%');
                }
            }
        });
    }
    toggleCart_mobile()
    // ========================================================================
    // Category Dropdown on Sidebar
    // ========================================================================
    function category_dropdownSidebar() {
        if ($('.all-categories-list').length > 0) {
            $('.all-categories-list .icon-arrow').on('click', function() {
                var $this = $(this).parent();
                $this.siblings().removeClass('is-clicked');
                $this.toggleClass('is-clicked');
                $this.siblings().find("> .dropdown-category-list").slideUp( "slow" );
                $this.find("> .dropdown-category-list").slideToggle( "slow" );
           });
        }
        
        var category_active = $('link[rel="canonical"]').attr('href');
        $('.all-categories-list li').each(function () {
            if ($(this).children('a').attr('href') === category_active) {
                $(this).children('.icon-arrow').trigger("click");
                
            }
        });
    }
    category_dropdownSidebar();

    // ========================================================================
    // Layout Product List/Grid
    // ========================================================================
    function layout_ListGrid() {
        const layout = document.getElementById('grid-list-layout');
        $(document).on('click', '.view-as-btn a', function(){
            var column = $(this).attr('data-layout');
            layout.className = 'page';
            classie.add(layout, column);
        });
    }
    layout_ListGrid();

    // ========================================================================
    // Setting footer on Mobile & tablet
    // ========================================================================
    function footer_mobile() {
        if ($(window).width() <= 767) {
            if(!$('.themevale_footer-info').hasClass('footerMobile')) {
                $('.themevale_footer-info').addClass('footerMobile');
                $('.footer-dropdownmobile .footer-info-list').css('display', 'none');
            }
        } else {
            $('.themevale_footer-info').removeClass('footerMobile');
            $('.footer-dropdownmobile').removeClass('open-dropdown');
            $('.footer-dropdownmobile .footer-info-list').css('display', 'block');
        }

        if ($(window).width() <= 993) {
            // Footer Service 
            if (!$(".themevale_topFooter .themevale_service").hasClass('slick-slider')) {
                $(".themevale_topFooter .themevale_service").slick({
                    fade: true,
                    dots: false,
                    arrows: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    mobileFirst: true,
                    nextArrow: "<svg class='slick-next slick-arrow'><use xlink:href='#slick-arrow-next'></use></svg>", 
                    prevArrow: "<svg class='slick-prev slick-arrow'><use xlink:href='#slick-arrow-prev'></use></svg>",
                    responsive: [
                    {
                        breakpoint: 551,
                        settings: {
                            fade: false,
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },{
                        breakpoint: 320,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
                });
            }
        } else {
            // Footer Service 
            if ($(".themevale_topFooter .themevale_service").hasClass('slick-slider')) {
                $(".themevale_topFooter .themevale_service").slick('unslick');
            }
        }
    }
    footer_mobile();

    function toggle_footer() {
        // $(document).on('click', '.footerMobile .footer-dropdownmobile .footer-info-heading', function() {
        //     $(this).parent().toggleClass('open-dropdown');
        //     $(this).parent().find('.footer-info-list').slideToggle();
        // });

        $('.footerMobile .footer-dropdownmobile .footer-info-heading').on('click' , function() {
            $(this).parent().toggleClass('open-dropdown');
            $(this).parent().find('.footer-info-list').slideToggle();
        });
    }
    toggle_footer();


    // ========================================================================
    // Ajax load products in Tabs
    // ========================================================================
    
    function request($placeholder, tmpl, urlKey) {
        if ($placeholder.data('themevaleLoaded')) return;

        let template = tmpl;
        if ($placeholder.data('themevaleTemplate')) { template = $placeholder.data('themevaleTemplate'); }

        let url = $placeholder.data(urlKey);
        url = url.replace(/https?:\/\/[^/]+/, ''); // WORKAROUND: fix stencil localhost use real absolute urls

        utils.api.getPage(url, { template }, (err, resp) => {
            $placeholder.html(resp);
            $placeholder.data('themevaleLoaded', true);
            $placeholder.find('.productCarousel-slide').each(function() {
                var product_id = $(this).find('.card-sale').attr('data-product-id');
                Countdown(product_id);
                
            });
            // init products carousel
            if ($(window).width() > 1024) {
                $('[data-slick]', $placeholder).slick();
            }
        });
    }

    // Ajax load products in a category
    function initAjaxProductsByCategory() {
        var template = 'themevale/homepage/component/ajax-products-by-category-id-result', 
            urlKey = 'themevaleProductsByCategory';

        $('[data-themevale-products-by-category]').each((i, placeholder) => {
            Pace.ignore(() => {
                request($(placeholder), template, urlKey);
            });
        });
    }
    initAjaxProductsByCategory();

    function request2($placeholder, tmpl, urlKey) {
        if ($placeholder.data('themevaleLoaded')) return;

        let template = tmpl;
        if ($placeholder.data('themevaleTemplate')) { template = $placeholder.data('themevaleTemplate'); }

        let url = $placeholder.data(urlKey);
        url = url.replace(/https?:\/\/[^/]+/, ''); // WORKAROUND: fix stencil localhost use real absolute urls

        utils.api.getPage(url, { template }, (err, resp) => {
            $placeholder.append(resp);
            
        });
    }

    // Ajax load products in a category
    function initAjaxProductsByCategory2() {
        var template = 'themevale/homepage/component/ajax-products-by-category-special-result', 
            urlKey = 'themevaleProductsByCategorySpecial';

        $('[data-themevale-products-by-category-special]').each((i, placeholder) => {
            Pace.ignore(() => {
                request2($(placeholder), template, urlKey);
            });
        });
    }
    initAjaxProductsByCategory2();

    function request3($placeholder, tmpl, urlKey) {
        if ($placeholder.data('themevaleLoaded')) return;

        let template = tmpl;
        if ($placeholder.data('themevaleTemplate')) { template = $placeholder.data('themevaleTemplate'); }

        let url = $placeholder.data(urlKey);
        url = url.replace(/https?:\/\/[^/]+/, ''); // WORKAROUND: fix stencil localhost use real absolute urls

        utils.api.getPage(url, { template }, (err, resp) => {
            $placeholder.html(resp);
            $placeholder.data('themevaleLoaded', true);
            $placeholder.find('.productCarousel-slide').each(function() {
                var product_id = $(this).find('.card-sale').attr('data-product-id');
                Countdown2(product_id);
                
            });
            // init products carousel
            if ($(window).width() > 1024) {
                $('[data-slick]', $placeholder).slick();
            }
        });
    }

    // Ajax load products in a category
    function initAjaxProductsByCategory3() {
        var template = 'themevale/homepage/component/ajax-products-by-category-id-result-2', 
            urlKey = 'themevaleProductsByCategories';

        $('[data-themevale-products-by-categories]').each((i, placeholder) => {
            Pace.ignore(() => {
                request3($(placeholder), template, urlKey);
            });
        });
    }
    initAjaxProductsByCategory3();

    function initAjaxProductsByCategory4() {
        var template = 'themevale/homepage/component/ajax-products-by-category-id-result-3', 
            urlKey = 'themevaleProductsByCategories2';

        $('[data-themevale-products-by-categories2]').each((i, placeholder) => {
            Pace.ignore(() => {
                request3($(placeholder), template, urlKey);
            });
        });
    }
    initAjaxProductsByCategory4();


    // Ajax load products in a category in sort|subcategories tabs
    // - Only load products in active tab (has class .is-active)
    // - Ajax load products when a tab is open
    function initAjaxProductsByCategoryTabs() {
        var template, urlKey = 'themevaleProductsByCategoryTabs';

        if (!$('.themevale_bannerByCategoryTabs').length) {
            template = 'themevale/homepage/component/ajax-products-by-category-sorting-tabs-result';
        } else {
            template = 'themevale/homepage/component/ajax-products-by-category-sorting-tabs-result2';
        }

        // Ajax request loading products in the active tab
        $('.is-active[data-themevale-products-by-category-tabs]').each((i, placeholder) => {
            Pace.ignore(() => {
                request($(placeholder), template, urlKey);
            });
        });

        $('[data-tab-themevale-products-by-category-tabs]').on('toggled', (event, tab) => {
            Pace.ignore(() => {
                request($($('a', tab).attr('href')), template, urlKey);
            });
        });
    }
    initAjaxProductsByCategoryTabs();

    function carouselMegaMenu() {
        if( $('.featuredProductCarousel').length) {
            $('.featuredProductCarousel').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                autoplay: true,
                autoplaySpeed: 6000,
                arrows: false
            });
            $(".navPages-list > li").mouseover(function() {
                $('.featuredProductCarousel').get(0).slick.setPosition();
            });
            $(".navPages .navPages-action .navPages-action-moreIcon").on("click", function() {
                $('.featuredProductCarousel').get(0).slick.setPosition();
            });
        }
    }
    carouselMegaMenu();

    $(window).resize(function() {
        sidebar_mobile();
        footer_mobile();
        toggleCart_mobile();

        if ($(window).width() > 1024) {
            $('#menu-mobile').css({'top': $("header .themevale_middleHeader").outerHeight() + 1, 'height': $(window).height() - $("header .themevale_middleHeader").outerHeight()});
        } else {
            $('#menu-mobile').css({'top': 0, 'height': '100%'});
        }
    });
}
