"use strict";
(self["webpackChunklonestar_cavio"] = self["webpackChunklonestar_cavio"] || []).push([["assets_js_theme_category_js"],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _cavio_dev_advanced_swatch_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cavio/dev-advanced-swatch-image */ "./assets/js/theme/cavio/dev-advanced-swatch-image.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }






var Category = /*#__PURE__*/function (_CatalogPage) {
  function Category(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = (0,_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(context);
    _this.updateSidebarClass = _this.updateSidebarClass.bind(_this); // Bind method to maintain context
    return _this;
  }
  _inheritsLoose(Category, _CatalogPage);
  var _proto = Category.prototype;
  _proto.setLiveRegionAttributes = function setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
    $element.attr({
      role: roleType,
      'aria-live': ariaLiveStatus
    });
  };
  _proto.makeShopByPriceFilterAccessible = function makeShopByPriceFilterAccessible() {
    var _this2 = this;
    if (!$('[data-shop-by-price]').length) return;
    if ($('.navList-action').hasClass('is-active')) {
      $('a.navList-action.is-active').focus();
    }
    $('a.navList-action').on('click', function () {
      return _this2.setLiveRegionAttributes($('span.price-filter-message'), 'status', 'assertive');
    });
  };
  _proto.filtershowhide = function filtershowhide() {
    $('.filter-visibility-button').click(function () {
      $('.filter-visibility-button').toggleClass('active');
      $(".page.product--listing").toggleClass("filter--active");
      $(".flyout-filters").parents("body").toggleClass("mask-filter");
    });
  };
  _proto.filtershowhideoutside = function filtershowhideoutside() {
    $(document).on('click', function (event) {
      if (!$(event.target).closest('.page-sidebar, .filter-visibility-button').length && $(".page.product--listing").hasClass("filter--active") && !$('body').hasClass("popup-active") && $('.product--listing').hasClass("flyout-filters")) {
        // Execute the script
        $('.filter-visibility-button').toggleClass('active');
        $(".page.product--listing").toggleClass("filter--active");
        $(".flyout-filters").parents("body").toggleClass("mask-filter");
      }
    });
  };
  _proto.updateSidebarClass = function updateSidebarClass() {
    var sidebar = $('.scrolling-sidebar-desktop');
    var sidebarmobile = $('.scrolling-sidebar-desktop.filter--active');
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
  };
  _proto.onReady = function onReady() {
    var _this3 = this;
    this.arrangeFocusOnSortBy();
    this.filtershowhide();
    this.filtershowhideoutside();
    $('[data-button-type="add-cart"]').on('click', function (e) {
      return _this3.setLiveRegionAttributes($(e.currentTarget).next(), 'status', 'polite');
    });
    this.makeShopByPriceFilterAccessible();
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
    this.initFacetedSearch();
    // devAdvancedSwatchImage();

    // Call the method to update the sidebar class
    this.updateSidebarClass();

    // Add event listener for window resize
    window.addEventListener('resize', this.updateSidebarClass);
    if (!$('#facetedSearch').length) {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
      var urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('search_query')) {
        $('.reset-filters').show();
      }
      $('input[name="price_min"]').attr('value', urlParams.get('price_min'));
      $('input[name="price_max"]').attr('value', urlParams.get('price_max'));
    }
    $('a.reset-btn').on('click', function () {
      return _this3.setLiveRegionsAttributes($('span.reset-message'), 'status', 'polite');
    });
    this.ariaNotifyNoProducts();
  };
  _proto.ariaNotifyNoProducts = function ariaNotifyNoProducts() {
    var $noProductsMessage = $('[data-no-products-notification]');
    if ($noProductsMessage.length) {
      $noProductsMessage.focus();
    }
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this$validationDicti = this.validationDictionary,
      onMinPriceError = _this$validationDicti.price_min_evaluation,
      onMaxPriceError = _this$validationDicti.price_max_evaluation,
      minPriceNotEntered = _this$validationDicti.price_min_not_entered,
      maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
      onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $topbarContainer = $('#top-filter-container');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar',
        topbar: 'cavio/top-filter-options'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $topbarContainer.html(content.topbar);
      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        scrollTop: 0
      }, 100);
      $('.filter-visibility-button').click(function () {
        $('.filter-visibility-button').toggleClass('active');
        $(".page.product--listing").toggleClass("filter--active");
        $(".flyout-filters").parents("body").toggleClass("mask-filter");
      });
      if ($('.page.product--listing').hasClass('filter--active')) {
        $('.filter-visibility-button').addClass("active");
      }
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTranslationDictionary: () => (/* binding */ createTranslationDictionary)
/* harmony export */ });
var TRANSLATIONS = 'translations';
var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};
var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);
    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};

