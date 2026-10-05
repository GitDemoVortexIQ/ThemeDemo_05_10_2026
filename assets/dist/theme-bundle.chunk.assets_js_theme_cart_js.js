"use strict";
(self["webpackChunklonestar_cavio"] = self["webpackChunklonestar_cavio"] || []).push([["assets_js_theme_cart_js"],{

/***/ "./assets/js/theme/cart.js":
/*!*********************************!*\
  !*** ./assets/js/theme/cart.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cart)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _common_cart_item_details__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/cart-item-details */ "./assets/js/theme/common/cart-item-details.js");
/* harmony import */ var _cavio_dev_advanced_swatch_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cavio/dev-advanced-swatch-image */ "./assets/js/theme/cavio/dev-advanced-swatch-image.js");
/* harmony import */ var _cavio_cart_products__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cavio/cart-products */ "./assets/js/theme/cavio/cart-products.js");
/* harmony import */ var _cavio_free_shipping__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cavio/free-shipping */ "./assets/js/theme/cavio/free-shipping.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }










var Cart = /*#__PURE__*/function (_PageManager) {
  function Cart() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Cart, _PageManager);
  var _proto = Cart.prototype;
  _proto.onReady = function onReady() {
    this.$modal = null;
    this.$cartPageContent = $('[data-cart]');
    this.$cartContent = $('[data-cart-content]');
    this.$cartMessages = $('[data-cart-status]');
    this.$cartTotals = $('[data-cart-totals]');
    this.$cartAdditionalCheckoutBtns = $('[data-cart-additional-checkout-buttons]');
    this.$overlay = $('[data-cart] .loadingOverlay').hide();
    this.$activeCartItemId = null;
    this.$activeCartItemBtnAction = null;
    this.setApplePaySupport();
    this.bindEvents();
    (0,_cavio_dev_advanced_swatch_image__WEBPACK_IMPORTED_MODULE_9__["default"])();
    (0,_cavio_cart_products__WEBPACK_IMPORTED_MODULE_10__["default"])(this.context);
    this.$freeshipping = $('.cart-shipping');

    // Call freeshipping on page load
    (0,_cavio_free_shipping__WEBPACK_IMPORTED_MODULE_11__["default"])(this.context);
  };
  _proto.setApplePaySupport = function setApplePaySupport() {
    if (window.ApplePaySession) {
      this.$cartPageContent.addClass('apple-pay-supported');
    }
  };
  _proto.cartUpdate = function cartUpdate($target) {
    var _this = this;
    var itemId = $target.data('cartItemid');
    this.$activeCartItemId = itemId;
    this.$activeCartItemBtnAction = $target.data('action');
    var $el = $("#qty-" + itemId);
    var oldQty = parseInt($el.val(), 10);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1;
    // Does not quality for min/max quantity
    if (newQty < minQty) {
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(minError);
    } else if (maxQty > 0 && newQty > maxQty) {
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(maxError);
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        _this.refreshContent(remove);
      } else {
        $el.val(oldQty);
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
      }
    });
  };
  _proto.cartUpdateQtyTextChange = function cartUpdateQtyTextChange($target, preVal) {
    var _this2 = this;
    if (preVal === void 0) {
      preVal = null;
    }
    var itemId = $target.data('cartItemid');
    var $el = $("#qty-" + itemId);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var oldQty = preVal !== null ? preVal : minQty;
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = parseInt(Number($el.val()), 10);
    var invalidEntry;

    // Does not quality for min/max quantity
    if (!Number.isInteger(newQty)) {
      invalidEntry = $el.val();
      $el.val(oldQty);
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(this.context.invalidEntryMessage.replace('[ENTRY]', invalidEntry));
    } else if (newQty < minQty) {
      $el.val(oldQty);
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(minError);
    } else if (maxQty > 0 && newQty > maxQty) {
      $el.val(oldQty);
      return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(maxError);
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this2.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        _this2.refreshContent(remove);
      } else {
        $el.val(oldQty);
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
      }
    });
  };
  _proto.cartRemoveItem = function cartRemoveItem(itemId) {
    var _this3 = this;
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.itemRemove(itemId, function (err, response) {
      if (response.data.status === 'succeed') {
        _this3.refreshContent(true);
      } else {
        _this3.$overlay.hide();
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
      }
    });
  };
  _proto.cartEditOptions = function cartEditOptions(itemId, productId) {
    var _this4 = this;
    var context = Object.assign({
      productForChangeId: productId
    }, this.context);
    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.defaultModal)();
    if (this.$modal === null) {
      this.$modal = $('#modal');
    }
    var options = {
      template: 'cart/modals/configure-product'
    };
    modal.open();
    this.$modal.find('.modal-content').addClass('hide-content');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.productAttributes.configureInCart(itemId, options, function (err, response) {
      modal.updateContent(response.content);
      var optionChangeHandler = function optionChangeHandler() {
        var $productOptionsContainer = $('[data-product-attributes-wrapper]', _this4.$modal);
        var modalBodyReservedHeight = $productOptionsContainer.outerHeight();
        if ($productOptionsContainer.length && modalBodyReservedHeight) {
          $productOptionsContainer.css('height', modalBodyReservedHeight);
        }
      };
      if (_this4.$modal.hasClass('open')) {
        optionChangeHandler();
      } else {
        _this4.$modal.one(_global_modal__WEBPACK_IMPORTED_MODULE_7__.ModalEvents.opened, optionChangeHandler);
      }
      var modalForm = _this4.$modal.find('form');
      var refreshContent = function refreshContent() {
        return _this4.refreshContent();
      };
      function onSubmit(_x) {
        return _onSubmit.apply(this, arguments);
      }
      function _onSubmit() {
        _onSubmit = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.postFormData(new FormData(this), function () {
                  modal.close();
                  refreshContent();
                });
              case 2:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        return _onSubmit.apply(this, arguments);
      }
      modalForm.on('submit', onSubmit);
      _this4.productDetails = new _common_cart_item_details__WEBPACK_IMPORTED_MODULE_8__["default"](_this4.$modal, context);
      _this4.bindGiftWrappingForm();
    });
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].hooks.on('product-option-change', function (event, currentTarget) {
      var $form = $(currentTarget).find('form');
      var $submit = $('input.button', $form);
      var $messageBox = $('.alertMessageBox');
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.productAttributes.optionChange(productId, $form.serialize(), function (err, result) {
        var data = result.data || {};
        if (err) {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(err);
          return false;
        }
        if (data.purchasing_message) {
          $('p.alertBox-message', $messageBox).text(data.purchasing_message);
          $submit.prop('disabled', true);
          $messageBox.show();
        } else {
          $submit.prop('disabled', false);
          $messageBox.hide();
        }
        if (!data.purchasable || !data.instock) {
          $submit.prop('disabled', true);
        } else {
          $submit.prop('disabled', false);
        }
      });
    });
  };
  _proto.refreshContent = function refreshContent(remove) {
    var _this5 = this;
    var $cartItemsRows = $('[data-item-row]', this.$cartContent);
    var $cartPageTitle = $('[data-cart-page-title]');
    var options = {
      template: {
        content: 'cart/content',
        totals: 'cart/totals',
        pageTitle: 'cart/page-title',
        statusMessages: 'cart/status-messages',
        additionalCheckoutButtons: 'cart/additional-checkout-buttons',
        freeshipping: 'cavio/cart-free-shipping'
      }
    };
    this.$overlay.show();

    // Remove last item from cart? Reload
    if (remove && $cartItemsRows.length === 1) {
      return window.location.reload();
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getContent(options, function (err, response) {
      _this5.$cartContent.html(response.content);
      _this5.$cartTotals.html(response.totals);
      _this5.$cartMessages.html(response.statusMessages);
      _this5.$cartAdditionalCheckoutBtns.html(response.additionalCheckoutButtons);

      // Update the free shipping section
      _this5.$freeshipping.html(response.freeshipping);

      // Call freeshipping after content update
      (0,_cavio_free_shipping__WEBPACK_IMPORTED_MODULE_11__["default"])(_this5.context);
      $cartPageTitle.replaceWith(response.pageTitle);
      var quantity = $('[data-cart-quantity]', _this5.$cartContent).data('cartQuantity') || 0;
      if (!quantity) {
        return window.location.reload();
      }
      _this5.bindEvents();
      _this5.$overlay.hide();
      $('body').trigger('cart-quantity-update', quantity);
      $("[data-cart-itemid='" + _this5.$activeCartItemId + "']", _this5.$cartContent).filter("[data-action='" + _this5.$activeCartItemBtnAction + "']").trigger('focus');
    });
  };
  _proto.bindCartEvents = function bindCartEvents() {
    var _this6 = this;
    var debounceTimeout = 400;
    var cartUpdate = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdate, debounceTimeout), this);
    var cartUpdateQtyTextChange = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdateQtyTextChange, debounceTimeout), this);
    var cartRemoveItem = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartRemoveItem, debounceTimeout), this);
    var preVal;

    // cart update
    $('[data-cart-update]', this.$cartContent).on('click', function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault();

      // update cart quantity
      cartUpdate($target);
    });

    // cart qty manually updates
    $('.cart-item-qty-input', this.$cartContent).on('focus', function onQtyFocus() {
      preVal = this.value;
    }).change(function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault();

      // update cart quantity
      cartUpdateQtyTextChange($target, preVal);
    });
    $('.cart-remove', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('cartItemid');
      var string = $(event.currentTarget).data('confirmDelete');
      (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(string, {
        icon: 'warning',
        showCancelButton: true,
        onConfirm: function onConfirm() {
          // remove item from cart
          cartRemoveItem(itemId);
        }
      });
      event.preventDefault();
    });
    $('[data-item-edit]', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemEdit');
      var productId = $(event.currentTarget).data('productId');
      event.preventDefault();
      // edit item in cart
      _this6.cartEditOptions(itemId, productId);
    });
  };
  _proto.bindPromoCodeEvents = function bindPromoCodeEvents() {
    var _this7 = this;
    var $couponContainer = $('.coupon-code');
    var $couponForm = $('.coupon-form');
    var $codeInput = $('[name="couponcode"]', $couponForm);
    $('.coupon-code-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $couponContainer.show();
      $couponContainer.attr('aria-hidden', false);
      $('.coupon-code-cancel').show();
      $codeInput.trigger('focus');
    });
    $('.coupon-code-cancel').on('click', function (event) {
      event.preventDefault();
      $couponContainer.hide();
      $couponContainer.attr('aria-hidden', true);
      $('.coupon-code-cancel').hide();
      $('.coupon-code-add').show();
    });
    $couponForm.on('submit', function (event) {
      var code = $codeInput.val();
      event.preventDefault();

      // Empty code
      if (!code) {
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)($codeInput.data('error'));
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.applyCode(code, function (err, response) {
        if (response.data.status === 'success') {
          _this7.refreshContent();
        } else {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(response.data.errors.join('\n'));
        }
      });
    });
  };
  _proto.bindGiftCertificateEvents = function bindGiftCertificateEvents() {
    var _this8 = this;
    var $certContainer = $('.gift-certificate-code');
    var $certForm = $('.cart-gift-certificate-form');
    var $certInput = $('[name="certcode"]', $certForm);
    $('.gift-certificate-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).toggle();
      $certContainer.toggle();
      $certContainer.attr('aria-hidden', false);
      $('.gift-certificate-cancel').toggle();
    });
    $('.gift-certificate-cancel').on('click', function (event) {
      event.preventDefault();
      $certContainer.toggle();
      $certContainer.attr('aria-hidden', true);
      $('.gift-certificate-add').toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $certForm.on('submit', function (event) {
      var code = $certInput.val();
      event.preventDefault();
      if (!(0,_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_3__["default"])(code)) {
        var validationDictionary = (0,_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(_this8.context);
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(validationDictionary.invalid_gift_certificate);
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.applyGiftCertificate(code, function (err, resp) {
        if (resp.data.status === 'success') {
          _this8.refreshContent();
        } else {
          (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.showAlertModal)(resp.data.errors.join('\n'));
        }
      });
    });
  };
  _proto.bindGiftWrappingEvents = function bindGiftWrappingEvents() {
    var _this9 = this;
    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.defaultModal)();
    $('[data-item-giftwrap]').on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemGiftwrap');
      var options = {
        template: 'cart/modals/gift-wrapping-form'
      };
      event.preventDefault();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getItemGiftWrappingOptions(itemId, options, function (err, response) {
        modal.updateContent(response.content);
        _this9.bindGiftWrappingForm();
      });
    });
  };
  _proto.bindGiftWrappingForm = function bindGiftWrappingForm() {
    $('.giftWrapping-select').on('change', function (event) {
      var $select = $(event.currentTarget);
      var id = $select.val();
      var index = $select.data('index');
      if (!id) {
        return;
      }
      var allowMessage = $select.find("option[value=" + id + "]").data('allowMessage');
      $(".giftWrapping-image-" + index).hide();
      $("#giftWrapping-image-" + index + "-" + id).show();
      if (allowMessage) {
        $("#giftWrapping-message-" + index).show();
      } else {
        $("#giftWrapping-message-" + index).hide();
      }
    });
    $('.giftWrapping-select').trigger('change');
    function toggleViews() {
      var value = $('input:radio[name ="giftwraptype"]:checked').val();
      var $singleForm = $('.giftWrapping-single');
      var $multiForm = $('.giftWrapping-multiple');
      if (value === 'same') {
        $singleForm.show();
        $multiForm.hide();
      } else {
        $singleForm.hide();
        $multiForm.show();
      }
    }
    $('[name="giftwraptype"]').on('click', toggleViews);
    toggleViews();
  };
  _proto.bindEvents = function bindEvents() {
    this.bindCartEvents();
    this.bindPromoCodeEvents();
    this.bindGiftWrappingEvents();
    this.bindGiftCertificateEvents();

    // initiate shipping estimator module
    var shippingErrorMessages = {
      country: this.context.shippingCountryErrorMessage,
      province: this.context.shippingProvinceErrorMessage
    };
    this.shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_6__["default"]($('[data-shipping-estimator]'), shippingErrorMessages);
  };
  return Cart;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./assets/js/theme/cart/shipping-estimator.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/cart/shipping-estimator.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShippingEstimator)
/* harmony export */ });
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");






