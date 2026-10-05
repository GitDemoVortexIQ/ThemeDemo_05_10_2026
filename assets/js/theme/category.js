import { hooks } from '@bigcommerce/stencil-utils';
import CatalogPage from './catalog';
import compareProducts from './global/compare-products';
import FacetedSearch from './common/faceted-search';
import rootsLoaded from './roots/category';
import { createTranslationDictionary } from '../theme/common/utils/translations-utils';

export default class Category extends CatalogPage {
    constructor(context) {
        super(context);
        this.validationDictionary = createTranslationDictionary(context);
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

    /* Range Slider JS*/ 
    controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
        const [from, to] = this.getParsed(fromInput, toInput);
        this.fillSlider(fromInput, toInput, '#C6C6C6', '#0f0f0f', controlSlider);
        if (from > to) {
            fromSlider.value = to;
            fromInput.value = to;
        } else {
            fromSlider.value = from;
        }
    }
        
    controlToInput(toSlider, fromInput, toInput, controlSlider) {
        const [from, to] = this.getParsed(fromInput, toInput);
        this.fillSlider(fromInput, toInput, '#C6C6C6', '#0f0f0f', controlSlider);
        this.setToggleAccessible(toInput);
        if (from <= to) {
            toSlider.value = to;
            toInput.value = to;
        } else {
            toInput.value = from;
        }
    }
    
    controlFromSlider(fromSlider, toSlider, fromInput) {
      const [from, to] = this.getParsed(fromSlider, toSlider);
      this.fillSlider(fromSlider, toSlider, '#C6C6C6', '#0f0f0f', toSlider);
      if (from > to) {
        fromSlider.value = to;
        fromInput.value = to;
      } else {
        fromInput.value = from;
      }
    }
    
    controlToSlider(fromSlider, toSlider, toInput) {
      const [from, to] = this.getParsed(fromSlider, toSlider);
      this.fillSlider(fromSlider, toSlider, '#C6C6C6', '#0f0f0f', toSlider);
      this.setToggleAccessible(toSlider);
      if (from <= to) {
        toSlider.value = to;
        toInput.value = to;
      } else {
        toInput.value = from;
        toSlider.value = from;
      }
    }
    
    getParsed(currentFrom, currentTo) {
      const from = parseInt(currentFrom.value, 10);
      const to = parseInt(currentTo.value, 10);
      return [from, to];
    }
    
    fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
        const rangeDistance = to.max-to.min;
        const fromPosition = from.value - to.min;
        const toPosition = to.value - to.min;
        controlSlider.style.background = `linear-gradient(
          to right,
          ${sliderColor} 0%,
          ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
          ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
          ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
          ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
          ${sliderColor} 100%)`;
    }

    setToggleAccessible(currentTarget) {
        let toSlider = document.querySelector('#price-range-max');
        if (Number(currentTarget.value) <= 0 ) {
          toSlider.style.zIndex = 2;
        } else {
          toSlider.style.zIndex = 0;
        }
    }

    initializePriceRangeSliders() {
        const fromSlider = document.querySelector('#price-range-min');
        const toSlider = document.querySelector('#price-range-max');
        const fromInput = document.querySelector('#fromInput');
        const toInput = document.querySelector('#toInput');
    
        if (!fromSlider || !toSlider || !fromInput || !toInput) return; // Exit if elements are missing
    
        // Initial styling of the slider
        this.fillSlider(fromSlider, toSlider, '#C6C6C6', '#0f0f0f', toSlider);
        this.setToggleAccessible(toSlider);
    
        // Attach event listeners
        fromSlider.oninput = () => this.controlFromSlider(fromSlider, toSlider, fromInput);
        toSlider.oninput = () => this.controlToSlider(fromSlider, toSlider, toInput);
        fromInput.oninput = () => this.controlFromInput(fromSlider, fromInput, toInput, toSlider);
        toInput.oninput = () => this.controlToInput(toSlider, fromInput, toInput, toSlider);
    }
    /* End Range Slider JS*/ 



    onReady() {
        this.arrangeFocusOnSortBy();

        $('[data-button-type="add-cart"]').on('click', (e) => this.setLiveRegionAttributes($(e.currentTarget).next(), 'status', 'polite'));

        this.makeShopByPriceFilterAccessible();

        compareProducts(this.context);

        if ($('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            hooks.on('sortBy-submitted', this.onSortBySubmit);
        }
        rootsLoaded();

        $('a.reset-btn').on('click', () => this.setLiveRegionsAttributes($('span.reset-message'), 'status', 'polite'));

        this.ariaNotifyNoProducts();

        this.initSidebarEvents();

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
            },
            showMore: 'category/show-more',
        };

        this.facetedSearch = new FacetedSearch(requestOptions, (content) => {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);

            $('body').triggerHandler('compareReset');

            $('html, body').animate({
                //scrollTop: 0,
            }, 100);

            this.initializePriceRangeSliders();
            this.initSidebarEvents();
        }, {
            validationErrorMessages: {
                onMinPriceError,
                onMaxPriceError,
                minPriceNotEntered,
                maxPriceNotEntered,
                onInvalidPrice,
            },
        });

        this.initializePriceRangeSliders();
        this.initSidebarEvents();
    }

    /**
     * Initializes the sidebar open/close events for filters.
     */
    initSidebarEvents() {
 
        const toggleButton = document.getElementById('toggle-filters');
        const closeButton = document.getElementById('close-sidebar');
        const applyFiltersButton = document.getElementById('apply-filters');
        const sidebar = document.querySelector('.page-sidebar');

        if (toggleButton && sidebar) {
            toggleButton.addEventListener('click', () => {
                if (window.innerWidth < 800) {
                    sidebar.classList.add('active');
                }
            });
        }

        const closeSidebar = () => {
            if (window.innerWidth < 800 && sidebar) {
                sidebar.classList.remove('active');
            }
        };

        if (closeButton) {
            closeButton.addEventListener('click', closeSidebar);
        }

        if (applyFiltersButton) {
            applyFiltersButton.addEventListener('click', closeSidebar);
        }
    }
}
