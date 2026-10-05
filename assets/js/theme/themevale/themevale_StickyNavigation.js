import $ from 'jquery';

export default function() {
    function header_sticky() {
        // Add class fixed for menu when scroll

        // if ($(window).width() <= 1024 && $('.header > #menu .navPages').length) {
        //     $('.header > #menu .navPages').appendTo('#menuMobile');
        // }

        var header_position = $('.body').offset();
        var header_height = $('.header .themevale_middleHeader').height();
        $(window).on('scroll', function(event) {
            var scroll = $(window).scrollTop();
            if (scroll > header_position.top) {
                $('header').addClass('is-sticky');
                $('.body').css('padding-top', header_height);
                if ($(window).width() > 1024 && $('.header > #menu .navPages').length) {
                    $('.body').css('padding-top', header_height - 20);
                    $('.header > #menu .navPages').appendTo('#menuMobile');
                    $('#menu-mobile .imageTop .cateArea > .navPage-subMenu-list > .navPage-subMenu-item-child').each(function() {
                        $(this).find('.imageTop-item').appendTo($(this).find('.navPage-subMenu-title'));
                    });
                } else {
                    $('#menu-mobile .imageTop .cateArea > .navPage-subMenu-list > .navPage-subMenu-item-child').each(function() {
                        $(this).find('.imageTop-item').appendTo($(this).find('.navPage-subMenu-title'));
                    });
                }
            }
            else {
                $('header').removeClass('is-sticky');
                $('.body').css('padding-top', 0);
                if ($(window).width() > 1024 && $('#menuMobile .navPages').length) {
                    $('#menuMobile .navPages').appendTo('.header > #menu');
                    $('#menu .imageTop .cateArea > .navPage-subMenu-list > .navPage-subMenu-item-child').each(function() {
                        $(this).find('.imageTop-item').insertAfter($(this).find('> .navPage-subMenu-action'));
                    });
                } else {
                    $('#menu-mobile .imageTop .cateArea > .navPage-subMenu-list > .navPage-subMenu-item-child').each(function() {
                        $(this).find('.imageTop-item').appendTo($(this).find('.navPage-subMenu-title'));
                    });
                }
            }
        });
        window.onload = function() {
            if ($(window).scrollTop() > header_position) {
                $('header').addClass('is-sticky');
            }
        };
    }
    header_sticky();
}