var ShippingEstimator = /*#__PURE__*/function () {
  function ShippingEstimator($element, shippingErrorMessages) {
    this.$element = $element;
    this.$state = $('[data-field-type="State"]', this.$element);
    this.isEstimatorFormOpened = false;
    this.shippingErrorMessages = shippingErrorMessages;
    this.initFormValidation();
    this.bindStateCountryChange();
    this.bindEstimatorEvents();
  }
  var _proto = ShippingEstimator.prototype;
  _proto.initFormValidation = function initFormValidation() {
    var _this = this;
    var shippingEstimatorAlert = $('.shipping-quotes');
    this.shippingEstimator = 'form[data-shipping-estimator]';
    this.shippingValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: this.shippingEstimator + " .shipping-estimate-submit",
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.announceInputErrorMessage
    });
    $('.shipping-estimate-submit', this.$element).on('click', function (event) {
      // estimator error messages are being injected in html as a result
      // of user submit; clearing and adding role on submit provides
      // regular announcement of these error messages
      if (shippingEstimatorAlert.attr('role')) {
        shippingEstimatorAlert.removeAttr('role');
      }
      shippingEstimatorAlert.attr('role', 'alert');
      // When switching between countries, the state/region is dynamic
      // Only perform a check for all fields when country has a value
      // Otherwise areAll('valid') will check country for validity
      if ($(_this.shippingEstimator + " select[name=\"shipping-country\"]").val()) {
        _this.shippingValidator.performCheck();
      }
      if (_this.shippingValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
    this.bindValidation();
    this.bindStateValidation();
    this.bindUPSRates();
  };
  _proto.bindValidation = function bindValidation() {
    this.shippingValidator.add([{
      selector: this.shippingEstimator + " select[name=\"shipping-country\"]",
      validate: function validate(cb, val) {
        var countryId = Number(val);
        var result = countryId !== 0 && !Number.isNaN(countryId);
        cb(result);
      },
      errorMessage: this.shippingErrorMessages.country
    }]);
  };
  _proto.bindStateValidation = function bindStateValidation() {
    var _this2 = this;
    this.shippingValidator.add([{
      selector: $(this.shippingEstimator + " select[name=\"shipping-state\"]"),
      validate: function validate(cb) {
        var result;
        var $ele = $(_this2.shippingEstimator + " select[name=\"shipping-state\"]");
        if ($ele.length) {
          var eleVal = $ele.val();
          result = eleVal && eleVal.length && eleVal !== 'State/province';
        }
        cb(result);
      },
      errorMessage: this.shippingErrorMessages.province
    }]);
  }

  /**
   * Toggle between default shipping and ups shipping rates
   */;
  _proto.bindUPSRates = function bindUPSRates() {
    var UPSRateToggle = '.estimator-form-toggleUPSRate';
    $('body').on('click', UPSRateToggle, function (event) {
      var $estimatorFormUps = $('.estimator-form--ups');
      var $estimatorFormDefault = $('.estimator-form--default');
      event.preventDefault();
      $estimatorFormUps.toggleClass('u-hiddenVisually');
      $estimatorFormDefault.toggleClass('u-hiddenVisually');
    });
  };
  _proto.bindStateCountryChange = function bindStateCountryChange() {
    var _this3 = this;
    var $last;

    // Requests the states for a country with AJAX
    (0,_common_state_country__WEBPACK_IMPORTED_MODULE_0__["default"])(this.$state, this.context, {
      useIdForStates: true
    }, function (err, field) {
      if (err) {
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_5__.showAlertModal)(err);
        throw new Error(err);
      }
      var $field = $(field);
      if (_this3.shippingValidator.getStatus(_this3.$state) !== 'undefined') {
        _this3.shippingValidator.remove(_this3.$state);
      }
      if ($last) {
        _this3.shippingValidator.remove($last);
      }
      if ($field.is('select')) {
        $last = field;
        _this3.bindStateValidation();
      } else {
        $field.attr('placeholder', 'State/province');
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.Validators.cleanUpStateValidation(field);
      }

      // When you change a country, you swap the state/province between an input and a select dropdown
      // Not all countries require the province to be filled
      // We have to remove this class when we swap since nod validation doesn't cleanup for us
      $(_this3.shippingEstimator).find('.form-field--success').removeClass('form-field--success');
    });
  };
  _proto.toggleEstimatorFormState = function toggleEstimatorFormState(toggleButton, buttonSelector, $toggleContainer) {
    var changeAttributesOnToggle = function changeAttributesOnToggle(selectorToActivate) {
      $(toggleButton).attr('aria-labelledby', selectorToActivate);
      $(buttonSelector).text($("#" + selectorToActivate).text());
    };
    if (!this.isEstimatorFormOpened) {
      changeAttributesOnToggle('estimator-close');
      $toggleContainer.removeClass('u-hidden');
    } else {
      changeAttributesOnToggle('estimator-add');
      $toggleContainer.addClass('u-hidden');
    }
    this.isEstimatorFormOpened = !this.isEstimatorFormOpened;
  };
  _proto.bindEstimatorEvents = function bindEstimatorEvents() {
    var _this4 = this;
    var $estimatorContainer = $('.shipping-estimator');
    var $estimatorForm = $('.estimator-form');
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_4__["default"])();
    $estimatorForm.on('submit', function (event) {
      var params = {
        country_id: $('[name="shipping-country"]', $estimatorForm).val(),
        state_id: $('[name="shipping-state"]', $estimatorForm).val(),
        city: $('[name="shipping-city"]', $estimatorForm).val(),
        zip_code: $('[name="shipping-zip"]', $estimatorForm).val()
      };
      event.preventDefault();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.getShippingQuotes(params, 'cart/shipping-quotes', function (err, response) {
        $('.shipping-quotes').html(response.content);

        // bind the select button
        $('.select-shipping-quote').on('click', function (clickEvent) {
          var quoteId = $('.shipping-quote:checked').val();
          clickEvent.preventDefault();
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.cart.submitShippingQuote(quoteId, function () {
            window.location.reload();
          });
        });
      });
    });
    $('.shipping-estimate-show').on('click', function (event) {
      event.preventDefault();
      _this4.toggleEstimatorFormState(event.currentTarget, '.shipping-estimate-show__btn-name', $estimatorContainer);
    });
  };
  return ShippingEstimator;
}();


/***/ }),

/***/ "./assets/js/theme/cavio/cart-products.js":
/*!************************************************!*\
  !*** ./assets/js/theme/cavio/cart-products.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.min.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (context) {
  var $cartproductcarousel = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cart-addtional-products .productGrid');
  // Initialize Slick slider
  $cartproductcarousel.slick({
    arrows: true,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 801,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 551,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });

  // Function to update the slide info and active dot
  function cartproductupdateSlideInfo() {
    var totalSlides = $cartproductcarousel.find('.slick-dots li button').length;
    var activeSlideIndex = $cartproductcarousel.find('.slick-dots li.slick-active').index() + 1;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cart-product-nav .current-slide').text(activeSlideIndex);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cart-product-nav .total-slides').text(totalSlides);
    // Update slick-active-dot
    var $activeDot = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cart-addtional-products .slick-active-dot');
    if ($activeDot.length === 0) {
      $activeDot = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<li class="slick-active-dot"></li>');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cart-addtional-products .slick-dots').append($activeDot);
    }
    var dotWidth = 100 / totalSlides;
    $activeDot.css('width', dotWidth + '%');
    var dotLeft = dotWidth * (activeSlideIndex - 1);
    $activeDot.css('left', dotLeft + '%');
    if (activeSlideIndex == 1) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cart-product-nav .slick-prev').addClass('disabled-btn');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cart-product-nav .slick-next').removeClass('disabled-btn');
    } else if (activeSlideIndex == totalSlides) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cart-product-nav .slick-next').addClass('disabled-btn');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cart-product-nav .slick-prev').removeClass('disabled-btn');
    }
    if (activeSlideIndex > 1) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cart-product-nav .slick-prev').removeClass('disabled-btn');
    }
    if (activeSlideIndex < totalSlides) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cart-product-nav .slick-next').removeClass('disabled-btn');
    }
  }

  // Ensure the function runs on initial load and after each slide change
  function cartproductinitAndUpdate() {
    setTimeout(function () {
      cartproductupdateSlideInfo(); // Delay to ensure Slick has completed setup
    }, 100); // Adjust delay as needed
  }

  // Call cartproductinitAndUpdate function on slider events
  $cartproductcarousel.on('init reInit afterChange', cartproductinitAndUpdate);

  // Custom navigation buttons
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cart-product-nav .slick-prev').click(function () {
    $cartproductcarousel.slick('slickPrev');
    cartproductupdateSlideInfo();
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cart-product-nav .slick-next').click(function () {
    $cartproductcarousel.slick('slickNext');
    cartproductupdateSlideInfo();
  });
  // Initial call to set up the active dot and slide info
  cartproductinitAndUpdate();
});

/***/ }),

/***/ "./assets/js/theme/cavio/free-shipping.js":
/*!************************************************!*\
  !*** ./assets/js/theme/cavio/free-shipping.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.min.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (context) {
  // Get the current price and target price
  var spanText = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cart-total-grandTotal span').text();
  var api = "https://api.exchangerate-api.com/v4/latest/USD";
  // Extract the value before the integer
  var valueBeforeInteger = spanText.replace(/[0-9.]+/, '').trim();
  var targetPrice = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.to-price.ship-price').text().replace('$', '').replace(',', ''));
  var remainPrice = parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cart-total-grandTotal span').text().replace(valueBeforeInteger, '').replace(',', ''));
  var activeCurrency = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.navUser-action--currencySelector').attr('data-active-currency-code');
  var defaultCurrency = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.default-currency').text();
  if (activeCurrency == undefined) {
    activeCurrency = defaultCurrency;
  }
  var actualvalue = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".to-price.ship-price").attr('data-shipping-price');
  var defaultCurrency = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.default-currency').text();
  getResults(); // Currency exchange functionality
  // Check the conditions and add classes accordingly
  if (remainPrice < targetPrice) {
    // Calculate the percentage of targetPrice reached
    var percentageReached = 100 - (targetPrice - remainPrice) / targetPrice * 100;
    var mainprice = targetPrice - remainPrice;
    // Update the text for the away message
    var awaytext = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.cart-shipping-main .away-message').text();
    var awaytextchanged = awaytext.replace('{remain_price}', valueBeforeInteger + mainprice.toFixed(2));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.away-message').text(awaytextchanged);
    // Set the width of the progress bar
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.myProgresslabel').css('width', percentageReached + '%');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.away-message').addClass('highlight'); // Add your desired class here
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.freeshipping-message').removeClass('highlight'); // Remove the class if needed
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.currency-icon').text(valueBeforeInteger);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ship-price').addClass('visible-currency');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shp-in-prgs').removeClass('qualified-free-ship');
  } else {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.freeshipping-message').text("Your order qualifies for Free Shipping!"); // Adjust message if necessary
    // Set the progress bar to 100%
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.myProgresslabel').css('width', '100%');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.freeshipping-message').addClass('highlight'); // Add your desired class here
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.away-message').removeClass('highlight'); // Remove the class if needed    
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.currency-icon').text(valueBeforeInteger);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.ship-price').addClass('visible-currency');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shp-in-prgs').addClass('qualified-free-ship');
  }
  function displayResults(currency) {
    var fromRate = currency.rates[defaultCurrency];
    var toRate = currency.rates[activeCurrency];
    var finalValue = (toRate / fromRate * actualvalue).toFixed(2);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".to-price.ship-price .currency-value").text(finalValue);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.currency-value').addClass('visible-price');
  }
  function getResults() {
    fetch("" + api).then(function (currency) {
      return currency.json();
    }).then(displayResults);
  }
});

/***/ }),

/***/ "./assets/js/theme/common/cart-item-details.js":
/*!*****************************************************!*\
  !*** ./assets/js/theme/common/cart-item-details.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CartItemDetails)
/* harmony export */ });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _product_details_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-details-base */ "./assets/js/theme/common/product-details-base.js");
/* harmony import */ var _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/ie-helpers */ "./assets/js/theme/common/utils/ie-helpers.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var CartItemDetails = /*#__PURE__*/function (_ProductDetailsBase) {
  function CartItemDetails($scope, context, productAttributesData) {
    var _this;
    if (productAttributesData === void 0) {
      productAttributesData = {};
    }
    _this = _ProductDetailsBase.call(this, $scope, context) || this;
    var $form = $('#CartEditProductFieldsForm', _this.$scope);
    var $productOptionsElement = $('[data-product-attributes-wrapper]', $form);
    var hasOptions = $productOptionsElement.html().trim().length;
    var hasDefaultOptions = $productOptionsElement.find('[data-default]').length;
    $productOptionsElement.on('change', function () {
      _this.setProductVariant();
    });
    var optionChangeCallback = _product_details_base__WEBPACK_IMPORTED_MODULE_2__.optionChangeDecorator.call(_this, hasDefaultOptions);

    // Update product attributes. Also update the initial view in case items are oos
    // or have default variant properties that change the view
    if ((lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(productAttributesData) || hasDefaultOptions) && hasOptions) {
      var productId = _this.context.productForChangeId;
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', optionChangeCallback);
    } else {
      _this.updateProductAttributes(productAttributesData);
    }
    return _this;
  }
  _inheritsLoose(CartItemDetails, _ProductDetailsBase);
  var _proto = CartItemDetails.prototype;
  _proto.setProductVariant = function setProductVariant() {
    var unsatisfiedRequiredFields = [];
    var options = [];
    $.each($('[data-product-attribute]'), function (index, value) {
      var optionLabel = value.children[0].innerText;
      var optionTitle = optionLabel.split(':')[0].trim();
      var required = optionLabel.toLowerCase().includes('required');
      var type = value.getAttribute('data-product-attribute');
      if ((type === 'input-file' || type === 'input-text' || type === 'input-number') && value.querySelector('input').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'textarea' && value.querySelector('textarea').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'date') {
        var isSatisfied = Array.from(value.querySelectorAll('select')).every(function (select) {
          return select.selectedIndex !== 0;
        });
        if (isSatisfied) {
          var dateString = Array.from(value.querySelectorAll('select')).map(function (x) {
            return x.value;
          }).join('-');
          options.push(optionTitle + ":" + dateString);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-select') {
        var select = value.querySelector('select');
        var selectedIndex = select.selectedIndex;
        if (selectedIndex !== 0) {
          options.push(optionTitle + ":" + select.options[selectedIndex].innerText);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch' || type === 'input-checkbox' || type === 'product-list') {
        var checked = value.querySelector(':checked');
        if (checked) {
          var getSelectedOptionLabel = function getSelectedOptionLabel() {
            var productVariantslist = (0,_utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__.convertIntoArray)(value.children);
            var matchLabelForCheckedInput = function matchLabelForCheckedInput(inpt) {
              return inpt.dataset.productAttributeValue === checked.value;
            };
            return productVariantslist.filter(matchLabelForCheckedInput)[0];
          };
          if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
            var label = _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__.isBrowserIE ? getSelectedOptionLabel().innerText.trim() : checked.labels[0].innerText;
            if (label) {
              options.push(optionTitle + ":" + label);
            }
          }
          if (type === 'swatch') {
            var _label = _utils_ie_helpers__WEBPACK_IMPORTED_MODULE_3__.isBrowserIE ? getSelectedOptionLabel().children[0] : checked.labels[0].children[0];
            if (_label) {
              options.push(optionTitle + ":" + _label.title);
            }
          }
          if (type === 'input-checkbox') {
            options.push(optionTitle + ":Yes");
          }
          return;
        }
        if (type === 'input-checkbox') {
          options.push(optionTitle + ":No");
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
    });
    var productVariant = unsatisfiedRequiredFields.length === 0 ? options.sort().join(', ') : 'unsatisfied';
    var view = $('.modal-header-title');
    if (productVariant) {
      productVariant = productVariant === 'unsatisfied' ? '' : productVariant;
      if (view.attr('data-event-type')) {
        view.attr('data-product-variant', productVariant);
      } else {
        var productName = view.html().match(/'(.*?)'/)[1];
        var card = $("[data-name=\"" + productName + "\"]");
        card.attr('data-product-variant', productVariant);
      }
    }
  }

  /**
   * Hide or mark as unavailable out of stock attributes if enabled
   * @param  {Object} data Product attribute data
   */;
  _proto.updateProductAttributes = function updateProductAttributes(data) {
    _ProductDetailsBase.prototype.updateProductAttributes.call(this, data);
    this.$scope.find('.modal-content').removeClass('hide-content');
  };
  return CartItemDetails;
}(_product_details_base__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./assets/js/theme/common/gift-certificate-validator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(cert) {
  if (typeof cert !== 'string' || cert.length === 0) {
    return false;
  }

  // Add any custom gift certificate validation logic here
  return true;
}

/***/ }),

/***/ "./assets/js/theme/common/state-country.js":
/*!*************************************************!*\
  !*** ./assets/js/theme/common/state-country.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/transform */ "./node_modules/lodash/transform.js");
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_transform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");






/**
 * If there are no options from bcapp, a text field will be sent. This will create a select element to hold options after the remote request.
 * @returns {jQuery|HTMLElement}
 */
