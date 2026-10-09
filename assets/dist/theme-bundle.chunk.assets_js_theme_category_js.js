"use strict";
(self["webpackChunkRoots"] = self["webpackChunkRoots"] || []).push([["assets_js_theme_category_js"],{

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
/* harmony import */ var _roots_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./roots/category */ "./assets/js/theme/roots/category.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }






var Category = /*#__PURE__*/function (_CatalogPage) {
  function Category(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = (0,_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_5__.createTranslationDictionary)(context);
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
  }

  /* Range Slider JS*/;
  _proto.controlFromInput = function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    var _this$getParsed = this.getParsed(fromInput, toInput),
      from = _this$getParsed[0],
      to = _this$getParsed[1];
    this.fillSlider(fromInput, toInput, '#C6C6C6', '#0f0f0f', controlSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromSlider.value = from;
    }
  };
  _proto.controlToInput = function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    var _this$getParsed2 = this.getParsed(fromInput, toInput),
      from = _this$getParsed2[0],
      to = _this$getParsed2[1];
    this.fillSlider(fromInput, toInput, '#C6C6C6', '#0f0f0f', controlSlider);
    this.setToggleAccessible(toInput);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
    }
  };
  _proto.controlFromSlider = function controlFromSlider(fromSlider, toSlider, fromInput) {
    var _this$getParsed3 = this.getParsed(fromSlider, toSlider),
      from = _this$getParsed3[0],
      to = _this$getParsed3[1];
    this.fillSlider(fromSlider, toSlider, '#C6C6C6', '#0f0f0f', toSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromInput.value = from;
    }
  };
  _proto.controlToSlider = function controlToSlider(fromSlider, toSlider, toInput) {
    var _this$getParsed4 = this.getParsed(fromSlider, toSlider),
      from = _this$getParsed4[0],
      to = _this$getParsed4[1];
    this.fillSlider(fromSlider, toSlider, '#C6C6C6', '#0f0f0f', toSlider);
    this.setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
      toSlider.value = from;
    }
  };
  _proto.getParsed = function getParsed(currentFrom, currentTo) {
    var from = parseInt(currentFrom.value, 10);
    var to = parseInt(currentTo.value, 10);
    return [from, to];
  };
  _proto.fillSlider = function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    var rangeDistance = to.max - to.min;
    var fromPosition = from.value - to.min;
    var toPosition = to.value - to.min;
    controlSlider.style.background = "linear-gradient(\n          to right,\n          " + sliderColor + " 0%,\n          " + sliderColor + " " + fromPosition / rangeDistance * 100 + "%,\n          " + rangeColor + " " + fromPosition / rangeDistance * 100 + "%,\n          " + rangeColor + " " + toPosition / rangeDistance * 100 + "%, \n          " + sliderColor + " " + toPosition / rangeDistance * 100 + "%, \n          " + sliderColor + " 100%)";
  };
  _proto.setToggleAccessible = function setToggleAccessible(currentTarget) {
    var toSlider = document.querySelector('#price-range-max');
    if (Number(currentTarget.value) <= 0) {
      toSlider.style.zIndex = 2;
    } else {
      toSlider.style.zIndex = 0;
    }
  };
  _proto.initializePriceRangeSliders = function initializePriceRangeSliders() {
    var _this3 = this;
    var fromSlider = document.querySelector('#price-range-min');
    var toSlider = document.querySelector('#price-range-max');
    var fromInput = document.querySelector('#fromInput');
    var toInput = document.querySelector('#toInput');
    if (!fromSlider || !toSlider || !fromInput || !toInput) return; // Exit if elements are missing

    // Initial styling of the slider
    this.fillSlider(fromSlider, toSlider, '#C6C6C6', '#0f0f0f', toSlider);
    this.setToggleAccessible(toSlider);

    // Attach event listeners
    fromSlider.oninput = function () {
      return _this3.controlFromSlider(fromSlider, toSlider, fromInput);
    };
    toSlider.oninput = function () {
      return _this3.controlToSlider(fromSlider, toSlider, toInput);
    };
    fromInput.oninput = function () {
      return _this3.controlFromInput(fromSlider, fromInput, toInput, toSlider);
    };
    toInput.oninput = function () {
      return _this3.controlToInput(toSlider, fromInput, toInput, toSlider);
    };
  }
  /* End Range Slider JS*/;
  _proto.onReady = function onReady() {
    var _this4 = this;
    this.arrangeFocusOnSortBy();
    $('[data-button-type="add-cart"]').on('click', function (e) {
      return _this4.setLiveRegionAttributes($(e.currentTarget).next(), 'status', 'polite');
    });
    this.makeShopByPriceFilterAccessible();
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }
    (0,_roots_category__WEBPACK_IMPORTED_MODULE_4__["default"])();
    $('a.reset-btn').on('click', function () {
      return _this4.setLiveRegionsAttributes($('span.reset-message'), 'status', 'polite');
    });
    this.ariaNotifyNoProducts();
    this.initSidebarEvents();
  };
  _proto.ariaNotifyNoProducts = function ariaNotifyNoProducts() {
    var $noProductsMessage = $('[data-no-products-notification]');
    if ($noProductsMessage.length) {
      $noProductsMessage.focus();
    }
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this5 = this;
    var _this$validationDicti = this.validationDictionary,
      onMinPriceError = _this$validationDicti.price_min_evaluation,
      onMaxPriceError = _this$validationDicti.price_max_evaluation,
      minPriceNotEntered = _this$validationDicti.price_min_not_entered,
      maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
      onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
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
        sidebar: 'category/sidebar'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        //scrollTop: 0,
      }, 100);
      _this5.initializePriceRangeSliders();
      _this5.initSidebarEvents();
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
    this.initializePriceRangeSliders();
    this.initSidebarEvents();
  }

  /**
   * Initializes the sidebar open/close events for filters.
   */;
  _proto.initSidebarEvents = function initSidebarEvents() {
    var toggleButton = document.getElementById('toggle-filters');
    var closeButton = document.getElementById('close-sidebar');
    var applyFiltersButton = document.getElementById('apply-filters');
    var sidebar = document.querySelector('.page-sidebar');
    if (toggleButton && sidebar) {
      toggleButton.addEventListener('click', function () {
        if (window.innerWidth < 800) {
          sidebar.classList.add('active');
        }
      });
    }
    var closeSidebar = function closeSidebar() {
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

/***/ }),

