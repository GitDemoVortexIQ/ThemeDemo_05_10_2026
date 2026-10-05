import $ from 'jquery';
import 'slick-carousel';
import utils from '@bigcommerce/stencil-utils';

export default (function(context) { 
    $(document).ready(function() {
		  var $dropdownToggle = $('.dropdown-products-toggle');
		  var $dropdownMenu = $('.dropdown-products-menu');
		  var $tabs = $('.tabs');
		  
		  // Function to show or hide the dropdown menu
		  function toggleDropdown() {
		      $dropdownMenu.toggleClass('show');
          $dropdownToggle.toggleClass('active-dropdown')
		  }

		  // Click event for dropdown toggle button
		  $dropdownToggle.on('click', function() {
		      toggleDropdown();
		  });

          // Click event for dropdown menu items
          $dropdownMenu.on('click', '.tab-title', function(e) {
              e.preventDefault();
              
              var $clickedTab = $(this).closest('.tab');
              var tabText = $(this).text().trim();
              
              // Update the h3 element with the selected tab text
              $dropdownToggle.find("span").text(tabText);

              // Update active class on tabs
              $dropdownMenu.find('.tab').removeClass('is-active');
              $tabs.find('.tab').removeClass('is-active');
              $tabs.find('.tab-title').attr('aria-selected', 'false');

              // Add active class to the clicked tab
              $clickedTab.addClass('is-active');
              $(this).attr('aria-selected', 'true');

              // Hide the dropdown menu
              $dropdownMenu.removeClass('show');
          });

          // Close the dropdown menu when clicking outside
          $(document).on('click', function(event) {
              if (!$(event.target).closest('.dropdown-products').length) {
                  $dropdownMenu.removeClass('show');
              }
          });
          var $activeTab = $(".hp-products-section").find('.tab.is-active .tab-title');
          if ($activeTab.length) {
              var activeTabText = $activeTab.text().trim();
              $('.dropdown-products-toggle span').text(activeTabText);
          }
          // Recent Posts Start
          var $recentblog = $('.hp-recent-blogs .blog-grid');
          
          // Initialize Slick slider
          $recentblog.slick({
              arrows: true,
              dots: true,
              infinite: false,
              speed: 300,
              slidesToShow: 4,
              slidesToScroll: 1,
              responsive: [
                  {
                      breakpoint: 1024,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1
                      }
                  },                
                  {
                      breakpoint: 768,
                      settings: {
                          slidesToShow: 1,
                          slidesToScroll: 1
                      }
                  }
              ]
          });
      
          // Function to update the slide info and active dot
          function recentpostupdateSlideInfo() {
              var totalSlides = $recentblog.find('.slick-dots li button').length;
              var activeSlideIndex = $recentblog.find('.slick-dots li.slick-active').index() + 1;
              $('.recentpost-nav .current-slide').text(activeSlideIndex);
              $('.recentpost-nav .total-slides').text(totalSlides);
              // Update slick-active-dot
              var $activeDot = $('.blog-grid .slick-active-dot');
              if ($activeDot.length === 0) {
                  $activeDot = $('<li class="slick-active-dot"></li>');
                  $('.blog-grid .slick-dots').append($activeDot);
              }
      
              var dotWidth = 100 / totalSlides;
              $activeDot.css('width', dotWidth + '%');
      
              var dotLeft = dotWidth * (activeSlideIndex - 1);
              $activeDot.css('left', dotLeft + '%');
              if (totalSlides  < 2) {
                $('.hp-recent-blogs').addClass("hide-pagination");
              } else{
                  $('.hp-recent-blogs').removeClass("hide-pagination");
              }   
              if (activeSlideIndex  == 1) {
                  $('.recentpost-nav .slick-prev').addClass('disabled-btn');
                  $('.recentpost-nav .slick-next').removeClass('disabled-btn');
              } else if (activeSlideIndex  == totalSlides) {
                  $('.recentpost-nav .slick-next').addClass('disabled-btn');
                  $('.recentpost-nav .slick-prev').removeClass('disabled-btn');
              }   
              if (activeSlideIndex  > 1) {
                  $('.recentpost-nav .slick-prev').removeClass('disabled-btn');
              } 
              if (activeSlideIndex  < totalSlides) {
                  $('.recentpost-nav .slick-next').removeClass('disabled-btn');
              }                                     
          }
      
          // Ensure the function runs on initial load and after each slide change
          function recentpostinitAndUpdate() {
              setTimeout(function() {
                  recentpostupdateSlideInfo();  // Delay to ensure Slick has completed setup
              }, 100);  // Adjust delay as needed
          }
      
          // Call recentpostinitAndUpdate function on slider events
          $recentblog.on('init reInit afterChange', recentpostinitAndUpdate);
      
          // Custom navigation buttons
          $('.recentpost-nav .slick-prev').click(function() {
              $recentblog.slick('slickPrev');
              recentpostupdateSlideInfo();
          });
      
          $('.recentpost-nav .slick-next').click(function() {
              $recentblog.slick('slickNext');
              recentpostupdateSlideInfo();
          });
      
          // Initial call to set up the active dot and slide info
          recentpostinitAndUpdate();
          // Recent Posts End      
          // Featured Product Start
          var $featuredproductcarousel = $('#tab-featured .productGrid');
          
          // Initialize Slick slider
          $featuredproductcarousel.slick({
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
      
          // Function to update the slide info and active dot
          function featuredproductupdateSlideInfo() {
              var totalSlides = $featuredproductcarousel.find('.slick-dots li button').length;
              var activeSlideIndex = $featuredproductcarousel.find('.slick-dots li.slick-active').index() + 1;
              $('.featured-product-nav .current-slide').text(activeSlideIndex);
              $('.featured-product-nav .total-slides').text(totalSlides);
              // Update slick-active-dot
              var $activeDot = $('#tab-featured .slick-active-dot');
              if ($activeDot.length === 0) {
                  $activeDot = $('<li class="slick-active-dot"></li>');
                  $('#tab-featured .slick-dots').append($activeDot);
              }
      
              var dotWidth = 100 / totalSlides;
              $activeDot.css('width', dotWidth + '%');
      
              var dotLeft = dotWidth * (activeSlideIndex - 1);
              $activeDot.css('left', dotLeft + '%');
              if (totalSlides  < 2) {
                $('#tab-featured').addClass("hide-pagination");
              } else{
                  $('#tab-featured').removeClass("hide-pagination");
              }   
              if (activeSlideIndex  == 1) {
                  $('#tab-featured .slick-prev').addClass('disabled-btn');
                  $('#tab-featured .slick-next').removeClass('disabled-btn');
              } else if (activeSlideIndex  == totalSlides) {
                  $('#tab-featured .slick-next').addClass('disabled-btn');
                  $('#tab-featured .slick-prev').removeClass('disabled-btn');
              }        
              if (activeSlideIndex  > 1) {
                  $('#tab-featured .slick-prev').removeClass('disabled-btn');
              } 
              if (activeSlideIndex  < totalSlides) {
                  $('#tab-featured .slick-next').removeClass('disabled-btn');
              }                                
          }
      
          // Ensure the function runs on initial load and after each slide change
          function featuredproductinitAndUpdate() {
              setTimeout(function() {
                  featuredproductupdateSlideInfo();  // Delay to ensure Slick has completed setup
              }, 100);  // Adjust delay as needed
          }
      
          // Call featuredproductinitAndUpdate function on slider events
          $featuredproductcarousel.on('init reInit afterChange', featuredproductinitAndUpdate);
      
          // Custom navigation buttons
          $('.featured-product-nav .slick-prev').click(function() {
              $featuredproductcarousel.slick('slickPrev');
              featuredproductupdateSlideInfo();
          });
      
          $('.featured-product-nav .slick-next').click(function() {
              $featuredproductcarousel.slick('slickNext');
              featuredproductupdateSlideInfo();
          });
      
          // Initial call to set up the active dot and slide info
          featuredproductinitAndUpdate();
          // Featured Product End     
          // Best Product Start
          var $bestproductcarousel = $('#tab-bestsellers .productGrid');
          
          // Initialize Slick slider
          $bestproductcarousel.slick({
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
      
          // Function to update the slide info and active dot
          function bestproductupdateSlideInfo() {
            var totalSlides = $bestproductcarousel.find('.slick-dots li button').length;
            var activeSlideIndex = $bestproductcarousel.find('.slick-dots li.slick-active').index() + 1;
            $('.best-product-nav .current-slide').text(activeSlideIndex);
            $('.best-product-nav .total-slides').text(totalSlides);
            // Update slick-active-dot
            var $activeDot = $('#tab-bestsellers .slick-active-dot');
            if ($activeDot.length === 0) {
                $activeDot = $('<li class="slick-active-dot"></li>');
                $('#tab-bestsellers .slick-dots').append($activeDot);
            }
    
            var dotWidth = 100 / totalSlides;
            $activeDot.css('width', dotWidth + '%');
    
            var dotLeft = dotWidth * (activeSlideIndex - 1);
            $activeDot.css('left', dotLeft + '%');
            if (totalSlides  < 2) {
              $('#tab-bestsellers').addClass("hide-pagination");
            } else{
                $('#tab-bestsellers').removeClass("hide-pagination");
            }
            if (activeSlideIndex  == 1) {
                $('#tab-bestsellers .slick-prev').addClass('disabled-btn');
                $('#tab-bestsellers .slick-next').removeClass('disabled-btn');
            } else if (activeSlideIndex  == totalSlides) {
                $('#tab-bestsellers .slick-next').addClass('disabled-btn');
                $('#tab-bestsellers .slick-prev').removeClass('disabled-btn');
            }   
            if (activeSlideIndex  > 1) {
                $('#tab-bestsellers .slick-prev').removeClass('disabled-btn');
            } 
            if (activeSlideIndex  < totalSlides) {
                $('#tab-bestsellers .slick-next').removeClass('disabled-btn');
            }                     
          }
      
          // Ensure the function runs on initial load and after each slide change
          function bestproductinitAndUpdate() {
              setTimeout(function() {
                  bestproductupdateSlideInfo();  // Delay to ensure Slick has completed setup
              }, 100);  // Adjust delay as needed
          }
      
          // Call bestproductinitAndUpdate function on slider events
          $bestproductcarousel.on('init reInit afterChange', bestproductinitAndUpdate);
      
          // Custom navigation buttons
          $('.best-product-nav .slick-prev').click(function() {
              $bestproductcarousel.slick('slickPrev');
              bestproductupdateSlideInfo();
          });
      
          $('.best-product-nav .slick-next').click(function() {
              $bestproductcarousel.slick('slickNext');
              bestproductupdateSlideInfo();
          });
      
          // Initial call to set up the active dot and slide info
          bestproductinitAndUpdate();
          // Best Product End         
          // New Product Start
          var $newproductcarousel = $('#tab-new .productGrid');
          
          // Initialize Slick slider
          $newproductcarousel.slick({
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
      
          // Function to update the slide info and active dot
          function newproductupdateSlideInfo() {
              var totalSlides = $newproductcarousel.find('.slick-dots li button').length;
              var activeSlideIndex = $newproductcarousel.find('.slick-dots li.slick-active').index() + 1;
              $('.new-product-nav .current-slide').text(activeSlideIndex);
              $('.new-product-nav .total-slides').text(totalSlides);
              // Update slick-active-dot
              var $activeDot = $('#tab-new .slick-active-dot');
              if ($activeDot.length === 0) {
                  $activeDot = $('<li class="slick-active-dot"></li>');
                  $('#tab-new .slick-dots').append($activeDot);
              }
      
              var dotWidth = 100 / totalSlides;
              $activeDot.css('width', dotWidth + '%');
      
              var dotLeft = dotWidth * (activeSlideIndex - 1);
              $activeDot.css('left', dotLeft + '%');
              if (totalSlides  < 2) {
                $('#tab-new').addClass("hide-pagination");
              } else{
                  $('#tab-new').removeClass("hide-pagination");
              }     
              if (activeSlideIndex  == 1) {
                  $('#tab-new .slick-prev').addClass('disabled-btn');
                  $('#tab-new .slick-next').removeClass('disabled-btn');
              } else if (activeSlideIndex  == totalSlides) {
                  $('#tab-new .slick-next').addClass('disabled-btn');
                  $('#tab-new .slick-prev').removeClass('disabled-btn');
              }    
              if (activeSlideIndex  > 1) {
                  $('#tab-new .slick-prev').removeClass('disabled-btn');
              } 
              if (activeSlideIndex  < totalSlides) {
                  $('#tab-new .slick-next').removeClass('disabled-btn');
              }                                 
          }
      
          // Ensure the function runs on initial load and after each slide change
          function newproductinitAndUpdate() {
              setTimeout(function() {
                  newproductupdateSlideInfo();  // Delay to ensure Slick has completed setup
              }, 100);  // Adjust delay as needed
          }
      
          // Call newproductinitAndUpdate function on slider events
          $newproductcarousel.on('init reInit afterChange', newproductinitAndUpdate);
      
          // Custom navigation buttons
          $('.new-product-nav .slick-prev').click(function() {
              $newproductcarousel.slick('slickPrev');
              newproductupdateSlideInfo();
          });
      
          $('.new-product-nav .slick-next').click(function() {
              $newproductcarousel.slick('slickNext');
              newproductupdateSlideInfo();
          });
      
          // Initial call to set up the active dot and slide info
          newproductinitAndUpdate();
          // New Product End 
          
          // Custom Bike Carousel Start
          var $customBike = $('.custom-bike-grid');

            if ($customBike.length) {
              $customBike.slick({
                  arrows: true,
                  dots: true,
                  infinite: false,
                  speed: 300,
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  responsive: [
                      {
                          breakpoint: 1024,
                          settings: {
                              slidesToShow: 2,
                              slidesToScroll: 1
                          }
                      },
                      {
                          breakpoint: 768,
                          settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1
                          }
                      }
                  ]
              });

              function customBikeUpdateSlideInfo() {
                  var totalSlides = $customBike.find('.slick-dots li button').length;
                  var activeSlideIndex = $customBike.find('.slick-dots li.slick-active').index() + 1;

                  $('.custom-bike-nav .current-slide').text(activeSlideIndex);
                  $('.custom-bike-nav .total-slides').text(totalSlides);

                  var $activeDot = $('.custom-bike-grid .slick-active-dot');
                  if ($activeDot.length === 0) {
                      $activeDot = $('<li class="slick-active-dot"></li>');
                      $('.custom-bike-grid .slick-dots').append($activeDot);
                  }

                  var dotWidth = totalSlides ? (100 / totalSlides) : 0;
                  $activeDot.css('width', dotWidth + '%');

                  var dotLeft = dotWidth * (activeSlideIndex - 1);
                  $activeDot.css('left', dotLeft + '%');

                  if (totalSlides < 2) {
                      $('.custom-bike-carousel').addClass('hide-pagination');
                  } else {
                      $('.custom-bike-carousel').removeClass('hide-pagination');
                  }

                  if (activeSlideIndex === 1) {
                      $('.custom-bike-nav .slick-prev').addClass('disabled-btn');
                      $('.custom-bike-nav .slick-next').removeClass('disabled-btn');
                  } else if (activeSlideIndex === totalSlides) {
                      $('.custom-bike-nav .slick-next').addClass('disabled-btn');
                      $('.custom-bike-nav .slick-prev').removeClass('disabled-btn');
                  }

                  if (activeSlideIndex > 1) {
                      $('.custom-bike-nav .slick-prev').removeClass('disabled-btn');
                  }
                  if (activeSlideIndex < totalSlides) {
                      $('.custom-bike-nav .slick-next').removeClass('disabled-btn');
                  }
              }

              function customBikeInitAndUpdate() {
                  setTimeout(function() {
                      customBikeUpdateSlideInfo();
                  }, 100);
              }

              $customBike.on('init reInit afterChange', customBikeInitAndUpdate);

              $('.custom-bike-nav .slick-prev').click(function() {
                  $customBike.slick('slickPrev');
                  customBikeUpdateSlideInfo();
              });

              $('.custom-bike-nav .slick-next').click(function() {
                  $customBike.slick('slickNext');
                  customBikeUpdateSlideInfo();
              });

              customBikeInitAndUpdate();
            }
            // Custom Bike Carousel End

    });
});
