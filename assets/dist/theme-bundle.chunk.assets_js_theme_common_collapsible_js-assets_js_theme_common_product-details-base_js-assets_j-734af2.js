"use strict";
(self["webpackChunkRoots"] = self["webpackChunkRoots"] || []).push([["assets_js_theme_common_collapsible_js-assets_js_theme_common_product-details-base_js-assets_j-734af2"],{

/***/ "./assets/js/theme/common/aria/constants.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/aria/constants.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ariaKeyCodes: () => (/* binding */ ariaKeyCodes)
/* harmony export */ });
var ariaKeyCodes = {
  RETURN: 13,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

/***/ }),

/***/ "./assets/js/theme/common/aria/index.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/common/aria/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initRadioOptions: () => (/* reexport safe */ _radioOptions__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _radioOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radioOptions */ "./assets/js/theme/common/aria/radioOptions.js");


/***/ }),

/***/ "./assets/js/theme/common/aria/radioOptions.js":
/*!*****************************************************!*\
  !*** ./assets/js/theme/common/aria/radioOptions.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./assets/js/theme/common/aria/constants.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var setCheckedRadioItem = function setCheckedRadioItem(itemCollection, itemIdx) {
  itemCollection.each(function (idx, item) {
    var $item = $(item);
    if (idx !== itemIdx) {
      $item.attr('aria-checked', false).prop('checked', false);
      return;
    }
    $item.attr('aria-checked', true).prop('checked', true).focus();
    $item.trigger('change');
  });
};
var calculateTargetItemPosition = function calculateTargetItemPosition(lastItemIdx, currentIdx) {
  switch (true) {
    case currentIdx > lastItemIdx:
      return 0;
    case currentIdx < 0:
      return lastItemIdx;
    default:
      return currentIdx;
  }
};
var handleItemKeyDown = function handleItemKeyDown(itemCollection) {
  return function (e) {
    var keyCode = e.keyCode;
    var itemIdx = itemCollection.index(e.currentTarget);
    var lastCollectionItemIdx = itemCollection.length - 1;
    if (Object.values(_constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes).includes(keyCode)) {
      e.preventDefault();
      e.stopPropagation();
    }
    switch (keyCode) {
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.LEFT:
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.UP:
        {
          var prevItemIdx = calculateTargetItemPosition(lastCollectionItemIdx, itemIdx - 1);
          itemCollection.get(prevItemIdx).focus();
          setCheckedRadioItem(itemCollection, itemIdx - 1);
          break;
        }
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.RIGHT:
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.DOWN:
        {
          var nextItemIdx = calculateTargetItemPosition(lastCollectionItemIdx, itemIdx + 1);
          itemCollection.get(nextItemIdx).focus();
          setCheckedRadioItem(itemCollection, itemIdx + 1);
          break;
        }
      default:
        break;
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function ($container, itemSelector) {
  var $itemCollection = $container.find(itemSelector);
  $container.on('keydown', itemSelector, handleItemKeyDown($itemCollection));
});

/***/ }),

/***/ "./assets/js/theme/common/collapsible.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/common/collapsible.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Collapsible: () => (/* binding */ Collapsible),
/* harmony export */   CollapsibleEvents: () => (/* binding */ CollapsibleEvents),
/* harmony export */   "default": () => (/* binding */ collapsibleFactory)
/* harmony export */ });
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _media_query_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-query-list */ "./assets/js/theme/common/media-query-list.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var PLUGIN_KEY = 'collapsible';
var CollapsibleEvents = {
  open: 'open.collapsible',
  close: 'close.collapsible',
  toggle: 'toggle.collapsible',
  click: 'click.collapsible'
};
var CollapsibleState = {
  closed: 'closed',
  open: 'open'
};
function prependHash(id) {
  if (id && id.indexOf('#') === 0) {
    return id;
  }
  return "#" + id;
}
function optionsFromData($element) {
  return {
    disabledBreakpoint: $element.data(PLUGIN_KEY + "DisabledBreakpoint"),
    disabledState: $element.data(PLUGIN_KEY + "DisabledState"),
    enabledState: $element.data(PLUGIN_KEY + "EnabledState"),
    openClassName: $element.data(PLUGIN_KEY + "OpenClassName")
  };
}

/**
 * Collapse/Expand toggle
 */
var Collapsible = /*#__PURE__*/function () {
  /**
   * @param {jQuery} $toggle - Trigger button
   * @param {jQuery} $target - Content to collapse / expand
   * @param {Object} [options] - Configurable options
   * @param {Object} [options.$context]
   * @param {String} [options.disabledBreakpoint]
   * @param {Object} [options.disabledState]
   * @param {Object} [options.enabledState]
   * @param {String} [options.openClassName]
   * @example
   *
   * <button id="#more">Collapse</button>
   * <div id="content">...</div>
   *
   * new Collapsible($('#more'), $('#content'));
   */
  function Collapsible($toggle, $target, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      disabledBreakpoint = _ref.disabledBreakpoint,
      disabledState = _ref.disabledState,
      enabledState = _ref.enabledState,
      _ref$openClassName = _ref.openClassName,
      openClassName = _ref$openClassName === void 0 ? 'is-open' : _ref$openClassName;
    this.$toggle = $toggle;
    this.$target = $target;
    this.targetId = $target.attr('id');
    this.openClassName = openClassName;
    this.disabledState = disabledState;
    this.enabledState = enabledState;
    if (disabledBreakpoint) {
      this.disabledMediaQueryList = (0,_media_query_list__WEBPACK_IMPORTED_MODULE_1__["default"])(disabledBreakpoint);
    }
    if (this.disabledMediaQueryList) {
      this.disabled = this.disabledMediaQueryList.matches;
    } else {
      this.disabled = false;
    }

    // Auto-bind
    this.onClicked = this.onClicked.bind(this);
    this.onDisabledMediaQueryListMatch = this.onDisabledMediaQueryListMatch.bind(this);

    // Assign DOM attributes
    this.$target.attr('aria-hidden', this.isCollapsed);
    this.$toggle.attr('aria-label', this._getToggleAriaLabelText($toggle)).attr('aria-controls', $target.attr('id')).attr('aria-expanded', this.isOpen);

    // Listen
    this.bindEvents();
  }
  var _proto = Collapsible.prototype;
  _proto._getToggleAriaLabelText = function _getToggleAriaLabelText($toggle) {
    var $textToggleChildren = $toggle.children().filter(function (__, child) {
      return $(child).text().trim();
    });
    var $ariaLabelTarget = $textToggleChildren.length ? $textToggleChildren.first() : $toggle;
    return $($ariaLabelTarget).text().trim();
  };
  _proto.open = function open(_temp2) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
      _ref2$notify = _ref2.notify,
      notify = _ref2$notify === void 0 ? true : _ref2$notify;
    this.$toggle.addClass(this.openClassName).attr('aria-expanded', true);
    this.$target.addClass(this.openClassName).attr('aria-hidden', false);
    if (notify) {
      this.$toggle.trigger(CollapsibleEvents.open, [this]);
      this.$toggle.trigger(CollapsibleEvents.toggle, [this]);
    }
  };
  _proto.close = function close(_temp3) {
    var _ref3 = _temp3 === void 0 ? {} : _temp3,
      _ref3$notify = _ref3.notify,
      notify = _ref3$notify === void 0 ? true : _ref3$notify;
    this.$toggle.removeClass(this.openClassName).attr('aria-expanded', false);
    this.$target.removeClass(this.openClassName).attr('aria-hidden', true);
    if (notify) {
      this.$toggle.trigger(CollapsibleEvents.close, [this]);
      this.$toggle.trigger(CollapsibleEvents.toggle, [this]);
    }
  };
  _proto.toggle = function toggle() {
    if (this.isCollapsed) {
      this.open();
    } else {
      this.close();
    }
  };
  _proto.toggleByState = function toggleByState(state) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    switch (state) {
      case CollapsibleState.open:
        return this.open.apply(this, args);
      case CollapsibleState.closed:
        return this.close.apply(this, args);
      default:
        return undefined;
    }
  };
  _proto.hasCollapsible = function hasCollapsible(collapsibleInstance) {
    return $.contains(this.$target.get(0), collapsibleInstance.$target.get(0));
  };
  _proto.bindEvents = function bindEvents() {
    this.$toggle.on(CollapsibleEvents.click, this.onClicked);
    if (this.disabledMediaQueryList && this.disabledMediaQueryList.addListener) {
      this.disabledMediaQueryList.addListener(this.onDisabledMediaQueryListMatch);
    }
  };
  _proto.unbindEvents = function unbindEvents() {
    this.$toggle.off(CollapsibleEvents.click, this.onClicked);
    if (this.disabledMediaQueryList && this.disabledMediaQueryList.removeListener) {
      this.disabledMediaQueryList.removeListener(this.onDisabledMediaQueryListMatch);
    }
  };
  _proto.onClicked = function onClicked(event) {
    if (this.disabled) {
      return;
    }
    event.preventDefault();
    this.toggle();
  };
  _proto.onDisabledMediaQueryListMatch = function onDisabledMediaQueryListMatch(media) {
    this.disabled = media.matches;
  };
  return _createClass(Collapsible, [{
    key: "isCollapsed",
    get: function get() {
      return this.$target.is(':hidden') && !this.$target.hasClass(this.openClassName);
    }
  }, {
    key: "isOpen",
    get: function get() {
      return !this.isCollapsed;
    }
  }, {
    key: "disabled",
    get: function get() {
      return this._disabled;
    },
    set: function set(disabled) {
      this._disabled = disabled;
      if (disabled) {
        this.toggleByState(this.disabledState);
      } else {
        this.toggleByState(this.enabledState);
      }
    }
  }]);
}();

/**
 * Convenience method for constructing Collapsible instance
 *
 * @param {string} [selector]
 * @param {Object} [overrideOptions]
 * @param {Object} [overrideOptions.$context]
 * @param {String} [overrideOptions.disabledBreakpoint]
 * @param {Object} [overrideOptions.disabledState]
 * @param {Object} [overrideOptions.enabledState]
 * @param {String} [overrideOptions.openClassName]
 * @return {Array} array of Collapsible instances
 *
 * @example
 * <a href="#content" data-collapsible>Collapse</a>
 * <div id="content">...</div>
 *
 * collapsibleFactory();
 */
function collapsibleFactory(selector, overrideOptions) {
  if (selector === void 0) {
    selector = "[data-" + PLUGIN_KEY + "]";
  }
  if (overrideOptions === void 0) {
    overrideOptions = {};
  }
  var $collapsibles = $(selector, overrideOptions.$context);
  return $collapsibles.map(function (index, element) {
    var $toggle = $(element);
    var instanceKey = PLUGIN_KEY + "Instance";
    var cachedCollapsible = $toggle.data(instanceKey);
    if (cachedCollapsible instanceof Collapsible) {
      return cachedCollapsible;
    }
    var targetId = prependHash($toggle.data(PLUGIN_KEY) || $toggle.data(PLUGIN_KEY + "Target") || $toggle.attr('href'));
    var options = lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(optionsFromData($toggle), overrideOptions);
    var collapsible = new Collapsible($toggle, $(targetId, overrideOptions.$context), options);
    $toggle.data(instanceKey, collapsible);
    return collapsible;
  }).toArray();
}

/***/ }),