/***/ "./assets/js/theme/roots/category.js":
/*!*******************************************!*\
  !*** ./assets/js/theme/roots/category.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loaded)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

function loaded() {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#facetedSearch').length <= 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.toggleSidebarBlock').on('click', function toggleLink(e) {
      e.preventDefault();
      var toggleEleId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('href').replace('#', '');
      var toggleEle = document.getElementById(toggleEleId);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('is-open');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(toggleEle).toggleClass('is-open');
    });
  }

  // subcategory display
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.page-content-subcategories .image-wrap:not(.image-placeholder)').length > 0) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.page-content-subcategories ul').addClass('subcategory-grid');
  }
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRlZ29yeV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2Y7QUFDb0I7QUFDSjtBQUNUO0FBQzRDO0FBQUEsSUFFbEVNLFFBQVEsMEJBQUFDLFlBQUE7RUFDekIsU0FBQUQsU0FBWUUsT0FBTyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUNqQkEsS0FBQSxHQUFBRixZQUFBLENBQUFHLElBQUEsT0FBTUYsT0FBTyxDQUFDO0lBQ2RDLEtBQUEsQ0FBS0Usb0JBQW9CLEdBQUdOLG1HQUEyQixDQUFDRyxPQUFPLENBQUM7SUFBQyxPQUFBQyxLQUFBO0VBQ3JFO0VBQUNHLGNBQUEsQ0FBQU4sUUFBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQU0sTUFBQSxHQUFBUCxRQUFBLENBQUFRLFNBQUE7RUFBQUQsTUFBQSxDQUVERSx1QkFBdUIsR0FBdkIsU0FBQUEsdUJBQXVCQSxDQUFDQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsY0FBYyxFQUFFO0lBQ3hERixRQUFRLENBQUNHLElBQUksQ0FBQztNQUNWQyxJQUFJLEVBQUVILFFBQVE7TUFDZCxXQUFXLEVBQUVDO0lBQ2pCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQUwsTUFBQSxDQUVEUSwrQkFBK0IsR0FBL0IsU0FBQUEsK0JBQStCQSxDQUFBLEVBQUc7SUFBQSxJQUFBQyxNQUFBO0lBQzlCLElBQUksQ0FBQ0MsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNDLE1BQU0sRUFBRTtJQUV2QyxJQUFJRCxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0UsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO01BQzVDRixDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQ0csS0FBSyxDQUFDLENBQUM7SUFDM0M7SUFFQUgsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUNJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7TUFBQSxPQUFNTCxNQUFJLENB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QUFDQyxXQUFXLENBQUMsU0FBUyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQztFQUNOOztFQUVBO0VBQ0EsSUFBSWxJLDZDQUFDLENBQUMsaUVBQWlFLENBQUMsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBRTtJQUNqRkQsNkNBQUMsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDbUksUUFBUSxDQUFDLGtCQUFrQixDQUFDO0VBQ3BFO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Sb290cy8uL2Fzc2V0cy9qcy90aGVtZS9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly9Sb290cy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzLmpzIiwid2VicGFjazovL1Jvb3RzLy4vYXNzZXRzL2pzL3RoZW1lL3Jvb3RzL2NhdGVnb3J5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSAnLi9jb21tb24vZmFjZXRlZC1zZWFyY2gnO1xuaW1wb3J0IHJvb3RzTG9hZGVkIGZyb20gJy4vcm9vdHMvY2F0ZWdvcnknO1xuaW1wb3J0IHsgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IH0gZnJvbSAnLi4vdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5IGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XG4gICAgfVxuXG4gICAgc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJGVsZW1lbnQsIHJvbGVUeXBlLCBhcmlhTGl2ZVN0YXR1cykge1xuICAgICAgICAkZWxlbWVudC5hdHRyKHtcbiAgICAgICAgICAgIHJvbGU6IHJvbGVUeXBlLFxuICAgICAgICAgICAgJ2FyaWEtbGl2ZSc6IGFyaWFMaXZlU3RhdHVzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBtYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlKCkge1xuICAgICAgICBpZiAoISQoJ1tkYXRhLXNob3AtYnktcHJpY2VdJykubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgaWYgKCQoJy5uYXZMaXN0LWFjdGlvbicpLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSkge1xuICAgICAgICAgICAgJCgnYS5uYXZMaXN0LWFjdGlvbi5pcy1hY3RpdmUnKS5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnYS5uYXZMaXN0LWFjdGlvbicpLm9uKCdjbGljaycsICgpID0+IHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJCgnc3Bhbi5wcmljZS1maWx0ZXItbWVzc2FnZScpLCAnc3RhdHVzJywgJ2Fzc2VydGl2ZScpKTtcbiAgICB9XG5cbiAgICAvKiBSYW5nZSBTbGlkZXIgSlMqLyBcbiAgICBjb250cm9sRnJvbUlucHV0KGZyb21TbGlkZXIsIGZyb21JbnB1dCwgdG9JbnB1dCwgY29udHJvbFNsaWRlcikge1xuICAgICAgICBjb25zdCBbZnJvbSwgdG9dID0gdGhpcy5nZXRQYXJzZWQoZnJvbUlucHV0LCB0b0lucHV0KTtcbiAgICAgICAgdGhpcy5maWxsU2xpZGVyKGZyb21JbnB1dCwgdG9JbnB1dCwgJyNDNkM2QzYnLCAnIzBmMGYwZicsIGNvbnRyb2xTbGlkZXIpO1xuICAgICAgICBpZiAoZnJvbSA+IHRvKSB7XG4gICAgICAgICAgICBmcm9tU2xpZGVyLnZhbHVlID0gdG87XG4gICAgICAgICAgICBmcm9tSW5wdXQudmFsdWUgPSB0bztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZyb21TbGlkZXIudmFsdWUgPSBmcm9tO1xuICAgICAgICB9XG4gICAgfVxuICAgICAgICBcbiAgICBjb250cm9sVG9JbnB1dCh0b1NsaWRlciwgZnJvbUlucHV0LCB0b0lucHV0LCBjb250cm9sU2xpZGVyKSB7XG4gICAgICAgIGNvbnN0IFtmcm9tLCB0b10gPSB0aGlzLmdldFBhcnNlZChmcm9tSW5wdXQsIHRvSW5wdXQpO1xuICAgICAgICB0aGlzLmZpbGxTbGlkZXIoZnJvbUlucHV0LCB0b0lucHV0LCAnI0M2QzZDNicsICcjMGYwZjBmJywgY29udHJvbFNsaWRlcik7XG4gICAgICAgIHRoaXMuc2V0VG9nZ2xlQWNjZXNzaWJsZSh0b0lucHV0KTtcbiAgICAgICAgaWYgKGZyb20gPD0gdG8pIHtcbiAgICAgICAgICAgIHRvU2xpZGVyLnZhbHVlID0gdG87XG4gICAgICAgICAgICB0b0lucHV0LnZhbHVlID0gdG87XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b0lucHV0LnZhbHVlID0gZnJvbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb250cm9sRnJvbVNsaWRlcihmcm9tU2xpZGVyLCB0b1NsaWRlciwgZnJvbUlucHV0KSB7XG4gICAgICBjb25zdCBbZnJvbSwgdG9dID0gdGhpcy5nZXRQYXJzZWQoZnJvbVNsaWRlciwgdG9TbGlkZXIpO1xuICAgICAgdGhpcy5maWxsU2xpZGVyKGZyb21TbGlkZXIsIHRvU2xpZGVyLCAnI0M2QzZDNicsICcjMGYwZjBmJywgdG9TbGlkZXIpO1xuICAgICAgaWYgKGZyb20gPiB0bykge1xuICAgICAgICBmcm9tU2xpZGVyLnZhbHVlID0gdG87XG4gICAgICAgIGZyb21JbnB1dC52YWx1ZSA9IHRvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnJvbUlucHV0LnZhbHVlID0gZnJvbTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29udHJvbFRvU2xpZGVyKGZyb21TbGlkZXIsIHRvU2xpZGVyLCB0b0lucHV0KSB7XG4gICAgICBjb25zdCBbZnJvbSwgdG9dID0gdGhpcy5nZXRQYXJzZWQoZnJvbVNsaWRlciwgdG9TbGlkZXIpO1xuICAgICAgdGhpcy5maWxsU2xpZGVyKGZyb21TbGlkZXIsIHRvU2xpZGVyLCAnI0M2QzZDNicsICcjMGYwZjBmJywgdG9TbGlkZXIpO1xuICAgICAgdGhpcy5zZXRUb2dnbGVBY2Nlc3NpYmxlKHRvU2xpZGVyKTtcbiAgICAgIGlmIChmcm9tIDw9IHRvKSB7XG4gICAgICAgIHRvU2xpZGVyLnZhbHVlID0gdG87XG4gICAgICAgIHRvSW5wdXQudmFsdWUgPSB0bztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvSW5wdXQudmFsdWUgPSBmcm9tO1xuICAgICAgICB0b1NsaWRlci52YWx1ZSA9IGZyb207XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGdldFBhcnNlZChjdXJyZW50RnJvbSwgY3VycmVudFRvKSB7XG4gICAgICBjb25zdCBmcm9tID0gcGFyc2VJbnQoY3VycmVudEZyb20udmFsdWUsIDEwKTtcbiAgICAgIGNvbnN0IHRvID0gcGFyc2VJbnQoY3VycmVudFRvLnZhbHVlLCAxMCk7XG4gICAgICByZXR1cm4gW2Zyb20sIHRvXTtcbiAgICB9XG4gICAgXG4gICAgZmlsbFNsaWRlcihmcm9tLCB0bywgc2xpZGVyQ29sb3IsIHJhbmdlQ29sb3IsIGNvbnRyb2xTbGlkZXIpIHtcbiAgICAgICAgY29uc3QgcmFuZ2VEaXN0YW5jZSA9IHRvLm1heC10by5taW47XG4gICAgICAgIGNvbnN0IGZyb21Qb3NpdGlvbiA9IGZyb20udmFsdWUgLSB0by5taW47XG4gICAgICAgIGNvbnN0IHRvUG9zaXRpb24gPSB0by52YWx1ZSAtIHRvLm1pbjtcbiAgICAgICAgY29udHJvbFNsaWRlci5zdHlsZS5iYWNrZ3JvdW5kID0gYGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICB0byByaWdodCxcbiAgICAgICAgICAke3NsaWRlckNvbG9yfSAwJSxcbiAgICAgICAgICAke3NsaWRlckNvbG9yfSAkeyhmcm9tUG9zaXRpb24pLyhyYW5nZURpc3RhbmNlKSoxMDB9JSxcbiAgICAgICAgICAke3JhbmdlQ29sb3J9ICR7KChmcm9tUG9zaXRpb24pLyhyYW5nZURpc3RhbmNlKSkqMTAwfSUsXG4gICAgICAgICAgJHtyYW5nZUNvbG9yfSAkeyh0b1Bvc2l0aW9uKS8ocmFuZ2VEaXN0YW5jZSkqMTAwfSUsIFxuICAgICAgICAgICR7c2xpZGVyQ29sb3J9ICR7KHRvUG9zaXRpb24pLyhyYW5nZURpc3RhbmNlKSoxMDB9JSwgXG4gICAgICAgICAgJHtzbGlkZXJDb2xvcn0gMTAwJSlgO1xuICAgIH1cblxuICAgIHNldFRvZ2dsZUFjY2Vzc2libGUoY3VycmVudFRhcmdldCkge1xuICAgICAgICBsZXQgdG9TbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpY2UtcmFuZ2UtbWF4Jyk7XG4gICAgICAgIGlmIChOdW1iZXIoY3VycmVudFRhcmdldC52YWx1ZSkgPD0gMCApIHtcbiAgICAgICAgICB0b1NsaWRlci5zdHlsZS56SW5kZXggPSAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvU2xpZGVyLnN0eWxlLnpJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0aWFsaXplUHJpY2VSYW5nZVNsaWRlcnMoKSB7XG4gICAgICAgIGNvbnN0IGZyb21TbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpY2UtcmFuZ2UtbWluJyk7XG4gICAgICAgIGNvbnN0IHRvU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaWNlLXJhbmdlLW1heCcpO1xuICAgICAgICBjb25zdCBmcm9tSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZnJvbUlucHV0Jyk7XG4gICAgICAgIGNvbnN0IHRvSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9JbnB1dCcpO1xuICAgIFxuICAgICAgICBpZiAoIWZyb21TbGlkZXIgfHwgIXRvU2xpZGVyIHx8ICFmcm9tSW5wdXQgfHwgIXRvSW5wdXQpIHJldHVybjsgLy8gRXhpdCBpZiBlbGVtZW50cyBhcmUgbWlzc2luZ1xuICAgIFxuICAgICAgICAvLyBJbml0aWFsIHN0eWxpbmcgb2YgdGhlIHNsaWRlclxuICAgICAgICB0aGlzLmZpbGxTbGlkZXIoZnJvbVNsaWRlciwgdG9TbGlkZXIsICcjQzZDNkM2JywgJyMwZjBmMGYnLCB0b1NsaWRlcik7XG4gICAgICAgIHRoaXMuc2V0VG9nZ2xlQWNjZXNzaWJsZSh0b1NsaWRlcik7XG4gICAgXG4gICAgICAgIC8vIEF0dGFjaCBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgZnJvbVNsaWRlci5vbmlucHV0ID0gKCkgPT4gdGhpcy5jb250cm9sRnJvbVNsaWRlcihmcm9tU2xpZGVyLCB0b1NsaWRlciwgZnJvbUlucHV0KTtcbiAgICAgICAgdG9TbGlkZXIub25pbnB1dCA9ICgpID0+IHRoaXMuY29udHJvbFRvU2xpZGVyKGZyb21TbGlkZXIsIHRvU2xpZGVyLCB0b0lucHV0KTtcbiAgICAgICAgZnJvbUlucHV0Lm9uaW5wdXQgPSAoKSA9PiB0aGlzLmNvbnRyb2xGcm9tSW5wdXQoZnJvbVNsaWRlciwgZnJvbUlucHV0LCB0b0lucHV0LCB0b1NsaWRlcik7XG4gICAgICAgIHRvSW5wdXQub25pbnB1dCA9ICgpID0+IHRoaXMuY29udHJvbFRvSW5wdXQodG9TbGlkZXIsIGZyb21JbnB1dCwgdG9JbnB1dCwgdG9TbGlkZXIpO1xuICAgIH1cbiAgICAvKiBFbmQgUmFuZ2UgU2xpZGVyIEpTKi8gXG5cblxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgdGhpcy5hcnJhbmdlRm9jdXNPblNvcnRCeSgpO1xuXG4gICAgICAgICQoJ1tkYXRhLWJ1dHRvbi10eXBlPVwiYWRkLWNhcnRcIl0nKS5vbignY2xpY2snLCAoZSkgPT4gdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkKGUuY3VycmVudFRhcmdldCkubmV4dCgpLCAnc3RhdHVzJywgJ3BvbGl0ZScpKTtcblxuICAgICAgICB0aGlzLm1ha2VTaG9wQnlQcmljZUZpbHRlckFjY2Vzc2libGUoKTtcblxuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0KTtcblxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuICAgICAgICByb290c0xvYWRlZCgpO1xuXG4gICAgICAgICQoJ2EucmVzZXQtYnRuJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5zZXRMaXZlUmVnaW9uc0F0dHJpYnV0ZXMoJCgnc3Bhbi5yZXNldC1tZXNzYWdlJyksICdzdGF0dXMnLCAncG9saXRlJykpO1xuXG4gICAgICAgIHRoaXMuYXJpYU5vdGlmeU5vUHJvZHVjdHMoKTtcblxuICAgICAgICB0aGlzLmluaXRTaWRlYmFyRXZlbnRzKCk7XG5cbiAgICB9XG5cbiAgICBhcmlhTm90aWZ5Tm9Qcm9kdWN0cygpIHtcbiAgICAgICAgY29uc3QgJG5vUHJvZHVjdHNNZXNzYWdlID0gJCgnW2RhdGEtbm8tcHJvZHVjdHMtbm90aWZpY2F0aW9uXScpO1xuICAgICAgICBpZiAoJG5vUHJvZHVjdHNNZXNzYWdlLmxlbmd0aCkge1xuICAgICAgICAgICAgJG5vUHJvZHVjdHNNZXNzYWdlLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcHJpY2VfbWluX2V2YWx1YXRpb246IG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgIHByaWNlX21heF9ldmFsdWF0aW9uOiBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICBwcmljZV9taW5fbm90X2VudGVyZWQ6IG1pblByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgIHByaWNlX21heF9ub3RfZW50ZXJlZDogbWF4UHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgcHJpY2VfaW52YWxpZF92YWx1ZTogb25JbnZhbGlkUHJpY2UsXG4gICAgICAgIH0gPSB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5O1xuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LmNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2NhdGVnb3J5L3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ2NhdGVnb3J5L3NpZGViYXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dNb3JlOiAnY2F0ZWdvcnkvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xuXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgLy9zY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVQcmljZVJhbmdlU2xpZGVycygpO1xuICAgICAgICAgICAgdGhpcy5pbml0U2lkZWJhckV2ZW50cygpO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVByaWNlUmFuZ2VTbGlkZXJzKCk7XG4gICAgICAgIHRoaXMuaW5pdFNpZGViYXJFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgc2lkZWJhciBvcGVuL2Nsb3NlIGV2ZW50cyBmb3IgZmlsdGVycy5cbiAgICAgKi9cbiAgICBpbml0U2lkZWJhckV2ZW50cygpIHtcbiBcbiAgICAgICAgY29uc3QgdG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS1maWx0ZXJzJyk7XG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLXNpZGViYXInKTtcbiAgICAgICAgY29uc3QgYXBwbHlGaWx0ZXJzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGx5LWZpbHRlcnMnKTtcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLXNpZGViYXInKTtcblxuICAgICAgICBpZiAodG9nZ2xlQnV0dG9uICYmIHNpZGViYXIpIHtcbiAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA4MDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNsb3NlU2lkZWJhciA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDgwMCAmJiBzaWRlYmFyKSB7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoY2xvc2VCdXR0b24pIHtcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VTaWRlYmFyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhcHBseUZpbHRlcnNCdXR0b24pIHtcbiAgICAgICAgICAgIGFwcGx5RmlsdGVyc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlU2lkZWJhcik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJjb25zdCBUUkFOU0xBVElPTlMgPSAndHJhbnNsYXRpb25zJztcbmNvbnN0IGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkgPSAoZGljdGlvbmFyeSkgPT4gISFPYmplY3Qua2V5cyhkaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLmxlbmd0aDtcbmNvbnN0IGNob29zZUFjdGl2ZURpY3Rpb25hcnkgPSAoLi4uZGljdGlvbmFyeUpzb25MaXN0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWN0aW9uYXJ5SnNvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGljdGlvbmFyeSA9IEpTT04ucGFyc2UoZGljdGlvbmFyeUpzb25MaXN0W2ldKTtcbiAgICAgICAgaWYgKGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkoZGljdGlvbmFyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkaWN0aW9uYXJ5O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBkZWZpbmVzIFRyYW5zbGF0aW9uIERpY3Rpb25hcnkgdG8gdXNlXG4gKiBAcGFyYW0gY29udGV4dCBwcm92aWRlcyBhY2Nlc3MgdG8gMyB2YWxpZGF0aW9uIEpTT05zIGZyb20gZW4uanNvbjpcbiAqIHZhbGlkYXRpb25fbWVzc2FnZXMsIHZhbGlkYXRpb25fZmFsbGJhY2tfbWVzc2FnZXMgYW5kIGRlZmF1bHRfbWVzc2FnZXNcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgPSAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiB9ID0gY29udGV4dDtcbiAgICBjb25zdCBhY3RpdmVEaWN0aW9uYXJ5ID0gY2hvb3NlQWN0aXZlRGljdGlvbmFyeSh2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OKTtcbiAgICBjb25zdCBsb2NhbGl6YXRpb25zID0gT2JqZWN0LnZhbHVlcyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubWFwKGtleSA9PiBrZXkuc3BsaXQoJy4nKS5wb3AoKSk7XG5cbiAgICByZXR1cm4gdHJhbnNsYXRpb25LZXlzLnJlZHVjZSgoYWNjLCBrZXksIGkpID0+IHtcbiAgICAgICAgYWNjW2tleV0gPSBsb2NhbGl6YXRpb25zW2ldO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbn07XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkZWQoKSB7XG4gICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgJCgnLnRvZ2dsZVNpZGViYXJCbG9jaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIHRvZ2dsZUxpbmsoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgdG9nZ2xlRWxlSWQgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKS5yZXBsYWNlKCcjJywgJycpO1xuICAgICAgICAgICAgY29uc3QgdG9nZ2xlRWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9nZ2xlRWxlSWQpO1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgJCh0b2dnbGVFbGUpLnRvZ2dsZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHN1YmNhdGVnb3J5IGRpc3BsYXlcbiAgICBpZiAoJCgnLnBhZ2UtY29udGVudC1zdWJjYXRlZ29yaWVzIC5pbWFnZS13cmFwOm5vdCguaW1hZ2UtcGxhY2Vob2xkZXIpJykubGVuZ3RoID4gMCkge1xuICAgICAgICAkKCcucGFnZS1jb250ZW50LXN1YmNhdGVnb3JpZXMgdWwnKS5hZGRDbGFzcygnc3ViY2F0ZWdvcnktZ3JpZCcpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJob29rcyIsIkNhdGFsb2dQYWdlIiwiY29tcGFyZVByb2R1Y3RzIiwiRmFjZXRlZFNlYXJjaCIsInJvb3RzTG9hZGVkIiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwiQ2F0ZWdvcnkiLCJfQ2F0YWxvZ1BhZ2UiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsInNldExpdmVSZWdpb25BdHRyaWJ1dGVzIiwiJGVsZW1lbnQiLCJyb2xlVHlwZSIsImFyaWFMaXZlU3RhdHVzIiwiYXR0ciIsInJvbGUiLCJtYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlIiwiX3RoaXMyIiwiJCIsImxlbmd0aCIsImhhc0NsYXNzIiwiZm9jdXMiLCJvbiIsImNvbnRyb2xGcm9tSW5wdXQiLCJmcm9tU2xpZGVyIiwiZnJvbUlucHV0IiwidG9JbnB1dCIsImNvbnRyb2xTbGlkZXIiLCJfdGhpcyRnZXRQYXJzZWQiLCJnZXRQYXJzZWQiLCJmcm9tIiwidG8iLCJmaWxsU2xpZGVyIiwidmFsdWUiLCJjb250cm9sVG9JbnB1dCIsInRvU2xpZGVyIiwiX3RoaXMkZ2V0UGFyc2VkMiIsInNldFRvZ2dsZUFjY2Vzc2libGUiLCJjb250cm9sRnJvbVNsaWRlciIsIl90aGlzJGdldFBhcnNlZDMiLCJjb250cm9sVG9TbGlkZXIiLCJfdGhpcyRnZXRQYXJzZWQ0IiwiY3VycmVudEZyb20iLCJjdXJyZW50VG8iLCJwYXJzZUludCIsInNsaWRlckNvbG9yIiwicmFuZ2VDb2xvciIsInJhbmdlRGlzdGFuY2UiLCJtYXgiLCJtaW4iLCJmcm9tUG9zaXRpb24iLCJ0b1Bvc2l0aW9uIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiY3VycmVudFRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIk51bWJlciIsInpJbmRleCIsImluaXRpYWxpemVQcmljZVJhbmdlU2xpZGVycyIsIl90aGlzMyIsIm9uaW5wdXQiLCJvblJlYWR5IiwiX3RoaXM0IiwiYXJyYW5nZUZvY3VzT25Tb3J0QnkiLCJlIiwibmV4dCIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwic2V0TGl2ZVJlZ2lvbnNBdHRyaWJ1dGVzIiwiYXJpYU5vdGlmeU5vUHJvZHVjdHMiLCJpbml0U2lkZWJhckV2ZW50cyIsIiRub1Byb2R1Y3RzTWVzc2FnZSIsIl90aGlzNSIsIl90aGlzJHZhbGlkYXRpb25EaWN0aSIsIm9uTWluUHJpY2VFcnJvciIsInByaWNlX21pbl9ldmFsdWF0aW9uIiwib25NYXhQcmljZUVycm9yIiwicHJpY2VfbWF4X2V2YWx1YXRpb24iLCJtaW5QcmljZU5vdEVudGVyZWQiLCJwcmljZV9taW5fbm90X2VudGVyZWQiLCJtYXhQcmljZU5vdEVudGVyZWQiLCJwcmljZV9tYXhfbm90X2VudGVyZWQiLCJvbkludmFsaWRQcmljZSIsInByaWNlX2ludmFsaWRfdmFsdWUiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJjb25maWciLCJjYXRlZ29yeSIsInNob3BfYnlfcHJpY2UiLCJwcm9kdWN0cyIsImxpbWl0IiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsInNpZGViYXIiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsInRyaWdnZXJIYW5kbGVyIiwiYW5pbWF0ZSIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwidG9nZ2xlQnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJjbG9zZUJ1dHRvbiIsImFwcGx5RmlsdGVyc0J1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xvc2VTaWRlYmFyIiwicmVtb3ZlIiwiZGVmYXVsdCIsIlRSQU5TTEFUSU9OUyIsImlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkiLCJkaWN0aW9uYXJ5IiwiT2JqZWN0Iiwia2V5cyIsImNob29zZUFjdGl2ZURpY3Rpb25hcnkiLCJpIiwiYXJndW1lbnRzIiwiSlNPTiIsInBhcnNlIiwidW5kZWZpbmVkIiwidmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIiwiYWN0aXZlRGljdGlvbmFyeSIsImxvY2FsaXphdGlvbnMiLCJ2YWx1ZXMiLCJ0cmFuc2xhdGlvbktleXMiLCJtYXAiLCJrZXkiLCJzcGxpdCIsInBvcCIsInJlZHVjZSIsImFjYyIsImxvYWRlZCIsInRvZ2dsZUxpbmsiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZUVsZUlkIiwicmVwbGFjZSIsInRvZ2dsZUVsZSIsInRvZ2dsZUNsYXNzIiwiYWRkQ2xhc3MiXSwic291cmNlUm9vdCI6IiJ9
