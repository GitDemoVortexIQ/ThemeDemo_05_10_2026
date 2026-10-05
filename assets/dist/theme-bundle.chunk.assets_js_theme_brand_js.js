"use strict";
(self["webpackChunklonestar_cavio"] = self["webpackChunklonestar_cavio"] || []).push([["assets_js_theme_brand_js"],{

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
    _this.updateSidebarClass = _this.updateSidebarClass.bind(_this); // Bind method to maintain context
    return _this;
  }
  _inheritsLoose(Brand, _CatalogPage);
  var _proto = Brand.prototype;
  _proto.onReady = function onReady() {
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
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
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }
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
  _proto.paginationcount = function paginationcount() {
    var countnumber = $(".pagination-number .pagination-link").attr("data-last-pagination");
    var countnumberreduce = countnumber - 1;
    var countnumberreducee = $(".product-count").attr("data-count");
    var finalnumber = countnumberreduce * countnumberreducee;
    var paginationlasturl = $(".pagination-item.pagination-number .is-srOnly").text();
    $.ajax({
      url: paginationlasturl,
      success: function success(result) {
        var countpagination = $(result).find(".product-count").attr("data-count");
        var finaltotalcount = parseInt(finalnumber) + parseInt(countpagination);
        if (!isNaN(finaltotalcount)) {
          $('.product-count').text(finaltotalcount + " Products");
        }
      }
    });
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
    var productsPerPage = this.context.brandProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'brand/product-listing',
        sidebar: 'brand/sidebar',
        topbar: 'cavio/top-brand-filter-options'
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
      var countnumber = $(".pagination-number .pagination-link").attr("data-last-pagination");
      var countnumberreduce = countnumber - 1;
      var countnumberreducee = $(".product-count").attr("data-count");
      var finalnumber = countnumberreduce * countnumberreducee;
      var paginationlasturl = $(".pagination-item.pagination-number .is-srOnly").text();
      $.ajax({
        url: paginationlasturl,
        success: function success(result) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9icmFuZF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUNvQjtBQUNKO0FBQ21DO0FBQUEsSUFFbEVLLEtBQUssMEJBQUFDLFlBQUE7RUFDdEIsU0FBQUQsTUFBWUUsT0FBTyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUNqQkEsS0FBQSxHQUFBRixZQUFBLENBQUFHLElBQUEsT0FBTUYsT0FBTyxDQUFDO0lBQ2RDLEtBQUEsQ0FBS0Usb0JBQW9CLEdBQUdOLG1HQUEyQixDQUFDRyxPQUFPLENBQUM7SUFDaEVDLEtBQUEsQ0FBS0csa0JBQWtCLEdBQUdILEtBQUEsQ0FBS0csa0JBQWtCLENBQUNDLElBQUksQ0FBQUosS0FBSyxDQUFDLENBQUMsQ0FBQztJQUFBLE9BQUFBLEtBQUE7RUFDbEU7RUFBQ0ssY0FBQSxDQUFBUixLQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBUSxNQUFBLEdBQUFULEtBQUEsQ0FBQVUsU0FBQTtFQUFBRCxNQUFBLENBRURFLE9BQU8sR0FBUCxTQUFBQSxPQUFPQSxDQUFBLEVBQUc7SUFDTmQsb0VBQWUsQ0FBQyxJQUFJLENBQUNLLE9BQU8sQ0FBQztJQUM3QixJQUFJLENBQUNVLGNBQWMsQ0FBQyxDQUFDO0lBQ3JCLElBQUksQ0FBQ0MsZUFBZSxDQUFDLENBQUM7SUFDdEIsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzVCO0lBQ0EsSUFBSSxDQUFDUixrQkFBa0IsQ0FBQyxDQUFDOztJQUV6QjtJQUNBUyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNWLGtCQUFrQixDQUFDO0lBQzFELElBQUlXLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ2hDLElBQUksQ0FBQ0MsaUJBQWlCLENBQUMsQ0FBQztJQUM1QixDQUFDLE1BQU07TUFDSCxJQUFJLENB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R0FBRyxTQUE5QkEsMkJBQTJCQSxDQUFJRyxPQUFPLEVBQUs7RUFDcEQsSUFBUThGLHdCQUF3QixHQUF3RTlGLE9BQU8sQ0FBdkc4Rix3QkFBd0I7SUFBRUMsZ0NBQWdDLEdBQXNDL0YsT0FBTyxDQUE3RStGLGdDQUFnQztJQUFFQywrQkFBK0IsR0FBS2hHLE9BQU8sQ0FBM0NnRywrQkFBK0I7RUFDbkcsSUFBTUMsZ0JBQWdCLEdBQUdULHNCQUFzQixDQUFDTSx3QkFBd0IsRUFBRUMsZ0NBQWdDLEVBQUVDLCtCQUErQixDQUFDO0VBQzVJLElBQU1FLGFBQWEsR0FBR1osTUFBTSxDQUFDYSxNQUFNLENBQUNGLGdCQUFnQixDQUFDZCxZQUFZLENBQUMsQ0FBQztFQUNuRSxJQUFNaUIsZUFBZSxHQUFHZCxNQUFNLENBQUNDLElBQUksQ0FBQ1UsZ0JBQWdCLENBQUNkLFlBQVksQ0FBQyxDQUFDLENBQUNrQixHQUFHLENBQUMsVUFBQUMsR0FBRztJQUFBLE9BQUlBLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLENBQUMsQ0FBQztFQUFBLEVBQUM7RUFFcEcsT0FBT0osZUFBZSxDQUFDSyxNQUFNLENBQUMsVUFBQ0MsR0FBRyxFQUFFSixHQUFHLEVBQUViLENBQUMsRUFBSztJQUMzQ2lCLEdBQUcsQ0FBQ0osR0FBRyxDQUFDLEdBQUdKLGFBQWEsQ0FBQ1QsQ0FBQyxDQUFDO0lBQzNCLE9BQU9pQixHQUFHO0VBQ2QsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ1YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xvbmVzdGFyLWNhdmlvLy4vYXNzZXRzL2pzL3RoZW1lL2JyYW5kLmpzIiwid2VicGFjazovL2xvbmVzdGFyLWNhdmlvLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuLi90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJhbmQgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeShjb250ZXh0KTtcbiAgICAgICAgdGhpcy51cGRhdGVTaWRlYmFyQ2xhc3MgPSB0aGlzLnVwZGF0ZVNpZGViYXJDbGFzcy5iaW5kKHRoaXMpOyAvLyBCaW5kIG1ldGhvZCB0byBtYWludGFpbiBjb250ZXh0XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dCk7XG4gICAgICAgIHRoaXMuZmlsdGVyc2hvd2hpZGUoKTtcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uY291bnQoKTtcbiAgICAgICAgdGhpcy5maWx0ZXJzaG93aGlkZW91dHNpZGUoKTtcbiAgICAgICAgLy8gQ2FsbCB0aGUgbWV0aG9kIHRvIHVwZGF0ZSB0aGUgc2lkZWJhciBjbGFzc1xuICAgICAgICB0aGlzLnVwZGF0ZVNpZGViYXJDbGFzcygpO1xuXG4gICAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciBmb3Igd2luZG93IHJlc2l6ZVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVTaWRlYmFyQ2xhc3MpO1xuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuICAgIH0gICAgXG4gICAgZmlsdGVyc2hvd2hpZGUoKSB7XG4gICAgICAgICQoJy5maWx0ZXItdmlzaWJpbGl0eS1idXR0b24nKS5jbGljaygoKSA9PiB7XG4gICAgICAgICAgICAkKCcuZmlsdGVyLXZpc2liaWxpdHktYnV0dG9uJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJChcIi5wYWdlLnByb2R1Y3QtLWxpc3RpbmdcIikudG9nZ2xlQ2xhc3MoXCJmaWx0ZXItLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgICQoXCIuZmx5b3V0LWZpbHRlcnNcIikucGFyZW50cyhcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJtYXNrLWZpbHRlclwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZpbHRlcnNob3doaWRlb3V0c2lkZSgpIHtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgISQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcucGFnZS1zaWRlYmFyLCAuZmlsdGVyLXZpc2liaWxpdHktYnV0dG9uJykubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgJChcIi5wYWdlLnByb2R1Y3QtLWxpc3RpbmdcIikuaGFzQ2xhc3MoXCJmaWx0ZXItLWFjdGl2ZVwiKSAmJlxuICAgICAgICAgICAgICAgICEkKCdib2R5JykuaGFzQ2xhc3MoXCJwb3B1cC1hY3RpdmVcIikgJiZcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdC0tbGlzdGluZycpLmhhc0NsYXNzKFwiZmx5b3V0LWZpbHRlcnNcIikgXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvLyBFeGVjdXRlIHRoZSBzY3JpcHRcbiAgICAgICAgICAgICAgICAkKCcuZmlsdGVyLXZpc2liaWxpdHktYnV0dG9uJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoXCIucGFnZS5wcm9kdWN0LS1saXN0aW5nXCIpLnRvZ2dsZUNsYXNzKFwiZmlsdGVyLS1hY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgJChcIi5mbHlvdXQtZmlsdGVyc1wiKS5wYXJlbnRzKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcIm1hc2stZmlsdGVyXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9ICAgIFxuICAgIHVwZGF0ZVNpZGViYXJDbGFzcygpIHtcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9ICQoJy5zY3JvbGxpbmctc2lkZWJhci1kZXNrdG9wJyk7XG4gICAgICAgIGNvbnN0IHNpZGViYXJtb2JpbGUgPSAkKCcuc2Nyb2xsaW5nLXNpZGViYXItZGVza3RvcC5maWx0ZXItLWFjdGl2ZScpO1xuICAgICAgICBpZiAoc2lkZWJhci5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQpIHtcbiAgICAgICAgICAgICAgICBzaWRlYmFyLnJlbW92ZUNsYXNzKCdzY3JvbGxpbmctc2lkZWJhcicpLmFkZENsYXNzKCdmbHlvdXQtZmlsdGVycycpO1xuICAgICAgICAgICAgICAgIGlmIChzaWRlYmFybW9iaWxlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyLnBhcmVudHMoJ2JvZHknKS5hZGRDbGFzcygnbWFzay1maWx0ZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNpZGViYXIucmVtb3ZlQ2xhc3MoJ2ZseW91dC1maWx0ZXJzJykuYWRkQ2xhc3MoJ3Njcm9sbGluZy1zaWRlYmFyJyk7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5wYXJlbnRzKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21hc2stZmlsdGVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9ICAgIFxuICAgIHBhZ2luYXRpb25jb3VudCgpe1xuICAgICAgICB2YXIgY291bnRudW1iZXIgPSAkKFwiLnBhZ2luYXRpb24tbnVtYmVyIC5wYWdpbmF0aW9uLWxpbmtcIikuYXR0cihcImRhdGEtbGFzdC1wYWdpbmF0aW9uXCIpO1xuICAgICAgICB2YXIgY291bnRudW1iZXJyZWR1Y2UgPSBjb3VudG51bWJlciAtIDE7XG4gICAgICAgIHZhciBjb3VudG51bWJlcnJlZHVjZWUgPSAkKFwiLnByb2R1Y3QtY291bnRcIikuYXR0cihcImRhdGEtY291bnRcIik7XG4gICAgICAgIHZhciBmaW5hbG51bWJlciA9IGNvdW50bnVtYmVycmVkdWNlICogY291bnRudW1iZXJyZWR1Y2VlOyAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgIHZhciBwYWdpbmF0aW9ubGFzdHVybCA9ICQoXCIucGFnaW5hdGlvbi1pdGVtLnBhZ2luYXRpb24tbnVtYmVyIC5pcy1zck9ubHlcIikudGV4dCgpO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBwYWdpbmF0aW9ubGFzdHVybCxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgY291bnRwYWdpbmF0aW9uID0gJChyZXN1bHQpLmZpbmQoXCIucHJvZHVjdC1jb3VudFwiKS5hdHRyKFwiZGF0YS1jb3VudFwiKTtcbiAgICAgICAgICAgICAgICB2YXIgZmluYWx0b3RhbGNvdW50ID0gcGFyc2VJbnQoZmluYWxudW1iZXIpICsgcGFyc2VJbnQoY291bnRwYWdpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKGZpbmFsdG90YWxjb3VudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLnByb2R1Y3QtY291bnQnKS50ZXh0KGZpbmFsdG90YWxjb3VudCArIFwiIFByb2R1Y3RzXCIpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAgICAgXG4gICAgfVxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBwcmljZV9taW5fZXZhbHVhdGlvbjogb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgICAgcHJpY2VfbWF4X2V2YWx1YXRpb246IG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICAgIHByaWNlX21pbl9ub3RfZW50ZXJlZDogbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgcHJpY2VfbWF4X25vdF9lbnRlcmVkOiBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICBwcmljZV9pbnZhbGlkX3ZhbHVlOiBvbkludmFsaWRQcmljZSxcbiAgICAgICAgfSA9IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkdG9wYmFyQ29udGFpbmVyID0gJCgnI3RvcC1maWx0ZXItY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5icmFuZFByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnYnJhbmQvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnYnJhbmQvc2lkZWJhcicsXG4gICAgICAgICAgICAgICAgdG9wYmFyOiAnY2F2aW8vdG9wLWJyYW5kLWZpbHRlci1vcHRpb25zJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBzaG9wX2J5X2JyYW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJyYW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdicmFuZC9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuICAgICAgICAgICAgJHRvcGJhckNvbnRhaW5lci5odG1sKGNvbnRlbnQudG9wYmFyKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgJCgnLmZpbHRlci12aXNpYmlsaXR5LWJ1dHRvbicpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCcuZmlsdGVyLXZpc2liaWxpdHktYnV0dG9uJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoXCIucGFnZS5wcm9kdWN0LS1saXN0aW5nXCIpLnRvZ2dsZUNsYXNzKFwiZmlsdGVyLS1hY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgJChcIi5mbHlvdXQtZmlsdGVyc1wiKS5wYXJlbnRzKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcIm1hc2stZmlsdGVyXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgY291bnRudW1iZXIgPSAkKFwiLnBhZ2luYXRpb24tbnVtYmVyIC5wYWdpbmF0aW9uLWxpbmtcIikuYXR0cihcImRhdGEtbGFzdC1wYWdpbmF0aW9uXCIpO1xuICAgICAgICAgICAgdmFyIGNvdW50bnVtYmVycmVkdWNlID0gY291bnRudW1iZXIgLSAxO1xuICAgICAgICAgICAgdmFyIGNvdW50bnVtYmVycmVkdWNlZSA9ICQoXCIucHJvZHVjdC1jb3VudFwiKS5hdHRyKFwiZGF0YS1jb3VudFwiKTtcbiAgICAgICAgICAgIHZhciBmaW5hbG51bWJlciA9IGNvdW50bnVtYmVycmVkdWNlICogY291bnRudW1iZXJyZWR1Y2VlOyAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHBhZ2luYXRpb25sYXN0dXJsID0gJChcIi5wYWdpbmF0aW9uLWl0ZW0ucGFnaW5hdGlvbi1udW1iZXIgLmlzLXNyT25seVwiKS50ZXh0KCk7XG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogcGFnaW5hdGlvbmxhc3R1cmwsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY291bnRwYWdpbmF0aW9uID0gJChyZXN1bHQpLmZpbmQoXCIucHJvZHVjdC1jb3VudFwiKS5hdHRyKFwiZGF0YS1jb3VudFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpbmFsdG90YWxjb3VudCA9IHBhcnNlSW50KGZpbmFsbnVtYmVyKSArIHBhcnNlSW50KGNvdW50cGFnaW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4oZmluYWx0b3RhbGNvdW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnByb2R1Y3QtY291bnQnKS50ZXh0KGZpbmFsdG90YWxjb3VudCArIFwiIFByb2R1Y3RzXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoJCgnLnBhZ2UucHJvZHVjdC0tbGlzdGluZycpLmhhc0NsYXNzKCdmaWx0ZXItLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgJCgnLmZpbHRlci12aXNpYmlsaXR5LWJ1dHRvbicpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImNvbnN0IFRSQU5TTEFUSU9OUyA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSA9IChkaWN0aW9uYXJ5KSA9PiAhIU9iamVjdC5rZXlzKGRpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubGVuZ3RoO1xuY29uc3QgY2hvb3NlQWN0aXZlRGljdGlvbmFyeSA9ICguLi5kaWN0aW9uYXJ5SnNvbkxpc3QpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpY3Rpb25hcnlKc29uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0gSlNPTi5wYXJzZShkaWN0aW9uYXJ5SnNvbkxpc3RbaV0pO1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eShkaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpY3Rpb25hcnk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIGRlZmluZXMgVHJhbnNsYXRpb24gRGljdGlvbmFyeSB0byB1c2VcbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byAzIHZhbGlkYXRpb24gSlNPTnMgZnJvbSBlbi5qc29uOlxuICogdmFsaWRhdGlvbl9tZXNzYWdlcywgdmFsaWRhdGlvbl9mYWxsYmFja19tZXNzYWdlcyBhbmQgZGVmYXVsdF9tZXNzYWdlc1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSA9IChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgeyB2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IGFjdGl2ZURpY3Rpb25hcnkgPSBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5KHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04pO1xuICAgIGNvbnN0IGxvY2FsaXphdGlvbnMgPSBPYmplY3QudmFsdWVzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSk7XG4gICAgY29uc3QgdHJhbnNsYXRpb25LZXlzID0gT2JqZWN0LmtleXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5tYXAoa2V5ID0+IGtleS5zcGxpdCgnLicpLnBvcCgpKTtcblxuICAgIHJldHVybiB0cmFuc2xhdGlvbktleXMucmVkdWNlKChhY2MsIGtleSwgaSkgPT4ge1xuICAgICAgICBhY2Nba2V5XSA9IGxvY2FsaXphdGlvbnNbaV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufTtcbiJdLCJuYW1lcyI6WyJob29rcyIsIkNhdGFsb2dQYWdlIiwiY29tcGFyZVByb2R1Y3RzIiwiRmFjZXRlZFNlYXJjaCIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsIkJyYW5kIiwiX0NhdGFsb2dQYWdlIiwiY29udGV4dCIsIl90aGlzIiwiY2FsbCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5IiwidXBkYXRlU2lkZWJhckNsYXNzIiwiYmluZCIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsImZpbHRlcnNob3doaWRlIiwicGFnaW5hdGlvbmNvdW50IiwiZmlsdGVyc2hvd2hpZGVvdXRzaWRlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIiQiLCJsZW5ndGgiLCJpbml0RmFjZXRlZFNlYXJjaCIsIm9uU29ydEJ5U3VibWl0Iiwib24iLCJjbGljayIsInRvZ2dsZUNsYXNzIiwicGFyZW50cyIsImRvY3VtZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiaGFzQ2xhc3MiLCJzaWRlYmFyIiwic2lkZWJhcm1vYmlsZSIsImlubmVyV2lkdGgiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiY291bnRudW1iZXIiLCJhdHRyIiwiY291bnRudW1iZXJyZWR1Y2UiLCJjb3VudG51bWJlcnJlZHVjZWUiLCJmaW5hbG51bWJlciIsInBhZ2luYXRpb25sYXN0dXJsIiwidGV4dCIsImFqYXgiLCJ1cmwiLCJzdWNjZXNzIiwicmVzdWx0IiwiY291bnRwYWdpbmF0aW9uIiwiZmluZCIsImZpbmFsdG90YWxjb3VudCIsInBhcnNlSW50IiwiaXNOYU4iLCJfdGhpcyR2YWxpZGF0aW9uRGljdGkiLCJvbk1pblByaWNlRXJyb3IiLCJwcmljZV9taW5fZXZhbHVhdGlvbiIsIm9uTWF4UHJpY2VFcnJvciIsInByaWNlX21heF9ldmFsdWF0aW9uIiwibWluUHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWluX25vdF9lbnRlcmVkIiwibWF4UHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWF4X25vdF9lbnRlcmVkIiwib25JbnZhbGlkUHJpY2UiLCJwcmljZV9pbnZhbGlkX3ZhbHVlIiwiJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCIkdG9wYmFyQ29udGFpbmVyIiwicHJvZHVjdHNQZXJQYWdlIiwiYnJhbmRQcm9kdWN0c1BlclBhZ2UiLCJyZXF1ZXN0T3B0aW9ucyIsInRlbXBsYXRlIiwicHJvZHVjdExpc3RpbmciLCJ0b3BiYXIiLCJjb25maWciLCJzaG9wX2J5X2JyYW5kIiwiYnJhbmQiLCJwcm9kdWN0cyIsImxpbWl0Iiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJ0cmlnZ2VySGFuZGxlciIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ2YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyIsImRlZmF1bHQiLCJUUkFOU0xBVElPTlMiLCJpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5IiwiZGljdGlvbmFyeSIsIk9iamVjdCIsImtleXMiLCJjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5IiwiaSIsImFyZ3VtZW50cyIsIkpTT04iLCJwYXJzZSIsInVuZGVmaW5lZCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiIsImFjdGl2ZURpY3Rpb25hcnkiLCJsb2NhbGl6YXRpb25zIiwidmFsdWVzIiwidHJhbnNsYXRpb25LZXlzIiwibWFwIiwia2V5Iiwic3BsaXQiLCJwb3AiLCJyZWR1Y2UiLCJhY2MiXSwic291cmNlUm9vdCI6IiJ9
