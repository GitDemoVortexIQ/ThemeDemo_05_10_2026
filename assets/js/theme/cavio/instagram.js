import $ from 'jquery';
import 'slick-carousel';
export default (function(context) {   
  var token = context.instagramaccesstoken;
  var url = 'https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,username,timestamp&access_token=' + encodeURIComponent(token) + '&limit=10';
  
  $.ajax({
    url: url,
    method: "GET",
    timeout: 0,
    async: false
  }).done(function(response) {
    var data = response.data;
    $.each(data, function(index, item) {
      if(item.media_type != "VIDEO"){
        var html = '<div class="instagram-post-wrapper"><a class="instagram-card" href="'+item.permalink+'" target="_blank" alt="Instagram Posts"  title="Instagram Posts"><div class="instagram-thumb-img"><img class="lazyload" alt="Instagram Posts"  title="Instagram Posts" data-sizes="auto" src="'+item.media_url+'"></div><div class="instagram-logo"><span class="instagram--icon"><svg><use href="#icon-instagram"></use></svg></span></div></a></div>';
        $('.instagram-post').append(html);
      }
    });
  }).then(function() {
    $('.insta-post-nav').show();
    $('.instagram-grid').show();
    $('.hp-instagram').addClass("visible-nav");
    var $slider = $('.instagram-post');
    $slider.slick({
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
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },             
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },  
        {
            breakpoint: 801,
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
    
    function updateSlideInfo() {
      var total = $slider.find('.slick-dots li button').length;
      var active = $slider.find('.slick-dots li.slick-active').index() + 1;
      $('.insta-post-nav .current-slide').text(active);
      $('.insta-post-nav .total-slides').text(total);
      var $dot = $('.instagram-post .slick-active-dot');
      if ($dot.length === 0) {
        $dot = $('<li class="slick-active-dot"></li>');
        $('.instagram-post .slick-dots').append($dot);
      }
      var width = 100 / total;
      $dot.css('width', width + '%');
      var left = width * (active - 1);
      $dot.css('left', left + '%');
      if (total  < 2) {
      } else{
          $('.hp-instagram').removeClass("hide-pagination");
      }
      if (active  == 1) {
          $('.insta-post-nav .slick-prev').addClass('disabled-btn');
          $('.insta-post-nav .slick-next').removeClass('disabled-btn');
      } else if (active  == total) {
          $('.insta-post-nav .slick-next').addClass('disabled-btn');
          $('.insta-post-nav .slick-prev').removeClass('disabled-btn');
      }   
      if (active  > 1) {
          $('.insta-post-nav .slick-prev').removeClass('disabled-btn');
      } 
      if (active  < total) {
          $('.insta-post-nav .slick-next').removeClass('disabled-btn');
      }          
    }
    
    function initAndUpdate() {
      setTimeout(updateSlideInfo, 100);
    }
    
    $slider.on('init reInit afterChange', initAndUpdate);
    
    $('.insta-post-nav .slick-prev').click(function() {
      $slider.slick('slickPrev');
      updateSlideInfo();
    });
    
    $('.insta-post-nav .slick-next').click(function() {
      $slider.slick('slickNext');
      updateSlideInfo();
    });
    
    initAndUpdate();
  }).fail(function() {
    $('.insta-post-nav', '.instagram-grid').hide();
  });
});
