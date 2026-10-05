"use strict";
(self["webpackChunkRoots"] = self["webpackChunkRoots"] || []).push([["assets_js_theme_brand_js"],{

/***/ "./assets/js/theme/brand.js":
/*!**********************************!*\
  !*** ./assets/js/theme/brand.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Brand)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }





var Brand = /*#__PURE__*/function (_CatalogPage) {
  function Brand(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = (0,_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(context);
    return _this;
  }

  /* Range Slider JS*/
  _inheritsLoose(Brand, _CatalogPage);
  var _proto = Brand.prototype;
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
    controlSlider.style.background = "linear-gradient(\n              to right,\n              " + sliderColor + " 0%,\n              " + sliderColor + " " + fromPosition / rangeDistance * 100 + "%,\n              " + rangeColor + " " + fromPosition / rangeDistance * 100 + "%,\n              " + rangeColor + " " + toPosition / rangeDistance * 100 + "%, \n              " + sliderColor + " " + toPosition / rangeDistance * 100 + "%, \n              " + sliderColor + " 100%)";
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
    var _this2 = this;
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
      return _this2.controlFromSlider(fromSlider, toSlider, fromInput);
    };
    toSlider.oninput = function () {
      return _this2.controlToSlider(fromSlider, toSlider, toInput);
    };
    fromInput.oninput = function () {
      return _this2.controlFromInput(fromSlider, fromInput, toInput, toSlider);
    };
    toInput.oninput = function () {
      return _this2.controlToInput(toSlider, fromInput, toInput, toSlider);
    };
  }
  /* End Range Slider JS*/;
  _proto.onReady = function onReady() {
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this3 = this;
    var _this$validationDicti = this.validationDictionary,
      onMinPriceError = _this$validationDicti.price_min_evaluation,
      onMaxPriceError = _this$validationDicti.price_max_evaluation,
      minPriceNotEntered = _this$validationDicti.price_min_not_entered,
      maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
      onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.brandProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'brand/product-listing',
        sidebar: 'brand/sidebar'
      },
      config: {
        shop_by_brand: true,
        brand: {
          products: {
            limit: productsPerPage
          }
        }
      },
      showMore: 'brand/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        //scrollTop: 0,
      }, 100);
      _this3.initializePriceRangeSliders();
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
  };
  return Brand;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9icmFuZF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUNvQjtBQUNKO0FBQ21DO0FBQUEsSUFFbEVLLEtBQUssMEJBQUFDLFlBQUE7RUFDdEIsU0FBQUQsTUFBWUUsT0FBTyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUNqQkEsS0FBQSxHQUFBRixZQUFBLENBQUFHLElBQUEsT0FBTUYsT0FBTyxDQUFDO0lBQ2RDLEtBQUEsQ0FBS0Usb0JBQW9CLEdBQUdOLG1HQUEyQixDQUFDRyxPQUFPLENBQUM7SUFBQyxPQUFBQyxLQUFBO0VBQ3JFOztFQUVJO0VBQUFHLGNBQUEsQ0FBQU4sS0FBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQU0sTUFBQSxHQUFBUCxLQUFBLENBQUFRLFNBQUE7RUFBQUQsTUFBQSxDQUNBRSxnQkFBZ0IsR0FBaEIsU0FBQUEsZ0JBQWdCQSxDQUFDQyxVQUFVLEVBQUVDLFNBQVMsRUFBRUMsT0FBTyxFQUFFQyxhQUFhLEVBQUU7SUFDNUQsSUFBQUMsZUFBQSxHQUFtQixJQUFJLENBQUNDLFNBQVMsQ0FBQ0osU0FBUyxFQUFFQyxPQUFPLENBQUM7TUFBOUNJLElBQUksR0FBQUYsZUFBQTtNQUFFRyxFQUFFLEdBQUFILGVBQUE7SUFDZixJQUFJLENBQUNJLFVBQVUsQ0FBQ1AsU0FBUyxFQUFFQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRUMsYUFBYSxDQUFDO0lBQ3hFLElBQUlHLElBQUksR0FBR0MsRUFBRSxFQUFFO01BQ1hQLFVBQVUsQ0FBQ1MsS0FBSyxHQUFHRixFQUFFO01BQ3JCTixTQUFTLENBQUNRLEtBQUssR0FBR0YsRUFBRTtJQUN4QixDQUFDLE1BQU07TUFDSFAsVUFBVSxDQUFDUyxLQUFLLEdBQUdILElBQUk7SUFDM0I7RUFDSixDQUFDO0VBQUFULE1BQUEsQ0FFRGEsY0FBYyxHQUFkLFNBQUFBLGNBQWNBLENBQUNDLFFB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LENBQUM7QUFDVixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUm9vdHMvLi9hc3NldHMvanMvdGhlbWUvYnJhbmQuanMiLCJ3ZWJwYWNrOi8vUm9vdHMvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBob29rcyB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBDYXRhbG9nUGFnZSBmcm9tICcuL2NhdGFsb2cnO1xuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoJztcbmltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4uL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFuZCBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xuICAgIH1cblxuICAgICAgICAvKiBSYW5nZSBTbGlkZXIgSlMqLyBcbiAgICAgICAgY29udHJvbEZyb21JbnB1dChmcm9tU2xpZGVyLCBmcm9tSW5wdXQsIHRvSW5wdXQsIGNvbnRyb2xTbGlkZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IFtmcm9tLCB0b10gPSB0aGlzLmdldFBhcnNlZChmcm9tSW5wdXQsIHRvSW5wdXQpO1xuICAgICAgICAgICAgdGhpcy5maWxsU2xpZGVyKGZyb21JbnB1dCwgdG9JbnB1dCwgJyNDNkM2QzYnLCAnIzBmMGYwZicsIGNvbnRyb2xTbGlkZXIpO1xuICAgICAgICAgICAgaWYgKGZyb20gPiB0bykge1xuICAgICAgICAgICAgICAgIGZyb21TbGlkZXIudmFsdWUgPSB0bztcbiAgICAgICAgICAgICAgICBmcm9tSW5wdXQudmFsdWUgPSB0bztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZnJvbVNsaWRlci52YWx1ZSA9IGZyb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICBjb250cm9sVG9JbnB1dCh0b1NsaWRlciwgZnJvbUlucHV0LCB0b0lucHV0LCBjb250cm9sU2xpZGVyKSB7XG4gICAgICAgICAgICBjb25zdCBbZnJvbSwgdG9dID0gdGhpcy5nZXRQYXJzZWQoZnJvbUlucHV0LCB0b0lucHV0KTtcbiAgICAgICAgICAgIHRoaXMuZmlsbFNsaWRlcihmcm9tSW5wdXQsIHRvSW5wdXQsICcjQzZDNkM2JywgJyMwZjBmMGYnLCBjb250cm9sU2xpZGVyKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VG9nZ2xlQWNjZXNzaWJsZSh0b0lucHV0KTtcbiAgICAgICAgICAgIGlmIChmcm9tIDw9IHRvKSB7XG4gICAgICAgICAgICAgICAgdG9TbGlkZXIudmFsdWUgPSB0bztcbiAgICAgICAgICAgICAgICB0b0lucHV0LnZhbHVlID0gdG87XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvSW5wdXQudmFsdWUgPSBmcm9tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb250cm9sRnJvbVNsaWRlcihmcm9tU2xpZGVyLCB0b1NsaWRlciwgZnJvbUlucHV0KSB7XG4gICAgICAgICAgY29uc3QgW2Zyb20sIHRvXSA9IHRoaXMuZ2V0UGFyc2VkKGZyb21TbGlkZXIsIHRvU2xpZGVyKTtcbiAgICAgICAgICB0aGlzLmZpbGxTbGlkZXIoZnJvbVNsaWRlciwgdG9TbGlkZXIsICcjQzZDNkM2JywgJyMwZjBmMGYnLCB0b1NsaWRlcik7XG4gICAgICAgICAgaWYgKGZyb20gPiB0bykge1xuICAgICAgICAgICAgZnJvbVNsaWRlci52YWx1ZSA9IHRvO1xuICAgICAgICAgICAgZnJvbUlucHV0LnZhbHVlID0gdG87XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZyb21JbnB1dC52YWx1ZSA9IGZyb207XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb250cm9sVG9TbGlkZXIoZnJvbVNsaWRlciwgdG9TbGlkZXIsIHRvSW5wdXQpIHtcbiAgICAgICAgICBjb25zdCBbZnJvbSwgdG9dID0gdGhpcy5nZXRQYXJzZWQoZnJvbVNsaWRlciwgdG9TbGlkZXIpO1xuICAgICAgICAgIHRoaXMuZmlsbFNsaWRlcihmcm9tU2xpZGVyLCB0b1NsaWRlciwgJyNDNkM2QzYnLCAnIzBmMGYwZicsIHRvU2xpZGVyKTtcbiAgICAgICAgICB0aGlzLnNldFRvZ2dsZUFjY2Vzc2libGUodG9TbGlkZXIpO1xuICAgICAgICAgIGlmIChmcm9tIDw9IHRvKSB7XG4gICAgICAgICAgICB0b1NsaWRlci52YWx1ZSA9IHRvO1xuICAgICAgICAgICAgdG9JbnB1dC52YWx1ZSA9IHRvO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b0lucHV0LnZhbHVlID0gZnJvbTtcbiAgICAgICAgICAgIHRvU2xpZGVyLnZhbHVlID0gZnJvbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGdldFBhcnNlZChjdXJyZW50RnJvbSwgY3VycmVudFRvKSB7XG4gICAgICAgICAgY29uc3QgZnJvbSA9IHBhcnNlSW50KGN1cnJlbnRGcm9tLnZhbHVlLCAxMCk7XG4gICAgICAgICAgY29uc3QgdG8gPSBwYXJzZUludChjdXJyZW50VG8udmFsdWUsIDEwKTtcbiAgICAgICAgICByZXR1cm4gW2Zyb20sIHRvXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZmlsbFNsaWRlcihmcm9tLCB0bywgc2xpZGVyQ29sb3IsIHJhbmdlQ29sb3IsIGNvbnRyb2xTbGlkZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlRGlzdGFuY2UgPSB0by5tYXgtdG8ubWluO1xuICAgICAgICAgICAgY29uc3QgZnJvbVBvc2l0aW9uID0gZnJvbS52YWx1ZSAtIHRvLm1pbjtcbiAgICAgICAgICAgIGNvbnN0IHRvUG9zaXRpb24gPSB0by52YWx1ZSAtIHRvLm1pbjtcbiAgICAgICAgICAgIGNvbnRyb2xTbGlkZXIuc3R5bGUuYmFja2dyb3VuZCA9IGBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgIHRvIHJpZ2h0LFxuICAgICAgICAgICAgICAke3NsaWRlckNvbG9yfSAwJSxcbiAgICAgICAgICAgICAgJHtzbGlkZXJDb2xvcn0gJHsoZnJvbVBvc2l0aW9uKS8ocmFuZ2VEaXN0YW5jZSkqMTAwfSUsXG4gICAgICAgICAgICAgICR7cmFuZ2VDb2xvcn0gJHsoKGZyb21Qb3NpdGlvbikvKHJhbmdlRGlzdGFuY2UpKSoxMDB9JSxcbiAgICAgICAgICAgICAgJHtyYW5nZUNvbG9yfSAkeyh0b1Bvc2l0aW9uKS8ocmFuZ2VEaXN0YW5jZSkqMTAwfSUsIFxuICAgICAgICAgICAgICAke3NsaWRlckNvbG9yfSAkeyh0b1Bvc2l0aW9uKS8ocmFuZ2VEaXN0YW5jZSkqMTAwfSUsIFxuICAgICAgICAgICAgICAke3NsaWRlckNvbG9yfSAxMDAlKWA7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgc2V0VG9nZ2xlQWNjZXNzaWJsZShjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgICBsZXQgdG9TbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpY2UtcmFuZ2UtbWF4Jyk7XG4gICAgICAgICAgICBpZiAoTnVtYmVyKGN1cnJlbnRUYXJnZXQudmFsdWUpIDw9IDAgKSB7XG4gICAgICAgICAgICAgIHRvU2xpZGVyLnN0eWxlLnpJbmRleCA9IDI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0b1NsaWRlci5zdHlsZS56SW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGluaXRpYWxpemVQcmljZVJhbmdlU2xpZGVycygpIHtcbiAgICAgICAgICAgIGNvbnN0IGZyb21TbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpY2UtcmFuZ2UtbWluJyk7XG4gICAgICAgICAgICBjb25zdCB0b1NsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmljZS1yYW5nZS1tYXgnKTtcbiAgICAgICAgICAgIGNvbnN0IGZyb21JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmcm9tSW5wdXQnKTtcbiAgICAgICAgICAgIGNvbnN0IHRvSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9JbnB1dCcpO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmICghZnJvbVNsaWRlciB8fCAhdG9TbGlkZXIgfHwgIWZyb21JbnB1dCB8fCAhdG9JbnB1dCkgcmV0dXJuOyAvLyBFeGl0IGlmIGVsZW1lbnRzIGFyZSBtaXNzaW5nXG4gICAgICAgIFxuICAgICAgICAgICAgLy8gSW5pdGlhbCBzdHlsaW5nIG9mIHRoZSBzbGlkZXJcbiAgICAgICAgICAgIHRoaXMuZmlsbFNsaWRlcihmcm9tU2xpZGVyLCB0b1NsaWRlciwgJyNDNkM2QzYnLCAnIzBmMGYwZicsIHRvU2xpZGVyKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VG9nZ2xlQWNjZXNzaWJsZSh0b1NsaWRlcik7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gQXR0YWNoIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgICAgICAgZnJvbVNsaWRlci5vbmlucHV0ID0gKCkgPT4gdGhpcy5jb250cm9sRnJvbVNsaWRlcihmcm9tU2xpZGVyLCB0b1NsaWRlciwgZnJvbUlucHV0KTtcbiAgICAgICAgICAgIHRvU2xpZGVyLm9uaW5wdXQgPSAoKSA9PiB0aGlzLmNvbnRyb2xUb1NsaWRlcihmcm9tU2xpZGVyLCB0b1NsaWRlciwgdG9JbnB1dCk7XG4gICAgICAgICAgICBmcm9tSW5wdXQub25pbnB1dCA9ICgpID0+IHRoaXMuY29udHJvbEZyb21JbnB1dChmcm9tU2xpZGVyLCBmcm9tSW5wdXQsIHRvSW5wdXQsIHRvU2xpZGVyKTtcbiAgICAgICAgICAgIHRvSW5wdXQub25pbnB1dCA9ICgpID0+IHRoaXMuY29udHJvbFRvSW5wdXQodG9TbGlkZXIsIGZyb21JbnB1dCwgdG9JbnB1dCwgdG9TbGlkZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8qIEVuZCBSYW5nZSBTbGlkZXIgSlMqLyBcblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEZhY2V0ZWRTZWFyY2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdEZhY2V0ZWRTZWFyY2goKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHByaWNlX21pbl9ldmFsdWF0aW9uOiBvbk1pblByaWNlRXJyb3IsXG4gICAgICAgICAgICBwcmljZV9tYXhfZXZhbHVhdGlvbjogb25NYXhQcmljZUVycm9yLFxuICAgICAgICAgICAgcHJpY2VfbWluX25vdF9lbnRlcmVkOiBtaW5QcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICBwcmljZV9tYXhfbm90X2VudGVyZWQ6IG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgIHByaWNlX2ludmFsaWRfdmFsdWU6IG9uSW52YWxpZFByaWNlLFxuICAgICAgICB9ID0gdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeTtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5icmFuZFByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnYnJhbmQvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnYnJhbmQvc2lkZWJhcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgc2hvcF9ieV9icmFuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBicmFuZDoge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dNb3JlOiAnYnJhbmQvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xuXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgLy9zY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVQcmljZVJhbmdlU2xpZGVycygpO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5pbml0aWFsaXplUHJpY2VSYW5nZVNsaWRlcnMoKTtcbiAgICB9XG59XG4iLCJjb25zdCBUUkFOU0xBVElPTlMgPSAndHJhbnNsYXRpb25zJztcbmNvbnN0IGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkgPSAoZGljdGlvbmFyeSkgPT4gISFPYmplY3Qua2V5cyhkaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLmxlbmd0aDtcbmNvbnN0IGNob29zZUFjdGl2ZURpY3Rpb25hcnkgPSAoLi4uZGljdGlvbmFyeUpzb25MaXN0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWN0aW9uYXJ5SnNvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGljdGlvbmFyeSA9IEpTT04ucGFyc2UoZGljdGlvbmFyeUpzb25MaXN0W2ldKTtcbiAgICAgICAgaWYgKGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkoZGljdGlvbmFyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkaWN0aW9uYXJ5O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBkZWZpbmVzIFRyYW5zbGF0aW9uIERpY3Rpb25hcnkgdG8gdXNlXG4gKiBAcGFyYW0gY29udGV4dCBwcm92aWRlcyBhY2Nlc3MgdG8gMyB2YWxpZGF0aW9uIEpTT05zIGZyb20gZW4uanNvbjpcbiAqIHZhbGlkYXRpb25fbWVzc2FnZXMsIHZhbGlkYXRpb25fZmFsbGJhY2tfbWVzc2FnZXMgYW5kIGRlZmF1bHRfbWVzc2FnZXNcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgPSAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiB9ID0gY29udGV4dDtcbiAgICBjb25zdCBhY3RpdmVEaWN0aW9uYXJ5ID0gY2hvb3NlQWN0aXZlRGljdGlvbmFyeSh2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OKTtcbiAgICBjb25zdCBsb2NhbGl6YXRpb25zID0gT2JqZWN0LnZhbHVlcyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubWFwKGtleSA9PiBrZXkuc3BsaXQoJy4nKS5wb3AoKSk7XG5cbiAgICByZXR1cm4gdHJhbnNsYXRpb25LZXlzLnJlZHVjZSgoYWNjLCBrZXksIGkpID0+IHtcbiAgICAgICAgYWNjW2tleV0gPSBsb2NhbGl6YXRpb25zW2ldO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbn07XG4iXSwibmFtZXMiOlsiaG9va3MiLCJDYXRhbG9nUGFnZSIsImNvbXBhcmVQcm9kdWN0cyIsIkZhY2V0ZWRTZWFyY2giLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJCcmFuZCIsIl9DYXRhbG9nUGFnZSIsImNvbnRleHQiLCJfdGhpcyIsImNhbGwiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwiY29udHJvbEZyb21JbnB1dCIsImZyb21TbGlkZXIiLCJmcm9tSW5wdXQiLCJ0b0lucHV0IiwiY29udHJvbFNsaWRlciIsIl90aGlzJGdldFBhcnNlZCIsImdldFBhcnNlZCIsImZyb20iLCJ0byIsImZpbGxTbGlkZXIiLCJ2YWx1ZSIsImNvbnRyb2xUb0lucHV0IiwidG9TbGlkZXIiLCJfdGhpcyRnZXRQYXJzZWQyIiwic2V0VG9nZ2xlQWNjZXNzaWJsZSIsImNvbnRyb2xGcm9tU2xpZGVyIiwiX3RoaXMkZ2V0UGFyc2VkMyIsImNvbnRyb2xUb1NsaWRlciIsIl90aGlzJGdldFBhcnNlZDQiLCJjdXJyZW50RnJvbSIsImN1cnJlbnRUbyIsInBhcnNlSW50Iiwic2xpZGVyQ29sb3IiLCJyYW5nZUNvbG9yIiwicmFuZ2VEaXN0YW5jZSIsIm1heCIsIm1pbiIsImZyb21Qb3NpdGlvbiIsInRvUG9zaXRpb24iLCJzdHlsZSIsImJhY2tncm91bmQiLCJjdXJyZW50VGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiTnVtYmVyIiwiekluZGV4IiwiaW5pdGlhbGl6ZVByaWNlUmFuZ2VTbGlkZXJzIiwiX3RoaXMyIiwib25pbnB1dCIsIm9uUmVhZHkiLCIkIiwibGVuZ3RoIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJvbiIsIl90aGlzMyIsIl90aGlzJHZhbGlkYXRpb25EaWN0aSIsIm9uTWluUHJpY2VFcnJvciIsInByaWNlX21pbl9ldmFsdWF0aW9uIiwib25NYXhQcmljZUVycm9yIiwicHJpY2VfbWF4X2V2YWx1YXRpb24iLCJtaW5QcmljZU5vdEVudGVyZWQiLCJwcmljZV9taW5fbm90X2VudGVyZWQiLCJtYXhQcmljZU5vdEVudGVyZWQiLCJwcmljZV9tYXhfbm90X2VudGVyZWQiLCJvbkludmFsaWRQcmljZSIsInByaWNlX2ludmFsaWRfdmFsdWUiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImJyYW5kUHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwic2lkZWJhciIsImNvbmZpZyIsInNob3BfYnlfYnJhbmQiLCJicmFuZCIsInByb2R1Y3RzIiwibGltaXQiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsInRyaWdnZXJIYW5kbGVyIiwiYW5pbWF0ZSIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwiZGVmYXVsdCIsIlRSQU5TTEFUSU9OUyIsImlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkiLCJkaWN0aW9uYXJ5IiwiT2JqZWN0Iiwia2V5cyIsImNob29zZUFjdGl2ZURpY3Rpb25hcnkiLCJpIiwiYXJndW1lbnRzIiwiSlNPTiIsInBhcnNlIiwidW5kZWZpbmVkIiwidmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIiwiYWN0aXZlRGljdGlvbmFyeSIsImxvY2FsaXphdGlvbnMiLCJ2YWx1ZXMiLCJ0cmFuc2xhdGlvbktleXMiLCJtYXAiLCJrZXkiLCJzcGxpdCIsInBvcCIsInJlZHVjZSIsImFjYyJdLCJzb3VyY2VSb290IjoiIn0=