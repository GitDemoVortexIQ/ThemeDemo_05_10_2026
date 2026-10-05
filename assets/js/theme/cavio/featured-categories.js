import $ from 'jquery';

// Function to fetch and populate category data
export default function(context) {
    const token = context.bearerToken;
    const categoryIds = context.featuredCategoryIds.split(',');
    const shoplabel = context.overtext;
    const missingImage = context.missingImage;
    // Fetch data for all categories in parallel
    Promise.all(categoryIds.map(id => fetchCategoryData(id, token)))
        .then(results => {
            let hasContent = false;

            results.forEach(({ category, categoryId }) => {
                const $categoryElement = $(`.featured-category[data-category-id="${categoryId}"]`);
                $categoryElement.empty();

                if (category) {
                    hasContent = true;

                    // Add category link
                    if (category.path) {
                        $categoryElement.append(`<a class="category-link" href="${category.path}"></a>`);
                    }

                    const $linkElement = $categoryElement.find('.category-link');

                    // Add category image
                    const imageUrl = category.defaultImage ? category.defaultImage.url : missingImage;
                    $linkElement.append(`<div class="thumb-img-category"><img src="${imageUrl}" alt="${category.name}" title="${category.name}" class="category-image lazyload" data-sizes="auto"><div class="overlay-category-banner"><span class="read-more">${shoplabel}</span></div></div>`);
                    // Add category name
                    if (category.name) {
                        $linkElement.append(`<h4 class="category-title">${category.name}</h4> <span class="shop-button">${shoplabel}</span>`);
                    }
                } else {
                    $categoryElement.remove();
                }
            });

            if (hasContent) {
                applySlider();
            } else {
                $('.featured-category-list').hide();
                $('.no-data-message').show();
            }
        })
        .catch(error => {
            console.error('Error fetching category data:', error);
            $('.featured-category-list').hide();
            $('.no-data-message').show();
        });
}

// Function to fetch category data using GraphQL
function fetchCategoryData(categoryId, token) {
    return fetch('/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            query: `query getCategory {
                site {
                    category(entityId: ${categoryId}) {
                        entityId
                        name
                        path
                        defaultImage {
                            url(width: 296)
                        }
                    }
                }
            }`
        })
    })
    .then(res => res.json())
    .then(res => ({
        category: res.data.site.category,
        categoryId
    }));
}

// Function to apply the Slick slider
function applySlider() {
    const $featuredcatslide = $('.featured-category-list');

    $featuredcatslide.slick({
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
    function updateSlideInfo() {
        const totalSlides = $featuredcatslide.find('.slick-dots li button').length;
        const activeSlideIndex = $featuredcatslide.find('.slick-dots li.slick-active').index() + 1;

        $('.featuredcat-nav .current-slide').text(activeSlideIndex);
        $('.featuredcat-nav .total-slides').text(totalSlides);      
        // Update slick-active-dot
        let $activeDot = $('.featured-category-list .slick-active-dot');
        if ($activeDot.length === 0) {
            $activeDot = $('<li class="slick-active-dot"></li>');
            $('.featured-category-list .slick-dots').append($activeDot);
        }

        const dotWidth = 100 / totalSlides;
        $activeDot.css({ width: `${dotWidth}%`, left: `${dotWidth * (activeSlideIndex - 1)}%` });
        if (totalSlides  < 2) {
        } else{
            $('.featured-categories').removeClass("hide-pagination");
        }  
        if (activeSlideIndex  == 1) {
            $('.featuredcat-nav .slick-prev').addClass('disabled-btn');
            $('.featuredcat-nav .slick-next').removeClass('disabled-btn');
        } else if (activeSlideIndex  == totalSlides) {
            $('.featuredcat-nav .slick-next').addClass('disabled-btn');
            $('.featuredcat-nav .slick-prev').removeClass('disabled-btn');
        }
        if (activeSlideIndex  > 1) {
            $('.featuredcat-nav .slick-prev').removeClass('disabled-btn');
        } 
        if (activeSlideIndex  < totalSlides) {
            $('.featuredcat-nav .slick-next').removeClass('disabled-btn');
        }
    }

    // Ensure the function runs on initial load and after each slide change
    function initAndUpdate() {
        setTimeout(updateSlideInfo, 100);
    }

    $featuredcatslide.on('init reInit afterChange', initAndUpdate);

    $('.featuredcat-nav .slick-prev').click(() => {
        $featuredcatslide.slick('slickPrev');
        updateSlideInfo();
    });

    $('.featuredcat-nav .slick-next').click(() => {
        $featuredcatslide.slick('slickNext');
        updateSlideInfo();
    });
    initAndUpdate();
    $('.featured-categories').addClass("visible-section");
}