/***/ "./assets/js/theme/common/media-query-list.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/common/media-query-list.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mediaQueryListFactory)
/* harmony export */ });
/*
 * Remember to update /assets/scss/settings/global/screensizes/screensizes.scss
 * if you decide to change breakpoint values
 */
var breakpointSizes = {
  large: 1261,
  medium: 801,
  small: 551
};

/**
 * Create MediaQueryList using breakpoint name
 * @param {string} breakpointName
 * @return {MediaQueryList|null}
 */
function mediaQueryListFactory(breakpointName) {
  if (!breakpointName || !window.matchMedia) {
    return null;
  }
  var breakpoint = breakpointSizes[breakpointName];
  var mediaQuery = "(min-width: " + breakpoint + "px)";
  var mediaQueryList = window.matchMedia(mediaQuery);
  return mediaQueryList;
}

/***/ }),

/***/ "./assets/js/theme/common/product-details-base.js":
/*!********************************************************!*\
  !*** ./assets/js/theme/common/product-details-base.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductDetailsBase),
/* harmony export */   optionChangeDecorator: () => (/* binding */ optionChangeDecorator)
/* harmony export */ });
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _aria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aria */ "./assets/js/theme/common/aria/index.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");




var optionsTypesMap = {
  INPUT_FILE: 'input-file',
  INPUT_TEXT: 'input-text',
  INPUT_NUMBER: 'input-number',
  INPUT_CHECKBOX: 'input-checkbox',
  TEXTAREA: 'textarea',
  DATE: 'date',
  SET_SELECT: 'set-select',
  SET_RECTANGLE: 'set-rectangle',
  SET_RADIO: 'set-radio',
  SWATCH: 'swatch',
  PRODUCT_LIST: 'product-list'
};
function optionChangeDecorator(areDefaultOtionsSet) {
  var _this = this;
  return function (err, response) {
    var attributesData = response.data || {};
    var attributesContent = response.content || {};
    _this.updateProductAttributes(attributesData);
    if (areDefaultOtionsSet) {
      _this.updateView(attributesData, attributesContent);
    } else {
      _this.updateDefaultAttributesForOOS(attributesData);
    }
  };
}
var ProductDetailsBase = /*#__PURE__*/function () {
  function ProductDetailsBase($scope, context) {
    var _this2 = this;
    this.$scope = $scope;
    this.context = context;
    this.initRadioAttributes();
    _wishlist__WEBPACK_IMPORTED_MODULE_2__["default"].load(this.context);
    this.getTabRequests();
    $('[data-product-attribute]').each(function (__, value) {
      var type = value.getAttribute('data-product-attribute');
      _this2._makeProductVariantAccessible(value, type);
    });
  }
  var _proto = ProductDetailsBase.prototype;
  _proto._makeProductVariantAccessible = function _makeProductVariantAccessible(variantDomNode, variantType) {
    switch (variantType) {
      case optionsTypesMap.SET_RADIO:
      case optionsTypesMap.SWATCH:
        {
          (0,_aria__WEBPACK_IMPORTED_MODULE_3__.initRadioOptions)($(variantDomNode), '[type=radio]');
          break;
        }
      default:
        break;
    }
  }

  /**
   * Allow radio buttons to get deselected
   */;
  _proto.initRadioAttributes = function initRadioAttributes() {
    var _this3 = this;
    $('[data-product-attribute] input[type="radio"]', this.$scope).each(function (i, radio) {
      var $radio = $(radio);

      // Only bind to click once
      if ($radio.attr('data-state') !== undefined) {
        $radio.on('click', function () {
          if ($radio.data('state') === true) {
            $radio.prop('checked', false);
            $radio.data('state', false);
            $radio.trigger('change');
          } else {
            $radio.data('state', true);
          }
          _this3.initRadioAttributes();
        });
      }
      $radio.attr('data-state', $radio.prop('checked'));
    });
  }

  /**
   * Hide or mark as unavailable out of stock attributes if enabled
   * @param  {Object} data Product attribute data
   */;
  _proto.updateProductAttributes = function updateProductAttributes(data) {
    var _this4 = this;
    var behavior = data.out_of_stock_behavior;
    var inStockIds = data.in_stock_attributes;
    var outOfStockMessage = " (" + data.out_of_stock_message + ")";
    if (behavior !== 'hide_option' && behavior !== 'label_option') {
      return;
    }
    $('[data-product-attribute-value]', this.$scope).each(function (i, attribute) {
      var $attribute = $(attribute);
      var attrId = parseInt($attribute.data('productAttributeValue'), 10);
      if (inStockIds.indexOf(attrId) !== -1) {
        _this4.enableAttribute($attribute, behavior, outOfStockMessage);
      } else {
        _this4.disableAttribute($attribute, behavior, outOfStockMessage);
      }
    });
  }

  /**
   * Check for fragment identifier in URL requesting a specific tab
   */;
  _proto.getTabRequests = function getTabRequests() {
    if (window.location.hash && window.location.hash.indexOf('#tab-') === 0) {
      var $activeTab = $('.tabs').has("[href='" + window.location.hash + "']");
      var $tabContent = $("" + window.location.hash);
      if ($activeTab.length > 0) {
        $activeTab.find('.tab').removeClass('is-active').has("[href='" + window.location.hash + "']").addClass('is-active');
        $tabContent.addClass('is-active').siblings().removeClass('is-active');
      }
    }
  }

  /**
   * Since $productView can be dynamically inserted using render_with,
   * We have to retrieve the respective elements
   *
   * @param $scope
   */;
  _proto.getViewModel = function getViewModel($scope) {
    return {
      $priceWithTax: $('[data-product-price-with-tax]', $scope),
      $priceWithoutTax: $('[data-product-price-without-tax]', $scope),
      rrpWithTax: {
        $div: $('.rrp-price--withTax', $scope),
        $span: $('[data-product-rrp-with-tax]', $scope)
      },
      rrpWithoutTax: {
        $div: $('.rrp-price--withoutTax', $scope),
        $span: $('[data-product-rrp-price-without-tax]', $scope)
      },
      nonSaleWithTax: {
        $div: $('.non-sale-price--withTax', $scope),
        $span: $('[data-product-non-sale-price-with-tax]', $scope)
      },
      nonSaleWithoutTax: {
        $div: $('.non-sale-price--withoutTax', $scope),
        $span: $('[data-product-non-sale-price-without-tax]', $scope)
      },
      priceSaved: {
        $div: $('.price-section--saving', $scope),
        $span: $('[data-product-price-saved]', $scope)
      },
      priceNowLabel: {
        $span: $('.price-now-label', $scope)
      },
      priceLabel: {
        $span: $('.price-label', $scope)
      },
      $weight: $('.productView-info [data-product-weight]', $scope),
      $increments: $('.form-field--increments :input', $scope),
      $addToCart: $('#form-action-addToCart', $scope),
      $wishlistVariation: $('[data-wishlist-add] [name="variation_id"]', $scope),
      stock: {
        $container: $('.form-field--stock', $scope),
        $input: $('[data-product-stock]', $scope)
      },
      sku: {
        $label: $('dt.sku-label', $scope),
        $value: $('[data-product-sku]', $scope)
      },
      upc: {
        $label: $('dt.upc-label', $scope),
        $value: $('[data-product-upc]', $scope)
      },
      mpn: {
        $label: $('dt.mpn-label', $scope),
        $value: $('[data-product-mpn]', $scope)
      },
      quantity: {
        $text: $('.incrementTotal', $scope),
        $input: $('[name=qty\\[\\]]', $scope)
      },
      $bulkPricing: $('.productView-info-bulkPricing', $scope)
    };
  }

  /**
   * Hide the pricing elements that will show up only when the price exists in API
   * @param viewModel
   */;
  _proto.clearPricingNotFound = function clearPricingNotFound(viewModel) {
    viewModel.rrpWithTax.$div.hide();
    viewModel.rrpWithoutTax.$div.hide();
    viewModel.nonSaleWithTax.$div.hide();
    viewModel.nonSaleWithoutTax.$div.hide();
    viewModel.priceSaved.$div.hide();
    viewModel.priceNowLabel.$span.hide();
    viewModel.priceLabel.$span.hide();
  }

  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */;
  _proto.updateView = function updateView(data, content) {
    if (content === void 0) {
      content = null;
    }
    var viewModel = this.getViewModel(this.$scope);
    //console.log(data, data.stock_message, data.purchasing_message)

    this.showMessageBox(data.stock_message || data.purchasing_message);
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default()(data.price)) {
      this.updatePriceView(viewModel, data.price);
    }
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default()(data.weight)) {
      viewModel.$weight.html(data.weight.formatted);
    }

    // Set variation_id if it exists for adding to wishlist
    if (data.variantId) {
      viewModel.$wishlistVariation.val(data.variantId);
    }

    // If SKU is available
    if (data.sku) {
      viewModel.sku.$value.text(data.sku);
      viewModel.sku.$label.show();
    } else {
      viewModel.sku.$label.hide();
      viewModel.sku.$value.text('');
    }

    // If UPC is available
    if (data.upc) {
      viewModel.upc.$value.text(data.upc);
      viewModel.upc.$label.show();
    } else {
      viewModel.upc.$label.hide();
      viewModel.upc.$value.text('');
    }

    // If MPN is available
    if (data.mpn) {
      viewModel.mpn.$value.text(data.mpn);
      viewModel.mpn.$label.show();
    } else {
      viewModel.mpn.$label.hide();
      viewModel.mpn.$value.text('');
    }

    // if stock view is on (CP settings)
    if (viewModel.stock.$container.length && lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(data.stock)) {
      // if the stock container is hidden, show
      viewModel.stock.$container.removeClass('u-hiddenVisually');
      viewModel.stock.$input.text(data.stock);
    } else {
      viewModel.stock.$container.addClass('u-hiddenVisually');
      viewModel.stock.$input.text(data.stock);
    }
    this.updateDefaultAttributesForOOS(data);

    // If Bulk Pricing rendered HTML is available
    if (data.bulk_discount_rates && content) {
      viewModel.$bulkPricing.html(content);
    } else if (typeof data.bulk_discount_rates !== 'undefined') {
      viewModel.$bulkPricing.html('');
    }
    var addToCartWrapper = $('#add-to-cart-wrapper');
    if (addToCartWrapper.is(':hidden') && data.purchasable) {
      addToCartWrapper.show();
    }
  }

  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */;
  _proto.updatePriceView = function updatePriceView(viewModel, price) {
    this.clearPricingNotFound(viewModel);
    if (price.with_tax) {
      var updatedPrice = price.price_range ? price.price_range.min.with_tax.formatted + " - " + price.price_range.max.with_tax.formatted : price.with_tax.formatted;
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithTax.html(updatedPrice);
    }
    if (price.without_tax) {
      var _updatedPrice = price.price_range ? price.price_range.min.without_tax.formatted + " - " + price.price_range.max.without_tax.formatted : price.without_tax.formatted;
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithoutTax.html(_updatedPrice);
    }
    if (price.rrp_with_tax) {
      viewModel.rrpWithTax.$div.show();
      viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
    }
    if (price.rrp_without_tax) {
      viewModel.rrpWithoutTax.$div.show();
      viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
    }
    if (price.saved) {
      viewModel.priceSaved.$div.show();
      viewModel.priceSaved.$span.html(price.saved.formatted);
    }
    if (price.non_sale_price_with_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithTax.$span.html(price.non_sale_price_with_tax.formatted);
    }
    if (price.non_sale_price_without_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithoutTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithoutTax.$span.html(price.non_sale_price_without_tax.formatted);
    }
  }

  /**
   * Show an message box if a message is passed
   * Hide the box if the message is empty
   * @param  {String} message
   */;
  _proto.showMessageBox = function showMessageBox(message) {
    var $messageBox = $('.productAttributes-message');
    if (message) {
      $('.alertBox-message', $messageBox).text(message);
      $messageBox.show();
    } else {
      $messageBox.hide();
    }
  };
  _proto.updateDefaultAttributesForOOS = function updateDefaultAttributesForOOS(data) {
    var viewModel = this.getViewModel(this.$scope);
    if (!data.purchasable || !data.instock) {
      viewModel.$addToCart.prop('disabled', true);
      viewModel.$increments.prop('disabled', true);
    } else {
      viewModel.$addToCart.prop('disabled', false);
      viewModel.$increments.prop('disabled', false);
    }
  };
  _proto.enableAttribute = function enableAttribute($attribute, behavior, outOfStockMessage) {
    if (this.getAttributeType($attribute) === 'set-select') {
      return this.enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.show();
    } else {
      $attribute.removeClass('unavailable');
    }
  };
  _proto.disableAttribute = function disableAttribute($attribute, behavior, outOfStockMessage) {
    if (this.getAttributeType($attribute) === 'set-select') {
      return this.disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.hide(0);
    } else {
      $attribute.addClass('unavailable');
    }
  };
  _proto.getAttributeType = function getAttributeType($attribute) {
    var $parent = $attribute.closest('[data-product-attribute]');
    return $parent ? $parent.data('productAttribute') : null;
  };
  _proto.disableSelectOptionAttribute = function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    var $select = $attribute.parent();
    if (behavior === 'hide_option') {
      $attribute.toggleOption(false);
      // If the attribute is the selected option in a select dropdown, select the first option (MERC-639)
      if ($select.val() === $attribute.attr('value')) {
        $select[0].selectedIndex = 0;
      }
    } else {
      $attribute.attr('disabled', 'disabled');
      $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
    }
  };
  _proto.enableSelectOptionAttribute = function enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    if (behavior === 'hide_option') {
      $attribute.toggleOption(true);
    } else {
      $attribute.prop('disabled', false);
      $attribute.html($attribute.html().replace(outOfStockMessage, ''));
    }
  };
  return ProductDetailsBase;
}();