/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */
var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
    validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
    validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRlZ29yeV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2Y7QUFDb0I7QUFDSjtBQUNtQztBQUNoQjtBQUFBLElBRWxETSxRQUFRLDBCQUFBQyxZQUFBO0VBQ3pCLFNBQUFELFNBQVlFLE9BQU8sRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFDakJBLEtBQUEsR0FBQUYsWUFBQSxDQUFBRyxJQUFBLE9BQU1GLE9BQU8sQ0FBQztJQUNkQyxLQUFBLENBQUtFLG9CQUFvQixHQUFHUCxtR0FBMkIsQ0FBQ0ksT0FBTyxDQUFDO0lBQ2hFQyxLQUFBLENBQUtHLGtCQUFrQixHQUFHSCxLQUFBLENBQUtHLGtCQUFrQixDQUFDQyxJQUFJLENBQUFKLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFBQSxPQUFBQSxLQUFBO0VBQ2xFO0VBQUNLLGNBQUEsQ0FBQVIsUUFBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQVEsTUFBQSxHQUFBVCxRQUFBLENBQUFVLFNBQUE7RUFBQUQsTUFBQSxDQUVERSx1QkFBdUIsR0FBdkIsU0FBQUEsdUJBQXVCQSxDQUFDQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsY0FBYyxFQUFFO0lBQ3hERixRQUFRLENBQUNHLElBQUksQ0FBQztNQUNWQyxJQUFJLEVBQUVILFFBQVE7TUFDZCxXQUFXLEVBQUVDO0lBQ2pCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQUwsTUFBQSxDQUVEUSwrQkFBK0IsR0FBL0IsU0FBQUEsK0JBQStCQSxDQUFBLEVBQUc7SUFBQSxJQUFBQyxNQUFBO0lBQzlCLElBQUksQ0FBQ0MsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNDLE1BQU0sRUFBRTtJQUV2QyxJQUFJRCxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0UsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO01BQzVDRixDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQ0csS0FBSyxD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RUFBRTtNQUM3QyxPQUFPQSxVQUFVO0lBQ3JCO0VBQ0o7QUFDSixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1oRywyQkFBMkIsR0FBRyxTQUE5QkEsMkJBQTJCQSxDQUFJSSxPQUFPLEVBQUs7RUFDcEQsSUFBUXFHLHdCQUF3QixHQUF3RXJHLE9BQU8sQ0FBdkdxRyx3QkFBd0I7SUFBRUMsZ0NBQWdDLEdBQXNDdEcsT0FBTyxDQUE3RXNHLGdDQUFnQztJQUFFQywrQkFBK0IsR0FBS3ZHLE9BQU8sQ0FBM0N1RywrQkFBK0I7RUFDbkcsSUFBTUMsZ0JBQWdCLEdBQUdULHNCQUFzQixDQUFDTSx3QkFBd0IsRUFBRUMsZ0NBQWdDLEVBQUVDLCtCQUErQixDQUFDO0VBQzVJLElBQU1FLGFBQWEsR0FBR1osTUFBTSxDQUFDYSxNQUFNLENBQUNGLGdCQUFnQixDQUFDZCxZQUFZLENBQUMsQ0FBQztFQUNuRSxJQUFNaUIsZUFBZSxHQUFHZCxNQUFNLENBQUNDLElBQUksQ0FBQ1UsZ0JBQWdCLENBQUNkLFlBQVksQ0FBQyxDQUFDLENBQUNrQixHQUFHLENBQUMsVUFBQUMsR0FBRztJQUFBLE9BQUlBLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLENBQUMsQ0FBQztFQUFBLEVBQUM7RUFFcEcsT0FBT0osZUFBZSxDQUFDSyxNQUFNLENBQUMsVUFBQ0MsR0FBRyxFQUFFSixHQUFHLEVBQUViLENBQUMsRUFBSztJQUMzQ2lCLEdBQUcsQ0FBQ0osR0FBRyxDQUFDLEdBQUdKLGFBQWEsQ0FBQ1QsQ0FBQyxDQUFDO0lBQzNCLE9BQU9pQixHQUFHO0VBQ2QsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ1YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xvbmVzdGFyLWNhdmlvLy4vYXNzZXRzL2pzL3RoZW1lL2NhdGVnb3J5LmpzIiwid2VicGFjazovL2xvbmVzdGFyLWNhdmlvLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuLi90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcbmltcG9ydCBkZXZBZHZhbmNlZFN3YXRjaEltYWdlIGZyb20gJy4vY2F2aW8vZGV2LWFkdmFuY2VkLXN3YXRjaC1pbWFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5IGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XG4gICAgICAgIHRoaXMudXBkYXRlU2lkZWJhckNsYXNzID0gdGhpcy51cGRhdGVTaWRlYmFyQ2xhc3MuYmluZCh0aGlzKTsgLy8gQmluZCBtZXRob2QgdG8gbWFpbnRhaW4gY29udGV4dFxuICAgIH1cblxuICAgIHNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCRlbGVtZW50LCByb2xlVHlwZSwgYXJpYUxpdmVTdGF0dXMpIHtcbiAgICAgICAgJGVsZW1lbnQuYXR0cih7XG4gICAgICAgICAgICByb2xlOiByb2xlVHlwZSxcbiAgICAgICAgICAgICdhcmlhLWxpdmUnOiBhcmlhTGl2ZVN0YXR1cyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbWFrZVNob3BCeVByaWNlRmlsdGVyQWNjZXNzaWJsZSgpIHtcbiAgICAgICAgaWYgKCEkKCdbZGF0YS1zaG9wLWJ5LXByaWNlXScpLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIGlmICgkKCcubmF2TGlzdC1hY3Rpb24nKS5oYXNDbGFzcygnaXMtYWN0aXZlJykpIHtcbiAgICAgICAgICAgICQoJ2EubmF2TGlzdC1hY3Rpb24uaXMtYWN0aXZlJykuZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ2EubmF2TGlzdC1hY3Rpb24nKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLnNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCQoJ3NwYW4ucHJpY2UtZmlsdGVyLW1lc3NhZ2UnKSwgJ3N0YXR1cycsICdhc3NlcnRpdmUnKSk7XG4gICAgfVxuXG4gICAgZmlsdGVyc2hvd2hpZGUoKSB7XG4gICAgICAgICQoJy5maWx0ZXItdmlzaWJpbGl0eS1idXR0b24nKS5jbGljaygoKSA9PiB7XG4gICAgICAgICAgICAkKCcuZmlsdGVyLXZpc2liaWxpdHktYnV0dG9uJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJChcIi5wYWdlLnByb2R1Y3QtLWxpc3RpbmdcIikudG9nZ2xlQ2xhc3MoXCJmaWx0ZXItLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgICQoXCIuZmx5b3V0LWZpbHRlcnNcIikucGFyZW50cyhcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJtYXNrLWZpbHRlclwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZpbHRlcnNob3doaWRlb3V0c2lkZSgpIHtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgISQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcucGFnZS1zaWRlYmFyLCAuZmlsdGVyLXZpc2liaWxpdHktYnV0dG9uJykubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgJChcIi5wYWdlLnByb2R1Y3QtLWxpc3RpbmdcIikuaGFzQ2xhc3MoXCJmaWx0ZXItLWFjdGl2ZVwiKSAmJlxuICAgICAgICAgICAgICAgICEkKCdib2R5JykuaGFzQ2xhc3MoXCJwb3B1cC1hY3RpdmVcIikgJiZcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdC0tbGlzdGluZycpLmhhc0NsYXNzKFwiZmx5b3V0LWZpbHRlcnNcIikgXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvLyBFeGVjdXRlIHRoZSBzY3JpcHRcbiAgICAgICAgICAgICAgICAkKCcuZmlsdGVyLXZpc2liaWxpdHktYnV0dG9uJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoXCIucGFnZS5wcm9kdWN0LS1saXN0aW5nXCIpLnRvZ2dsZUNsYXNzKFwiZmlsdGVyLS1hY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgJChcIi5mbHlvdXQtZmlsdGVyc1wiKS5wYXJlbnRzKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcIm1hc2stZmlsdGVyXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdXBkYXRlU2lkZWJhckNsYXNzKCkge1xuICAgICAgICBjb25zdCBzaWRlYmFyID0gJCgnLnNjcm9sbGluZy1zaWRlYmFyLWRlc2t0b3AnKTtcbiAgICAgICAgY29uc3Qgc2lkZWJhcm1vYmlsZSA9ICQoJy5zY3JvbGxpbmctc2lkZWJhci1kZXNrdG9wLmZpbHRlci0tYWN0aXZlJyk7XG4gICAgICAgIGlmIChzaWRlYmFyLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTAyNCkge1xuICAgICAgICAgICAgICAgIHNpZGViYXIucmVtb3ZlQ2xhc3MoJ3Njcm9sbGluZy1zaWRlYmFyJykuYWRkQ2xhc3MoJ2ZseW91dC1maWx0ZXJzJyk7XG4gICAgICAgICAgICAgICAgaWYgKHNpZGViYXJtb2JpbGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXIucGFyZW50cygnYm9keScpLmFkZENsYXNzKCdtYXNrLWZpbHRlcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5yZW1vdmVDbGFzcygnZmx5b3V0LWZpbHRlcnMnKS5hZGRDbGFzcygnc2Nyb2xsaW5nLXNpZGViYXInKTtcbiAgICAgICAgICAgICAgICBzaWRlYmFyLnBhcmVudHMoJ2JvZHknKS5yZW1vdmVDbGFzcygnbWFzay1maWx0ZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIHRoaXMuYXJyYW5nZUZvY3VzT25Tb3J0QnkoKTtcbiAgICAgICAgdGhpcy5maWx0ZXJzaG93aGlkZSgpO1xuICAgICAgICB0aGlzLmZpbHRlcnNob3doaWRlb3V0c2lkZSgpO1xuICAgICAgICAkKCdbZGF0YS1idXR0b24tdHlwZT1cImFkZC1jYXJ0XCJdJykub24oJ2NsaWNrJywgKGUpID0+IHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJChlLmN1cnJlbnRUYXJnZXQpLm5leHQoKSwgJ3N0YXR1cycsICdwb2xpdGUnKSk7XG4gICAgICAgIHRoaXMubWFrZVNob3BCeVByaWNlRmlsdGVyQWNjZXNzaWJsZSgpO1xuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0KTtcbiAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuICAgICAgICAvLyBkZXZBZHZhbmNlZFN3YXRjaEltYWdlKCk7XG5cbiAgICAgICAgLy8gQ2FsbCB0aGUgbWV0aG9kIHRvIHVwZGF0ZSB0aGUgc2lkZWJhciBjbGFzc1xuICAgICAgICB0aGlzLnVwZGF0ZVNpZGViYXJDbGFzcygpO1xuXG4gICAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciBmb3Igd2luZG93IHJlc2l6ZVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVTaWRlYmFyQ2xhc3MpO1xuXG4gICAgICAgIGlmICghJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuXG4gICAgICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICAgICAgaWYgKHVybFBhcmFtcy5oYXMoJ3NlYXJjaF9xdWVyeScpKSB7XG4gICAgICAgICAgICAgICAgJCgnLnJlc2V0LWZpbHRlcnMnKS5zaG93KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJ2lucHV0W25hbWU9XCJwcmljZV9taW5cIl0nKS5hdHRyKCd2YWx1ZScsIHVybFBhcmFtcy5nZXQoJ3ByaWNlX21pbicpKTtcbiAgICAgICAgICAgICQoJ2lucHV0W25hbWU9XCJwcmljZV9tYXhcIl0nKS5hdHRyKCd2YWx1ZScsIHVybFBhcmFtcy5nZXQoJ3ByaWNlX21heCcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ2EucmVzZXQtYnRuJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5zZXRMaXZlUmVnaW9uc0F0dHJpYnV0ZXMoJCgnc3Bhbi5yZXNldC1tZXNzYWdlJyksICdzdGF0dXMnLCAncG9saXRlJykpO1xuICAgICAgICB0aGlzLmFyaWFOb3RpZnlOb1Byb2R1Y3RzKCk7XG4gICAgfVxuXG4gICAgYXJpYU5vdGlmeU5vUHJvZHVjdHMoKSB7XG4gICAgICAgIGNvbnN0ICRub1Byb2R1Y3RzTWVzc2FnZSA9ICQoJ1tkYXRhLW5vLXByb2R1Y3RzLW5vdGlmaWNhdGlvbl0nKTtcbiAgICAgICAgaWYgKCRub1Byb2R1Y3RzTWVzc2FnZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICRub1Byb2R1Y3RzTWVzc2FnZS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdEZhY2V0ZWRTZWFyY2goKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHByaWNlX21pbl9ldmFsdWF0aW9uOiBvbk1pblByaWNlRXJyb3IsXG4gICAgICAgICAgICBwcmljZV9tYXhfZXZhbHVhdGlvbjogb25NYXhQcmljZUVycm9yLFxuICAgICAgICAgICAgcHJpY2VfbWluX25vdF9lbnRlcmVkOiBtaW5QcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICBwcmljZV9tYXhfbm90X2VudGVyZWQ6IG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgIHByaWNlX2ludmFsaWRfdmFsdWU6IG9uSW52YWxpZFByaWNlLFxuICAgICAgICB9ID0gdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkdG9wYmFyQ29udGFpbmVyID0gJCgnI3RvcC1maWx0ZXItY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5jYXRlZ29yeVByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvcF9ieV9wcmljZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcicsXG4gICAgICAgICAgICAgICAgdG9wYmFyOiAnY2F2aW8vdG9wLWZpbHRlci1vcHRpb25zJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93TW9yZTogJ2NhdGVnb3J5L3Nob3ctbW9yZScsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5mYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgICAgICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcbiAgICAgICAgICAgICR0b3BiYXJDb250YWluZXIuaHRtbChjb250ZW50LnRvcGJhcik7XG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xuXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgfSwgMTAwKTsgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAkKCcuZmlsdGVyLXZpc2liaWxpdHktYnV0dG9uJykuY2xpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy5maWx0ZXItdmlzaWJpbGl0eS1idXR0b24nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJChcIi5wYWdlLnByb2R1Y3QtLWxpc3RpbmdcIikudG9nZ2xlQ2xhc3MoXCJmaWx0ZXItLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAkKFwiLmZseW91dC1maWx0ZXJzXCIpLnBhcmVudHMoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwibWFzay1maWx0ZXJcIik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCQoJy5wYWdlLnByb2R1Y3QtLWxpc3RpbmcnKS5oYXNDbGFzcygnZmlsdGVyLS1hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICQoJy5maWx0ZXItdmlzaWJpbGl0eS1idXR0b24nKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImNvbnN0IFRSQU5TTEFUSU9OUyA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSA9IChkaWN0aW9uYXJ5KSA9PiAhIU9iamVjdC5rZXlzKGRpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubGVuZ3RoO1xuY29uc3QgY2hvb3NlQWN0aXZlRGljdGlvbmFyeSA9ICguLi5kaWN0aW9uYXJ5SnNvbkxpc3QpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpY3Rpb25hcnlKc29uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0gSlNPTi5wYXJzZShkaWN0aW9uYXJ5SnNvbkxpc3RbaV0pO1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eShkaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpY3Rpb25hcnk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIGRlZmluZXMgVHJhbnNsYXRpb24gRGljdGlvbmFyeSB0byB1c2VcbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byAzIHZhbGlkYXRpb24gSlNPTnMgZnJvbSBlbi5qc29uOlxuICogdmFsaWRhdGlvbl9tZXNzYWdlcywgdmFsaWRhdGlvbl9mYWxsYmFja19tZXNzYWdlcyBhbmQgZGVmYXVsdF9tZXNzYWdlc1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSA9IChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgeyB2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IGFjdGl2ZURpY3Rpb25hcnkgPSBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5KHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04pO1xuICAgIGNvbnN0IGxvY2FsaXphdGlvbnMgPSBPYmplY3QudmFsdWVzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSk7XG4gICAgY29uc3QgdHJhbnNsYXRpb25LZXlzID0gT2JqZWN0LmtleXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5tYXAoa2V5ID0+IGtleS5zcGxpdCgnLicpLnBvcCgpKTtcblxuICAgIHJldHVybiB0cmFuc2xhdGlvbktleXMucmVkdWNlKChhY2MsIGtleSwgaSkgPT4ge1xuICAgICAgICBhY2Nba2V5XSA9IGxvY2FsaXphdGlvbnNbaV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufTtcbiJdLCJuYW1lcyI6WyJob29rcyIsIkNhdGFsb2dQYWdlIiwiY29tcGFyZVByb2R1Y3RzIiwiRmFjZXRlZFNlYXJjaCIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsImRldkFkdmFuY2VkU3dhdGNoSW1hZ2UiLCJDYXRlZ29yeSIsIl9DYXRhbG9nUGFnZSIsImNvbnRleHQiLCJfdGhpcyIsImNhbGwiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsInVwZGF0ZVNpZGViYXJDbGFzcyIsImJpbmQiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsInNldExpdmVSZWdpb25BdHRyaWJ1dGVzIiwiJGVsZW1lbnQiLCJyb2xlVHlwZSIsImFyaWFMaXZlU3RhdHVzIiwiYXR0ciIsInJvbGUiLCJtYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlIiwiX3RoaXMyIiwiJCIsImxlbmd0aCIsImhhc0NsYXNzIiwiZm9jdXMiLCJvbiIsImZpbHRlcnNob3doaWRlIiwiY2xpY2siLCJ0b2dnbGVDbGFzcyIsInBhcmVudHMiLCJmaWx0ZXJzaG93aGlkZW91dHNpZGUiLCJkb2N1bWVudCIsImV2ZW50IiwidGFyZ2V0IiwiY2xvc2VzdCIsInNpZGViYXIiLCJzaWRlYmFybW9iaWxlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJvblJlYWR5IiwiX3RoaXMzIiwiYXJyYW5nZUZvY3VzT25Tb3J0QnkiLCJlIiwiY3VycmVudFRhcmdldCIsIm5leHQiLCJpbml0RmFjZXRlZFNlYXJjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvblNvcnRCeVN1Ym1pdCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwic2VhcmNoIiwiaGFzIiwic2hvdyIsImdldCIsInNldExpdmVSZWdpb25zQXR0cmlidXRlcyIsImFyaWFOb3RpZnlOb1Byb2R1Y3RzIiwiJG5vUHJvZHVjdHNNZXNzYWdlIiwiX3RoaXMkdmFsaWRhdGlvbkRpY3RpIiwib25NaW5QcmljZUVycm9yIiwicHJpY2VfbWluX2V2YWx1YXRpb24iLCJvbk1heFByaWNlRXJyb3IiLCJwcmljZV9tYXhfZXZhbHVhdGlvbiIsIm1pblByaWNlTm90RW50ZXJlZCIsInByaWNlX21pbl9ub3RfZW50ZXJlZCIsIm1heFByaWNlTm90RW50ZXJlZCIsInByaWNlX21heF9ub3RfZW50ZXJlZCIsIm9uSW52YWxpZFByaWNlIiwicHJpY2VfaW52YWxpZF92YWx1ZSIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwiJHRvcGJhckNvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJjb25maWciLCJjYXRlZ29yeSIsInNob3BfYnlfcHJpY2UiLCJwcm9kdWN0cyIsImxpbWl0IiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsInRvcGJhciIsInNob3dNb3JlIiwiZmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJodG1sIiwidHJpZ2dlckhhbmRsZXIiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwidmFsaWRhdGlvbkVycm9yTWVzc2FnZXMiLCJkZWZhdWx0IiwiVFJBTlNMQVRJT05TIiwiaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSIsImRpY3Rpb25hcnkiLCJPYmplY3QiLCJrZXlzIiwiY2hvb3NlQWN0aXZlRGljdGlvbmFyeSIsImkiLCJhcmd1bWVudHMiLCJKU09OIiwicGFyc2UiLCJ1bmRlZmluZWQiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04iLCJhY3RpdmVEaWN0aW9uYXJ5IiwibG9jYWxpemF0aW9ucyIsInZhbHVlcyIsInRyYW5zbGF0aW9uS2V5cyIsIm1hcCIsImtleSIsInNwbGl0IiwicG9wIiwicmVkdWNlIiwiYWNjIl0sInNvdXJjZVJvb3QiOiIifQ==
