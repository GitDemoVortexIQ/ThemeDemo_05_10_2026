"use strict";
(self["webpackChunklonestar_cavio"] = self["webpackChunklonestar_cavio"] || []).push([["assets_js_theme_search_js"],{

/***/ "./assets/js/theme/search.js":
/*!***********************************!*\
  !*** ./assets/js/theme/search.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jstree */ "./node_modules/jstree/dist/jstree.min.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jstree__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }










var leftArrowKey = 37;
var rightArrowKey = 39;
var Search = /*#__PURE__*/function (_CatalogPage) {
  function Search() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  _inheritsLoose(Search, _CatalogPage);
  var _proto = Search.prototype;
  _proto.formatCategoryTreeForJSTree = function formatCategoryTreeForJSTree(node) {
    var _this = this;
    var nodeData = {
      text: node.data,
      id: node.metadata.id,
      state: {
        selected: node.selected
      }
    };
    if (node.state) {
      nodeData.state.opened = node.state === 'open';
      nodeData.children = true;
    }
    if (node.children) {
      nodeData.children = [];
      node.children.forEach(function (childNode) {
        nodeData.children.push(_this.formatCategoryTreeForJSTree(childNode));
      });
    }
    return nodeData;
  };
  _proto.showProducts = function showProducts(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }
    this.$productListingContainer.removeClass('u-hidden');
    this.$facetedSearchContainer.removeClass('u-hidden');
    this.$contentResultsContainer.addClass('u-hidden');
    $('[data-content-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-content-results-toggle]').addClass('navBar-action');
    $('[data-product-results-toggle]').removeClass('navBar-action');
    $('[data-product-results-toggle]').addClass('navBar-action-color--active');
    this.activateTab($('[data-product-results-toggle]'));
    if (!navigate) {
      return;
    }
    var searchData = $('#search-results-product-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };
  _proto.showContent = function showContent(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }
    this.$contentResultsContainer.removeClass('u-hidden');
    this.$productListingContainer.addClass('u-hidden');
    this.$facetedSearchContainer.addClass('u-hidden');
    $('[data-product-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-product-results-toggle]').addClass('navBar-action');
    $('[data-content-results-toggle]').removeClass('navBar-action');
    $('[data-content-results-toggle]').addClass('navBar-action-color--active');
    this.activateTab($('[data-content-results-toggle]'));
    if (!navigate) {
      return;
    }
    var searchData = $('#search-results-content-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };
  _proto.activateTab = function activateTab($tabToActivate) {
    var $tabsCollection = $('[data-search-page-tabs]').find('[role="tab"]');
    $tabsCollection.each(function (idx, tab) {
      var $tab = $(tab);
      if ($tab.is($tabToActivate)) {
        $tab.removeAttr('tabindex');
        $tab.attr('aria-selected', true);
        return;
      }
      $tab.attr('tabindex', '-1');
      $tab.attr('aria-selected', false);
    });
  };
  _proto.onTabChangeWithArrows = function onTabChangeWithArrows(event) {
    var eventKey = event.which;
    var isLeftOrRightArrowKeydown = eventKey === leftArrowKey || eventKey === rightArrowKey;
    if (!isLeftOrRightArrowKeydown) return;
    var $tabsCollection = $('[data-search-page-tabs]').find('[role="tab"]');
    var isActiveElementNotTab = $tabsCollection.index($(document.activeElement)) === -1;
    if (isActiveElementNotTab) return;
    var $activeTab = $("#" + document.activeElement.id);
    var activeTabIdx = $tabsCollection.index($activeTab);
    var lastTabIdx = $tabsCollection.length - 1;
    var nextTabIdx;
    switch (eventKey) {
      case leftArrowKey:
        nextTabIdx = activeTabIdx === 0 ? lastTabIdx : activeTabIdx - 1;
        break;
      case rightArrowKey:
        nextTabIdx = activeTabIdx === lastTabIdx ? 0 : activeTabIdx + 1;
        break;
      default:
        break;
    }
    $($tabsCollection.get(nextTabIdx)).focus().trigger('click');
  };
  _proto.onReady = function onReady() {
    var _this2 = this;
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_4__["default"])(this.context);
    this.arrangeFocusOnSortBy();
    var $searchForm = $('[data-advanced-search-form]');
    var $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
    var url = url__WEBPACK_IMPORTED_MODULE_6__.parse(window.location.href, true);
    var treeData = [];
    this.$productListingContainer = $('#product-listing-container');
    this.$facetedSearchContainer = $('#faceted-search-container');
    this.$contentResultsContainer = $('#search-results-content');

    // Init faceted search
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }
    this.filtershowhide();
    this.filtershowhideoutside();
    // Call the method to update the sidebar class
    this.updateSidebarClass();
    // Add event listener for window resize
    window.addEventListener('resize', this.updateSidebarClass);
    // Init collapsibles
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])();
    $('[data-product-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.showProducts();
    });
    $('[data-content-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.showContent();
    });
    $('[data-search-page-tabs]').on('keyup', this.onTabChangeWithArrows);
    if (this.$productListingContainer.find('li.product').length === 0 || url.query.section === 'content') {
      this.showContent(false);
    } else {
      this.showProducts(false);
    }
    var validator = this.initValidation($searchForm).bindValidation($searchForm.find('#search_query_adv'));
    this.context.categoryTree.forEach(function (node) {
      treeData.push(_this2.formatCategoryTreeForJSTree(node));
    });
    this.categoryTreeData = treeData;
    this.createCategoryTree($categoryTreeContainer);
    $searchForm.on('submit', function (event) {
      var selectedCategoryIds = $categoryTreeContainer.jstree().get_selected();
      if (!validator.check()) {
        return event.preventDefault();
      }
      $searchForm.find('input[name="category\[\]"]').remove();
      for (var _iterator = _createForOfIteratorHelperLoose(selectedCategoryIds), _step; !(_step = _iterator()).done;) {
        var categoryId = _step.value;
        var input = $('<input>', {
          type: 'hidden',
          name: 'category[]',
          value: categoryId
        });
        $searchForm.append(input);
      }
    });
    var $searchResultsMessage = $("<p\n            class=\"aria-description--hidden\"\n            tabindex=\"-1\"\n            role=\"status\"\n            aria-live=\"polite\"\n            >" + this.context.searchResultsCount + "</p>").prependTo('body');
    setTimeout(function () {
      return $searchResultsMessage.focus();
    }, 100);
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
  _proto.loadTreeNodes = function loadTreeNodes(node, cb) {
    var _this3 = this;
    $.ajax({
      url: '/remote/v1/category-tree',
      data: {
        selectedCategoryId: node.id,
        prefix: 'category'
      },
      headers: {
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      }
    }).done(function (data) {
      var formattedResults = [];
      data.forEach(function (dataNode) {
        formattedResults.push(_this3.formatCategoryTreeForJSTree(dataNode));
      });
      cb(formattedResults);
    });
  };
  _proto.createCategoryTree = function createCategoryTree($container) {
    var _this4 = this;
    var treeOptions = {
      core: {
        data: function data(node, cb) {
          // Root node
          if (node.id === '#') {
            cb(_this4.categoryTreeData);
          } else {
            // Lazy loaded children
            _this4.loadTreeNodes(node, cb);
          }
        },
        themes: {
          icons: true
        }
      },
      checkbox: {
        three_state: false
      },
      plugins: ['checkbox']
    };
    $container.jstree(treeOptions);
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this5 = this;
    // eslint-disable-next-line object-curly-newline
    var _this$context = this.context,
      onMinPriceError = _this$context.onMinPriceError,
      onMaxPriceError = _this$context.onMaxPriceError,
      minPriceNotEntered = _this$context.minPriceNotEntered,
      maxPriceNotEntered = _this$context.maxPriceNotEntered,
      onInvalidPrice = _this$context.onInvalidPrice;
    var $productListingContainer = $('#product-listing-container');
    var $contentListingContainer = $('#search-results-content');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $searchHeading = $('#search-results-heading');
    var $searchCount = $('#search-results-product-count');
    var $contentCount = $('#search-results-content-count');
    var $topbarContainer = $('#top-filter-container');
    var productsPerPage = this.context.searchProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'search/product-listing',
        contentListing: 'search/content-listing',
        sidebar: 'search/sidebar',
        heading: 'search/heading',
        productCount: 'search/product-count',
        contentCount: 'search/content-count',
        topbar: 'cavio/top-search-filter-options'
      },
      config: {
        product_results: {
          limit: productsPerPage
        }
      },
      showMore: 'search/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__["default"](requestOptions, function (content) {
      $searchHeading.html(content.heading);
      $topbarContainer.html(content.topbar);
      var url = url__WEBPACK_IMPORTED_MODULE_6__.parse(window.location.href, true);
      if (url.query.section === 'content') {
        $contentListingContainer.html(content.contentListing);
        $contentCount.html(content.contentCount);
        _this5.showContent(false);
      } else {
        $productListingContainer.html(content.productListing);
        $facetedSearchContainer.html(content.sidebar);
        $searchCount.html(content.productCount);
        _this5.showProducts(false);
      }
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
  _proto.initValidation = function initValidation($form) {
    this.$form = $form;
    this.validator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_9__["default"])({
      submit: $form,
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.announceInputErrorMessage
    });
    return this;
  };
  _proto.bindValidation = function bindValidation($element) {
    if (this.validator) {
      this.validator.add({
        selector: $element,
        validate: 'presence',
        errorMessage: $element.data('errorMessage')
      });
    }
    return this;
  };
  _proto.check = function check() {
    if (this.validator) {
      this.validator.performCheck();
      return this.validator.areAll('valid');
    }
    return false;
  };
  return Search;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9zZWFyY2hfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2Y7QUFDZ0I7QUFDa0I7QUFDZDtBQUNSO0FBQzFCO0FBQ2dDO0FBQ3RDO0FBQ2U7QUFFL0IsSUFBTVMsWUFBWSxHQUFHLEVBQUU7QUFDdkIsSUFBTUMsYUFBYSxHQUFHLEVBQUU7QUFBQyxJQUVKQyxNQUFNLDBCQUFBQyxZQUFBO0VBQUEsU0FBQUQsT0FBQTtJQUFBLE9BQUFDLFlBQUEsQ0FBQUMsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQUMsY0FBQSxDQUFBSixNQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBSSxNQUFBLEdBQUFMLE1BQUEsQ0FBQU0sU0FBQTtFQUFBRCxNQUFBLENBQ3ZCRSwyQkFBMkIsR0FBM0IsU0FBQUEsMkJBQTJCQSxDQUFDQyxJQUFJLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQzlCLElBQU1DLFFBQVEsR0FBRztNQUNiQyxJQUFJLEVBQUVILElBQUksQ0FBQ0ksSUFBSTtNQUNmQyxFQUFFLEVBQUVMLElBQUksQ0FBQ00sUUFBUSxDQUFDRCxFQUFFO01BQ3BCRSxLQUFLLEVBQUU7UUFDSEMsUUFBUSxFQUFFUixJQUFJLENBQUNRO01BQ25CO0lBQ0osQ0FBQztJQUVELElBQUlSLElBQUksQ0FBQ08sS0FBSyxFQUFFO01BQ1pMLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDRSxNQUFNLEdBQUdULElBQUksQ0FBQ08sS0FBSyxLQUFLLE1BQU07TUFDN0NMLFFBQVEsQ0FBQ1EsUUFBUSxHQUFHLElBQUk7SUFDNUI7SUFFQSxJQUFJVixJQUFJLENBQUNVLFFBQVEsRUFBRTtNQUNmUixRQUFRLENBQUNRLFFBQVEsR0FBRyxFQUFFO01BQ3RCVixJQUFJLENBQUNVLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLFVBQUNDLFNBQVMsRUFBSztRQUNqQ1YsUUFBUSxDQUFDUSxRQUFRLENBQUNH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T0FBQXZMLE1BQUE7QUFBQSxFQXJZK0JWLGdEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9uZXN0YXItY2F2aW8vLi9hc3NldHMvanMvdGhlbWUvc2VhcmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgeyBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIH0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vY29tbW9uL3V0aWxzL3VybC11dGlscyc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCAnanN0cmVlJztcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcblxuY29uc3QgbGVmdEFycm93S2V5ID0gMzc7XG5jb25zdCByaWdodEFycm93S2V5ID0gMzk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgICBmb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUobm9kZSkge1xuICAgICAgICBjb25zdCBub2RlRGF0YSA9IHtcbiAgICAgICAgICAgIHRleHQ6IG5vZGUuZGF0YSxcbiAgICAgICAgICAgIGlkOiBub2RlLm1ldGFkYXRhLmlkLFxuICAgICAgICAgICAgc3RhdGU6IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogbm9kZS5zZWxlY3RlZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG5vZGUuc3RhdGUpIHtcbiAgICAgICAgICAgIG5vZGVEYXRhLnN0YXRlLm9wZW5lZCA9IG5vZGUuc3RhdGUgPT09ICdvcGVuJztcbiAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbiA9IFtdO1xuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlRGF0YS5jaGlsZHJlbi5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKGNoaWxkTm9kZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZURhdGE7XG4gICAgfVxuXG4gICAgc2hvd1Byb2R1Y3RzKG5hdmlnYXRlID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuJyk7XG5cbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbi1jb2xvci0tYWN0aXZlJyk7XG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uJyk7XG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuXG4gICAgICAgIHRoaXMuYWN0aXZhdGVUYWIoJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKSk7XG5cbiAgICAgICAgaWYgKCFuYXZpZ2F0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoRGF0YSA9ICQoJyNzZWFyY2gtcmVzdWx0cy1wcm9kdWN0LWNvdW50IHNwYW4nKS5kYXRhKCk7XG4gICAgICAgIGNvbnN0IHVybCA9IChzZWFyY2hEYXRhLmNvdW50ID4gMCkgPyBzZWFyY2hEYXRhLnVybCA6IHVybFV0aWxzLnJlcGxhY2VQYXJhbXMoc2VhcmNoRGF0YS51cmwsIHtcbiAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICB9XG5cbiAgICBzaG93Q29udGVudChuYXZpZ2F0ZSA9IHRydWUpIHtcbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlbicpO1xuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlbicpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uJyk7XG5cbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcblxuICAgICAgICB0aGlzLmFjdGl2YXRlVGFiKCQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykpO1xuXG4gICAgICAgIGlmICghbmF2aWdhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlYXJjaERhdGEgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudC1jb3VudCBzcGFuJykuZGF0YSgpO1xuICAgICAgICBjb25zdCB1cmwgPSAoc2VhcmNoRGF0YS5jb3VudCA+IDApID8gc2VhcmNoRGF0YS51cmwgOiB1cmxVdGlscy5yZXBsYWNlUGFyYW1zKHNlYXJjaERhdGEudXJsLCB7XG4gICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICB9KTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGVUYWIoJHRhYlRvQWN0aXZhdGUpIHtcbiAgICAgICAgY29uc3QgJHRhYnNDb2xsZWN0aW9uID0gJCgnW2RhdGEtc2VhcmNoLXBhZ2UtdGFic10nKS5maW5kKCdbcm9sZT1cInRhYlwiXScpO1xuXG4gICAgICAgICR0YWJzQ29sbGVjdGlvbi5lYWNoKChpZHgsIHRhYikgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHRhYiA9ICQodGFiKTtcblxuICAgICAgICAgICAgaWYgKCR0YWIuaXMoJHRhYlRvQWN0aXZhdGUpKSB7XG4gICAgICAgICAgICAgICAgJHRhYi5yZW1vdmVBdHRyKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgICAgICR0YWIuYXR0cignYXJpYS1zZWxlY3RlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHRhYi5hdHRyKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgJHRhYi5hdHRyKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblRhYkNoYW5nZVdpdGhBcnJvd3MoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZXZlbnRLZXkgPSBldmVudC53aGljaDtcbiAgICAgICAgY29uc3QgaXNMZWZ0T3JSaWdodEFycm93S2V5ZG93biA9IGV2ZW50S2V5ID09PSBsZWZ0QXJyb3dLZXlcbiAgICAgICAgICAgIHx8IGV2ZW50S2V5ID09PSByaWdodEFycm93S2V5O1xuICAgICAgICBpZiAoIWlzTGVmdE9yUmlnaHRBcnJvd0tleWRvd24pIHJldHVybjtcblxuICAgICAgICBjb25zdCAkdGFic0NvbGxlY3Rpb24gPSAkKCdbZGF0YS1zZWFyY2gtcGFnZS10YWJzXScpLmZpbmQoJ1tyb2xlPVwidGFiXCJdJyk7XG5cbiAgICAgICAgY29uc3QgaXNBY3RpdmVFbGVtZW50Tm90VGFiID0gJHRhYnNDb2xsZWN0aW9uLmluZGV4KCQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpID09PSAtMTtcbiAgICAgICAgaWYgKGlzQWN0aXZlRWxlbWVudE5vdFRhYikgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0ICRhY3RpdmVUYWIgPSAkKGAjJHtkb2N1bWVudC5hY3RpdmVFbGVtZW50LmlkfWApO1xuICAgICAgICBjb25zdCBhY3RpdmVUYWJJZHggPSAkdGFic0NvbGxlY3Rpb24uaW5kZXgoJGFjdGl2ZVRhYik7XG4gICAgICAgIGNvbnN0IGxhc3RUYWJJZHggPSAkdGFic0NvbGxlY3Rpb24ubGVuZ3RoIC0gMTtcblxuICAgICAgICBsZXQgbmV4dFRhYklkeDtcbiAgICAgICAgc3dpdGNoIChldmVudEtleSkge1xuICAgICAgICBjYXNlIGxlZnRBcnJvd0tleTpcbiAgICAgICAgICAgIG5leHRUYWJJZHggPSBhY3RpdmVUYWJJZHggPT09IDAgPyBsYXN0VGFiSWR4IDogYWN0aXZlVGFiSWR4IC0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHJpZ2h0QXJyb3dLZXk6XG4gICAgICAgICAgICBuZXh0VGFiSWR4ID0gYWN0aXZlVGFiSWR4ID09PSBsYXN0VGFiSWR4ID8gMCA6IGFjdGl2ZVRhYklkeCArIDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDogYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAkKCR0YWJzQ29sbGVjdGlvbi5nZXQobmV4dFRhYklkeCkpLmZvY3VzKCkudHJpZ2dlcignY2xpY2snKTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0KTtcbiAgICAgICAgdGhpcy5hcnJhbmdlRm9jdXNPblNvcnRCeSgpO1xuXG4gICAgICAgIGNvbnN0ICRzZWFyY2hGb3JtID0gJCgnW2RhdGEtYWR2YW5jZWQtc2VhcmNoLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRjYXRlZ29yeVRyZWVDb250YWluZXIgPSAkc2VhcmNoRm9ybS5maW5kKCdbZGF0YS1zZWFyY2gtY2F0ZWdvcnktdHJlZV0nKTtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgdHJlZURhdGEgPSBbXTtcbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lciA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50Jyk7XG5cbiAgICAgICAgLy8gSW5pdCBmYWNldGVkIHNlYXJjaFxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpbHRlcnNob3doaWRlKCk7XG4gICAgICAgIHRoaXMuZmlsdGVyc2hvd2hpZGVvdXRzaWRlKCk7XG4gICAgICAgIC8vIENhbGwgdGhlIG1ldGhvZCB0byB1cGRhdGUgdGhlIHNpZGViYXIgY2xhc3NcbiAgICAgICAgdGhpcy51cGRhdGVTaWRlYmFyQ2xhc3MoKTtcbiAgICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciB3aW5kb3cgcmVzaXplXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVNpZGViYXJDbGFzcyk7XG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtc2VhcmNoLXBhZ2UtdGFic10nKS5vbigna2V5dXAnLCB0aGlzLm9uVGFiQ2hhbmdlV2l0aEFycm93cyk7XG5cbiAgICAgICAgaWYgKHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmZpbmQoJ2xpLnByb2R1Y3QnKS5sZW5ndGggPT09IDAgfHwgdXJsLnF1ZXJ5LnNlY3Rpb24gPT09ICdjb250ZW50Jykge1xuICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudChmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0cyhmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSB0aGlzLmluaXRWYWxpZGF0aW9uKCRzZWFyY2hGb3JtKVxuICAgICAgICAgICAgLmJpbmRWYWxpZGF0aW9uKCRzZWFyY2hGb3JtLmZpbmQoJyNzZWFyY2hfcXVlcnlfYWR2JykpO1xuXG4gICAgICAgIHRoaXMuY29udGV4dC5jYXRlZ29yeVRyZWUuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgdHJlZURhdGEucHVzaCh0aGlzLmZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShub2RlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlUcmVlRGF0YSA9IHRyZWVEYXRhO1xuICAgICAgICB0aGlzLmNyZWF0ZUNhdGVnb3J5VHJlZSgkY2F0ZWdvcnlUcmVlQ29udGFpbmVyKTtcblxuICAgICAgICAkc2VhcmNoRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDYXRlZ29yeUlkcyA9ICRjYXRlZ29yeVRyZWVDb250YWluZXIuanN0cmVlKCkuZ2V0X3NlbGVjdGVkKCk7XG5cbiAgICAgICAgICAgIGlmICghdmFsaWRhdG9yLmNoZWNrKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHNlYXJjaEZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImNhdGVnb3J5XFxbXFxdXCJdJykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgY2F0ZWdvcnlJZCBvZiBzZWxlY3RlZENhdGVnb3J5SWRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSAkKCc8aW5wdXQ+Jywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NhdGVnb3J5W10nLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2F0ZWdvcnlJZCxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICRzZWFyY2hGb3JtLmFwcGVuZChpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0ICRzZWFyY2hSZXN1bHRzTWVzc2FnZSA9ICQoYDxwXG4gICAgICAgICAgICBjbGFzcz1cImFyaWEtZGVzY3JpcHRpb24tLWhpZGRlblwiXG4gICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAgIHJvbGU9XCJzdGF0dXNcIlxuICAgICAgICAgICAgYXJpYS1saXZlPVwicG9saXRlXCJcbiAgICAgICAgICAgID4ke3RoaXMuY29udGV4dC5zZWFyY2hSZXN1bHRzQ291bnR9PC9wPmApXG4gICAgICAgICAgICAucHJlcGVuZFRvKCdib2R5Jyk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiAkc2VhcmNoUmVzdWx0c01lc3NhZ2UuZm9jdXMoKSwgMTAwKTtcbiAgICB9XG4gICAgZmlsdGVyc2hvd2hpZGUoKXtcbiAgICAgICAgJCgnLmZpbHRlci12aXNpYmlsaXR5LWJ1dHRvbicpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgICAgICQoJy5maWx0ZXItdmlzaWJpbGl0eS1idXR0b24nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKFwiLnBhZ2UucHJvZHVjdC0tbGlzdGluZ1wiKS50b2dnbGVDbGFzcyhcImZpbHRlci0tYWN0aXZlXCIpO1xuICAgICAgICAgICAgJChcIi5mbHlvdXQtZmlsdGVyc1wiKS5wYXJlbnRzKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcIm1hc2stZmlsdGVyXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZmlsdGVyc2hvd2hpZGVvdXRzaWRlKCkge1xuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAhJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJy5wYWdlLXNpZGViYXIsIC5maWx0ZXItdmlzaWJpbGl0eS1idXR0b24nKS5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAkKFwiLnBhZ2UucHJvZHVjdC0tbGlzdGluZ1wiKS5oYXNDbGFzcyhcImZpbHRlci0tYWN0aXZlXCIpICYmXG4gICAgICAgICAgICAgICAgISQoJ2JvZHknKS5oYXNDbGFzcyhcInBvcHVwLWFjdGl2ZVwiKSAmJlxuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0LS1saXN0aW5nJykuaGFzQ2xhc3MoXCJmbHlvdXQtZmlsdGVyc1wiKSBcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8vIEV4ZWN1dGUgdGhlIHNjcmlwdFxuICAgICAgICAgICAgICAgICQoJy5maWx0ZXItdmlzaWJpbGl0eS1idXR0b24nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJChcIi5wYWdlLnByb2R1Y3QtLWxpc3RpbmdcIikudG9nZ2xlQ2xhc3MoXCJmaWx0ZXItLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAkKFwiLmZseW91dC1maWx0ZXJzXCIpLnBhcmVudHMoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwibWFzay1maWx0ZXJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gICAgIFxuICAgIHVwZGF0ZVNpZGViYXJDbGFzcygpIHtcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9ICQoJy5zY3JvbGxpbmctc2lkZWJhci1kZXNrdG9wJyk7XG4gICAgICAgIGNvbnN0IHNpZGViYXJtb2JpbGUgPSAkKCcuc2Nyb2xsaW5nLXNpZGViYXItZGVza3RvcC5maWx0ZXItLWFjdGl2ZScpO1xuICAgICAgICBpZiAoc2lkZWJhci5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQpIHtcbiAgICAgICAgICAgICAgICBzaWRlYmFyLnJlbW92ZUNsYXNzKCdzY3JvbGxpbmctc2lkZWJhcicpLmFkZENsYXNzKCdmbHlvdXQtZmlsdGVycycpO1xuICAgICAgICAgICAgICAgIGlmIChzaWRlYmFybW9iaWxlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyLnBhcmVudHMoJ2JvZHknKS5hZGRDbGFzcygnbWFzay1maWx0ZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNpZGViYXIucmVtb3ZlQ2xhc3MoJ2ZseW91dC1maWx0ZXJzJykuYWRkQ2xhc3MoJ3Njcm9sbGluZy1zaWRlYmFyJyk7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5wYXJlbnRzKCdib2R5JykucmVtb3ZlQ2xhc3MoJ21hc2stZmlsdGVyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9ICAgIFxuICAgIGxvYWRUcmVlTm9kZXMobm9kZSwgY2IpIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJy9yZW1vdGUvdjEvY2F0ZWdvcnktdHJlZScsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeUlkOiBub2RlLmlkLFxuICAgICAgICAgICAgICAgIHByZWZpeDogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ3gteHNyZi10b2tlbic6IHdpbmRvdy5CQ0RhdGEgJiYgd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuID8gd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuIDogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KS5kb25lKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkUmVzdWx0cyA9IFtdO1xuXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGRhdGFOb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkUmVzdWx0cy5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKGRhdGFOb2RlKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2IoZm9ybWF0dGVkUmVzdWx0cyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZUNhdGVnb3J5VHJlZSgkY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHRyZWVPcHRpb25zID0ge1xuICAgICAgICAgICAgY29yZToge1xuICAgICAgICAgICAgICAgIGRhdGE6IChub2RlLCBjYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBSb290IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuaWQgPT09ICcjJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IodGhpcy5jYXRlZ29yeVRyZWVEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExhenkgbG9hZGVkIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUcmVlTm9kZXMobm9kZSwgY2IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVtZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbnM6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja2JveDoge1xuICAgICAgICAgICAgICAgIHRocmVlX3N0YXRlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAgJ2NoZWNrYm94JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH07XG5cbiAgICAgICAgJGNvbnRhaW5lci5qc3RyZWUodHJlZU9wdGlvbnMpO1xuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgb2JqZWN0LWN1cmx5LW5ld2xpbmVcbiAgICAgICAgY29uc3QgeyBvbk1pblByaWNlRXJyb3IsIG9uTWF4UHJpY2VFcnJvciwgbWluUHJpY2VOb3RFbnRlcmVkLCBtYXhQcmljZU5vdEVudGVyZWQsIG9uSW52YWxpZFByaWNlIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRjb250ZW50TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkc2VhcmNoSGVhZGluZyA9ICQoJyNzZWFyY2gtcmVzdWx0cy1oZWFkaW5nJyk7XG4gICAgICAgIGNvbnN0ICRzZWFyY2hDb3VudCA9ICQoJyNzZWFyY2gtcmVzdWx0cy1wcm9kdWN0LWNvdW50Jyk7XG4gICAgICAgIGNvbnN0ICRjb250ZW50Q291bnQgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudC1jb3VudCcpO1xuICAgICAgICBjb25zdCAkdG9wYmFyQ29udGFpbmVyID0gJCgnI3RvcC1maWx0ZXItY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5zZWFyY2hQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ3NlYXJjaC9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRMaXN0aW5nOiAnc2VhcmNoL2NvbnRlbnQtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ3NlYXJjaC9zaWRlYmFyJyxcbiAgICAgICAgICAgICAgICBoZWFkaW5nOiAnc2VhcmNoL2hlYWRpbmcnLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RDb3VudDogJ3NlYXJjaC9wcm9kdWN0LWNvdW50JyxcbiAgICAgICAgICAgICAgICBjb250ZW50Q291bnQ6ICdzZWFyY2gvY29udGVudC1jb3VudCcsXG4gICAgICAgICAgICAgICAgdG9wYmFyOiAnY2F2aW8vdG9wLXNlYXJjaC1maWx0ZXItb3B0aW9ucycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdF9yZXN1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93TW9yZTogJ3NlYXJjaC9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJHNlYXJjaEhlYWRpbmcuaHRtbChjb250ZW50LmhlYWRpbmcpO1xuICAgICAgICAgICAgJHRvcGJhckNvbnRhaW5lci5odG1sKGNvbnRlbnQudG9wYmFyKTtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAodXJsLnF1ZXJ5LnNlY3Rpb24gPT09ICdjb250ZW50Jykge1xuICAgICAgICAgICAgICAgICRjb250ZW50TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQuY29udGVudExpc3RpbmcpO1xuICAgICAgICAgICAgICAgICRjb250ZW50Q291bnQuaHRtbChjb250ZW50LmNvbnRlbnRDb3VudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudChmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAgICAgICAgICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcbiAgICAgICAgICAgICAgICAkc2VhcmNoQ291bnQuaHRtbChjb250ZW50LnByb2R1Y3RDb3VudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UHJvZHVjdHMoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xuXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgICQoJy5maWx0ZXItdmlzaWJpbGl0eS1idXR0b24nKS5jbGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnLmZpbHRlci12aXNpYmlsaXR5LWJ1dHRvbicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKFwiLnBhZ2UucHJvZHVjdC0tbGlzdGluZ1wiKS50b2dnbGVDbGFzcyhcImZpbHRlci0tYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICQoXCIuZmx5b3V0LWZpbHRlcnNcIikucGFyZW50cyhcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJtYXNrLWZpbHRlclwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCQoJy5wYWdlLnByb2R1Y3QtLWxpc3RpbmcnKS5oYXNDbGFzcygnZmlsdGVyLS1hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgICQoJy5maWx0ZXItdmlzaWJpbGl0eS1idXR0b24nKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgIFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRWYWxpZGF0aW9uKCRmb3JtKSB7XG4gICAgICAgIHRoaXMuJGZvcm0gPSAkZm9ybTtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkZm9ybSxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYmluZFZhbGlkYXRpb24oJGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAkZWxlbWVudCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICRlbGVtZW50LmRhdGEoJ2Vycm9yTWVzc2FnZScpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjaGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImhvb2tzIiwiQ2F0YWxvZ1BhZ2UiLCJGYWNldGVkU2VhcmNoIiwiYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSIsImNvbXBhcmVQcm9kdWN0cyIsInVybFV0aWxzIiwiVXJsIiwiY29sbGFwc2libGVGYWN0b3J5Iiwibm9kIiwibGVmdEFycm93S2V5IiwicmlnaHRBcnJvd0tleSIsIlNlYXJjaCIsIl9DYXRhbG9nUGFnZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJmb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUiLCJub2RlIiwiX3RoaXMiLCJub2RlRGF0YSIsInRleHQiLCJkYXRhIiwiaWQiLCJtZXRhZGF0YSIsInN0YXRlIiwic2VsZWN0ZWQiLCJvcGVuZWQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJwdXNoIiwic2hvd1Byb2R1Y3RzIiwibmF2aWdhdGUiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCJyZW1vdmVDbGFzcyIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwiJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyIiwiYWRkQ2xhc3MiLCIkIiwiYWN0aXZhdGVUYWIiLCJzZWFyY2hEYXRhIiwidXJsIiwiY291bnQiLCJyZXBsYWNlUGFyYW1zIiwicGFnZSIsImdvVG9VcmwiLCJzaG93Q29udGVudCIsIiR0YWJUb0FjdGl2YXRlIiwiJHRhYnNDb2xsZWN0aW9uIiwiZmluZCIsImVhY2giLCJpZHgiLCJ0YWIiLCIkdGFiIiwiaXMiLCJyZW1vdmVBdHRyIiwiYXR0ciIsIm9uVGFiQ2hhbmdlV2l0aEFycm93cyIsImV2ZW50IiwiZXZlbnRLZXkiLCJ3aGljaCIsImlzTGVmdE9yUmlnaHRBcnJvd0tleWRvd24iLCJpc0FjdGl2ZUVsZW1lbnROb3RUYWIiLCJpbmRleCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsIiRhY3RpdmVUYWIiLCJhY3RpdmVUYWJJZHgiLCJsYXN0VGFiSWR4IiwibGVuZ3RoIiwibmV4dFRhYklkeCIsImdldCIsImZvY3VzIiwidHJpZ2dlciIsIm9uUmVhZHkiLCJfdGhpczIiLCJjb250ZXh0IiwiYXJyYW5nZUZvY3VzT25Tb3J0QnkiLCIkc2VhcmNoRm9ybSIsIiRjYXRlZ29yeVRyZWVDb250YWluZXIiLCJwYXJzZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInRyZWVEYXRhIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJvbiIsImZpbHRlcnNob3doaWRlIiwiZmlsdGVyc2hvd2hpZGVvdXRzaWRlIiwidXBkYXRlU2lkZWJhckNsYXNzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByZXZlbnREZWZhdWx0IiwicXVlcnkiLCJzZWN0aW9uIiwidmFsaWRhdG9yIiwiaW5pdFZhbGlkYXRpb24iLCJiaW5kVmFsaWRhdGlvbiIsImNhdGVnb3J5VHJlZSIsImNhdGVnb3J5VHJlZURhdGEiLCJjcmVhdGVDYXRlZ29yeVRyZWUiLCJzZWxlY3RlZENhdGVnb3J5SWRzIiwianN0cmVlIiwiZ2V0X3NlbGVjdGVkIiwiY2hlY2siLCJyZW1vdmUiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlIiwiX3N0ZXAiLCJkb25lIiwiY2F0ZWdvcnlJZCIsInZhbHVlIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImFwcGVuZCIsIiRzZWFyY2hSZXN1bHRzTWVzc2FnZSIsInNlYXJjaFJlc3VsdHNDb3VudCIsInByZXBlbmRUbyIsInNldFRpbWVvdXQiLCJjbGljayIsInRvZ2dsZUNsYXNzIiwicGFyZW50cyIsInRhcmdldCIsImNsb3Nlc3QiLCJoYXNDbGFzcyIsInNpZGViYXIiLCJzaWRlYmFybW9iaWxlIiwiaW5uZXJXaWR0aCIsImxvYWRUcmVlTm9kZXMiLCJjYiIsIl90aGlzMyIsImFqYXgiLCJzZWxlY3RlZENhdGVnb3J5SWQiLCJwcmVmaXgiLCJoZWFkZXJzIiwiQkNEYXRhIiwiY3NyZl90b2tlbiIsImZvcm1hdHRlZFJlc3VsdHMiLCJkYXRhTm9kZSIsIiRjb250YWluZXIiLCJfdGhpczQiLCJ0cmVlT3B0aW9ucyIsImNvcmUiLCJ0aGVtZXMiLCJpY29ucyIsImNoZWNrYm94IiwidGhyZWVfc3RhdGUiLCJwbHVnaW5zIiwiX3RoaXM1IiwiX3RoaXMkY29udGV4dCIsIm9uTWluUHJpY2VFcnJvciIsIm9uTWF4UHJpY2VFcnJvciIsIm1pblByaWNlTm90RW50ZXJlZCIsIm1heFByaWNlTm90RW50ZXJlZCIsIm9uSW52YWxpZFByaWNlIiwiJGNvbnRlbnRMaXN0aW5nQ29udGFpbmVyIiwiJHNlYXJjaEhlYWRpbmciLCIkc2VhcmNoQ291bnQiLCIkY29udGVudENvdW50IiwiJHRvcGJhckNvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsInNlYXJjaFByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsImNvbnRlbnRMaXN0aW5nIiwiaGVhZGluZyIsInByb2R1Y3RDb3VudCIsImNvbnRlbnRDb3VudCIsInRvcGJhciIsImNvbmZpZyIsInByb2R1Y3RfcmVzdWx0cyIsImxpbWl0Iiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJ0cmlnZ2VySGFuZGxlciIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ2YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyIsIiRmb3JtIiwic3VibWl0IiwidGFwIiwiJGVsZW1lbnQiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiZXJyb3JNZXNzYWdlIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=