/***/ }),

/***/ "./assets/js/theme/common/utils/ie-helpers.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/common/utils/ie-helpers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertIntoArray: () => (/* binding */ convertIntoArray),
/* harmony export */   isBrowserIE: () => (/* binding */ isBrowserIE)
/* harmony export */ });
var isBrowserIE = !!document.documentMode;
var convertIntoArray = function convertIntoArray(collection) {
  return Array.prototype.slice.call(collection);
};

/***/ }),

/***/ "./assets/js/theme/common/utils/pagination-utils.js":
/*!**********************************************************!*\
  !*** ./assets/js/theme/common/utils/pagination-utils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wishlistPaginatorHelper: () => (/* binding */ wishlistPaginatorHelper)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var changeWishlistPaginationLinks = function changeWishlistPaginationLinks(wishlistUrl) {
  for (var _len = arguments.length, paginationItems = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    paginationItems[_key - 1] = arguments[_key];
  }
  return $.each(paginationItems, function (_, $item) {
    var paginationLink = $item.children('.pagination-link');
    if ($item.length && !paginationLink.attr('href').includes('page=')) {
      var pageNumber = paginationLink.attr('href');
      paginationLink.attr('href', wishlistUrl + "page=" + pageNumber);
    }
  });
};

/**
 * helps to withdraw differences in structures around the stencil resource pagination
 */
var wishlistPaginatorHelper = function wishlistPaginatorHelper() {
  var $paginationList = $('.pagination-list');
  if (!$paginationList.length) return;
  var $nextItem = $('.pagination-item--next', $paginationList);
  var $prevItem = $('.pagination-item--previous', $paginationList);
  var currentHref = $('[data-pagination-current-page-link]').attr('href');
  var partialPaginationUrl = currentHref.split('page=').shift();
  changeWishlistPaginationLinks(partialPaginationUrl, $prevItem, $nextItem);
};

/***/ }),

/***/ "./assets/js/theme/wishlist.js":
/*!*************************************!*\
  !*** ./assets/js/theme/wishlist.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WishList)
/* harmony export */ });
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_utils_pagination_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils/pagination-utils */ "./assets/js/theme/common/utils/pagination-utils.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }






