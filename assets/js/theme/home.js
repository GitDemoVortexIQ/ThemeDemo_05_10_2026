import $ from 'jquery';
import _ from 'lodash';
import utils from '@bigcommerce/stencil-utils';
import PageManager from './page-manager';
import modalFactory, { showAlertModal } from './global/modal';

export default class Home extends PageManager {
    onReady() {
        this.homepage_carousel();
        this.homepage_countdown();
        this.initPopupVideo();
        this.showmore_htmltext();
        this.tabCarousel();
        this.fillter();
    }

    homepage_carousel() {
        if ($(window).width() <= 1024) {
            if ($('#brands_carousel').length) {
                $('#brands_carousel').slick('unslick');
            }

            $('.productCarousel').each(function(e) {
                if ($(this).hasClass('slick-slider')) {
                    $(this).slick('unslick');
                }
            });

            $('.themevale_bannerbycategory .themevale_bannerbycategory-carousel').each(function(e) {
                if ($(this).hasClass('slick-slider')) {
                    $(this).slick('unslick');
                }
            });

            $('.brandsImage-slider.layout-1').each(function(e) {
                if ($(this).hasClass('slick-slider')) {
                    $(this).slick('unslick');
                }
            });

            $('#video_carousel').each(function(e) {
                if ($(this).hasClass('slick-slider')) {
                    $(this).slick('unslick');
                }
            });

            $('.themevale_category-custom').each(function(e) {
                if ($(this).hasClass('slick-slider')) {
                    $(this).slick('unslick');
                }
            });
        }

        $(window).resize(function() {
            if ($(window).width() <= 1024) {
                if ($('#brands_carousel').length) {
                    if ($('#brands_carousel').hasClass('slick-slider')) {
                        $('#brands_carousel').slick('unslick');
                    }
                }

                $('.productCarousel').each(function(e) {
                    if ($(this).hasClass('slick-slider')) {
                        $(this).slick('unslick');
                    }
                });

                $('.themevale_bannerbycategory .themevale_bannerbycategory-carousel').each(function(e) {
                    if ($(this).hasClass('slick-slider')) {
                        $(this).slick('unslick');
                    }
                });

                $('.brandsImage-slider.layout-1').each(function(e) {
                    if ($(this).hasClass('slick-slider')) {
                        $(this).slick('unslick');
                    }
                });

                $('#video_carousel').each(function(e) {
                    if ($(this).hasClass('slick-slider')) {
                        $(this).slick('unslick');
                    }
                });

                $('.themevale_category-custom').each(function(e) {
                    if ($(this).hasClass('slick-slider')) {
                        $(this).slick('unslick');
                    }
                });
            } else {
                if ($('#brands_carousel').length) {
                    if (!$('#brands_carousel').hasClass('slick-slider')) {
                        $('#brands_carousel').slick();
                    }
                }

                $('.productCarousel').each(function(e) {
                    if (!$(this).hasClass('slick-slider')) {
                        $(this).slick();
                    }
                });
                
                $('.themevale_bannerbycategory .themevale_bannerbycategory-carousel').each(function(e) {
                    if (!$(this).hasClass('slick-slider')) {
                        $(this).slick();
                    }
                });

                $('.brandsImage-slider.layout-1').each(function(e) {
                    if (!$(this).hasClass('slick-slider')) {
                        $(this).slick();
                    }
                });

                $('#video_carousel').each(function(e) {
                    if (!$(this).hasClass('slick-slider')) {
                        $(this).slick();
                    }
                });

                $('.themevale_category-custom').each(function(e) {
                    if (!$(this).hasClass('slick-slider')) {
                        $(this).slick();
                    }
                });
            }
        });
    }

    homepage_countdown() {
        if ($('.countDowntimer').length) {
            // Set the date we're counting down to        
            var countDownDate = new Date( document.getElementById("number").innerHTML ).getTime();
            // Update the count down every 1 second
            var countdownfunction = setInterval(function() {

                // Get todays date and time
                var now = new Date().getTime();
        
                // Find the distance between now an the count down date
                var distance = countDownDate - now;
        
                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
                // Output the result in an element with id="countDowntimer"
                document.getElementById("number").innerHTML = days + "D : " + hours + "H : " + minutes + "M : " + seconds + "S";
                
                // If the count down is over, write some text 
                if (distance < 0) {
                    clearInterval(countdownfunction);
                    document.getElementById("number").innerHTML = "EXPIRED";
                }
            }, 1000);
        }
    }

    initPopupVideo() {
        if( this.context.themeSettings['themevale_category-banner-video-url'] != "") {
            const modal = modalFactory('#popup-video')[0];
            $(document).on('click', '[data-reveal-id="popup-video"]', () => {
                const $content = '<div class="modal-body">\
                            <a href="#" class="modal-close" aria-label="" role="button">\
                    <span aria-hidden="true">&#215;</span>\
                </a>\
                <div class="popup-video themevale_popup-video" data-video-gallery>\
                    <div id="popup-video-content">\
                        <div class="popup-video-main">\
                            <iframe\
                                id="player"\
                                type="text/html"\
                                width="100%"\
                                frameborder="0"\
                                webkitAllowFullScreen\
                                mozallowfullscreen\
                                allowFullScreen\
                                src="'+this.context.themeSettings['themevale_category-banner-video-url']+'"\
                                data-video-player>\
                            </iframe>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
                modal.updateContent($content);
            });
        }
    }

    showmore_htmltext() {
        var showChar = 600,
            ellipsestext = "...",
            moretext = "Read more",
            lesstext = "Read less";
        $('.custom-html-category .custom-html').each(function() {
            var content = $(this).html();
            if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span></span>';
 
            $(this).html(html);
        }
        });
        $('#button-showmore-html').on('click', function(e) {
            e.preventDefault();
            if($(this).hasClass("less")) {
                $(this).removeClass("less");
                $(this).find('.text').html(moretext);
                $(this).parent().prev().removeClass('showmore');
            } else {
                $(this).addClass("less");
                $(this).find('.text').html(lesstext);
                $(this).parent().prev().addClass('showmore');
            }
        });
    }

    tabCarousel() {
        $('[data-themevale-products-by-category-id-tabs]').on('toggled', function (event, tab) {
            $('.productCarousel[data-slick]').slick('setPosition');
        });
    }

    fillter() {
        if ($('.themevale_MultiCategory.layout-2').length) {
            if ($(window).width() <= 1280) {
                if ($('.item-fillter .category-filter').length) {
                    $('.item-fillter .category-filter').appendTo('.category-filter-mobile');
                }
            } else {
                if (!$('.item-fillter .category-filter').length) {
                    $('.category-filter-mobile .category-filter').appendTo('.item-fillter');
                }
            }
        }
        $(window).resize(function() {
            if ($('.themevale_MultiCategory.layout-2').length) {
                if ($(window).width() <= 1280) {
                    if ($('.item-fillter .category-filter').length) {
                        $('.item-fillter .category-filter').appendTo('.category-filter-mobile');
                    }
                } else {
                    if (!$('.item-fillter .category-filter').length) {
                        $('.category-filter-mobile .category-filter').appendTo('.item-fillter');
                    }
                }
            }
        })
    }
}