function makeStateRequired(stateElement, context) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_1___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    id: attrs.id,
    'data-label': attrs['data-label'],
    "class": 'form-select',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<select></select>', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  var $hiddenInput = $('[name*="FormFieldIsText"]');
  if ($hiddenInput.length !== 0) {
    $hiddenInput.remove();
  }
  if ($newElement.prev().find('small').length === 0) {
    // String is injected from localizer
    $newElement.prev().append("<small>" + context.required + "</small>");
  } else {
    $newElement.prev().find('small').show();
  }
  return $newElement;
}

/**
 * If a country with states is the default, a select will be sent,
 * In this case we need to be able to switch to an input field and hide the required field
 */
function makeStateOptional(stateElement) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_1___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    type: 'text',
    id: attrs.id,
    'data-label': attrs['data-label'],
    "class": 'form-input',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<input />', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  if ($newElement.length !== 0) {
    (0,_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.insertStateHiddenField)($newElement);
    $newElement.prev().find('small').hide();
  }
  return $newElement;
}

/**
 * Adds the array of options from the remote request to the newly created select box.
 * @param {Object} statesArray
 * @param {jQuery} $selectElement
 * @param {Object} options
 */
function addOptions(statesArray, $selectElement, options) {
  var container = [];
  container.push("<option value=\"\">" + statesArray.prefix + "</option>");
  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()($selectElement)) {
    statesArray.states.forEach(function (stateObj) {
      if (options.useIdForStates) {
        container.push("<option value=\"" + stateObj.id + "\">" + stateObj.name + "</option>");
      } else {
        container.push("<option value=\"" + stateObj.name + "\">" + (stateObj.label ? stateObj.label : stateObj.name) + "</option>");
      }
    });
    $selectElement.html(container.join(' '));
  }
}