var WishList = /*#__PURE__*/function (_PageManager) {
  function WishList(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.options = {
      template: 'account/add-wishlist'
    };
    return _this || _assertThisInitialized(_this);
  }

  /**
   * Creates a confirm box before deleting all wish lists
   */
  _inheritsLoose(WishList, _PageManager);
  var _proto = WishList.prototype;
  _proto.wishlistDeleteConfirm = function wishlistDeleteConfirm() {
    var _this2 = this;
    $('body').on('click', '[data-wishlist-delete]', function (event) {
      var confirmed = window.confirm(_this2.context.wishlistDelete);
      if (confirmed) {
        return true;
      }
      event.preventDefault();
    });
  };
  _proto.registerAddWishListValidation = function registerAddWishListValidation($addWishlistForm) {
    var _this3 = this;
    this.addWishlistValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: '.wishlist-form input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage
    });
    this.addWishlistValidator.add([{
      selector: '.wishlist-form input[name="wishlistname"]',
      validate: function validate(cb, val) {
        var result = val.length > 0;
        cb(result);
      },
      errorMessage: this.context.enterWishlistNameError
    }]);
    $addWishlistForm.on('submit', function (event) {
      _this3.addWishlistValidator.performCheck();
      if (_this3.addWishlistValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.onReady = function onReady() {
    var $addWishListForm = $('.wishlist-form');
    if ($('[data-pagination-wishlist]').length) {
      (0,_common_utils_pagination_utils__WEBPACK_IMPORTED_MODULE_4__.wishlistPaginatorHelper)();
    }
    if ($addWishListForm.length) {
      this.registerAddWishListValidation($addWishListForm);
    }
    this.wishlistDeleteConfirm();
  };
  return WishList;
}(_page_manager__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jb21tb25fY29sbGFwc2libGVfanMtYXNzZXRzX2pzX3RoZW1lX2NvbW1vbl9wcm9kdWN0LWRldGFpbHMtYmFzZV9qcy1hc3NldHNfai03MzRhZjIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRztFQUN4QkMsTUFBTSxFQUFFLEVBQUU7RUFDVkMsS0FBSyxFQUFFLEVBQUU7RUFDVEMsSUFBSSxFQUFFLEVBQUU7RUFDUkMsRUFBRSxFQUFFLEVBQUU7RUFDTkMsS0FBSyxFQUFFLEVBQUU7RUFDVEMsSUFBSSxFQUFFO0FBQ1YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1AwQztBQUUzQyxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFJQyxjQUFjLEVBQUVDLE9BQU8sRUFBSztFQUNyREQsY0FBYyxDQUFDRSxJQUFJLENBQUMsVUFBQ0MsR0FBRyxFQUFFQyxJQUFJLEVBQUs7SUFDL0IsSUFBTUMsS0FBSyxHQUFHQyxDQUFDLENBQUNGLElBQUksQ0FBQztJQUNyQixJQUFJRCxHQUFHLEtBQUtGLE9BQU8sRUFBRTtNQUNqQkksS0FBSyxDQUFDRSxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztNQUN4RDtJQUNKO0lBRUFILEtBQUssQ0FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQUM7SUFDOURKLEtBQUssQ0FBQ0ssT0FBTyxDQUFDLFFBQVEsQ0FBQztFQUMzQixDQUFDLENBQUM7QUFDTixDQUFDO0FBRUQsSUFBTUMsMkJBQTJCLEdBQUcsU0FBOUJBLDJCQUEyQkEsQ0FBSUMsV0FBVyxFQUFFQyxVQUFVLEVBQUs7RUFDN0QsUUFBUSxJQUFJ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QUFDN1EsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFBeUUsS0FBSyxFQUFJO01BQ25DcUUsTUFBSSxDQUFDZ0ksb0JBQW9CLENBQUNTLFlBQVksQ0FBQyxDQUFDO01BRXhDLElBQUl6SSxNQUFJLENBQUNnSSxvQkFBb0IsQ0FBQ1UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQzNDO01BQ0o7TUFFQS9NLEtBQUssQ0FBQ2xGLGNBQWMsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQThDLE1BQUEsQ0FFRG9QLE9BQU8sR0FBUCxTQUFBQSxPQUFPQSxDQUFBLEVBQUc7SUFDTixJQUFNQyxnQkFBZ0IsR0FBR3JULENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztJQUU1QyxJQUFJQSxDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQ2MsTUFBTSxFQUFFO01BQ3hDcVEsdUZBQXVCLENBQUMsQ0FBQztJQUM3QjtJQUVBLElBQUlrQyxnQkFBZ0IsQ0FBQ3ZTLE1BQU0sRUFBRTtNQUN6QixJQUFJLENBQUN5Uiw2QkFBNkIsQ0FBQ2MsZ0JBQWdCLENBQUM7SUFDeEQ7SUFFQSxJQUFJLENBQUNsQixxQkFBcUIsQ0FBQyxDQUFDO0VBQ2hDLENBQUM7RUFBQSxPQUFBTCxRQUFBO0FBQUEsRUFuRWlDRixxREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL1Jvb3RzLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9hcmlhL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9Sb290cy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vYXJpYS9yYWRpb09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vUm9vdHMvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2NvbGxhcHNpYmxlLmpzIiwid2VicGFjazovL1Jvb3RzLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9tZWRpYS1xdWVyeS1saXN0LmpzIiwid2VicGFjazovL1Jvb3RzLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMtYmFzZS5qcyIsIndlYnBhY2s6Ly9Sb290cy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvaWUtaGVscGVycy5qcyIsIndlYnBhY2s6Ly9Sb290cy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvcGFnaW5hdGlvbi11dGlscy5qcyIsIndlYnBhY2s6Ly9Sb290cy8uL2Fzc2V0cy9qcy90aGVtZS93aXNobGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYXJpYUtleUNvZGVzID0ge1xuICAgIFJFVFVSTjogMTMsXG4gICAgU1BBQ0U6IDMyLFxuICAgIExFRlQ6IDM3LFxuICAgIFVQOiAzOCxcbiAgICBSSUdIVDogMzksXG4gICAgRE9XTjogNDAsXG59O1xuIiwiaW1wb3J0IHsgYXJpYUtleUNvZGVzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5jb25zdCBzZXRDaGVja2VkUmFkaW9JdGVtID0gKGl0ZW1Db2xsZWN0aW9uLCBpdGVtSWR4KSA9PiB7XG4gICAgaXRlbUNvbGxlY3Rpb24uZWFjaCgoaWR4LCBpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0ICRpdGVtID0gJChpdGVtKTtcbiAgICAgICAgaWYgKGlkeCAhPT0gaXRlbUlkeCkge1xuICAgICAgICAgICAgJGl0ZW0uYXR0cignYXJpYS1jaGVja2VkJywgZmFsc2UpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkaXRlbS5hdHRyKCdhcmlhLWNoZWNrZWQnLCB0cnVlKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSkuZm9jdXMoKTtcbiAgICAgICAgJGl0ZW0udHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBjYWxjdWxhdGVUYXJnZXRJdGVtUG9zaXRpb24gPSAobGFzdEl0ZW1JZHgsIGN1cnJlbnRJZHgpID0+IHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGN1cnJlbnRJZHggPiBsYXN0SXRlbUlkeDogcmV0dXJuIDA7XG4gICAgY2FzZSBjdXJyZW50SWR4IDwgMDogcmV0dXJuIGxhc3RJdGVtSWR4O1xuICAgIGRlZmF1bHQ6IHJldHVybiBjdXJyZW50SWR4O1xuICAgIH1cbn07XG5cbmNvbnN0IGhhbmRsZUl0ZW1LZXlEb3duID0gaXRlbUNvbGxlY3Rpb24gPT4gZSA9PiB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBlO1xuICAgIGNvbnN0IGl0ZW1JZHggPSBpdGVtQ29sbGVjdGlvbi5pbmRleChlLmN1cnJlbnRUYXJnZXQpO1xuICAgIGNvbnN0IGxhc3RDb2xsZWN0aW9uSXRlbUlkeCA9IGl0ZW1Db2xsZWN0aW9uLmxlbmd0aCAtIDE7XG5cbiAgICBpZiAoT2JqZWN0LnZhbHVlcyhhcmlhS2V5Q29kZXMpLmluY2x1ZGVzKGtleUNvZGUpKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICBjYXNlIGFyaWFLZXlDb2Rlcy5MRUZUOlxuICAgIGNhc2UgYXJpYUtleUNvZGVzLlVQOiB7XG4gICAgICAgIGNvbnN0IHByZXZJdGVtSWR4ID0gY2FsY3VsYXRlVGFyZ2V0SXRlbVBvc2l0aW9uKGxhc3RDb2xsZWN0aW9uSXRlbUlkeCwgaXRlbUlkeCAtIDEpO1xuICAgICAgICBpdGVtQ29sbGVjdGlvbi5nZXQocHJldkl0ZW1JZHgpLmZvY3VzKCk7XG4gICAgICAgIHNldENoZWNrZWRSYWRpb0l0ZW0oaXRlbUNvbGxlY3Rpb24sIGl0ZW1JZHggLSAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgYXJpYUtleUNvZGVzLlJJR0hUOlxuICAgIGNhc2UgYXJpYUtleUNvZGVzLkRPV046IHtcbiAgICAgICAgY29uc3QgbmV4dEl0ZW1JZHggPSBjYWxjdWxhdGVUYXJnZXRJdGVtUG9zaXRpb24obGFzdENvbGxlY3Rpb25JdGVtSWR4LCBpdGVtSWR4ICsgMSk7XG4gICAgICAgIGl0ZW1Db2xsZWN0aW9uLmdldChuZXh0SXRlbUlkeCkuZm9jdXMoKTtcbiAgICAgICAgc2V0Q2hlY2tlZFJhZGlvSXRlbShpdGVtQ29sbGVjdGlvbiwgaXRlbUlkeCArIDEpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiBicmVhaztcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoJGNvbnRhaW5lciwgaXRlbVNlbGVjdG9yKSA9PiB7XG4gICAgY29uc3QgJGl0ZW1Db2xsZWN0aW9uID0gJGNvbnRhaW5lci5maW5kKGl0ZW1TZWxlY3Rvcik7XG5cbiAgICAkY29udGFpbmVyLm9uKCdrZXlkb3duJywgaXRlbVNlbGVjdG9yLCBoYW5kbGVJdGVtS2V5RG93bigkaXRlbUNvbGxlY3Rpb24pKTtcbn07XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG1lZGlhUXVlcnlMaXN0RmFjdG9yeSBmcm9tICcuL21lZGlhLXF1ZXJ5LWxpc3QnO1xuXG5jb25zdCBQTFVHSU5fS0VZID0gJ2NvbGxhcHNpYmxlJztcblxuZXhwb3J0IGNvbnN0IENvbGxhcHNpYmxlRXZlbnRzID0ge1xuICAgIG9wZW46ICdvcGVuLmNvbGxhcHNpYmxlJyxcbiAgICBjbG9zZTogJ2Nsb3NlLmNvbGxhcHNpYmxlJyxcbiAgICB0b2dnbGU6ICd0b2dnbGUuY29sbGFwc2libGUnLFxuICAgIGNsaWNrOiAnY2xpY2suY29sbGFwc2libGUnLFxufTtcblxuY29uc3QgQ29sbGFwc2libGVTdGF0ZSA9IHtcbiAgICBjbG9zZWQ6ICdjbG9zZWQnLFxuICAgIG9wZW46ICdvcGVuJyxcbn07XG5cbmZ1bmN0aW9uIHByZXBlbmRIYXNoKGlkKSB7XG4gICAgaWYgKGlkICYmIGlkLmluZGV4T2YoJyMnKSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGAjJHtpZH1gO1xufVxuXG5mdW5jdGlvbiBvcHRpb25zRnJvbURhdGEoJGVsZW1lbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBkaXNhYmxlZEJyZWFrcG9pbnQ6ICRlbGVtZW50LmRhdGEoYCR7UExVR0lOX0tFWX1EaXNhYmxlZEJyZWFrcG9pbnRgKSxcbiAgICAgICAgZGlzYWJsZWRTdGF0ZTogJGVsZW1lbnQuZGF0YShgJHtQTFVHSU5fS0VZfURpc2FibGVkU3RhdGVgKSxcbiAgICAgICAgZW5hYmxlZFN0YXRlOiAkZWxlbWVudC5kYXRhKGAke1BMVUdJTl9LRVl9RW5hYmxlZFN0YXRlYCksXG4gICAgICAgIG9wZW5DbGFzc05hbWU6ICRlbGVtZW50LmRhdGEoYCR7UExVR0lOX0tFWX1PcGVuQ2xhc3NOYW1lYCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBDb2xsYXBzZS9FeHBhbmQgdG9nZ2xlXG4gKi9cbmV4cG9ydCBjbGFzcyBDb2xsYXBzaWJsZSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICR0b2dnbGUgLSBUcmlnZ2VyIGJ1dHRvblxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkdGFyZ2V0IC0gQ29udGVudCB0byBjb2xsYXBzZSAvIGV4cGFuZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBDb25maWd1cmFibGUgb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy4kY29udGV4dF1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuZGlzYWJsZWRCcmVha3BvaW50XVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5kaXNhYmxlZFN0YXRlXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5lbmFibGVkU3RhdGVdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLm9wZW5DbGFzc05hbWVdXG4gICAgICogQGV4YW1wbGVcbiAgICAgKlxuICAgICAqIDxidXR0b24gaWQ9XCIjbW9yZVwiPkNvbGxhcHNlPC9idXR0b24+XG4gICAgICogPGRpdiBpZD1cImNvbnRlbnRcIj4uLi48L2Rpdj5cbiAgICAgKlxuICAgICAqIG5ldyBDb2xsYXBzaWJsZSgkKCcjbW9yZScpLCAkKCcjY29udGVudCcpKTtcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigkdG9nZ2xlLCAkdGFyZ2V0LCB7XG4gICAgICAgIGRpc2FibGVkQnJlYWtwb2ludCxcbiAgICAgICAgZGlzYWJsZWRTdGF0ZSxcbiAgICAgICAgZW5hYmxlZFN0YXRlLFxuICAgICAgICBvcGVuQ2xhc3NOYW1lID0gJ2lzLW9wZW4nLFxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLiR0b2dnbGUgPSAkdG9nZ2xlO1xuICAgICAgICB0aGlzLiR0YXJnZXQgPSAkdGFyZ2V0O1xuICAgICAgICB0aGlzLnRhcmdldElkID0gJHRhcmdldC5hdHRyKCdpZCcpO1xuICAgICAgICB0aGlzLm9wZW5DbGFzc05hbWUgPSBvcGVuQ2xhc3NOYW1lO1xuICAgICAgICB0aGlzLmRpc2FibGVkU3RhdGUgPSBkaXNhYmxlZFN0YXRlO1xuICAgICAgICB0aGlzLmVuYWJsZWRTdGF0ZSA9IGVuYWJsZWRTdGF0ZTtcblxuICAgICAgICBpZiAoZGlzYWJsZWRCcmVha3BvaW50KSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QgPSBtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkoZGlzYWJsZWRCcmVha3BvaW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QubWF0Y2hlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEF1dG8tYmluZFxuICAgICAgICB0aGlzLm9uQ2xpY2tlZCA9IHRoaXMub25DbGlja2VkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2ggPSB0aGlzLm9uRGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdE1hdGNoLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLy8gQXNzaWduIERPTSBhdHRyaWJ1dGVzXG4gICAgICAgIHRoaXMuJHRhcmdldC5hdHRyKCdhcmlhLWhpZGRlbicsIHRoaXMuaXNDb2xsYXBzZWQpO1xuICAgICAgICB0aGlzLiR0b2dnbGVcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWxhYmVsJywgdGhpcy5fZ2V0VG9nZ2xlQXJpYUxhYmVsVGV4dCgkdG9nZ2xlKSlcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWNvbnRyb2xzJywgJHRhcmdldC5hdHRyKCdpZCcpKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0aGlzLmlzT3Blbik7XG5cbiAgICAgICAgLy8gTGlzdGVuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGdldCBpc0NvbGxhcHNlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHRhcmdldC5pcygnOmhpZGRlbicpICYmICF0aGlzLiR0YXJnZXQuaGFzQ2xhc3ModGhpcy5vcGVuQ2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICBnZXQgaXNPcGVuKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNDb2xsYXBzZWQ7XG4gICAgfVxuXG4gICAgc2V0IGRpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVkID0gZGlzYWJsZWQ7XG5cbiAgICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUJ5U3RhdGUodGhpcy5kaXNhYmxlZFN0YXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQnlTdGF0ZSh0aGlzLmVuYWJsZWRTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgICB9XG5cbiAgICBfZ2V0VG9nZ2xlQXJpYUxhYmVsVGV4dCgkdG9nZ2xlKSB7XG4gICAgICAgIGNvbnN0ICR0ZXh0VG9nZ2xlQ2hpbGRyZW4gPSAkdG9nZ2xlLmNoaWxkcmVuKCkuZmlsdGVyKChfXywgY2hpbGQpID0+ICQoY2hpbGQpLnRleHQoKS50cmltKCkpO1xuICAgICAgICBjb25zdCAkYXJpYUxhYmVsVGFyZ2V0ID0gJHRleHRUb2dnbGVDaGlsZHJlbi5sZW5ndGggPyAkdGV4dFRvZ2dsZUNoaWxkcmVuLmZpcnN0KCkgOiAkdG9nZ2xlO1xuXG4gICAgICAgIHJldHVybiAkKCRhcmlhTGFiZWxUYXJnZXQpLnRleHQoKS50cmltKCk7XG4gICAgfVxuXG4gICAgb3Blbih7IG5vdGlmeSA9IHRydWUgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuJHRvZ2dsZVxuICAgICAgICAgICAgLmFkZENsYXNzKHRoaXMub3BlbkNsYXNzTmFtZSlcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy4kdGFyZ2V0XG4gICAgICAgICAgICAuYWRkQ2xhc3ModGhpcy5vcGVuQ2xhc3NOYW1lKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuXG4gICAgICAgIGlmIChub3RpZnkpIHtcbiAgICAgICAgICAgIHRoaXMuJHRvZ2dsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLm9wZW4sIFt0aGlzXSk7XG4gICAgICAgICAgICB0aGlzLiR0b2dnbGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy50b2dnbGUsIFt0aGlzXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZSh7IG5vdGlmeSA9IHRydWUgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuJHRvZ2dsZVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKHRoaXMub3BlbkNsYXNzTmFtZSlcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuJHRhcmdldFxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKHRoaXMub3BlbkNsYXNzTmFtZSlcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuXG4gICAgICAgIGlmIChub3RpZnkpIHtcbiAgICAgICAgICAgIHRoaXMuJHRvZ2dsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLmNsb3NlLCBbdGhpc10pO1xuICAgICAgICAgICAgdGhpcy4kdG9nZ2xlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMudG9nZ2xlLCBbdGhpc10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICBpZiAodGhpcy5pc0NvbGxhcHNlZCkge1xuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGVCeVN0YXRlKHN0YXRlLCAuLi5hcmdzKSB7XG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgY2FzZSBDb2xsYXBzaWJsZVN0YXRlLm9wZW46XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcGVuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuXG4gICAgICAgIGNhc2UgQ29sbGFwc2libGVTdGF0ZS5jbG9zZWQ6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbG9zZS5hcHBseSh0aGlzLCBhcmdzKTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhc0NvbGxhcHNpYmxlKGNvbGxhcHNpYmxlSW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuICQuY29udGFpbnModGhpcy4kdGFyZ2V0LmdldCgwKSwgY29sbGFwc2libGVJbnN0YW5jZS4kdGFyZ2V0LmdldCgwKSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kdG9nZ2xlLm9uKENvbGxhcHNpYmxlRXZlbnRzLmNsaWNrLCB0aGlzLm9uQ2xpY2tlZCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdCAmJiB0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QuYWRkTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdC5hZGRMaXN0ZW5lcih0aGlzLm9uRGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdE1hdGNoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kdG9nZ2xlLm9mZihDb2xsYXBzaWJsZUV2ZW50cy5jbGljaywgdGhpcy5vbkNsaWNrZWQpO1xuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QgJiYgdGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0LnJlbW92ZUxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QucmVtb3ZlTGlzdGVuZXIodGhpcy5vbkRpc2FibGVkTWVkaWFRdWVyeUxpc3RNYXRjaCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrZWQoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICB9XG5cbiAgICBvbkRpc2FibGVkTWVkaWFRdWVyeUxpc3RNYXRjaChtZWRpYSkge1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gbWVkaWEubWF0Y2hlcztcbiAgICB9XG59XG5cbi8qKlxuICogQ29udmVuaWVuY2UgbWV0aG9kIGZvciBjb25zdHJ1Y3RpbmcgQ29sbGFwc2libGUgaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW3NlbGVjdG9yXVxuICogQHBhcmFtIHtPYmplY3R9IFtvdmVycmlkZU9wdGlvbnNdXG4gKiBAcGFyYW0ge09iamVjdH0gW292ZXJyaWRlT3B0aW9ucy4kY29udGV4dF1cbiAqIEBwYXJhbSB7U3RyaW5nfSBbb3ZlcnJpZGVPcHRpb25zLmRpc2FibGVkQnJlYWtwb2ludF1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3ZlcnJpZGVPcHRpb25zLmRpc2FibGVkU3RhdGVdXG4gKiBAcGFyYW0ge09iamVjdH0gW292ZXJyaWRlT3B0aW9ucy5lbmFibGVkU3RhdGVdXG4gKiBAcGFyYW0ge1N0cmluZ30gW292ZXJyaWRlT3B0aW9ucy5vcGVuQ2xhc3NOYW1lXVxuICogQHJldHVybiB7QXJyYXl9IGFycmF5IG9mIENvbGxhcHNpYmxlIGluc3RhbmNlc1xuICpcbiAqIEBleGFtcGxlXG4gKiA8YSBocmVmPVwiI2NvbnRlbnRcIiBkYXRhLWNvbGxhcHNpYmxlPkNvbGxhcHNlPC9hPlxuICogPGRpdiBpZD1cImNvbnRlbnRcIj4uLi48L2Rpdj5cbiAqXG4gKiBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29sbGFwc2libGVGYWN0b3J5KHNlbGVjdG9yID0gYFtkYXRhLSR7UExVR0lOX0tFWX1dYCwgb3ZlcnJpZGVPcHRpb25zID0ge30pIHtcbiAgICBjb25zdCAkY29sbGFwc2libGVzID0gJChzZWxlY3Rvciwgb3ZlcnJpZGVPcHRpb25zLiRjb250ZXh0KTtcblxuICAgIHJldHVybiAkY29sbGFwc2libGVzLm1hcCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgJHRvZ2dsZSA9ICQoZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlS2V5ID0gYCR7UExVR0lOX0tFWX1JbnN0YW5jZWA7XG4gICAgICAgIGNvbnN0IGNhY2hlZENvbGxhcHNpYmxlID0gJHRvZ2dsZS5kYXRhKGluc3RhbmNlS2V5KTtcblxuICAgICAgICBpZiAoY2FjaGVkQ29sbGFwc2libGUgaW5zdGFuY2VvZiBDb2xsYXBzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENvbGxhcHNpYmxlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSBwcmVwZW5kSGFzaCgkdG9nZ2xlLmRhdGEoUExVR0lOX0tFWSkgfHxcbiAgICAgICAgICAgICR0b2dnbGUuZGF0YShgJHtQTFVHSU5fS0VZfVRhcmdldGApIHx8XG4gICAgICAgICAgICAkdG9nZ2xlLmF0dHIoJ2hyZWYnKSk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBfLmV4dGVuZChvcHRpb25zRnJvbURhdGEoJHRvZ2dsZSksIG92ZXJyaWRlT3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gbmV3IENvbGxhcHNpYmxlKCR0b2dnbGUsICQodGFyZ2V0SWQsIG92ZXJyaWRlT3B0aW9ucy4kY29udGV4dCksIG9wdGlvbnMpO1xuXG4gICAgICAgICR0b2dnbGUuZGF0YShpbnN0YW5jZUtleSwgY29sbGFwc2libGUpO1xuXG4gICAgICAgIHJldHVybiBjb2xsYXBzaWJsZTtcbiAgICB9KS50b0FycmF5KCk7XG59XG4iLCIvKlxuICogUmVtZW1iZXIgdG8gdXBkYXRlIC9hc3NldHMvc2Nzcy9zZXR0aW5ncy9nbG9iYWwvc2NyZWVuc2l6ZXMvc2NyZWVuc2l6ZXMuc2Nzc1xuICogaWYgeW91IGRlY2lkZSB0byBjaGFuZ2UgYnJlYWtwb2ludCB2YWx1ZXNcbiAqL1xuY29uc3QgYnJlYWtwb2ludFNpemVzID0ge1xuICAgIGxhcmdlOiAxMjYxLFxuICAgIG1lZGl1bTogODAxLFxuICAgIHNtYWxsOiA1NTEsXG59O1xuXG4vKipcbiAqIENyZWF0ZSBNZWRpYVF1ZXJ5TGlzdCB1c2luZyBicmVha3BvaW50IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBicmVha3BvaW50TmFtZVxuICogQHJldHVybiB7TWVkaWFRdWVyeUxpc3R8bnVsbH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVkaWFRdWVyeUxpc3RGYWN0b3J5KGJyZWFrcG9pbnROYW1lKSB7XG4gICAgaWYgKCFicmVha3BvaW50TmFtZSB8fCAhd2luZG93Lm1hdGNoTWVkaWEpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgYnJlYWtwb2ludCA9IGJyZWFrcG9pbnRTaXplc1ticmVha3BvaW50TmFtZV07XG4gICAgY29uc3QgbWVkaWFRdWVyeSA9IGAobWluLXdpZHRoOiAke2JyZWFrcG9pbnR9cHgpYDtcbiAgICBjb25zdCBtZWRpYVF1ZXJ5TGlzdCA9IHdpbmRvdy5tYXRjaE1lZGlhKG1lZGlhUXVlcnkpO1xuXG4gICAgcmV0dXJuIG1lZGlhUXVlcnlMaXN0O1xufVxuIiwiaW1wb3J0IFdpc2hsaXN0IGZyb20gJy4uL3dpc2hsaXN0JztcbmltcG9ydCB7IGluaXRSYWRpb09wdGlvbnMgfSBmcm9tICcuL2FyaWEnO1xuaW1wb3J0IHsgaXNPYmplY3QsIGlzTnVtYmVyIH0gZnJvbSAnbG9kYXNoJztcblxuY29uc3Qgb3B0aW9uc1R5cGVzTWFwID0ge1xuICAgIElOUFVUX0ZJTEU6ICdpbnB1dC1maWxlJyxcbiAgICBJTlBVVF9URVhUOiAnaW5wdXQtdGV4dCcsXG4gICAgSU5QVVRfTlVNQkVSOiAnaW5wdXQtbnVtYmVyJyxcbiAgICBJTlBVVF9DSEVDS0JPWDogJ2lucHV0LWNoZWNrYm94JyxcbiAgICBURVhUQVJFQTogJ3RleHRhcmVhJyxcbiAgICBEQVRFOiAnZGF0ZScsXG4gICAgU0VUX1NFTEVDVDogJ3NldC1zZWxlY3QnLFxuICAgIFNFVF9SRUNUQU5HTEU6ICdzZXQtcmVjdGFuZ2xlJyxcbiAgICBTRVRfUkFESU86ICdzZXQtcmFkaW8nLFxuICAgIFNXQVRDSDogJ3N3YXRjaCcsXG4gICAgUFJPRFVDVF9MSVNUOiAncHJvZHVjdC1saXN0Jyxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBvcHRpb25DaGFuZ2VEZWNvcmF0b3IoYXJlRGVmYXVsdE90aW9uc1NldCkge1xuICAgIHJldHVybiAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNDb250ZW50ID0gcmVzcG9uc2UuY29udGVudCB8fCB7fTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgaWYgKGFyZURlZmF1bHRPdGlvbnNTZXQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlldyhhdHRyaWJ1dGVzRGF0YSwgYXR0cmlidXRlc0NvbnRlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhhdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0RGV0YWlsc0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgY29udGV4dCkge1xuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5pbml0UmFkaW9BdHRyaWJ1dGVzKCk7XG4gICAgICAgIFdpc2hsaXN0LmxvYWQodGhpcy5jb250ZXh0KTtcbiAgICAgICAgdGhpcy5nZXRUYWJSZXF1ZXN0cygpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpLmVhY2goKF9fLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHZhbHVlLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZScpO1xuXG4gICAgICAgICAgICB0aGlzLl9tYWtlUHJvZHVjdFZhcmlhbnRBY2Nlc3NpYmxlKHZhbHVlLCB0eXBlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX21ha2VQcm9kdWN0VmFyaWFudEFjY2Vzc2libGUodmFyaWFudERvbU5vZGUsIHZhcmlhbnRUeXBlKSB7XG4gICAgICAgIHN3aXRjaCAodmFyaWFudFR5cGUpIHtcbiAgICAgICAgY2FzZSBvcHRpb25zVHlwZXNNYXAuU0VUX1JBRElPOlxuICAgICAgICBjYXNlIG9wdGlvbnNUeXBlc01hcC5TV0FUQ0g6IHtcbiAgICAgICAgICAgIGluaXRSYWRpb09wdGlvbnMoJCh2YXJpYW50RG9tTm9kZSksICdbdHlwZT1yYWRpb10nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDogYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGxvdyByYWRpbyBidXR0b25zIHRvIGdldCBkZXNlbGVjdGVkXG4gICAgICovXG4gICAgaW5pdFJhZGlvQXR0cmlidXRlcygpIHtcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdIGlucHV0W3R5cGU9XCJyYWRpb1wiXScsIHRoaXMuJHNjb3BlKS5lYWNoKChpLCByYWRpbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHJhZGlvID0gJChyYWRpbyk7XG5cbiAgICAgICAgICAgIC8vIE9ubHkgYmluZCB0byBjbGljayBvbmNlXG4gICAgICAgICAgICBpZiAoJHJhZGlvLmF0dHIoJ2RhdGEtc3RhdGUnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgJHJhZGlvLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRyYWRpby5kYXRhKCdzdGF0ZScpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8ucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby5kYXRhKCdzdGF0ZScsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLmRhdGEoJ3N0YXRlJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRSYWRpb0F0dHJpYnV0ZXMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHJhZGlvLmF0dHIoJ2RhdGEtc3RhdGUnLCAkcmFkaW8ucHJvcCgnY2hlY2tlZCcpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBvciBtYXJrIGFzIHVuYXZhaWxhYmxlIG91dCBvZiBzdG9jayBhdHRyaWJ1dGVzIGlmIGVuYWJsZWRcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpIHtcbiAgICAgICAgY29uc3QgYmVoYXZpb3IgPSBkYXRhLm91dF9vZl9zdG9ja19iZWhhdmlvcjtcbiAgICAgICAgY29uc3QgaW5TdG9ja0lkcyA9IGRhdGEuaW5fc3RvY2tfYXR0cmlidXRlcztcbiAgICAgICAgY29uc3Qgb3V0T2ZTdG9ja01lc3NhZ2UgPSBgICgke2RhdGEub3V0X29mX3N0b2NrX21lc3NhZ2V9KWA7XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yICE9PSAnaGlkZV9vcHRpb24nICYmIGJlaGF2aW9yICE9PSAnbGFiZWxfb3B0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWVdJywgdGhpcy4kc2NvcGUpLmVhY2goKGksIGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGF0dHJpYnV0ZSA9ICQoYXR0cmlidXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJJZCA9IHBhcnNlSW50KCRhdHRyaWJ1dGUuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZVZhbHVlJyksIDEwKTtcblxuXG4gICAgICAgICAgICBpZiAoaW5TdG9ja0lkcy5pbmRleE9mKGF0dHJJZCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGZvciBmcmFnbWVudCBpZGVudGlmaWVyIGluIFVSTCByZXF1ZXN0aW5nIGEgc3BlY2lmaWMgdGFiXG4gICAgICovXG4gICAgZ2V0VGFiUmVxdWVzdHMoKSB7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiB3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCcjdGFiLScpID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCAkYWN0aXZlVGFiID0gJCgnLnRhYnMnKS5oYXMoYFtocmVmPScke3dpbmRvdy5sb2NhdGlvbi5oYXNofSddYCk7XG4gICAgICAgICAgICBjb25zdCAkdGFiQ29udGVudCA9ICQoYCR7d2luZG93LmxvY2F0aW9uLmhhc2h9YCk7XG5cbiAgICAgICAgICAgIGlmICgkYWN0aXZlVGFiLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAkYWN0aXZlVGFiLmZpbmQoJy50YWInKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5oYXMoYFtocmVmPScke3dpbmRvdy5sb2NhdGlvbi5oYXNofSddYClcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgICR0YWJDb250ZW50LmFkZENsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2luY2UgJHByb2R1Y3RWaWV3IGNhbiBiZSBkeW5hbWljYWxseSBpbnNlcnRlZCB1c2luZyByZW5kZXJfd2l0aCxcbiAgICAgKiBXZSBoYXZlIHRvIHJldHJpZXZlIHRoZSByZXNwZWN0aXZlIGVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gJHNjb3BlXG4gICAgICovXG4gICAgZ2V0Vmlld01vZGVsKCRzY29wZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJHByaWNlV2l0aFRheDogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgJHByaWNlV2l0aG91dFRheDogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgcnJwV2l0aFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ycnAtcHJpY2UtLXdpdGhUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXJycC13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJycFdpdGhvdXRUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucnJwLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub25TYWxlV2l0aFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ub24tc2FsZS1wcmljZS0td2l0aFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub25TYWxlV2l0aG91dFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ub24tc2FsZS1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZVNhdmVkOiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnByaWNlLXNlY3Rpb24tLXNhdmluZycsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utc2F2ZWRdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZU5vd0xhYmVsOiB7XG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcmljZS1ub3ctbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlTGFiZWw6IHtcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAkd2VpZ2h0OiAkKCcucHJvZHVjdFZpZXctaW5mbyBbZGF0YS1wcm9kdWN0LXdlaWdodF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgJGluY3JlbWVudHM6ICQoJy5mb3JtLWZpZWxkLS1pbmNyZW1lbnRzIDppbnB1dCcsICRzY29wZSksXG4gICAgICAgICAgICAkYWRkVG9DYXJ0OiAkKCcjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0JywgJHNjb3BlKSxcbiAgICAgICAgICAgICR3aXNobGlzdFZhcmlhdGlvbjogJCgnW2RhdGEtd2lzaGxpc3QtYWRkXSBbbmFtZT1cInZhcmlhdGlvbl9pZFwiXScsICRzY29wZSksXG4gICAgICAgICAgICBzdG9jazoge1xuICAgICAgICAgICAgICAgICRjb250YWluZXI6ICQoJy5mb3JtLWZpZWxkLS1zdG9jaycsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJGlucHV0OiAkKCdbZGF0YS1wcm9kdWN0LXN0b2NrXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2t1OiB7XG4gICAgICAgICAgICAgICAgJGxhYmVsOiAkKCdkdC5za3UtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICR2YWx1ZTogJCgnW2RhdGEtcHJvZHVjdC1za3VdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGM6IHtcbiAgICAgICAgICAgICAgICAkbGFiZWw6ICQoJ2R0LnVwYy1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHZhbHVlOiAkKCdbZGF0YS1wcm9kdWN0LXVwY10nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1wbjoge1xuICAgICAgICAgICAgICAgICRsYWJlbDogJCgnZHQubXBuLWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkdmFsdWU6ICQoJ1tkYXRhLXByb2R1Y3QtbXBuXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcXVhbnRpdHk6IHtcbiAgICAgICAgICAgICAgICAkdGV4dDogJCgnLmluY3JlbWVudFRvdGFsJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkaW5wdXQ6ICQoJ1tuYW1lPXF0eVxcXFxbXFxcXF1dJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAkYnVsa1ByaWNpbmc6ICQoJy5wcm9kdWN0Vmlldy1pbmZvLWJ1bGtQcmljaW5nJywgJHNjb3BlKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIHRoZSBwcmljaW5nIGVsZW1lbnRzIHRoYXQgd2lsbCBzaG93IHVwIG9ubHkgd2hlbiB0aGUgcHJpY2UgZXhpc3RzIGluIEFQSVxuICAgICAqIEBwYXJhbSB2aWV3TW9kZWxcbiAgICAgKi9cbiAgICBjbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpIHtcbiAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgdmlldyBvZiBwcmljZSwgbWVzc2FnZXMsIFNLVSBhbmQgc3RvY2sgb3B0aW9ucyB3aGVuIGEgcHJvZHVjdCBvcHRpb24gY2hhbmdlc1xuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXG4gICAgICovXG4gICAgdXBkYXRlVmlldyhkYXRhLCBjb250ZW50ID0gbnVsbCkge1xuICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coZGF0YSwgZGF0YS5zdG9ja19tZXNzYWdlLCBkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSlcblxuICAgICAgICB0aGlzLnNob3dNZXNzYWdlQm94KGRhdGEuc3RvY2tfbWVzc2FnZSB8fCBkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSk7XG5cbiAgICAgICAgaWYgKGlzT2JqZWN0KGRhdGEucHJpY2UpKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIGRhdGEucHJpY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzT2JqZWN0KGRhdGEud2VpZ2h0KSkge1xuICAgICAgICAgICAgdmlld01vZGVsLiR3ZWlnaHQuaHRtbChkYXRhLndlaWdodC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHZhcmlhdGlvbl9pZCBpZiBpdCBleGlzdHMgZm9yIGFkZGluZyB0byB3aXNobGlzdFxuICAgICAgICBpZiAoZGF0YS52YXJpYW50SWQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2lzaGxpc3RWYXJpYXRpb24udmFsKGRhdGEudmFyaWFudElkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIFNLVSBpcyBhdmFpbGFibGVcbiAgICAgICAgaWYgKGRhdGEuc2t1KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc2t1LiR2YWx1ZS50ZXh0KGRhdGEuc2t1KTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJGxhYmVsLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJGxhYmVsLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJHZhbHVlLnRleHQoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgVVBDIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS51cGMpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC51cGMuJHZhbHVlLnRleHQoZGF0YS51cGMpO1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kbGFiZWwuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kbGFiZWwuaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kdmFsdWUudGV4dCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBNUE4gaXMgYXZhaWxhYmxlXG4gICAgICAgIGlmIChkYXRhLm1wbikge1xuICAgICAgICAgICAgdmlld01vZGVsLm1wbi4kdmFsdWUudGV4dChkYXRhLm1wbik7XG4gICAgICAgICAgICB2aWV3TW9kZWwubXBuLiRsYWJlbC5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwubXBuLiRsYWJlbC5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubXBuLiR2YWx1ZS50ZXh0KCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHN0b2NrIHZpZXcgaXMgb24gKENQIHNldHRpbmdzKVxuICAgICAgICBpZiAodmlld01vZGVsLnN0b2NrLiRjb250YWluZXIubGVuZ3RoICYmIGlzTnVtYmVyKGRhdGEuc3RvY2spKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgc3RvY2sgY29udGFpbmVyIGlzIGhpZGRlbiwgc2hvd1xuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcblxuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRpbnB1dC50ZXh0KGRhdGEuc3RvY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRjb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kaW5wdXQudGV4dChkYXRhLnN0b2NrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoZGF0YSk7XG5cbiAgICAgICAgLy8gSWYgQnVsayBQcmljaW5nIHJlbmRlcmVkIEhUTUwgaXMgYXZhaWxhYmxlXG4gICAgICAgIGlmIChkYXRhLmJ1bGtfZGlzY291bnRfcmF0ZXMgJiYgY29udGVudCkge1xuICAgICAgICAgICAgdmlld01vZGVsLiRidWxrUHJpY2luZy5odG1sKGNvbnRlbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiAoZGF0YS5idWxrX2Rpc2NvdW50X3JhdGVzKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYnVsa1ByaWNpbmcuaHRtbCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhZGRUb0NhcnRXcmFwcGVyID0gJCgnI2FkZC10by1jYXJ0LXdyYXBwZXInKTtcblxuICAgICAgICBpZiAoYWRkVG9DYXJ0V3JhcHBlci5pcygnOmhpZGRlbicpICYmIGRhdGEucHVyY2hhc2FibGUpIHtcbiAgICAgICAgICAgIGFkZFRvQ2FydFdyYXBwZXIuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSB2aWV3IG9mIHByaWNlLCBtZXNzYWdlcywgU0tVIGFuZCBzdG9jayBvcHRpb25zIHdoZW4gYSBwcm9kdWN0IG9wdGlvbiBjaGFuZ2VzXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBwcmljZSkge1xuICAgICAgICB0aGlzLmNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCk7XG5cbiAgICAgICAgaWYgKHByaWNlLndpdGhfdGF4KSB7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkUHJpY2UgPSBwcmljZS5wcmljZV9yYW5nZSA/XG4gICAgICAgICAgICAgICAgYCR7cHJpY2UucHJpY2VfcmFuZ2UubWluLndpdGhfdGF4LmZvcm1hdHRlZH0gLSAke3ByaWNlLnByaWNlX3JhbmdlLm1heC53aXRoX3RheC5mb3JtYXR0ZWR9YFxuICAgICAgICAgICAgICAgIDogcHJpY2Uud2l0aF90YXguZm9ybWF0dGVkO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhUYXguaHRtbCh1cGRhdGVkUHJpY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLndpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkUHJpY2UgPSBwcmljZS5wcmljZV9yYW5nZSA/XG4gICAgICAgICAgICAgICAgYCR7cHJpY2UucHJpY2VfcmFuZ2UubWluLndpdGhvdXRfdGF4LmZvcm1hdHRlZH0gLSAke3ByaWNlLnByaWNlX3JhbmdlLm1heC53aXRob3V0X3RheC5mb3JtYXR0ZWR9YFxuICAgICAgICAgICAgICAgIDogcHJpY2Uud2l0aG91dF90YXguZm9ybWF0dGVkO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhvdXRUYXguaHRtbCh1cGRhdGVkUHJpY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLnJycF93aXRoX3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kc3Bhbi5odG1sKHByaWNlLnJycF93aXRoX3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLnJycF93aXRob3V0X3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLnJycF93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLnNhdmVkKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRzcGFuLmh0bWwocHJpY2Uuc2F2ZWQuZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgYW4gbWVzc2FnZSBib3ggaWYgYSBtZXNzYWdlIGlzIHBhc3NlZFxuICAgICAqIEhpZGUgdGhlIGJveCBpZiB0aGUgbWVzc2FnZSBpcyBlbXB0eVxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbWVzc2FnZVxuICAgICAqL1xuICAgIHNob3dNZXNzYWdlQm94KG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgJG1lc3NhZ2VCb3ggPSAkKCcucHJvZHVjdEF0dHJpYnV0ZXMtbWVzc2FnZScpO1xuXG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAkKCcuYWxlcnRCb3gtbWVzc2FnZScsICRtZXNzYWdlQm94KS50ZXh0KG1lc3NhZ2UpO1xuICAgICAgICAgICAgJG1lc3NhZ2VCb3guc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJG1lc3NhZ2VCb3guaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoZGF0YSkge1xuICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XG4gICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGFkZFRvQ2FydC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgdmlld01vZGVsLiRpbmNyZW1lbnRzLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGFkZFRvQ2FydC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kaW5jcmVtZW50cy5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnJlbW92ZUNsYXNzKCd1bmF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGlzYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaGlkZSgwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuYWRkQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpIHtcbiAgICAgICAgY29uc3QgJHBhcmVudCA9ICRhdHRyaWJ1dGUuY2xvc2VzdCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJyk7XG5cbiAgICAgICAgcmV0dXJuICRwYXJlbnQgPyAkcGFyZW50LmRhdGEoJ3Byb2R1Y3RBdHRyaWJ1dGUnKSA6IG51bGw7XG4gICAgfVxuXG4gICAgZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgJHNlbGVjdCA9ICRhdHRyaWJ1dGUucGFyZW50KCk7XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnRvZ2dsZU9wdGlvbihmYWxzZSk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgYXR0cmlidXRlIGlzIHRoZSBzZWxlY3RlZCBvcHRpb24gaW4gYSBzZWxlY3QgZHJvcGRvd24sIHNlbGVjdCB0aGUgZmlyc3Qgb3B0aW9uIChNRVJDLTYzOSlcbiAgICAgICAgICAgIGlmICgkc2VsZWN0LnZhbCgpID09PSAkYXR0cmlidXRlLmF0dHIoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICAkc2VsZWN0WzBdLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5odG1sKCRhdHRyaWJ1dGUuaHRtbCgpLnJlcGxhY2Uob3V0T2ZTdG9ja01lc3NhZ2UsICcnKSArIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnRvZ2dsZU9wdGlvbih0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmh0bWwoJGF0dHJpYnV0ZS5odG1sKCkucmVwbGFjZShvdXRPZlN0b2NrTWVzc2FnZSwgJycpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBpc0Jyb3dzZXJJRSA9ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xuXG5leHBvcnQgY29uc3QgY29udmVydEludG9BcnJheSA9IGNvbGxlY3Rpb24gPT4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY29sbGVjdGlvbik7XG4iLCJjb25zdCBjaGFuZ2VXaXNobGlzdFBhZ2luYXRpb25MaW5rcyA9ICh3aXNobGlzdFVybCwgLi4ucGFnaW5hdGlvbkl0ZW1zKSA9PiAkLmVhY2gocGFnaW5hdGlvbkl0ZW1zLCAoXywgJGl0ZW0pID0+IHtcbiAgICBjb25zdCBwYWdpbmF0aW9uTGluayA9ICRpdGVtLmNoaWxkcmVuKCcucGFnaW5hdGlvbi1saW5rJyk7XG5cbiAgICBpZiAoJGl0ZW0ubGVuZ3RoICYmICFwYWdpbmF0aW9uTGluay5hdHRyKCdocmVmJykuaW5jbHVkZXMoJ3BhZ2U9JykpIHtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlciA9IHBhZ2luYXRpb25MaW5rLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgcGFnaW5hdGlvbkxpbmsuYXR0cignaHJlZicsIGAke3dpc2hsaXN0VXJsfXBhZ2U9JHtwYWdlTnVtYmVyfWApO1xuICAgIH1cbn0pO1xuXG4vKipcbiAqIGhlbHBzIHRvIHdpdGhkcmF3IGRpZmZlcmVuY2VzIGluIHN0cnVjdHVyZXMgYXJvdW5kIHRoZSBzdGVuY2lsIHJlc291cmNlIHBhZ2luYXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHdpc2hsaXN0UGFnaW5hdG9ySGVscGVyID0gKCkgPT4ge1xuICAgIGNvbnN0ICRwYWdpbmF0aW9uTGlzdCA9ICQoJy5wYWdpbmF0aW9uLWxpc3QnKTtcblxuICAgIGlmICghJHBhZ2luYXRpb25MaXN0Lmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgY29uc3QgJG5leHRJdGVtID0gJCgnLnBhZ2luYXRpb24taXRlbS0tbmV4dCcsICRwYWdpbmF0aW9uTGlzdCk7XG4gICAgY29uc3QgJHByZXZJdGVtID0gJCgnLnBhZ2luYXRpb24taXRlbS0tcHJldmlvdXMnLCAkcGFnaW5hdGlvbkxpc3QpO1xuICAgIGNvbnN0IGN1cnJlbnRIcmVmID0gJCgnW2RhdGEtcGFnaW5hdGlvbi1jdXJyZW50LXBhZ2UtbGlua10nKS5hdHRyKCdocmVmJyk7XG4gICAgY29uc3QgcGFydGlhbFBhZ2luYXRpb25VcmwgPSBjdXJyZW50SHJlZi5zcGxpdCgncGFnZT0nKS5zaGlmdCgpO1xuXG4gICAgY2hhbmdlV2lzaGxpc3RQYWdpbmF0aW9uTGlua3MocGFydGlhbFBhZ2luYXRpb25VcmwsICRwcmV2SXRlbSwgJG5leHRJdGVtKTtcbn07XG4iLCJpbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24ucmV2ZWFsJztcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgeyB3aXNobGlzdFBhZ2luYXRvckhlbHBlciB9IGZyb20gJy4vY29tbW9uL3V0aWxzL3BhZ2luYXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaXNoTGlzdCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnYWNjb3VudC9hZGQtd2lzaGxpc3QnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBjb25maXJtIGJveCBiZWZvcmUgZGVsZXRpbmcgYWxsIHdpc2ggbGlzdHNcbiAgICAgKi9cbiAgICB3aXNobGlzdERlbGV0ZUNvbmZpcm0oKSB7XG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtd2lzaGxpc3QtZGVsZXRlXScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1lZCA9IHdpbmRvdy5jb25maXJtKHRoaXMuY29udGV4dC53aXNobGlzdERlbGV0ZSk7XG5cbiAgICAgICAgICAgIGlmIChjb25maXJtZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJBZGRXaXNoTGlzdFZhbGlkYXRpb24oJGFkZFdpc2hsaXN0Rm9ybSkge1xuICAgICAgICB0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJy53aXNobGlzdC1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcud2lzaGxpc3QtZm9ybSBpbnB1dFtuYW1lPVwid2lzaGxpc3RuYW1lXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aCA+IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyV2lzaGxpc3ROYW1lRXJyb3IsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcblxuICAgICAgICAkYWRkV2lzaGxpc3RGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0ICRhZGRXaXNoTGlzdEZvcm0gPSAkKCcud2lzaGxpc3QtZm9ybScpO1xuXG4gICAgICAgIGlmICgkKCdbZGF0YS1wYWdpbmF0aW9uLXdpc2hsaXN0XScpLmxlbmd0aCkge1xuICAgICAgICAgICAgd2lzaGxpc3RQYWdpbmF0b3JIZWxwZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkYWRkV2lzaExpc3RGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckFkZFdpc2hMaXN0VmFsaWRhdGlvbigkYWRkV2lzaExpc3RGb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud2lzaGxpc3REZWxldGVDb25maXJtKCk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImFyaWFLZXlDb2RlcyIsIlJFVFVSTiIsIlNQQUNFIiwiTEVGVCIsIlVQIiwiUklHSFQiLCJET1dOIiwic2V0Q2hlY2tlZFJhZGlvSXRlbSIsIml0ZW1Db2xsZWN0aW9uIiwiaXRlbUlkeCIsImVhY2giLCJpZHgiLCJpdGVtIiwiJGl0ZW0iLCIkIiwiYXR0ciIsInByb3AiLCJmb2N1cyIsInRyaWdnZXIiLCJjYWxjdWxhdGVUYXJnZXRJdGVtUG9zaXRpb24iLCJsYXN0SXRlbUlkeCIsImN1cnJlbnRJZHgiLCJoYW5kbGVJdGVtS2V5RG93biIsImUiLCJrZXlDb2RlIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwibGFzdENvbGxlY3Rpb25JdGVtSWR4IiwibGVuZ3RoIiwiT2JqZWN0IiwidmFsdWVzIiwiaW5jbHVkZXMiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZJdGVtSWR4IiwiZ2V0IiwibmV4dEl0ZW1JZHgiLCIkY29udGFpbmVyIiwiaXRlbVNlbGVjdG9yIiwiJGl0ZW1Db2xsZWN0aW9uIiwiZmluZCIsIm9uIiwibWVkaWFRdWVyeUxpc3RGYWN0b3J5IiwiUExVR0lOX0tFWSIsIkNvbGxhcHNpYmxlRXZlbnRzIiwib3BlbiIsImNsb3NlIiwidG9nZ2xlIiwiY2xpY2siLCJDb2xsYXBzaWJsZVN0YXRlIiwiY2xvc2VkIiwicHJlcGVuZEhhc2giLCJpZCIsImluZGV4T2YiLCJvcHRpb25zRnJvbURhdGEiLCIkZWxlbWVudCIsImRpc2FibGVkQnJlYWtwb2ludCIsImRhdGEiLCJkaXNhYmxlZFN0YXRlIiwiZW5hYmxlZFN0YXRlIiwib3BlbkNsYXNzTmFtZSIsIkNvbGxhcHNpYmxlIiwiJHRvZ2dsZSIsIiR0YXJnZXQiLCJfdGVtcCIsIl9yZWYiLCJfcmVmJG9wZW5DbGFzc05hbWUiLCJ0YXJnZXRJZCIsImRpc2FibGVkTWVkaWFRdWVyeUxpc3QiLCJkaXNhYmxlZCIsIm1hdGNoZXMiLCJvbkNsaWNrZWQiLCJiaW5kIiwib25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2giLCJpc0NvbGxhcHNlZCIsIl9nZXRUb2dnbGVBcmlhTGFiZWxUZXh0IiwiaXNPcGVuIiwiYmluZEV2ZW50cyIsIl9wcm90byIsInByb3RvdHlwZSIsIiR0ZXh0VG9nZ2xlQ2hpbGRyZW4iLCJjaGlsZHJlbiIsImZpbHRlciIsIl9fIiwiY2hpbGQiLCJ0ZXh0IiwidHJpbSIsIiRhcmlhTGFiZWxUYXJnZXQiLCJmaXJzdCIsIl90ZW1wMiIsIl9yZWYyIiwiX3JlZjIkbm90aWZ5Iiwibm90aWZ5IiwiYWRkQ2xhc3MiLCJfdGVtcDMiLCJfcmVmMyIsIl9yZWYzJG5vdGlmeSIsInJlbW92ZUNsYXNzIiwidG9nZ2xlQnlTdGF0ZSIsInN0YXRlIiwiX2xlbiIsImFyZ3VtZW50cyIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJhcHBseSIsInVuZGVmaW5lZCIsImhhc0NvbGxhcHNpYmxlIiwiY29sbGFwc2libGVJbnN0YW5jZSIsImNvbnRhaW5zIiwiYWRkTGlzdGVuZXIiLCJ1bmJpbmRFdmVudHMiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsImV2ZW50IiwibWVkaWEiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJpcyIsImhhc0NsYXNzIiwiX2Rpc2FibGVkIiwic2V0IiwiY29sbGFwc2libGVGYWN0b3J5Iiwic2VsZWN0b3IiLCJvdmVycmlkZU9wdGlvbnMiLCIkY29sbGFwc2libGVzIiwiJGNvbnRleHQiLCJtYXAiLCJlbGVtZW50IiwiaW5zdGFuY2VLZXkiLCJjYWNoZWRDb2xsYXBzaWJsZSIsIm9wdGlvbnMiLCJfZXh0ZW5kIiwiY29sbGFwc2libGUiLCJ0b0FycmF5IiwiYnJlYWtwb2ludFNpemVzIiwibGFyZ2UiLCJtZWRpdW0iLCJzbWFsbCIsImJyZWFrcG9pbnROYW1lIiwid2luZG93IiwibWF0Y2hNZWRpYSIsImJyZWFrcG9pbnQiLCJtZWRpYVF1ZXJ5IiwibWVkaWFRdWVyeUxpc3QiLCJXaXNobGlzdCIsImluaXRSYWRpb09wdGlvbnMiLCJvcHRpb25zVHlwZXNNYXAiLCJJTlBVVF9GSUxFIiwiSU5QVVRfVEVYVCIsIklOUFVUX05VTUJFUiIsIklOUFVUX0NIRUNLQk9YIiwiVEVYVEFSRUEiLCJEQVRFIiwiU0VUX1NFTEVDVCIsIlNFVF9SRUNUQU5HTEUiLCJTRVRfUkFESU8iLCJTV0FUQ0giLCJQUk9EVUNUX0xJU1QiLCJvcHRpb25DaGFuZ2VEZWNvcmF0b3IiLCJhcmVEZWZhdWx0T3Rpb25zU2V0IiwiX3RoaXMiLCJlcnIiLCJyZXNwb25zZSIsImF0dHJpYnV0ZXNEYXRhIiwiYXR0cmlidXRlc0NvbnRlbnQiLCJjb250ZW50IiwidXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMiLCJ1cGRhdGVWaWV3IiwidXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MiLCJQcm9kdWN0RGV0YWlsc0Jhc2UiLCIkc2NvcGUiLCJjb250ZXh0IiwiX3RoaXMyIiwiaW5pdFJhZGlvQXR0cmlidXRlcyIsImxvYWQiLCJnZXRUYWJSZXF1ZXN0cyIsInZhbHVlIiwidHlwZSIsImdldEF0dHJpYnV0ZSIsIl9tYWtlUHJvZHVjdFZhcmlhbnRBY2Nlc3NpYmxlIiwidmFyaWFudERvbU5vZGUiLCJ2YXJpYW50VHlwZSIsIl90aGlzMyIsImkiLCJyYWRpbyIsIiRyYWRpbyIsIl90aGlzNCIsImJlaGF2aW9yIiwib3V0X29mX3N0b2NrX2JlaGF2aW9yIiwiaW5TdG9ja0lkcyIsImluX3N0b2NrX2F0dHJpYnV0ZXMiLCJvdXRPZlN0b2NrTWVzc2FnZSIsIm91dF9vZl9zdG9ja19tZXNzYWdlIiwiYXR0cmlidXRlIiwiJGF0dHJpYnV0ZSIsImF0dHJJZCIsInBhcnNlSW50IiwiZW5hYmxlQXR0cmlidXRlIiwiZGlzYWJsZUF0dHJpYnV0ZSIsImxvY2F0aW9uIiwiaGFzaCIsIiRhY3RpdmVUYWIiLCJoYXMiLCIkdGFiQ29udGVudCIsInNpYmxpbmdzIiwiZ2V0Vmlld01vZGVsIiwiJHByaWNlV2l0aFRheCIsIiRwcmljZVdpdGhvdXRUYXgiLCJycnBXaXRoVGF4IiwiJGRpdiIsIiRzcGFuIiwicnJwV2l0aG91dFRheCIsIm5vblNhbGVXaXRoVGF4Iiwibm9uU2FsZVdpdGhvdXRUYXgiLCJwcmljZVNhdmVkIiwicHJpY2VOb3dMYWJlbCIsInByaWNlTGFiZWwiLCIkd2VpZ2h0IiwiJGluY3JlbWVudHMiLCIkYWRkVG9DYXJ0IiwiJHdpc2hsaXN0VmFyaWF0aW9uIiwic3RvY2siLCIkaW5wdXQiLCJza3UiLCIkbGFiZWwiLCIkdmFsdWUiLCJ1cGMiLCJtcG4iLCJxdWFudGl0eSIsIiR0ZXh0IiwiJGJ1bGtQcmljaW5nIiwiY2xlYXJQcmljaW5nTm90Rm91bmQiLCJ2aWV3TW9kZWwiLCJoaWRlIiwic2hvd01lc3NhZ2VCb3giLCJzdG9ja19tZXNzYWdlIiwicHVyY2hhc2luZ19tZXNzYWdlIiwiX2lzT2JqZWN0IiwicHJpY2UiLCJ1cGRhdGVQcmljZVZpZXciLCJ3ZWlnaHQiLCJodG1sIiwiZm9ybWF0dGVkIiwidmFyaWFudElkIiwidmFsIiwic2hvdyIsIl9pc051bWJlciIsImJ1bGtfZGlzY291bnRfcmF0ZXMiLCJhZGRUb0NhcnRXcmFwcGVyIiwicHVyY2hhc2FibGUiLCJ3aXRoX3RheCIsInVwZGF0ZWRQcmljZSIsInByaWNlX3JhbmdlIiwibWluIiwibWF4Iiwid2l0aG91dF90YXgiLCJycnBfd2l0aF90YXgiLCJycnBfd2l0aG91dF90YXgiLCJzYXZlZCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4Iiwibm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgiLCJtZXNzYWdlIiwiJG1lc3NhZ2VCb3giLCJpbnN0b2NrIiwiZ2V0QXR0cmlidXRlVHlwZSIsImVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSIsImRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUiLCIkcGFyZW50IiwiY2xvc2VzdCIsIiRzZWxlY3QiLCJwYXJlbnQiLCJ0b2dnbGVPcHRpb24iLCJzZWxlY3RlZEluZGV4IiwicmVwbGFjZSIsImRlZmF1bHQiLCJpc0Jyb3dzZXJJRSIsImRvY3VtZW50IiwiZG9jdW1lbnRNb2RlIiwiY29udmVydEludG9BcnJheSIsImNvbGxlY3Rpb24iLCJzbGljZSIsImNhbGwiLCJjaGFuZ2VXaXNobGlzdFBhZ2luYXRpb25MaW5rcyIsIndpc2hsaXN0VXJsIiwicGFnaW5hdGlvbkl0ZW1zIiwiXyIsInBhZ2luYXRpb25MaW5rIiwicGFnZU51bWJlciIsIndpc2hsaXN0UGFnaW5hdG9ySGVscGVyIiwiJHBhZ2luYXRpb25MaXN0IiwiJG5leHRJdGVtIiwiJHByZXZJdGVtIiwiY3VycmVudEhyZWYiLCJwYXJ0aWFsUGFnaW5hdGlvblVybCIsInNwbGl0Iiwic2hpZnQiLCJub2QiLCJQYWdlTWFuYWdlciIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCJXaXNoTGlzdCIsIl9QYWdlTWFuYWdlciIsInRlbXBsYXRlIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIl9pbmhlcml0c0xvb3NlIiwid2lzaGxpc3REZWxldGVDb25maXJtIiwiY29uZmlybWVkIiwiY29uZmlybSIsIndpc2hsaXN0RGVsZXRlIiwicmVnaXN0ZXJBZGRXaXNoTGlzdFZhbGlkYXRpb24iLCIkYWRkV2lzaGxpc3RGb3JtIiwiYWRkV2lzaGxpc3RWYWxpZGF0b3IiLCJzdWJtaXQiLCJ0YXAiLCJhZGQiLCJ2YWxpZGF0ZSIsImNiIiwicmVzdWx0IiwiZXJyb3JNZXNzYWdlIiwiZW50ZXJXaXNobGlzdE5hbWVFcnJvciIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsIm9uUmVhZHkiLCIkYWRkV2lzaExpc3RGb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==
