import { hooks } from '@bigcommerce/stencil-utils';
import CatalogPage from './catalog';
import compareProducts from './global/compare-products';
import FacetedSearch from './common/faceted-search';
import { createTranslationDictionary } from '../theme/common/utils/translations-utils';
import devAdvancedSwatchImage from './cavio/dev-advanced-swatch-image';

export default class Category extends CatalogPage {
    constructor(context) {
        super(context);
        this.validationDictionary = createTranslationDictionary(context);
        this.updateSidebarClass = this.updateSidebarClass.bind(this); // Bind method to maintain context
    }

    setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
        $element.attr({
            role: roleType,
            'aria-live': ariaLiveStatus,
        });
    }

    makeShopByPriceFilterAccessible() {
        if (!$('[data-shop-by-price]').length) return;

        if ($('.navList-action').hasClass('is-active')) {
            $('a.navList-action.is-active').focus();
        }

        $('a.navList-action').on('click', () => this.setLiveRegionAttributes($('span.price-filter-message'), 'status', 'assertive'));
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

    onReady() {
        this.arrangeFocusOnSortBy();
        this.filtershowhide();
        this.filtershowhideoutside();
        $('[data-button-type="add-cart"]').on('click', (e) => this.setLiveRegionAttributes($(e.currentTarget).next(), 'status', 'polite'));
        this.makeShopByPriceFilterAccessible();
        compareProducts(this.context);
        this.initFacetedSearch();
        // devAdvancedSwatchImage();

        // Call the method to update the sidebar class
        this.updateSidebarClass();

        // Add event listener for window resize
        window.addEventListener('resize', this.updateSidebarClass);

        if (!$('#facetedSearch').length) {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            hooks.on('sortBy-submitted', this.onSortBySubmit);

            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.has('search_query')) {
                $('.reset-filters').show();
            }

            $('input[name="price_min"]').attr('value', urlParams.get('price_min'));
            $('input[name="price_max"]').attr('value', urlParams.get('price_max'));
        }

        $('a.reset-btn').on('click', () => this.setLiveRegionsAttributes($('span.reset-message'), 'status', 'polite'));
        this.ariaNotifyNoProducts();
    }

    ariaNotifyNoProducts() {
        const $noProductsMessage = $('[data-no-products-notification]');
        if ($noProductsMessage.length) {
            $noProductsMessage.focus();
        }
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
        const productsPerPage = this.context.categoryProductsPerPage;
        
        const requestOptions = {
            config: {
                category: {
                    shop_by_price: true,
                    products: {
                        limit: productsPerPage,
                    },
                },
            },
            template: {
                productListing: 'category/product-listing',
                sidebar: 'category/sidebar',
                topbar: 'cavio/top-filter-options',
            },
            showMore: 'category/show-more',
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