/**
 *
 * @param {jQuery} stateElement
 * @param {Object} context
 * @param {Object} options
 * @param {Function} callback
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(stateElement, context, options, callback) {
  if (context === void 0) {
    context = {};
  }
  /**
   * Backwards compatible for three parameters instead of four
   *
   * Available options:
   *
   * useIdForStates {Bool} - Generates states dropdown using id for values instead of strings
   */
  if (typeof options === 'function') {
    /* eslint-disable no-param-reassign */
    callback = options;
    options = {};
    /* eslint-enable no-param-reassign */
  }
  $('select[data-field-type="Country"]').on('change', function (event) {
    var countryName = $(event.currentTarget).val();
    if (countryName === '') {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_2__["default"].api.country.getByName(countryName, function (err, response) {
      if (err) {
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_4__.showAlertModal)(context.state_error);
        return callback(err);
      }
      var $currentInput = $('[data-field-type="State"]');
      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(response.data.states)) {
        // The element may have been replaced with a select, reselect it
        var $selectElement = makeStateRequired($currentInput, context);
        addOptions(response.data, $selectElement, options);
        callback(null, $selectElement);
      } else {
        var newElement = makeStateOptional($currentInput, context);
        callback(null, newElement);
      }
    });
  });
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXJ0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQSxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsQ0FBQSxTQUFBQyxDQUFBLEVBQUFELENBQUEsT0FBQUUsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsQ0FBQSxHQUFBSCxDQUFBLENBQUFJLGNBQUEsRUFBQUMsQ0FBQSxHQUFBSixNQUFBLENBQUFLLGNBQUEsY0FBQVAsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsSUFBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsQ0FBQU8sS0FBQSxLQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxDQUFBLEdBQUFOLENBQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFDLE1BQUEsQ0FBQUssY0FBQSxDQUFBUCxDQUFBLEVBQUFELENBQUEsSUFBQVMsS0FBQSxFQUFBUCxDQUFBLEVBQUFpQixVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBcEIsQ0FBQSxDQUFBRCxDQUFBLFdBQUFrQixNQUFBLG1CQUFBakIsQ0FBQSxJQUFBaUIsTUFBQSxZQUFBQSxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsZ0JBQUFvQixLQUFBckIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxRQUFBSyxDQUFBLEdBQUFWLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxTQUFBLFlBQUFtQixTQUFBLEdBQUF2QixDQUFBLEdBQUF1QixTQUFBLEVBQUFYLENB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QyxnQ0FBZ0MsR0FBc0NuVixPQUFPLENBQTdFbVYsZ0NBQWdDO0lBQUVDLCtCQUErQixHQUFLcFYsT0FBTyxDQUEzQ29WLCtCQUErQjtFQUNuRyxJQUFNQyxnQkFBZ0IsR0FBR04sc0JBQXNCLENBQUNHLHdCQUF3QixFQUFFQyxnQ0FBZ0MsRUFBRUMsK0JBQStCLENBQUM7RUFDNUksSUFBTUUsYUFBYSxHQUFHOWQsTUFBTSxDQUFDdUMsTUFBTSxDQUFDc2IsZ0JBQWdCLENBQUNULFlBQVksQ0FBQyxDQUFDO0VBQ25FLElBQU1XLGVBQWUsR0FBRy9kLE1BQU0sQ0FBQ3FGLElBQUksQ0FBQ3dZLGdCQUFnQixDQUFDVCxZQUFZLENBQUMsQ0FBQyxDQUFDM0MsR0FBRyxDQUFDLFVBQUF1RCxHQUFHO0lBQUEsT0FBSUEsR0FBRyxDQUFDckUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDcFUsR0FBRyxDQUFDLENBQUM7RUFBQSxFQUFDO0VBRXBHLE9BQU93WSxlQUFlLENBQUNFLE1BQU0sQ0FBQyxVQUFDQyxHQUFHLEVBQUVGLEdBQUcsRUFBRXpkLENBQUMsRUFBSztJQUMzQzJkLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDLEdBQUdGLGFBQWEsQ0FBQ3ZkLENBQUMsQ0FBQztJQUMzQixPQUFPMmQsR0FBRztFQUNkLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNWLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb25lc3Rhci1jYXZpby8uL2Fzc2V0cy9qcy90aGVtZS9jYXJ0LmpzIiwid2VicGFjazovL2xvbmVzdGFyLWNhdmlvLy4vYXNzZXRzL2pzL3RoZW1lL2NhcnQvc2hpcHBpbmctZXN0aW1hdG9yLmpzIiwid2VicGFjazovL2xvbmVzdGFyLWNhdmlvLy4vYXNzZXRzL2pzL3RoZW1lL2NhdmlvL2NhcnQtcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vbG9uZXN0YXItY2F2aW8vLi9hc3NldHMvanMvdGhlbWUvY2F2aW8vZnJlZS1zaGlwcGluZy5qcyIsIndlYnBhY2s6Ly9sb25lc3Rhci1jYXZpby8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vY2FydC1pdGVtLWRldGFpbHMuanMiLCJ3ZWJwYWNrOi8vbG9uZXN0YXItY2F2aW8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yLmpzIiwid2VicGFjazovL2xvbmVzdGFyLWNhdmlvLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9zdGF0ZS1jb3VudHJ5LmpzIiwid2VicGFjazovL2xvbmVzdGFyLWNhdmlvLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB7IGJpbmQsIGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBjaGVja0lzR2lmdENlcnRWYWxpZCBmcm9tICcuL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMnO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBTaGlwcGluZ0VzdGltYXRvciBmcm9tICcuL2NhcnQvc2hpcHBpbmctZXN0aW1hdG9yJztcbmltcG9ydCB7IGRlZmF1bHRNb2RhbCwgc2hvd0FsZXJ0TW9kYWwsIE1vZGFsRXZlbnRzIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IENhcnRJdGVtRGV0YWlscyBmcm9tICcuL2NvbW1vbi9jYXJ0LWl0ZW0tZGV0YWlscyc7XG5pbXBvcnQgZGV2QWR2YW5jZWRTd2F0Y2hJbWFnZSBmcm9tICcuL2NhdmlvL2Rldi1hZHZhbmNlZC1zd2F0Y2gtaW1hZ2UnO1xuaW1wb3J0IGNhcnRwcm9kdWN0cyBmcm9tICcuL2NhdmlvL2NhcnQtcHJvZHVjdHMnO1xuaW1wb3J0IGZyZWVzaGlwcGluZyBmcm9tICcuL2NhdmlvL2ZyZWUtc2hpcHBpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xub25SZWFkeSgpIHtcbiAgICB0aGlzLiRtb2RhbCA9IG51bGw7XG4gICAgdGhpcy4kY2FydFBhZ2VDb250ZW50ID0gJCgnW2RhdGEtY2FydF0nKTtcbiAgICB0aGlzLiRjYXJ0Q29udGVudCA9ICQoJ1tkYXRhLWNhcnQtY29udGVudF0nKTtcbiAgICB0aGlzLiRjYXJ0TWVzc2FnZXMgPSAkKCdbZGF0YS1jYXJ0LXN0YXR1c10nKTtcbiAgICB0aGlzLiRjYXJ0VG90YWxzID0gJCgnW2RhdGEtY2FydC10b3RhbHNdJyk7XG4gICAgdGhpcy4kY2FydEFkZGl0aW9uYWxDaGVja291dEJ0bnMgPSAkKCdbZGF0YS1jYXJ0LWFkZGl0aW9uYWwtY2hlY2tvdXQtYnV0dG9uc10nKTtcbiAgICB0aGlzLiRvdmVybGF5ID0gJCgnW2RhdGEtY2FydF0gLmxvYWRpbmdPdmVybGF5JykuaGlkZSgpO1xuICAgIHRoaXMuJGFjdGl2ZUNhcnRJdGVtSWQgPSBudWxsO1xuICAgIHRoaXMuJGFjdGl2ZUNhcnRJdGVtQnRuQWN0aW9uID0gbnVsbDtcblxuICAgIHRoaXMuc2V0QXBwbGVQYXlTdXBwb3J0KCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgZGV2QWR2YW5jZWRTd2F0Y2hJbWFnZSgpO1xuICAgIGNhcnRwcm9kdWN0cyh0aGlzLmNvbnRleHQpO1xuICAgIHRoaXMuJGZyZWVzaGlwcGluZyA9ICQoJy5jYXJ0LXNoaXBwaW5nJyk7XG5cbiAgICAvLyBDYWxsIGZyZWVzaGlwcGluZyBvbiBwYWdlIGxvYWRcbiAgICBmcmVlc2hpcHBpbmcodGhpcy5jb250ZXh0KTtcbn1cblxuXG4gICAgc2V0QXBwbGVQYXlTdXBwb3J0KCkge1xuICAgICAgICBpZiAod2luZG93LkFwcGxlUGF5U2Vzc2lvbikge1xuICAgICAgICAgICAgdGhpcy4kY2FydFBhZ2VDb250ZW50LmFkZENsYXNzKCdhcHBsZS1wYXktc3VwcG9ydGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYXJ0VXBkYXRlKCR0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gJHRhcmdldC5kYXRhKCdjYXJ0SXRlbWlkJyk7XG4gICAgICAgIHRoaXMuJGFjdGl2ZUNhcnRJdGVtSWQgPSBpdGVtSWQ7XG4gICAgICAgIHRoaXMuJGFjdGl2ZUNhcnRJdGVtQnRuQWN0aW9uID0gJHRhcmdldC5kYXRhKCdhY3Rpb24nKTtcblxuICAgICAgICBjb25zdCAkZWwgPSAkKGAjcXR5LSR7aXRlbUlkfWApO1xuICAgICAgICBjb25zdCBvbGRRdHkgPSBwYXJzZUludCgkZWwudmFsKCksIDEwKTtcbiAgICAgICAgY29uc3QgbWF4UXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcbiAgICAgICAgY29uc3QgbWluUXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWluJyksIDEwKTtcbiAgICAgICAgY29uc3QgbWluRXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNaW5FcnJvcicpO1xuICAgICAgICBjb25zdCBtYXhFcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1heEVycm9yJyk7XG4gICAgICAgIGNvbnN0IG5ld1F0eSA9ICR0YXJnZXQuZGF0YSgnYWN0aW9uJykgPT09ICdpbmMnID8gb2xkUXR5ICsgMSA6IG9sZFF0eSAtIDE7XG4gICAgICAgIC8vIERvZXMgbm90IHF1YWxpdHkgZm9yIG1pbi9tYXggcXVhbnRpdHlcbiAgICAgICAgaWYgKG5ld1F0eSA8IG1pblF0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKG1pbkVycm9yKTtcbiAgICAgICAgfSBlbHNlIGlmIChtYXhRdHkgPiAwICYmIG5ld1F0eSA+IG1heFF0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKG1heEVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1VcGRhdGUoaXRlbUlkLCBuZXdRdHksIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcXVhbnRpdHkgaXMgY2hhbmdlZCBcIjFcIiBmcm9tIFwiMFwiLCB3ZSBoYXZlIHRvIHJlbW92ZSB0aGUgcm93LlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZSA9IChuZXdRdHkgPT09IDApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudChyZW1vdmUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG4gICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwocmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSgkdGFyZ2V0LCBwcmVWYWwgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9ICR0YXJnZXQuZGF0YSgnY2FydEl0ZW1pZCcpO1xuICAgICAgICBjb25zdCAkZWwgPSAkKGAjcXR5LSR7aXRlbUlkfWApO1xuICAgICAgICBjb25zdCBtYXhRdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNYXgnKSwgMTApO1xuICAgICAgICBjb25zdCBtaW5RdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xuICAgICAgICBjb25zdCBvbGRRdHkgPSBwcmVWYWwgIT09IG51bGwgPyBwcmVWYWwgOiBtaW5RdHk7XG4gICAgICAgIGNvbnN0IG1pbkVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWluRXJyb3InKTtcbiAgICAgICAgY29uc3QgbWF4RXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNYXhFcnJvcicpO1xuICAgICAgICBjb25zdCBuZXdRdHkgPSBwYXJzZUludChOdW1iZXIoJGVsLnZhbCgpKSwgMTApO1xuICAgICAgICBsZXQgaW52YWxpZEVudHJ5O1xuXG4gICAgICAgIC8vIERvZXMgbm90IHF1YWxpdHkgZm9yIG1pbi9tYXggcXVhbnRpdHlcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKG5ld1F0eSkpIHtcbiAgICAgICAgICAgIGludmFsaWRFbnRyeSA9ICRlbC52YWwoKTtcbiAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgIHJldHVybiBzaG93QWxlcnRNb2RhbCh0aGlzLmNvbnRleHQuaW52YWxpZEVudHJ5TWVzc2FnZS5yZXBsYWNlKCdbRU5UUlldJywgaW52YWxpZEVudHJ5KSk7XG4gICAgICAgIH0gZWxzZSBpZiAobmV3UXR5IDwgbWluUXR5KSB7XG4gICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG4gICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwobWluRXJyb3IpO1xuICAgICAgICB9IGVsc2UgaWYgKG1heFF0eSA+IDAgJiYgbmV3UXR5ID4gbWF4UXR5KSB7XG4gICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG4gICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwobWF4RXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1VcGRhdGUoaXRlbUlkLCBuZXdRdHksIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcXVhbnRpdHkgaXMgY2hhbmdlZCBcIjFcIiBmcm9tIFwiMFwiLCB3ZSBoYXZlIHRvIHJlbW92ZSB0aGUgcm93LlxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZSA9IChuZXdRdHkgPT09IDApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudChyZW1vdmUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwocmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYXJ0UmVtb3ZlSXRlbShpdGVtSWQpIHtcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1SZW1vdmUoaXRlbUlkLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcbiAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChyZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNhcnRFZGl0T3B0aW9ucyhpdGVtSWQsIHByb2R1Y3RJZCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0geyBwcm9kdWN0Rm9yQ2hhbmdlSWQ6IHByb2R1Y3RJZCwgLi4udGhpcy5jb250ZXh0IH07XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuJG1vZGFsID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiRtb2RhbCA9ICQoJyNtb2RhbCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9tb2RhbHMvY29uZmlndXJlLXByb2R1Y3QnLFxuICAgICAgICB9O1xuXG4gICAgICAgIG1vZGFsLm9wZW4oKTtcbiAgICAgICAgdGhpcy4kbW9kYWwuZmluZCgnLm1vZGFsLWNvbnRlbnQnKS5hZGRDbGFzcygnaGlkZS1jb250ZW50Jyk7XG5cbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLmNvbmZpZ3VyZUluQ2FydChpdGVtSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlLmNvbnRlbnQpO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uQ2hhbmdlSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkcHJvZHVjdE9wdGlvbnNDb250YWluZXIgPSAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZXMtd3JhcHBlcl0nLCB0aGlzLiRtb2RhbCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kYWxCb2R5UmVzZXJ2ZWRIZWlnaHQgPSAkcHJvZHVjdE9wdGlvbnNDb250YWluZXIub3V0ZXJIZWlnaHQoKTtcblxuICAgICAgICAgICAgICAgIGlmICgkcHJvZHVjdE9wdGlvbnNDb250YWluZXIubGVuZ3RoICYmIG1vZGFsQm9keVJlc2VydmVkSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICRwcm9kdWN0T3B0aW9uc0NvbnRhaW5lci5jc3MoJ2hlaWdodCcsIG1vZGFsQm9keVJlc2VydmVkSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodGhpcy4kbW9kYWwuaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbkNoYW5nZUhhbmRsZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbW9kYWwub25lKE1vZGFsRXZlbnRzLm9wZW5lZCwgb3B0aW9uQ2hhbmdlSGFuZGxlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG1vZGFsRm9ybSA9IHRoaXMuJG1vZGFsLmZpbmQoJ2Zvcm0nKTtcbiAgICAgICAgICAgIGNvbnN0IHJlZnJlc2hDb250ZW50ID0gKCkgPT4gdGhpcy5yZWZyZXNoQ29udGVudCgpO1xuICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LnBvc3RGb3JtRGF0YShuZXcgRm9ybURhdGEodGhpcyksICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVmcmVzaENvbnRlbnQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW9kYWxGb3JtLm9uKCdzdWJtaXQnLCBvblN1Ym1pdCk7XG5cbiAgICAgICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMgPSBuZXcgQ2FydEl0ZW1EZXRhaWxzKHRoaXMuJG1vZGFsLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRm9ybSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB1dGlscy5ob29rcy5vbigncHJvZHVjdC1vcHRpb24tY2hhbmdlJywgKGV2ZW50LCBjdXJyZW50VGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZm9ybSA9ICQoY3VycmVudFRhcmdldCkuZmluZCgnZm9ybScpO1xuICAgICAgICAgICAgY29uc3QgJHN1Ym1pdCA9ICQoJ2lucHV0LmJ1dHRvbicsICRmb3JtKTtcbiAgICAgICAgICAgIGNvbnN0ICRtZXNzYWdlQm94ID0gJCgnLmFsZXJ0TWVzc2FnZUJveCcpO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHByb2R1Y3RJZCwgJGZvcm0uc2VyaWFsaXplKCksIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHQuZGF0YSB8fCB7fTtcblxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAkKCdwLmFsZXJ0Qm94LW1lc3NhZ2UnLCAkbWVzc2FnZUJveCkudGV4dChkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgJG1lc3NhZ2VCb3guc2hvdygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICRtZXNzYWdlQm94LmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5yZWZyZXNoQ29udGVudChyZW1vdmUpIHtcbiAgICBjb25zdCAkY2FydEl0ZW1zUm93cyA9ICQoJ1tkYXRhLWl0ZW0tcm93XScsIHRoaXMuJGNhcnRDb250ZW50KTtcbiAgICBjb25zdCAkY2FydFBhZ2VUaXRsZSA9ICQoJ1tkYXRhLWNhcnQtcGFnZS10aXRsZV0nKTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgY29udGVudDogJ2NhcnQvY29udGVudCcsXG4gICAgICAgICAgICB0b3RhbHM6ICdjYXJ0L3RvdGFscycsXG4gICAgICAgICAgICBwYWdlVGl0bGU6ICdjYXJ0L3BhZ2UtdGl0bGUnLFxuICAgICAgICAgICAgc3RhdHVzTWVzc2FnZXM6ICdjYXJ0L3N0YXR1cy1tZXNzYWdlcycsXG4gICAgICAgICAgICBhZGRpdGlvbmFsQ2hlY2tvdXRCdXR0b25zOiAnY2FydC9hZGRpdGlvbmFsLWNoZWNrb3V0LWJ1dHRvbnMnLFxuICAgICAgICAgICAgZnJlZXNoaXBwaW5nOiAnY2F2aW8vY2FydC1mcmVlLXNoaXBwaW5nJyxcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAvLyBSZW1vdmUgbGFzdCBpdGVtIGZyb20gY2FydD8gUmVsb2FkXG4gICAgaWYgKHJlbW92ZSAmJiAkY2FydEl0ZW1zUm93cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG5cbiAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMuJGNhcnRDb250ZW50Lmh0bWwocmVzcG9uc2UuY29udGVudCk7XG4gICAgICAgIHRoaXMuJGNhcnRUb3RhbHMuaHRtbChyZXNwb25zZS50b3RhbHMpO1xuICAgICAgICB0aGlzLiRjYXJ0TWVzc2FnZXMuaHRtbChyZXNwb25zZS5zdGF0dXNNZXNzYWdlcyk7XG4gICAgICAgIHRoaXMuJGNhcnRBZGRpdGlvbmFsQ2hlY2tvdXRCdG5zLmh0bWwocmVzcG9uc2UuYWRkaXRpb25hbENoZWNrb3V0QnV0dG9ucyk7XG4gICAgICAgIFxuICAgICAgICAvLyBVcGRhdGUgdGhlIGZyZWUgc2hpcHBpbmcgc2VjdGlvblxuICAgICAgICB0aGlzLiRmcmVlc2hpcHBpbmcuaHRtbChyZXNwb25zZS5mcmVlc2hpcHBpbmcpO1xuXG4gICAgICAgIC8vIENhbGwgZnJlZXNoaXBwaW5nIGFmdGVyIGNvbnRlbnQgdXBkYXRlXG4gICAgICAgIGZyZWVzaGlwcGluZyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgICRjYXJ0UGFnZVRpdGxlLnJlcGxhY2VXaXRoKHJlc3BvbnNlLnBhZ2VUaXRsZSk7XG5cbiAgICAgICAgY29uc3QgcXVhbnRpdHkgPSAkKCdbZGF0YS1jYXJ0LXF1YW50aXR5XScsIHRoaXMuJGNhcnRDb250ZW50KS5kYXRhKCdjYXJ0UXVhbnRpdHknKSB8fCAwO1xuXG4gICAgICAgIGlmICghcXVhbnRpdHkpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ2NhcnQtcXVhbnRpdHktdXBkYXRlJywgcXVhbnRpdHkpO1xuXG4gICAgICAgICQoYFtkYXRhLWNhcnQtaXRlbWlkPScke3RoaXMuJGFjdGl2ZUNhcnRJdGVtSWR9J11gLCB0aGlzLiRjYXJ0Q29udGVudClcbiAgICAgICAgICAgIC5maWx0ZXIoYFtkYXRhLWFjdGlvbj0nJHt0aGlzLiRhY3RpdmVDYXJ0SXRlbUJ0bkFjdGlvbn0nXWApXG4gICAgICAgICAgICAudHJpZ2dlcignZm9jdXMnKTtcbiAgICB9KTtcbn1cblxuXG5cbiAgICBiaW5kQ2FydEV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgZGVib3VuY2VUaW1lb3V0ID0gNDAwO1xuICAgICAgICBjb25zdCBjYXJ0VXBkYXRlID0gYmluZChkZWJvdW5jZSh0aGlzLmNhcnRVcGRhdGUsIGRlYm91bmNlVGltZW91dCksIHRoaXMpO1xuICAgICAgICBjb25zdCBjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSA9IGJpbmQoZGVib3VuY2UodGhpcy5jYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XG4gICAgICAgIGNvbnN0IGNhcnRSZW1vdmVJdGVtID0gYmluZChkZWJvdW5jZSh0aGlzLmNhcnRSZW1vdmVJdGVtLCBkZWJvdW5jZVRpbWVvdXQpLCB0aGlzKTtcbiAgICAgICAgbGV0IHByZVZhbDtcblxuICAgICAgICAvLyBjYXJ0IHVwZGF0ZVxuICAgICAgICAkKCdbZGF0YS1jYXJ0LXVwZGF0ZV0nLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjYXJ0IHF1YW50aXR5XG4gICAgICAgICAgICBjYXJ0VXBkYXRlKCR0YXJnZXQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjYXJ0IHF0eSBtYW51YWxseSB1cGRhdGVzXG4gICAgICAgICQoJy5jYXJ0LWl0ZW0tcXR5LWlucHV0JywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdmb2N1cycsIGZ1bmN0aW9uIG9uUXR5Rm9jdXMoKSB7XG4gICAgICAgICAgICBwcmVWYWwgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9KS5jaGFuZ2UoZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgY2FydCBxdWFudGl0eVxuICAgICAgICAgICAgY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UoJHRhcmdldCwgcHJlVmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmNhcnQtcmVtb3ZlJywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY2FydEl0ZW1pZCcpO1xuICAgICAgICAgICAgY29uc3Qgc3RyaW5nID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdjb25maXJtRGVsZXRlJyk7XG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbChzdHJpbmcsIHtcbiAgICAgICAgICAgICAgICBpY29uOiAnd2FybmluZycsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvbkNvbmZpcm06ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGl0ZW0gZnJvbSBjYXJ0XG4gICAgICAgICAgICAgICAgICAgIGNhcnRSZW1vdmVJdGVtKGl0ZW1JZCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtaXRlbS1lZGl0XScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2l0ZW1FZGl0Jyk7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3Byb2R1Y3RJZCcpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIGVkaXQgaXRlbSBpbiBjYXJ0XG4gICAgICAgICAgICB0aGlzLmNhcnRFZGl0T3B0aW9ucyhpdGVtSWQsIHByb2R1Y3RJZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRQcm9tb0NvZGVFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRjb3Vwb25Db250YWluZXIgPSAkKCcuY291cG9uLWNvZGUnKTtcbiAgICAgICAgY29uc3QgJGNvdXBvbkZvcm0gPSAkKCcuY291cG9uLWZvcm0nKTtcbiAgICAgICAgY29uc3QgJGNvZGVJbnB1dCA9ICQoJ1tuYW1lPVwiY291cG9uY29kZVwiXScsICRjb3Vwb25Gb3JtKTtcblxuICAgICAgICAkKCcuY291cG9uLWNvZGUtYWRkJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5oaWRlKCk7XG4gICAgICAgICAgICAkY291cG9uQ29udGFpbmVyLnNob3coKTtcbiAgICAgICAgICAgICRjb3Vwb25Db250YWluZXIuYXR0cignYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG4gICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtY2FuY2VsJykuc2hvdygpO1xuICAgICAgICAgICAgJGNvZGVJbnB1dC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuY291cG9uLWNvZGUtY2FuY2VsJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJGNvdXBvbkNvbnRhaW5lci5oaWRlKCk7XG4gICAgICAgICAgICAkY291cG9uQ29udGFpbmVyLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtY2FuY2VsJykuaGlkZSgpO1xuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWFkZCcpLnNob3coKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGNvdXBvbkZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSAkY29kZUlucHV0LnZhbCgpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyBFbXB0eSBjb2RlXG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwoJGNvZGVJbnB1dC5kYXRhKCdlcnJvcicpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuYXBwbHlDb2RlKGNvZGUsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgJGNlcnRDb250YWluZXIgPSAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jb2RlJyk7XG4gICAgICAgIGNvbnN0ICRjZXJ0Rm9ybSA9ICQoJy5jYXJ0LWdpZnQtY2VydGlmaWNhdGUtZm9ybScpO1xuICAgICAgICBjb25zdCAkY2VydElucHV0ID0gJCgnW25hbWU9XCJjZXJ0Y29kZVwiXScsICRjZXJ0Rm9ybSk7XG5cbiAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtYWRkJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkudG9nZ2xlKCk7XG4gICAgICAgICAgICAkY2VydENvbnRhaW5lci50b2dnbGUoKTtcbiAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLmF0dHIoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykudG9nZ2xlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWNhbmNlbCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkY2VydENvbnRhaW5lci50b2dnbGUoKTtcbiAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1hZGQnKS50b2dnbGUoKTtcbiAgICAgICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWNhbmNlbCcpLnRvZ2dsZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkY2VydEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSAkY2VydElucHV0LnZhbCgpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoIWNoZWNrSXNHaWZ0Q2VydFZhbGlkKGNvZGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkodGhpcy5jb250ZXh0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwodmFsaWRhdGlvbkRpY3Rpb25hcnkuaW52YWxpZF9naWZ0X2NlcnRpZmljYXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuYXBwbHlHaWZ0Q2VydGlmaWNhdGUoY29kZSwgKGVyciwgcmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwLmRhdGEuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKHJlc3AuZGF0YS5lcnJvcnMuam9pbignXFxuJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kR2lmdFdyYXBwaW5nRXZlbnRzKCkge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xuXG4gICAgICAgICQoJ1tkYXRhLWl0ZW0tZ2lmdHdyYXBdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdpdGVtR2lmdHdyYXAnKTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICdjYXJ0L21vZGFscy9naWZ0LXdyYXBwaW5nLWZvcm0nLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgbW9kYWwub3BlbigpO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRJdGVtR2lmdFdyYXBwaW5nT3B0aW9ucyhpdGVtSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZS5jb250ZW50KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYmluZEdpZnRXcmFwcGluZ0Zvcm0oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kR2lmdFdyYXBwaW5nRm9ybSgpIHtcbiAgICAgICAgJCgnLmdpZnRXcmFwcGluZy1zZWxlY3QnKS5vbignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHNlbGVjdCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpZCA9ICRzZWxlY3QudmFsKCk7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9ICRzZWxlY3QuZGF0YSgnaW5kZXgnKTtcblxuICAgICAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYWxsb3dNZXNzYWdlID0gJHNlbGVjdC5maW5kKGBvcHRpb25bdmFsdWU9JHtpZH1dYCkuZGF0YSgnYWxsb3dNZXNzYWdlJyk7XG5cbiAgICAgICAgICAgICQoYC5naWZ0V3JhcHBpbmctaW1hZ2UtJHtpbmRleH1gKS5oaWRlKCk7XG4gICAgICAgICAgICAkKGAjZ2lmdFdyYXBwaW5nLWltYWdlLSR7aW5kZXh9LSR7aWR9YCkuc2hvdygpO1xuXG4gICAgICAgICAgICBpZiAoYWxsb3dNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1tZXNzYWdlLSR7aW5kZXh9YCkuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGAjZ2lmdFdyYXBwaW5nLW1lc3NhZ2UtJHtpbmRleH1gKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5naWZ0V3JhcHBpbmctc2VsZWN0JykudHJpZ2dlcignY2hhbmdlJyk7XG5cbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlVmlld3MoKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICQoJ2lucHV0OnJhZGlvW25hbWUgPVwiZ2lmdHdyYXB0eXBlXCJdOmNoZWNrZWQnKS52YWwoKTtcbiAgICAgICAgICAgIGNvbnN0ICRzaW5nbGVGb3JtID0gJCgnLmdpZnRXcmFwcGluZy1zaW5nbGUnKTtcbiAgICAgICAgICAgIGNvbnN0ICRtdWx0aUZvcm0gPSAkKCcuZ2lmdFdyYXBwaW5nLW11bHRpcGxlJyk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJ3NhbWUnKSB7XG4gICAgICAgICAgICAgICAgJHNpbmdsZUZvcm0uc2hvdygpO1xuICAgICAgICAgICAgICAgICRtdWx0aUZvcm0uaGlkZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkc2luZ2xlRm9ybS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJG11bHRpRm9ybS5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAkKCdbbmFtZT1cImdpZnR3cmFwdHlwZVwiXScpLm9uKCdjbGljaycsIHRvZ2dsZVZpZXdzKTtcblxuICAgICAgICB0b2dnbGVWaWV3cygpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuYmluZENhcnRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kUHJvbW9Db2RlRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZEdpZnRXcmFwcGluZ0V2ZW50cygpO1xuICAgICAgICB0aGlzLmJpbmRHaWZ0Q2VydGlmaWNhdGVFdmVudHMoKTtcblxuICAgICAgICAvLyBpbml0aWF0ZSBzaGlwcGluZyBlc3RpbWF0b3IgbW9kdWxlXG4gICAgICAgIGNvbnN0IHNoaXBwaW5nRXJyb3JNZXNzYWdlcyA9IHtcbiAgICAgICAgICAgIGNvdW50cnk6IHRoaXMuY29udGV4dC5zaGlwcGluZ0NvdW50cnlFcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICBwcm92aW5jZTogdGhpcy5jb250ZXh0LnNoaXBwaW5nUHJvdmluY2VFcnJvck1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IgPSBuZXcgU2hpcHBpbmdFc3RpbWF0b3IoJCgnW2RhdGEtc2hpcHBpbmctZXN0aW1hdG9yXScpLCBzaGlwcGluZ0Vycm9yTWVzc2FnZXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCBzdGF0ZUNvdW50cnkgZnJvbSAnLi4vY29tbW9uL3N0YXRlLWNvdW50cnknO1xuaW1wb3J0IG5vZCBmcm9tICcuLi9jb21tb24vbm9kJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzLCBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuLi9nbG9iYWwvbW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwcGluZ0VzdGltYXRvciB7XG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQsIHNoaXBwaW5nRXJyb3JNZXNzYWdlcykge1xuICAgICAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy4kc3RhdGUgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nLCB0aGlzLiRlbGVtZW50KTtcbiAgICAgICAgdGhpcy5pc0VzdGltYXRvckZvcm1PcGVuZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaGlwcGluZ0Vycm9yTWVzc2FnZXMgPSBzaGlwcGluZ0Vycm9yTWVzc2FnZXM7XG4gICAgICAgIHRoaXMuaW5pdEZvcm1WYWxpZGF0aW9uKCk7XG4gICAgICAgIHRoaXMuYmluZFN0YXRlQ291bnRyeUNoYW5nZSgpO1xuICAgICAgICB0aGlzLmJpbmRFc3RpbWF0b3JFdmVudHMoKTtcbiAgICB9XG5cbiAgICBpbml0Rm9ybVZhbGlkYXRpb24oKSB7XG4gICAgICAgIGNvbnN0IHNoaXBwaW5nRXN0aW1hdG9yQWxlcnQgPSAkKCcuc2hpcHBpbmctcXVvdGVzJyk7XG5cbiAgICAgICAgdGhpcy5zaGlwcGluZ0VzdGltYXRvciA9ICdmb3JtW2RhdGEtc2hpcHBpbmctZXN0aW1hdG9yXSc7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiBgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSAuc2hpcHBpbmctZXN0aW1hdGUtc3VibWl0YCxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLXN1Ym1pdCcsIHRoaXMuJGVsZW1lbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIC8vIGVzdGltYXRvciBlcnJvciBtZXNzYWdlcyBhcmUgYmVpbmcgaW5qZWN0ZWQgaW4gaHRtbCBhcyBhIHJlc3VsdFxuICAgICAgICAgICAgLy8gb2YgdXNlciBzdWJtaXQ7IGNsZWFyaW5nIGFuZCBhZGRpbmcgcm9sZSBvbiBzdWJtaXQgcHJvdmlkZXNcbiAgICAgICAgICAgIC8vIHJlZ3VsYXIgYW5ub3VuY2VtZW50IG9mIHRoZXNlIGVycm9yIG1lc3NhZ2VzXG4gICAgICAgICAgICBpZiAoc2hpcHBpbmdFc3RpbWF0b3JBbGVydC5hdHRyKCdyb2xlJykpIHtcbiAgICAgICAgICAgICAgICBzaGlwcGluZ0VzdGltYXRvckFsZXJ0LnJlbW92ZUF0dHIoJ3JvbGUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2hpcHBpbmdFc3RpbWF0b3JBbGVydC5hdHRyKCdyb2xlJywgJ2FsZXJ0Jyk7XG4gICAgICAgICAgICAvLyBXaGVuIHN3aXRjaGluZyBiZXR3ZWVuIGNvdW50cmllcywgdGhlIHN0YXRlL3JlZ2lvbiBpcyBkeW5hbWljXG4gICAgICAgICAgICAvLyBPbmx5IHBlcmZvcm0gYSBjaGVjayBmb3IgYWxsIGZpZWxkcyB3aGVuIGNvdW50cnkgaGFzIGEgdmFsdWVcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSBhcmVBbGwoJ3ZhbGlkJykgd2lsbCBjaGVjayBjb3VudHJ5IGZvciB2YWxpZGl0eVxuICAgICAgICAgICAgaWYgKCQoYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1jb3VudHJ5XCJdYCkudmFsKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYmluZFZhbGlkYXRpb24oKTtcbiAgICAgICAgdGhpcy5iaW5kU3RhdGVWYWxpZGF0aW9uKCk7XG4gICAgICAgIHRoaXMuYmluZFVQU1JhdGVzKCk7XG4gICAgfVxuXG4gICAgYmluZFZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1jb3VudHJ5XCJdYCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY291bnRyeUlkID0gTnVtYmVyKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvdW50cnlJZCAhPT0gMCAmJiAhTnVtYmVyLmlzTmFOKGNvdW50cnlJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5zaGlwcGluZ0Vycm9yTWVzc2FnZXMuY291bnRyeSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIGJpbmRTdGF0ZVZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJChgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLXN0YXRlXCJdYCksXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRlbGUgPSAkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctc3RhdGVcIl1gKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJGVsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZVZhbCA9ICRlbGUudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGVsZVZhbCAmJiBlbGVWYWwubGVuZ3RoICYmIGVsZVZhbCAhPT0gJ1N0YXRlL3Byb3ZpbmNlJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuc2hpcHBpbmdFcnJvck1lc3NhZ2VzLnByb3ZpbmNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGJldHdlZW4gZGVmYXVsdCBzaGlwcGluZyBhbmQgdXBzIHNoaXBwaW5nIHJhdGVzXG4gICAgICovXG4gICAgYmluZFVQU1JhdGVzKCkge1xuICAgICAgICBjb25zdCBVUFNSYXRlVG9nZ2xlID0gJy5lc3RpbWF0b3ItZm9ybS10b2dnbGVVUFNSYXRlJztcblxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgVVBTUmF0ZVRvZ2dsZSwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZXN0aW1hdG9yRm9ybVVwcyA9ICQoJy5lc3RpbWF0b3ItZm9ybS0tdXBzJyk7XG4gICAgICAgICAgICBjb25zdCAkZXN0aW1hdG9yRm9ybURlZmF1bHQgPSAkKCcuZXN0aW1hdG9yLWZvcm0tLWRlZmF1bHQnKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJGVzdGltYXRvckZvcm1VcHMudG9nZ2xlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgICRlc3RpbWF0b3JGb3JtRGVmYXVsdC50b2dnbGVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kU3RhdGVDb3VudHJ5Q2hhbmdlKCkge1xuICAgICAgICBsZXQgJGxhc3Q7XG5cbiAgICAgICAgLy8gUmVxdWVzdHMgdGhlIHN0YXRlcyBmb3IgYSBjb3VudHJ5IHdpdGggQUpBWFxuICAgICAgICBzdGF0ZUNvdW50cnkodGhpcy4kc3RhdGUsIHRoaXMuY29udGV4dCwgeyB1c2VJZEZvclN0YXRlczogdHJ1ZSB9LCAoZXJyLCBmaWVsZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKGVycik7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5nZXRTdGF0dXModGhpcy4kc3RhdGUpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucmVtb3ZlKHRoaXMuJHN0YXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRsYXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kU3RhdGVWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRmaWVsZC5hdHRyKCdwbGFjZWhvbGRlcicsICdTdGF0ZS9wcm92aW5jZScpO1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFdoZW4geW91IGNoYW5nZSBhIGNvdW50cnksIHlvdSBzd2FwIHRoZSBzdGF0ZS9wcm92aW5jZSBiZXR3ZWVuIGFuIGlucHV0IGFuZCBhIHNlbGVjdCBkcm9wZG93blxuICAgICAgICAgICAgLy8gTm90IGFsbCBjb3VudHJpZXMgcmVxdWlyZSB0aGUgcHJvdmluY2UgdG8gYmUgZmlsbGVkXG4gICAgICAgICAgICAvLyBXZSBoYXZlIHRvIHJlbW92ZSB0aGlzIGNsYXNzIHdoZW4gd2Ugc3dhcCBzaW5jZSBub2QgdmFsaWRhdGlvbiBkb2Vzbid0IGNsZWFudXAgZm9yIHVzXG4gICAgICAgICAgICAkKHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IpLmZpbmQoJy5mb3JtLWZpZWxkLS1zdWNjZXNzJykucmVtb3ZlQ2xhc3MoJ2Zvcm0tZmllbGQtLXN1Y2Nlc3MnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlRXN0aW1hdG9yRm9ybVN0YXRlKHRvZ2dsZUJ1dHRvbiwgYnV0dG9uU2VsZWN0b3IsICR0b2dnbGVDb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgY2hhbmdlQXR0cmlidXRlc09uVG9nZ2xlID0gKHNlbGVjdG9yVG9BY3RpdmF0ZSkgPT4ge1xuICAgICAgICAgICAgJCh0b2dnbGVCdXR0b24pLmF0dHIoJ2FyaWEtbGFiZWxsZWRieScsIHNlbGVjdG9yVG9BY3RpdmF0ZSk7XG4gICAgICAgICAgICAkKGJ1dHRvblNlbGVjdG9yKS50ZXh0KCQoYCMke3NlbGVjdG9yVG9BY3RpdmF0ZX1gKS50ZXh0KCkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghdGhpcy5pc0VzdGltYXRvckZvcm1PcGVuZWQpIHtcbiAgICAgICAgICAgIGNoYW5nZUF0dHJpYnV0ZXNPblRvZ2dsZSgnZXN0aW1hdG9yLWNsb3NlJyk7XG4gICAgICAgICAgICAkdG9nZ2xlQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hhbmdlQXR0cmlidXRlc09uVG9nZ2xlKCdlc3RpbWF0b3ItYWRkJyk7XG4gICAgICAgICAgICAkdG9nZ2xlQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNFc3RpbWF0b3JGb3JtT3BlbmVkID0gIXRoaXMuaXNFc3RpbWF0b3JGb3JtT3BlbmVkO1xuICAgIH1cblxuICAgIGJpbmRFc3RpbWF0b3JFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRlc3RpbWF0b3JDb250YWluZXIgPSAkKCcuc2hpcHBpbmctZXN0aW1hdG9yJyk7XG4gICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtID0gJCgnLmVzdGltYXRvci1mb3JtJyk7XG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuICAgICAgICAkZXN0aW1hdG9yRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIGNvdW50cnlfaWQ6ICQoJ1tuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICBzdGF0ZV9pZDogJCgnW25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICBjaXR5OiAkKCdbbmFtZT1cInNoaXBwaW5nLWNpdHlcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXG4gICAgICAgICAgICAgICAgemlwX2NvZGU6ICQoJ1tuYW1lPVwic2hpcHBpbmctemlwXCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0U2hpcHBpbmdRdW90ZXMocGFyYW1zLCAnY2FydC9zaGlwcGluZy1xdW90ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy5zaGlwcGluZy1xdW90ZXMnKS5odG1sKHJlc3BvbnNlLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gYmluZCB0aGUgc2VsZWN0IGJ1dHRvblxuICAgICAgICAgICAgICAgICQoJy5zZWxlY3Qtc2hpcHBpbmctcXVvdGUnKS5vbignY2xpY2snLCBjbGlja0V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVvdGVJZCA9ICQoJy5zaGlwcGluZy1xdW90ZTpjaGVja2VkJykudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2xpY2tFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LnN1Ym1pdFNoaXBwaW5nUXVvdGUocXVvdGVJZCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc2hvdycpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUVzdGltYXRvckZvcm1TdGF0ZShldmVudC5jdXJyZW50VGFyZ2V0LCAnLnNoaXBwaW5nLWVzdGltYXRlLXNob3dfX2J0bi1uYW1lJywgJGVzdGltYXRvckNvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwnO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnOyAgXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24oY29udGV4dCkge1xyXG4gIHZhciAkY2FydHByb2R1Y3RjYXJvdXNlbCA9ICQoJy5jYXJ0LWFkZHRpb25hbC1wcm9kdWN0cyAucHJvZHVjdEdyaWQnKTtcclxuICAvLyBJbml0aWFsaXplIFNsaWNrIHNsaWRlclxyXG4gICRjYXJ0cHJvZHVjdGNhcm91c2VsLnNsaWNrKHtcclxuICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgIHNwZWVkOiAzMDAsXHJcbiAgICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyMyxcclxuICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBicmVha3BvaW50OiA4MDEsXHJcbiAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU1MSxcclxuICAgICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgfSk7XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgc2xpZGUgaW5mbyBhbmQgYWN0aXZlIGRvdFxyXG4gIGZ1bmN0aW9uIGNhcnRwcm9kdWN0dXBkYXRlU2xpZGVJbmZvKCkge1xyXG4gICAgICB2YXIgdG90YWxTbGlkZXMgPSAkY2FydHByb2R1Y3RjYXJvdXNlbC5maW5kKCcuc2xpY2stZG90cyBsaSBidXR0b24nKS5sZW5ndGg7XHJcbiAgICAgIHZhciBhY3RpdmVTbGlkZUluZGV4ID0gJGNhcnRwcm9kdWN0Y2Fyb3VzZWwuZmluZCgnLnNsaWNrLWRvdHMgbGkuc2xpY2stYWN0aXZlJykuaW5kZXgoKSArIDE7XHJcbiAgICAgICQoJy5jYXJ0LXByb2R1Y3QtbmF2IC5jdXJyZW50LXNsaWRlJykudGV4dChhY3RpdmVTbGlkZUluZGV4KTtcclxuICAgICAgJCgnLmNhcnQtcHJvZHVjdC1uYXYgLnRvdGFsLXNsaWRlcycpLnRleHQodG90YWxTbGlkZXMpO1xyXG4gICAgICAvLyBVcGRhdGUgc2xpY2stYWN0aXZlLWRvdFxyXG4gICAgICB2YXIgJGFjdGl2ZURvdCA9ICQoJy5jYXJ0LWFkZHRpb25hbC1wcm9kdWN0cyAuc2xpY2stYWN0aXZlLWRvdCcpO1xyXG4gICAgICBpZiAoJGFjdGl2ZURvdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICRhY3RpdmVEb3QgPSAkKCc8bGkgY2xhc3M9XCJzbGljay1hY3RpdmUtZG90XCI+PC9saT4nKTtcclxuICAgICAgICAgICQoJy5jYXJ0LWFkZHRpb25hbC1wcm9kdWN0cyAuc2xpY2stZG90cycpLmFwcGVuZCgkYWN0aXZlRG90KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGRvdFdpZHRoID0gMTAwIC8gdG90YWxTbGlkZXM7XHJcbiAgICAgICRhY3RpdmVEb3QuY3NzKCd3aWR0aCcsIGRvdFdpZHRoICsgJyUnKTtcclxuXHJcbiAgICAgIHZhciBkb3RMZWZ0ID0gZG90V2lkdGggKiAoYWN0aXZlU2xpZGVJbmRleCAtIDEpO1xyXG4gICAgICAkYWN0aXZlRG90LmNzcygnbGVmdCcsIGRvdExlZnQgKyAnJScpO1xyXG4gICAgICBpZiAoYWN0aXZlU2xpZGVJbmRleCAgPT0gMSkge1xyXG4gICAgICAgICAgJCgnLmNhcnQtcHJvZHVjdC1uYXYgLnNsaWNrLXByZXYnKS5hZGRDbGFzcygnZGlzYWJsZWQtYnRuJyk7XHJcbiAgICAgICAgICAkKCcuY2FydC1wcm9kdWN0LW5hdiAuc2xpY2stbmV4dCcpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZC1idG4nKTtcclxuICAgICAgfSBlbHNlIGlmIChhY3RpdmVTbGlkZUluZGV4ICA9PSB0b3RhbFNsaWRlcykge1xyXG4gICAgICAgICAgJCgnLmNhcnQtcHJvZHVjdC1uYXYgLnNsaWNrLW5leHQnKS5hZGRDbGFzcygnZGlzYWJsZWQtYnRuJyk7XHJcbiAgICAgICAgICAkKCcuY2FydC1wcm9kdWN0LW5hdiAuc2xpY2stcHJldicpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZC1idG4nKTtcclxuICAgICAgfSAgIFxyXG4gICAgICAgIGlmIChhY3RpdmVTbGlkZUluZGV4ICA+IDEpIHtcclxuICAgICAgICAgICAgJCgnLmNhcnQtcHJvZHVjdC1uYXYgLnNsaWNrLXByZXYnKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQtYnRuJyk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBpZiAoYWN0aXZlU2xpZGVJbmRleCAgPCB0b3RhbFNsaWRlcykge1xyXG4gICAgICAgICAgICAkKCcuY2FydC1wcm9kdWN0LW5hdiAuc2xpY2stbmV4dCcpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZC1idG4nKTtcclxuICAgICAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBFbnN1cmUgdGhlIGZ1bmN0aW9uIHJ1bnMgb24gaW5pdGlhbCBsb2FkIGFuZCBhZnRlciBlYWNoIHNsaWRlIGNoYW5nZVxyXG4gIGZ1bmN0aW9uIGNhcnRwcm9kdWN0aW5pdEFuZFVwZGF0ZSgpIHtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGNhcnRwcm9kdWN0dXBkYXRlU2xpZGVJbmZvKCk7ICAvLyBEZWxheSB0byBlbnN1cmUgU2xpY2sgaGFzIGNvbXBsZXRlZCBzZXR1cFxyXG4gICAgICB9LCAxMDApOyAgLy8gQWRqdXN0IGRlbGF5IGFzIG5lZWRlZFxyXG4gIH1cclxuXHJcbiAgLy8gQ2FsbCBjYXJ0cHJvZHVjdGluaXRBbmRVcGRhdGUgZnVuY3Rpb24gb24gc2xpZGVyIGV2ZW50c1xyXG4gICRjYXJ0cHJvZHVjdGNhcm91c2VsLm9uKCdpbml0IHJlSW5pdCBhZnRlckNoYW5nZScsIGNhcnRwcm9kdWN0aW5pdEFuZFVwZGF0ZSk7XHJcblxyXG4gIC8vIEN1c3RvbSBuYXZpZ2F0aW9uIGJ1dHRvbnNcclxuICAkKCcuY2FydC1wcm9kdWN0LW5hdiAuc2xpY2stcHJldicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAkY2FydHByb2R1Y3RjYXJvdXNlbC5zbGljaygnc2xpY2tQcmV2Jyk7XHJcbiAgICAgIGNhcnRwcm9kdWN0dXBkYXRlU2xpZGVJbmZvKCk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5jYXJ0LXByb2R1Y3QtbmF2IC5zbGljay1uZXh0JykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICRjYXJ0cHJvZHVjdGNhcm91c2VsLnNsaWNrKCdzbGlja05leHQnKTtcclxuICAgICAgY2FydHByb2R1Y3R1cGRhdGVTbGlkZUluZm8oKTtcclxuICB9KTtcclxuICAvLyBJbml0aWFsIGNhbGwgdG8gc2V0IHVwIHRoZSBhY3RpdmUgZG90IGFuZCBzbGlkZSBpbmZvXHJcbiAgY2FydHByb2R1Y3Rpbml0QW5kVXBkYXRlKCk7ICAgIFxyXG59KTsiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsJztcclxuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJzsgIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uKGNvbnRleHQpIHtcclxuICAvLyBHZXQgdGhlIGN1cnJlbnQgcHJpY2UgYW5kIHRhcmdldCBwcmljZVxyXG4gICAgdmFyIHNwYW5UZXh0ID0gJCgnLmNhcnQtdG90YWwtZ3JhbmRUb3RhbCBzcGFuJykudGV4dCgpO1xyXG4gICAgY29uc3QgYXBpID0gXCJodHRwczovL2FwaS5leGNoYW5nZXJhdGUtYXBpLmNvbS92NC9sYXRlc3QvVVNEXCI7XHJcbiAgICAvLyBFeHRyYWN0IHRoZSB2YWx1ZSBiZWZvcmUgdGhlIGludGVnZXJcclxuICAgIHZhciB2YWx1ZUJlZm9yZUludGVnZXIgPSBzcGFuVGV4dC5yZXBsYWNlKC9bMC05Ll0rLywgJycpLnRyaW0oKTsgIFxyXG4gICAgdmFyIHRhcmdldFByaWNlID0gcGFyc2VGbG9hdCgkKCcudG8tcHJpY2Uuc2hpcC1wcmljZScpLnRleHQoKS5yZXBsYWNlKCckJywgJycpLnJlcGxhY2UoJywnLCAnJykpO1xyXG4gICAgdmFyIHJlbWFpblByaWNlID0gcGFyc2VGbG9hdCgkKCcuY2FydC10b3RhbC1ncmFuZFRvdGFsIHNwYW4nKS50ZXh0KCkucmVwbGFjZSh2YWx1ZUJlZm9yZUludGVnZXIsICcnKS5yZXBsYWNlKCcsJywgJycpKTtcclxuICAgIHZhciBhY3RpdmVDdXJyZW5jeSA9ICQoJy5uYXZVc2VyLWFjdGlvbi0tY3VycmVuY3lTZWxlY3RvcicpLmF0dHIoJ2RhdGEtYWN0aXZlLWN1cnJlbmN5LWNvZGUnKTtcclxuICAgIHZhciBkZWZhdWx0Q3VycmVuY3kgPSAkKCcuZGVmYXVsdC1jdXJyZW5jeScpLnRleHQoKTtcclxuICAgIGlmKGFjdGl2ZUN1cnJlbmN5PT11bmRlZmluZWQpXHJcbiAgICB7XHJcbiAgICAgIGFjdGl2ZUN1cnJlbmN5ID0gZGVmYXVsdEN1cnJlbmN5O1xyXG4gICAgfVxyXG4gICAgdmFyIGFjdHVhbHZhbHVlID0gJChcIi50by1wcmljZS5zaGlwLXByaWNlXCIpLmF0dHIoJ2RhdGEtc2hpcHBpbmctcHJpY2UnKTtcclxuICAgIHZhciBkZWZhdWx0Q3VycmVuY3kgPSAkKCcuZGVmYXVsdC1jdXJyZW5jeScpLnRleHQoKTtcclxuICAgIGdldFJlc3VsdHMoKTsvLyBDdXJyZW5jeSBleGNoYW5nZSBmdW5jdGlvbmFsaXR5XHJcbiAgICAvLyBDaGVjayB0aGUgY29uZGl0aW9ucyBhbmQgYWRkIGNsYXNzZXMgYWNjb3JkaW5nbHlcclxuICAgIGlmIChyZW1haW5QcmljZSA8IHRhcmdldFByaWNlKSB7XHJcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBwZXJjZW50YWdlIG9mIHRhcmdldFByaWNlIHJlYWNoZWRcclxuICAgICAgICB2YXIgcGVyY2VudGFnZVJlYWNoZWQgPSAxMDAgLSAoKHRhcmdldFByaWNlIC0gcmVtYWluUHJpY2UpIC8gdGFyZ2V0UHJpY2UpICogMTAwO1xyXG4gICAgICAgIHZhciBtYWlucHJpY2UgPSAgdGFyZ2V0UHJpY2UgLSByZW1haW5QcmljZTtcclxuICAgICAgICAvLyBVcGRhdGUgdGhlIHRleHQgZm9yIHRoZSBhd2F5IG1lc3NhZ2VcclxuICAgICAgICB2YXIgYXdheXRleHQgPSAkKCcuY2FydC1zaGlwcGluZy1tYWluIC5hd2F5LW1lc3NhZ2UnKS50ZXh0KCk7XHJcbiAgICAgICAgdmFyIGF3YXl0ZXh0Y2hhbmdlZCA9IGF3YXl0ZXh0LnJlcGxhY2UoJ3tyZW1haW5fcHJpY2V9JywgdmFsdWVCZWZvcmVJbnRlZ2VyICsgbWFpbnByaWNlLnRvRml4ZWQoMikpO1xyXG4gICAgICAgICQoJy5hd2F5LW1lc3NhZ2UnKS50ZXh0KGF3YXl0ZXh0Y2hhbmdlZCk7XHJcbiAgICAgICAgLy8gU2V0IHRoZSB3aWR0aCBvZiB0aGUgcHJvZ3Jlc3MgYmFyXHJcbiAgICAgICAgJCgnLm15UHJvZ3Jlc3NsYWJlbCcpLmNzcygnd2lkdGgnLCBwZXJjZW50YWdlUmVhY2hlZCArICclJyk7XHJcbiAgICAgICAgJCgnLmF3YXktbWVzc2FnZScpLmFkZENsYXNzKCdoaWdobGlnaHQnKTsgLy8gQWRkIHlvdXIgZGVzaXJlZCBjbGFzcyBoZXJlXHJcbiAgICAgICAgJCgnLmZyZWVzaGlwcGluZy1tZXNzYWdlJykucmVtb3ZlQ2xhc3MoJ2hpZ2hsaWdodCcpOyAvLyBSZW1vdmUgdGhlIGNsYXNzIGlmIG5lZWRlZFxyXG4gICAgICAgICQoJy5jdXJyZW5jeS1pY29uJykudGV4dCh2YWx1ZUJlZm9yZUludGVnZXIpO1xyXG4gICAgICAgICQoJy5zaGlwLXByaWNlJykuYWRkQ2xhc3MoJ3Zpc2libGUtY3VycmVuY3knKTsgXHJcbiAgICAgICAgJCgnLnNocC1pbi1wcmdzJykucmVtb3ZlQ2xhc3MoJ3F1YWxpZmllZC1mcmVlLXNoaXAnKTsgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAkKCcuZnJlZXNoaXBwaW5nLW1lc3NhZ2UnKS50ZXh0KFwiWW91ciBvcmRlciBxdWFsaWZpZXMgZm9yIEZyZWUgU2hpcHBpbmchXCIpOyAvLyBBZGp1c3QgbWVzc2FnZSBpZiBuZWNlc3NhcnlcclxuICAgICAgICAvLyBTZXQgdGhlIHByb2dyZXNzIGJhciB0byAxMDAlXHJcbiAgICAgICAgJCgnLm15UHJvZ3Jlc3NsYWJlbCcpLmNzcygnd2lkdGgnLCAnMTAwJScpO1xyXG4gICAgICAgICQoJy5mcmVlc2hpcHBpbmctbWVzc2FnZScpLmFkZENsYXNzKCdoaWdobGlnaHQnKTsgLy8gQWRkIHlvdXIgZGVzaXJlZCBjbGFzcyBoZXJlXHJcbiAgICAgICAgJCgnLmF3YXktbWVzc2FnZScpLnJlbW92ZUNsYXNzKCdoaWdobGlnaHQnKTsgLy8gUmVtb3ZlIHRoZSBjbGFzcyBpZiBuZWVkZWQgICAgXHJcbiAgICAgICAgJCgnLmN1cnJlbmN5LWljb24nKS50ZXh0KHZhbHVlQmVmb3JlSW50ZWdlcik7XHJcbiAgICAgICAgJCgnLnNoaXAtcHJpY2UnKS5hZGRDbGFzcygndmlzaWJsZS1jdXJyZW5jeScpOyAgXHJcbiAgICAgICAgJCgnLnNocC1pbi1wcmdzJykuYWRkQ2xhc3MoJ3F1YWxpZmllZC1mcmVlLXNoaXAnKTsgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gZGlzcGxheVJlc3VsdHMoY3VycmVuY3kpIHtcclxuICAgICAgbGV0IGZyb21SYXRlID0gY3VycmVuY3kucmF0ZXNbZGVmYXVsdEN1cnJlbmN5XTtcclxuICAgICAgbGV0IHRvUmF0ZSA9IGN1cnJlbmN5LnJhdGVzW2FjdGl2ZUN1cnJlbmN5XTtcclxuICAgICAgbGV0IGZpbmFsVmFsdWUgPSgodG9SYXRlIC8gZnJvbVJhdGUpICogYWN0dWFsdmFsdWUpLnRvRml4ZWQoMik7XHJcbiAgICAgICQoXCIudG8tcHJpY2Uuc2hpcC1wcmljZSAuY3VycmVuY3ktdmFsdWVcIikudGV4dChmaW5hbFZhbHVlKTtcclxuICAgICAgJCgnLmN1cnJlbmN5LXZhbHVlJykuYWRkQ2xhc3MoJ3Zpc2libGUtcHJpY2UnKTtcclxuICB9ICAgXHJcblxyXG4gIGZ1bmN0aW9uIGdldFJlc3VsdHMoKSB7XHJcbiAgICBmZXRjaChgJHthcGl9YClcclxuICAgICAgICAudGhlbihjdXJyZW5jeSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeS5qc29uKCk7XHJcbiAgICAgICAgfSkudGhlbihkaXNwbGF5UmVzdWx0cyk7XHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBQcm9kdWN0RGV0YWlsc0Jhc2UsIHsgb3B0aW9uQ2hhbmdlRGVjb3JhdG9yIH0gZnJvbSAnLi9wcm9kdWN0LWRldGFpbHMtYmFzZSc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGlzQnJvd3NlcklFLCBjb252ZXJ0SW50b0FycmF5IH0gZnJvbSAnLi91dGlscy9pZS1oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydEl0ZW1EZXRhaWxzIGV4dGVuZHMgUHJvZHVjdERldGFpbHNCYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsIGNvbnRleHQsIHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKCRzY29wZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29uc3QgJGZvcm0gPSAkKCcjQ2FydEVkaXRQcm9kdWN0RmllbGRzRm9ybScsIHRoaXMuJHNjb3BlKTtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWxlbWVudCA9ICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlcy13cmFwcGVyXScsICRmb3JtKTtcbiAgICAgICAgY29uc3QgaGFzT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuaHRtbCgpLnRyaW0oKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGhhc0RlZmF1bHRPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWxlbWVudC5maW5kKCdbZGF0YS1kZWZhdWx0XScpLmxlbmd0aDtcblxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50Lm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFByb2R1Y3RWYXJpYW50KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbkNoYW5nZUNhbGxiYWNrID0gb3B0aW9uQ2hhbmdlRGVjb3JhdG9yLmNhbGwodGhpcywgaGFzRGVmYXVsdE9wdGlvbnMpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBwcm9kdWN0IGF0dHJpYnV0ZXMuIEFsc28gdXBkYXRlIHRoZSBpbml0aWFsIHZpZXcgaW4gY2FzZSBpdGVtcyBhcmUgb29zXG4gICAgICAgIC8vIG9yIGhhdmUgZGVmYXVsdCB2YXJpYW50IHByb3BlcnRpZXMgdGhhdCBjaGFuZ2UgdGhlIHZpZXdcbiAgICAgICAgaWYgKChpc0VtcHR5KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSkgfHwgaGFzRGVmYXVsdE9wdGlvbnMpICYmIGhhc09wdGlvbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9IHRoaXMuY29udGV4dC5wcm9kdWN0Rm9yQ2hhbmdlSWQ7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UocHJvZHVjdElkLCAkZm9ybS5zZXJpYWxpemUoKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCBvcHRpb25DaGFuZ2VDYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRQcm9kdWN0VmFyaWFudCgpIHtcbiAgICAgICAgY29uc3QgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcyA9IFtdO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gW107XG5cbiAgICAgICAgJC5lYWNoKCQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25MYWJlbCA9IHZhbHVlLmNoaWxkcmVuWzBdLmlubmVyVGV4dDtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvblRpdGxlID0gb3B0aW9uTGFiZWwuc3BsaXQoJzonKVswXS50cmltKCk7XG4gICAgICAgICAgICBjb25zdCByZXF1aXJlZCA9IG9wdGlvbkxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdmFsdWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlJyk7XG5cbiAgICAgICAgICAgIGlmICgodHlwZSA9PT0gJ2lucHV0LWZpbGUnIHx8IHR5cGUgPT09ICdpbnB1dC10ZXh0JyB8fCB0eXBlID09PSAnaW5wdXQtbnVtYmVyJykgJiYgdmFsdWUucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3RleHRhcmVhJyAmJiB2YWx1ZS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnZhbHVlID09PSAnJyAmJiByZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NhdGlzZmllZCA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLmV2ZXJ5KChzZWxlY3QpID0+IHNlbGVjdC5zZWxlY3RlZEluZGV4ICE9PSAwKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc1NhdGlzZmllZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gQXJyYXkuZnJvbSh2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKSkubWFwKCh4KSA9PiB4LnZhbHVlKS5qb2luKCctJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtkYXRlU3RyaW5nfWApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3QgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gc2VsZWN0LnNlbGVjdGVkSW5kZXg7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7c2VsZWN0Lm9wdGlvbnNbc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0fWApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXJlY3RhbmdsZScgfHwgdHlwZSA9PT0gJ3NldC1yYWRpbycgfHwgdHlwZSA9PT0gJ3N3YXRjaCcgfHwgdHlwZSA9PT0gJ2lucHV0LWNoZWNrYm94JyB8fCB0eXBlID09PSAncHJvZHVjdC1saXN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdldFNlbGVjdGVkT3B0aW9uTGFiZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0VmFyaWFudHNsaXN0ID0gY29udmVydEludG9BcnJheSh2YWx1ZS5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0ID0gaW5wdCA9PiBpbnB0LmRhdGFzZXQucHJvZHVjdEF0dHJpYnV0ZVZhbHVlID09PSBjaGVja2VkLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3RWYXJpYW50c2xpc3QuZmlsdGVyKG1hdGNoTGFiZWxGb3JDaGVja2VkSW5wdXQpWzBdO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGlzQnJvd3NlcklFID8gZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCgpLmlubmVyVGV4dC50cmltKCkgOiBjaGVja2VkLmxhYmVsc1swXS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWx9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N3YXRjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gaXNCcm93c2VySUUgPyBnZXRTZWxlY3RlZE9wdGlvbkxhYmVsKCkuY2hpbGRyZW5bMF0gOiBjaGVja2VkLmxhYmVsc1swXS5jaGlsZHJlblswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtsYWJlbC50aXRsZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9Olllc2ApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06Tm9gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBwcm9kdWN0VmFyaWFudCA9IHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMubGVuZ3RoID09PSAwID8gb3B0aW9ucy5zb3J0KCkuam9pbignLCAnKSA6ICd1bnNhdGlzZmllZCc7XG4gICAgICAgIGNvbnN0IHZpZXcgPSAkKCcubW9kYWwtaGVhZGVyLXRpdGxlJyk7XG5cbiAgICAgICAgaWYgKHByb2R1Y3RWYXJpYW50KSB7XG4gICAgICAgICAgICBwcm9kdWN0VmFyaWFudCA9IHByb2R1Y3RWYXJpYW50ID09PSAndW5zYXRpc2ZpZWQnID8gJycgOiBwcm9kdWN0VmFyaWFudDtcbiAgICAgICAgICAgIGlmICh2aWV3LmF0dHIoJ2RhdGEtZXZlbnQtdHlwZScpKSB7XG4gICAgICAgICAgICAgICAgdmlldy5hdHRyKCdkYXRhLXByb2R1Y3QtdmFyaWFudCcsIHByb2R1Y3RWYXJpYW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdE5hbWUgPSB2aWV3Lmh0bWwoKS5tYXRjaCgvJyguKj8pJy8pWzFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmQgPSAkKGBbZGF0YS1uYW1lPVwiJHtwcm9kdWN0TmFtZX1cIl1gKTtcbiAgICAgICAgICAgICAgICBjYXJkLmF0dHIoJ2RhdGEtcHJvZHVjdC12YXJpYW50JywgcHJvZHVjdFZhcmlhbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSBvciBtYXJrIGFzIHVuYXZhaWxhYmxlIG91dCBvZiBzdG9jayBhdHRyaWJ1dGVzIGlmIGVuYWJsZWRcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGRhdGEpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoZGF0YSk7XG5cbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnLm1vZGFsLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnaGlkZS1jb250ZW50Jyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNlcnQpIHtcbiAgICBpZiAodHlwZW9mIGNlcnQgIT09ICdzdHJpbmcnIHx8IGNlcnQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgYW55IGN1c3RvbSBnaWZ0IGNlcnRpZmljYXRlIHZhbGlkYXRpb24gbG9naWMgaGVyZVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIH0gZnJvbSAnLi91dGlscy9mb3JtLXV0aWxzJztcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcblxuLyoqXG4gKiBJZiB0aGVyZSBhcmUgbm8gb3B0aW9ucyBmcm9tIGJjYXBwLCBhIHRleHQgZmllbGQgd2lsbCBiZSBzZW50LiBUaGlzIHdpbGwgY3JlYXRlIGEgc2VsZWN0IGVsZW1lbnQgdG8gaG9sZCBvcHRpb25zIGFmdGVyIHRoZSByZW1vdGUgcmVxdWVzdC5cbiAqIEByZXR1cm5zIHtqUXVlcnl8SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIG1ha2VTdGF0ZVJlcXVpcmVkKHN0YXRlRWxlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGF0dHJzID0gXy50cmFuc2Zvcm0oc3RhdGVFbGVtZW50LnByb3AoJ2F0dHJpYnV0ZXMnKSwgKHJlc3VsdCwgaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCByZXQgPSByZXN1bHQ7XG4gICAgICAgIHJldFtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlcGxhY2VtZW50QXR0cmlidXRlcyA9IHtcbiAgICAgICAgaWQ6IGF0dHJzLmlkLFxuICAgICAgICAnZGF0YS1sYWJlbCc6IGF0dHJzWydkYXRhLWxhYmVsJ10sXG4gICAgICAgIGNsYXNzOiAnZm9ybS1zZWxlY3QnLFxuICAgICAgICBuYW1lOiBhdHRycy5uYW1lLFxuICAgICAgICAnZGF0YS1maWVsZC10eXBlJzogYXR0cnNbJ2RhdGEtZmllbGQtdHlwZSddLFxuICAgIH07XG5cbiAgICBzdGF0ZUVsZW1lbnQucmVwbGFjZVdpdGgoJCgnPHNlbGVjdD48L3NlbGVjdD4nLCByZXBsYWNlbWVudEF0dHJpYnV0ZXMpKTtcblxuICAgIGNvbnN0ICRuZXdFbGVtZW50ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XG4gICAgY29uc3QgJGhpZGRlbklucHV0ID0gJCgnW25hbWUqPVwiRm9ybUZpZWxkSXNUZXh0XCJdJyk7XG5cbiAgICBpZiAoJGhpZGRlbklucHV0Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAkaGlkZGVuSW5wdXQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKCRuZXdFbGVtZW50LnByZXYoKS5maW5kKCdzbWFsbCcpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBTdHJpbmcgaXMgaW5qZWN0ZWQgZnJvbSBsb2NhbGl6ZXJcbiAgICAgICAgJG5ld0VsZW1lbnQucHJldigpLmFwcGVuZChgPHNtYWxsPiR7Y29udGV4dC5yZXF1aXJlZH08L3NtYWxsPmApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRuZXdFbGVtZW50LnByZXYoKS5maW5kKCdzbWFsbCcpLnNob3coKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJG5ld0VsZW1lbnQ7XG59XG5cbi8qKlxuICogSWYgYSBjb3VudHJ5IHdpdGggc3RhdGVzIGlzIHRoZSBkZWZhdWx0LCBhIHNlbGVjdCB3aWxsIGJlIHNlbnQsXG4gKiBJbiB0aGlzIGNhc2Ugd2UgbmVlZCB0byBiZSBhYmxlIHRvIHN3aXRjaCB0byBhbiBpbnB1dCBmaWVsZCBhbmQgaGlkZSB0aGUgcmVxdWlyZWQgZmllbGRcbiAqL1xuZnVuY3Rpb24gbWFrZVN0YXRlT3B0aW9uYWwoc3RhdGVFbGVtZW50KSB7XG4gICAgY29uc3QgYXR0cnMgPSBfLnRyYW5zZm9ybShzdGF0ZUVsZW1lbnQucHJvcCgnYXR0cmlidXRlcycpLCAocmVzdWx0LCBpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHJldCA9IHJlc3VsdDtcbiAgICAgICAgcmV0W2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZXBsYWNlbWVudEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgaWQ6IGF0dHJzLmlkLFxuICAgICAgICAnZGF0YS1sYWJlbCc6IGF0dHJzWydkYXRhLWxhYmVsJ10sXG4gICAgICAgIGNsYXNzOiAnZm9ybS1pbnB1dCcsXG4gICAgICAgIG5hbWU6IGF0dHJzLm5hbWUsXG4gICAgICAgICdkYXRhLWZpZWxkLXR5cGUnOiBhdHRyc1snZGF0YS1maWVsZC10eXBlJ10sXG4gICAgfTtcblxuICAgIHN0YXRlRWxlbWVudC5yZXBsYWNlV2l0aCgkKCc8aW5wdXQgLz4nLCByZXBsYWNlbWVudEF0dHJpYnV0ZXMpKTtcblxuICAgIGNvbnN0ICRuZXdFbGVtZW50ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XG5cbiAgICBpZiAoJG5ld0VsZW1lbnQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGluc2VydFN0YXRlSGlkZGVuRmllbGQoJG5ld0VsZW1lbnQpO1xuICAgICAgICAkbmV3RWxlbWVudC5wcmV2KCkuZmluZCgnc21hbGwnKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICRuZXdFbGVtZW50O1xufVxuXG4vKipcbiAqIEFkZHMgdGhlIGFycmF5IG9mIG9wdGlvbnMgZnJvbSB0aGUgcmVtb3RlIHJlcXVlc3QgdG8gdGhlIG5ld2x5IGNyZWF0ZWQgc2VsZWN0IGJveC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZXNBcnJheVxuICogQHBhcmFtIHtqUXVlcnl9ICRzZWxlY3RFbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5mdW5jdGlvbiBhZGRPcHRpb25zKHN0YXRlc0FycmF5LCAkc2VsZWN0RWxlbWVudCwgb3B0aW9ucykge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IFtdO1xuXG4gICAgY29udGFpbmVyLnB1c2goYDxvcHRpb24gdmFsdWU9XCJcIj4ke3N0YXRlc0FycmF5LnByZWZpeH08L29wdGlvbj5gKTtcblxuICAgIGlmICghXy5pc0VtcHR5KCRzZWxlY3RFbGVtZW50KSkge1xuICAgICAgICBzdGF0ZXNBcnJheS5zdGF0ZXMuZm9yRWFjaCgoc3RhdGVPYmopID0+IHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnVzZUlkRm9yU3RhdGVzKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnB1c2goYDxvcHRpb24gdmFsdWU9XCIke3N0YXRlT2JqLmlkfVwiPiR7c3RhdGVPYmoubmFtZX08L29wdGlvbj5gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnB1c2goYDxvcHRpb24gdmFsdWU9XCIke3N0YXRlT2JqLm5hbWV9XCI+JHtzdGF0ZU9iai5sYWJlbCA/IHN0YXRlT2JqLmxhYmVsIDogc3RhdGVPYmoubmFtZX08L29wdGlvbj5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHNlbGVjdEVsZW1lbnQuaHRtbChjb250YWluZXIuam9pbignICcpKTtcbiAgICB9XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7alF1ZXJ5fSBzdGF0ZUVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlRWxlbWVudCwgY29udGV4dCA9IHt9LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIC8qKlxuICAgICAqIEJhY2t3YXJkcyBjb21wYXRpYmxlIGZvciB0aHJlZSBwYXJhbWV0ZXJzIGluc3RlYWQgb2YgZm91clxuICAgICAqXG4gICAgICogQXZhaWxhYmxlIG9wdGlvbnM6XG4gICAgICpcbiAgICAgKiB1c2VJZEZvclN0YXRlcyB7Qm9vbH0gLSBHZW5lcmF0ZXMgc3RhdGVzIGRyb3Bkb3duIHVzaW5nIGlkIGZvciB2YWx1ZXMgaW5zdGVhZCBvZiBzdHJpbmdzXG4gICAgICovXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgfVxuXG4gICAgJCgnc2VsZWN0W2RhdGEtZmllbGQtdHlwZT1cIkNvdW50cnlcIl0nKS5vbignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBjb3VudHJ5TmFtZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCk7XG5cbiAgICAgICAgaWYgKGNvdW50cnlOYW1lID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdXRpbHMuYXBpLmNvdW50cnkuZ2V0QnlOYW1lKGNvdW50cnlOYW1lLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKGNvbnRleHQuc3RhdGVfZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCAkY3VycmVudElucHV0ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XG5cbiAgICAgICAgICAgIGlmICghXy5pc0VtcHR5KHJlc3BvbnNlLmRhdGEuc3RhdGVzKSkge1xuICAgICAgICAgICAgICAgIC8vIFRoZSBlbGVtZW50IG1heSBoYXZlIGJlZW4gcmVwbGFjZWQgd2l0aCBhIHNlbGVjdCwgcmVzZWxlY3QgaXRcbiAgICAgICAgICAgICAgICBjb25zdCAkc2VsZWN0RWxlbWVudCA9IG1ha2VTdGF0ZVJlcXVpcmVkKCRjdXJyZW50SW5wdXQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgYWRkT3B0aW9ucyhyZXNwb25zZS5kYXRhLCAkc2VsZWN0RWxlbWVudCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgJHNlbGVjdEVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gbWFrZVN0YXRlT3B0aW9uYWwoJGN1cnJlbnRJbnB1dCwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBuZXdFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJjb25zdCBUUkFOU0xBVElPTlMgPSAndHJhbnNsYXRpb25zJztcbmNvbnN0IGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkgPSAoZGljdGlvbmFyeSkgPT4gISFPYmplY3Qua2V5cyhkaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLmxlbmd0aDtcbmNvbnN0IGNob29zZUFjdGl2ZURpY3Rpb25hcnkgPSAoLi4uZGljdGlvbmFyeUpzb25MaXN0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWN0aW9uYXJ5SnNvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGljdGlvbmFyeSA9IEpTT04ucGFyc2UoZGljdGlvbmFyeUpzb25MaXN0W2ldKTtcbiAgICAgICAgaWYgKGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkoZGljdGlvbmFyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkaWN0aW9uYXJ5O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBkZWZpbmVzIFRyYW5zbGF0aW9uIERpY3Rpb25hcnkgdG8gdXNlXG4gKiBAcGFyYW0gY29udGV4dCBwcm92aWRlcyBhY2Nlc3MgdG8gMyB2YWxpZGF0aW9uIEpTT05zIGZyb20gZW4uanNvbjpcbiAqIHZhbGlkYXRpb25fbWVzc2FnZXMsIHZhbGlkYXRpb25fZmFsbGJhY2tfbWVzc2FnZXMgYW5kIGRlZmF1bHRfbWVzc2FnZXNcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgPSAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiB9ID0gY29udGV4dDtcbiAgICBjb25zdCBhY3RpdmVEaWN0aW9uYXJ5ID0gY2hvb3NlQWN0aXZlRGljdGlvbmFyeSh2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OKTtcbiAgICBjb25zdCBsb2NhbGl6YXRpb25zID0gT2JqZWN0LnZhbHVlcyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubWFwKGtleSA9PiBrZXkuc3BsaXQoJy4nKS5wb3AoKSk7XG5cbiAgICByZXR1cm4gdHJhbnNsYXRpb25LZXlzLnJlZHVjZSgoYWNjLCBrZXksIGkpID0+IHtcbiAgICAgICAgYWNjW2tleV0gPSBsb2NhbGl6YXRpb25zW2ldO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbn07XG4iXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX2luaGVyaXRzTG9vc2UiLCJfc2V0UHJvdG90eXBlT2YiLCJiaW5kIiwiUGFnZU1hbmFnZXIiLCJjaGVja0lzR2lmdENlcnRWYWxpZCIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsInV0aWxzIiwiU2hpcHBpbmdFc3RpbWF0b3IiLCJkZWZhdWx0TW9kYWwiLCJzaG93QWxlcnRNb2RhbCIsIk1vZGFsRXZlbnRzIiwiQ2FydEl0ZW1EZXRhaWxzIiwiZGV2QWR2YW5jZWRTd2F0Y2hJbWFnZSIsImNhcnRwcm9kdWN0cyIsImZyZWVzaGlwcGluZyIsIkNhcnQiLCJfUGFnZU1hbmFnZXIiLCJfcHJvdG8iLCJvblJlYWR5IiwiJG1vZGFsIiwiJGNhcnRQYWdlQ29udGVudCIsIiQiLCIkY2FydENvbnRlbnQiLCIkY2FydE1lc3NhZ2VzIiwiJGNhcnRUb3RhbHMiLCIkY2FydEFkZGl0aW9uYWxDaGVja291dEJ0bnMiLCIkb3ZlcmxheSIsImhpZGUiLCIkYWN0aXZlQ2FydEl0ZW1JZCIsIiRhY3RpdmVDYXJ0SXRlbUJ0bkFjdGlvbiIsInNldEFwcGxlUGF5U3VwcG9ydCIsImJpbmRFdmVudHMiLCJjb250ZXh0IiwiJGZyZWVzaGlwcGluZyIsIndpbmRvdyIsIkFwcGxlUGF5U2Vzc2lvbiIsImFkZENsYXNzIiwiY2FydFVwZGF0ZSIsIiR0YXJnZXQiLCJfdGhpcyIsIml0ZW1JZCIsImRhdGEiLCIkZWwiLCJvbGRRdHkiLCJwYXJzZUludCIsInZhbCIsIm1heFF0eSIsIm1pblF0eSIsIm1pbkVycm9yIiwibWF4RXJyb3IiLCJuZXdRdHkiLCJzaG93IiwiYXBpIiwiY2FydCIsIml0ZW1VcGRhdGUiLCJlcnIiLCJyZXNwb25zZSIsInN0YXR1cyIsInJlbW92ZSIsInJlZnJlc2hDb250ZW50IiwiZXJyb3JzIiwiam9pbiIsImNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlIiwicHJlVmFsIiwiX3RoaXMyIiwiTnVtYmVyIiwiaW52YWxpZEVudHJ5IiwiaXNJbnRlZ2VyIiwiaW52YWxpZEVudHJ5TWVzc2FnZSIsInJlcGxhY2UiLCJjYXJ0UmVtb3ZlSXRlbSIsIl90aGlzMyIsIml0ZW1SZW1vdmUiLCJjYXJ0RWRpdE9wdGlvbnMiLCJwcm9kdWN0SWQiLCJfdGhpczQiLCJhc3NpZ24iLCJwcm9kdWN0Rm9yQ2hhbmdlSWQiLCJtb2RhbCIsIm9wdGlvbnMiLCJ0ZW1wbGF0ZSIsIm9wZW4iLCJmaW5kIiwicHJvZHVjdEF0dHJpYnV0ZXMiLCJjb25maWd1cmVJbkNhcnQiLCJ1cGRhdGVDb250ZW50IiwiY29udGVudCIsIm9wdGlvbkNoYW5nZUhhbmRsZXIiLCIkcHJvZHVjdE9wdGlvbnNDb250YWluZXIiLCJtb2RhbEJvZHlSZXNlcnZlZEhlaWdodCIsIm91dGVySGVpZ2h0IiwiY3NzIiwiaGFzQ2xhc3MiLCJvbmUiLCJvcGVuZWQiLCJtb2RhbEZvcm0iLCJvblN1Ym1pdCIsIl94IiwiX29uU3VibWl0IiwiX2NhbGxlZSIsImV2ZW50IiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXZlbnREZWZhdWx0IiwicG9zdEZvcm1EYXRhIiwiRm9ybURhdGEiLCJjbG9zZSIsIm9uIiwicHJvZHVjdERldGFpbHMiLCJiaW5kR2lmdFdyYXBwaW5nRm9ybSIsImhvb2tzIiwiY3VycmVudFRhcmdldCIsIiRmb3JtIiwiJHN1Ym1pdCIsIiRtZXNzYWdlQm94Iiwib3B0aW9uQ2hhbmdlIiwic2VyaWFsaXplIiwicmVzdWx0IiwicHVyY2hhc2luZ19tZXNzYWdlIiwidGV4dCIsInByb3AiLCJwdXJjaGFzYWJsZSIsImluc3RvY2siLCJfdGhpczUiLCIkY2FydEl0ZW1zUm93cyIsIiRjYXJ0UGFnZVRpdGxlIiwidG90YWxzIiwicGFnZVRpdGxlIiwic3RhdHVzTWVzc2FnZXMiLCJhZGRpdGlvbmFsQ2hlY2tvdXRCdXR0b25zIiwibG9jYXRpb24iLCJyZWxvYWQiLCJnZXRDb250ZW50IiwiaHRtbCIsInJlcGxhY2VXaXRoIiwicXVhbnRpdHkiLCJ0cmlnZ2VyIiwiZmlsdGVyIiwiYmluZENhcnRFdmVudHMiLCJfdGhpczYiLCJkZWJvdW5jZVRpbWVvdXQiLCJfYmluZCIsIl9kZWJvdW5jZSIsIm9uUXR5Rm9jdXMiLCJjaGFuZ2UiLCJzdHJpbmciLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsIm9uQ29uZmlybSIsImJpbmRQcm9tb0NvZGVFdmVudHMiLCJfdGhpczciLCIkY291cG9uQ29udGFpbmVyIiwiJGNvdXBvbkZvcm0iLCIkY29kZUlucHV0IiwiYXR0ciIsImNvZGUiLCJhcHBseUNvZGUiLCJiaW5kR2lmdENlcnRpZmljYXRlRXZlbnRzIiwiX3RoaXM4IiwiJGNlcnRDb250YWluZXIiLCIkY2VydEZvcm0iLCIkY2VydElucHV0IiwidG9nZ2xlIiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCJpbnZhbGlkX2dpZnRfY2VydGlmaWNhdGUiLCJhcHBseUdpZnRDZXJ0aWZpY2F0ZSIsInJlc3AiLCJiaW5kR2lmdFdyYXBwaW5nRXZlbnRzIiwiX3RoaXM5IiwiZ2V0SXRlbUdpZnRXcmFwcGluZ09wdGlvbnMiLCIkc2VsZWN0IiwiaWQiLCJpbmRleCIsImFsbG93TWVzc2FnZSIsInRvZ2dsZVZpZXdzIiwiJHNpbmdsZUZvcm0iLCIkbXVsdGlGb3JtIiwic2hpcHBpbmdFcnJvck1lc3NhZ2VzIiwiY291bnRyeSIsInNoaXBwaW5nQ291bnRyeUVycm9yTWVzc2FnZSIsInByb3ZpbmNlIiwic2hpcHBpbmdQcm92aW5jZUVycm9yTWVzc2FnZSIsInNoaXBwaW5nRXN0aW1hdG9yIiwiZGVmYXVsdCIsInN0YXRlQ291bnRyeSIsIm5vZCIsIlZhbGlkYXRvcnMiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiY29sbGFwc2libGVGYWN0b3J5IiwiJGVsZW1lbnQiLCIkc3RhdGUiLCJpc0VzdGltYXRvckZvcm1PcGVuZWQiLCJpbml0Rm9ybVZhbGlkYXRpb24iLCJiaW5kU3RhdGVDb3VudHJ5Q2hhbmdlIiwiYmluZEVzdGltYXRvckV2ZW50cyIsInNoaXBwaW5nRXN0aW1hdG9yQWxlcnQiLCJzaGlwcGluZ1ZhbGlkYXRvciIsInN1Ym1pdCIsInRhcCIsInJlbW92ZUF0dHIiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJiaW5kVmFsaWRhdGlvbiIsImJpbmRTdGF0ZVZhbGlkYXRpb24iLCJiaW5kVVBTUmF0ZXMiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJjb3VudHJ5SWQiLCJlcnJvck1lc3NhZ2UiLCIkZWxlIiwiZWxlVmFsIiwiVVBTUmF0ZVRvZ2dsZSIsIiRlc3RpbWF0b3JGb3JtVXBzIiwiJGVzdGltYXRvckZvcm1EZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCIkbGFzdCIsInVzZUlkRm9yU3RhdGVzIiwiZmllbGQiLCIkZmllbGQiLCJnZXRTdGF0dXMiLCJpcyIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUVzdGltYXRvckZvcm1TdGF0ZSIsInRvZ2dsZUJ1dHRvbiIsImJ1dHRvblNlbGVjdG9yIiwiJHRvZ2dsZUNvbnRhaW5lciIsImNoYW5nZUF0dHJpYnV0ZXNPblRvZ2dsZSIsInNlbGVjdG9yVG9BY3RpdmF0ZSIsIiRlc3RpbWF0b3JDb250YWluZXIiLCIkZXN0aW1hdG9yRm9ybSIsInBhcmFtcyIsImNvdW50cnlfaWQiLCJzdGF0ZV9pZCIsImNpdHkiLCJ6aXBfY29kZSIsImdldFNoaXBwaW5nUXVvdGVzIiwiY2xpY2tFdmVudCIsInF1b3RlSWQiLCJzdWJtaXRTaGlwcGluZ1F1b3RlIiwiJGNhcnRwcm9kdWN0Y2Fyb3VzZWwiLCJzbGljayIsImFycm93cyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiY2FydHByb2R1Y3R1cGRhdGVTbGlkZUluZm8iLCJ0b3RhbFNsaWRlcyIsImFjdGl2ZVNsaWRlSW5kZXgiLCIkYWN0aXZlRG90IiwiYXBwZW5kIiwiZG90V2lkdGgiLCJkb3RMZWZ0IiwiY2FydHByb2R1Y3Rpbml0QW5kVXBkYXRlIiwic2V0VGltZW91dCIsImNsaWNrIiwic3BhblRleHQiLCJ2YWx1ZUJlZm9yZUludGVnZXIiLCJ0cmltIiwidGFyZ2V0UHJpY2UiLCJwYXJzZUZsb2F0IiwicmVtYWluUHJpY2UiLCJhY3RpdmVDdXJyZW5jeSIsImRlZmF1bHRDdXJyZW5jeSIsInVuZGVmaW5lZCIsImFjdHVhbHZhbHVlIiwiZ2V0UmVzdWx0cyIsInBlcmNlbnRhZ2VSZWFjaGVkIiwibWFpbnByaWNlIiwiYXdheXRleHQiLCJhd2F5dGV4dGNoYW5nZWQiLCJ0b0ZpeGVkIiwiZGlzcGxheVJlc3VsdHMiLCJjdXJyZW5jeSIsImZyb21SYXRlIiwicmF0ZXMiLCJ0b1JhdGUiLCJmaW5hbFZhbHVlIiwiZmV0Y2giLCJqc29uIiwiUHJvZHVjdERldGFpbHNCYXNlIiwib3B0aW9uQ2hhbmdlRGVjb3JhdG9yIiwiaXNCcm93c2VySUUiLCJjb252ZXJ0SW50b0FycmF5IiwiX1Byb2R1Y3REZXRhaWxzQmFzZSIsIiRzY29wZSIsInByb2R1Y3RBdHRyaWJ1dGVzRGF0YSIsIiRwcm9kdWN0T3B0aW9uc0VsZW1lbnQiLCJoYXNPcHRpb25zIiwiaGFzRGVmYXVsdE9wdGlvbnMiLCJzZXRQcm9kdWN0VmFyaWFudCIsIm9wdGlvbkNoYW5nZUNhbGxiYWNrIiwiX2lzRW1wdHkiLCJ1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyIsInVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMiLCJlYWNoIiwib3B0aW9uTGFiZWwiLCJjaGlsZHJlbiIsImlubmVyVGV4dCIsIm9wdGlvblRpdGxlIiwic3BsaXQiLCJyZXF1aXJlZCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJnZXRBdHRyaWJ1dGUiLCJxdWVyeVNlbGVjdG9yIiwiaXNTYXRpc2ZpZWQiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZXZlcnkiLCJzZWxlY3QiLCJzZWxlY3RlZEluZGV4IiwiZGF0ZVN0cmluZyIsIm1hcCIsIngiLCJjaGVja2VkIiwiZ2V0U2VsZWN0ZWRPcHRpb25MYWJlbCIsInByb2R1Y3RWYXJpYW50c2xpc3QiLCJtYXRjaExhYmVsRm9yQ2hlY2tlZElucHV0IiwiaW5wdCIsImRhdGFzZXQiLCJwcm9kdWN0QXR0cmlidXRlVmFsdWUiLCJsYWJlbCIsImxhYmVscyIsInRpdGxlIiwicHJvZHVjdFZhcmlhbnQiLCJzb3J0IiwidmlldyIsInByb2R1Y3ROYW1lIiwibWF0Y2giLCJjYXJkIiwiY2VydCIsImluc2VydFN0YXRlSGlkZGVuRmllbGQiLCJtYWtlU3RhdGVSZXF1aXJlZCIsInN0YXRlRWxlbWVudCIsImF0dHJzIiwiX3RyYW5zZm9ybSIsIml0ZW0iLCJyZXQiLCJyZXBsYWNlbWVudEF0dHJpYnV0ZXMiLCIkbmV3RWxlbWVudCIsIiRoaWRkZW5JbnB1dCIsIm1ha2VTdGF0ZU9wdGlvbmFsIiwiYWRkT3B0aW9ucyIsInN0YXRlc0FycmF5IiwiJHNlbGVjdEVsZW1lbnQiLCJjb250YWluZXIiLCJwcmVmaXgiLCJzdGF0ZXMiLCJzdGF0ZU9iaiIsImNhbGxiYWNrIiwiY291bnRyeU5hbWUiLCJnZXRCeU5hbWUiLCJzdGF0ZV9lcnJvciIsIiRjdXJyZW50SW5wdXQiLCJuZXdFbGVtZW50IiwiVFJBTlNMQVRJT05TIiwiaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSIsImRpY3Rpb25hcnkiLCJjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5IiwiSlNPTiIsInBhcnNlIiwidmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIiwiYWN0aXZlRGljdGlvbmFyeSIsImxvY2FsaXphdGlvbnMiLCJ0cmFuc2xhdGlvbktleXMiLCJrZXkiLCJyZWR1Y2UiLCJhY2MiXSwic291cmNlUm9vdCI6IiJ9
