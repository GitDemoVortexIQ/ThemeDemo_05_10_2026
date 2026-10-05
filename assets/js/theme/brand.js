import { hooks } from '@bigcommerce/stencil-utils';
import CatalogPage from './catalog';
import compareProducts from './global/compare-products';
import FacetedSearch from './common/faceted-search';
import { createTranslationDictionary } from '../theme/common/utils/translations-utils';

export default class Brand extends CatalogPage {
    constructor(context) {
        super(context);
        this.validationDictionary = createTranslationDictionary(context);
        this.updateSidebarClass = this.updateSidebarClass.bind(this); // Bind method to maintain context
    }

    onReady() {
        compareProducts(this.context);
        this.filtershowhide();
        this.paginationcount();
        this.filtershowhideoutside();
        // Call the method to update the sidebar class
        this.updateSidebarClass();

        // Add event listener for window resize
        window.addEventListener('resize', this.updateSidebarClass);
        if ($('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            hooks.on('sortBy-submitted', this.onSortBySubmit);
        }
    }    
    filtershowhide() {
        $('.filter-visibility-button').click(() => {
            $('.filter-visibility-button').toggleClass('active');
            $(".page.product--listing").toggleClass("filter--active");
            $(".flyout-filters").parents("body").toggleClass("mask-filter");
        });
    }
    filtershowhideoutside() {
        $(document).on('click', (event) => {
            if (
                !$(event.target).closest('.page-sidebar, .filter-visibility-button').length &&
                $(".page.product--listing").hasClass("filter--active") &&
                !$('body').hasClass("popup-active") &&
                $('.product--listing').hasClass("flyout-filters") 
            ) {
                // Execute the script
                $('.filter-visibility-button').toggleClass('active');
                $(".page.product--listing").toggleClass("filter--active");
                $(".flyout-filters").parents("body").toggleClass("mask-filter");
            }
        });
    }    
    updateSidebarClass() {
        const sidebar = $('.scrolling-sidebar-desktop');
        const sidebarmobile = $('.scrolling-sidebar-desktop.filter--active');
        if (sidebar.length) {
            if (window.innerWidth < 1024) {
                sidebar.removeClass('scrolling-sidebar').addClass('flyout-filters');
                if (sidebarmobile.length) {
                    sidebar.parents('body').addClass('mask-filter');
                }
            } else {
                sidebar.removeClass('flyout-filters').addClass('scrolling-sidebar');
                sidebar.parents('body').removeClass('mask-filter');
            }
        }
    }    
    paginationcount(){
        var countnumber = $(".pagination-number .pagination-link").attr("data-last-pagination");
        var countnumberreduce = countnumber - 1;
        var countnumberreducee = $(".product-count").attr("data-count");
        var finalnumber = countnumberreduce * countnumberreducee;        
          
        var paginationlasturl = $(".pagination-item.pagination-number .is-srOnly").text();
        $.ajax({
            url: paginationlasturl,
            success: function (result) {
                var countpagination = $(result).find(".product-count").attr("data-count");
                var finaltotalcount = parseInt(finalnumber) + parseInt(countpagination);
                if (!isNaN(finaltotalcount)) {
                    $('.product-count').text(finaltotalcount + " Products");
                } 
            }
        });
                        
        
            
    }
    initFacetedSearch() {
        const {
            price_min_evaluation: onMinPriceError,
            price_max_evaluation: onMaxPriceError,
            price_min_not_entered: minPriceNotEntered,
            price_max_not_entered: maxPriceNotEntered,
            price_invalid_value: onInvalidPrice,
        } = this.validationDictionary;
        const $productListingContainer = $('#product-listing-container');
        const $facetedSearchContainer = $('#faceted-search-container');
        const $topbarContainer = $('#top-filter-container');
        const productsPerPage = this.context.brandProductsPerPage;
        const requestOptions = {
            template: {
                productListing: 'brand/product-listing',
                sidebar: 'brand/sidebar',
                topbar: 'cavio/top-brand-filter-options',
            },
            config: {
                shop_by_brand: true,
                brand: {
                    products: {
                        limit: productsPerPage,
                    },
                },
            },
            showMore: 'brand/show-more',
        };
        this.facetedSearch = new FacetedSearch(requestOptions, (content) => {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);
            $topbarContainer.html(content.topbar);
            $('body').triggerHandler('compareReset');

            $('html, body').animate({
                scrollTop: 0,
            }, 100);
            $('.filter-visibility-button').click(() => {
                $('.filter-visibility-button').toggleClass('active');
                $(".page.product--listing").toggleClass("filter--active");
                $(".flyout-filters").parents("body").toggleClass("mask-filter");
            });
            var countnumber = $(".pagination-number .pagination-link").attr("data-last-pagination");
            var countnumberreduce = countnumber - 1;
            var countnumberreducee = $(".product-count").attr("data-count");
            var finalnumber = countnumberreduce * countnumberreducee;        
              
            var paginationlasturl = $(".pagination-item.pagination-number .is-srOnly").text();
            $.ajax({
                url: paginationlasturl,
                success: function (result) {
                    var countpagination = $(result).find(".product-count").attr("data-count");
                    var finaltotalcount = parseInt(finalnumber) + parseInt(countpagination);
                    if (!isNaN(finaltotalcount)) {
                        $('.product-count').text(finaltotalcount + " Products");
                    }
                }
            });
            if ($('.page.product--listing').hasClass('filter--active')) {
                $('.filter-visibility-button').addClass("active");
            }   
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
        }, {
            validationErrorMessages: {
                onMinPriceError,
                onMaxPriceError,
                minPriceNotEntered,
                maxPriceNotEntered,
                onInvalidPrice,
            },
        });
    }
}
