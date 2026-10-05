import $ from 'jquery';
import 'slick-carousel';
import utils from '@bigcommerce/stencil-utils';  

export default (function(context) {
  var $cartproductcarousel = $('.cart-addtional-products .productGrid');
  // Initialize Slick slider
  $cartproductcarousel.slick({
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
              breakpoint: 1023,
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

  // Function to update the slide info and active dot
  function cartproductupdateSlideInfo() {
      var totalSlides = $cartproductcarousel.find('.slick-dots li button').length;
      var activeSlideIndex = $cartproductcarousel.find('.slick-dots li.slick-active').index() + 1;
      $('.cart-product-nav .current-slide').text(activeSlideIndex);
      $('.cart-product-nav .total-slides').text(totalSlides);
      // Update slick-active-dot
      var $activeDot = $('.cart-addtional-products .slick-active-dot');
      if ($activeDot.length === 0) {
          $activeDot = $('<li class="slick-active-dot"></li>');
          $('.cart-addtional-products .slick-dots').append($activeDot);
      }

      var dotWidth = 100 / totalSlides;
      $activeDot.css('width', dotWidth + '%');

      var dotLeft = dotWidth * (activeSlideIndex - 1);
      $activeDot.css('left', dotLeft + '%');
      if (activeSlideIndex  == 1) {
          $('.cart-product-nav .slick-prev').addClass('disabled-btn');
          $('.cart-product-nav .slick-next').removeClass('disabled-btn');
      } else if (activeSlideIndex  == totalSlides) {
          $('.cart-product-nav .slick-next').addClass('disabled-btn');
          $('.cart-product-nav .slick-prev').removeClass('disabled-btn');
      }   
        if (activeSlideIndex  > 1) {
            $('.cart-product-nav .slick-prev').removeClass('disabled-btn');
        } 
        if (activeSlideIndex  < totalSlides) {
            $('.cart-product-nav .slick-next').removeClass('disabled-btn');
        }
  }

  // Ensure the function runs on initial load and after each slide change
  function cartproductinitAndUpdate() {
      setTimeout(function() {
          cartproductupdateSlideInfo();  // Delay to ensure Slick has completed setup
      }, 100);  // Adjust delay as needed
  }

  // Call cartproductinitAndUpdate function on slider events
  $cartproductcarousel.on('init reInit afterChange', cartproductinitAndUpdate);

  // Custom navigation buttons
  $('.cart-product-nav .slick-prev').click(function() {
      $cartproductcarousel.slick('slickPrev');
      cartproductupdateSlideInfo();
  });

  $('.cart-product-nav .slick-next').click(function() {
      $cartproductcarousel.slick('slickNext');
      cartproductupdateSlideInfo();
  });
  // Initial call to set up the active dot and slide info
  cartproductinitAndUpdate();    
});
