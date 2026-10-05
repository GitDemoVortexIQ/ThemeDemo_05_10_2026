"use strict";
(self["webpackChunkRoots"] = self["webpackChunkRoots"] || []).push([["assets_js_theme_global_foundation_js-assets_js_theme_global_modal_js"],{

/***/ "./assets/js/theme/global/foundation.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/global/foundation.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.dropdown */ "./node_modules/foundation-sites/js/foundation/foundation.dropdown.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var foundation_sites_js_foundation_foundation_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.tab */ "./node_modules/foundation-sites/js/foundation/foundation.tab.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_tab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_tab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _reveal_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reveal-close */ "./assets/js/theme/global/reveal-close.js");






/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__($element) {
  $element.foundation({
    dropdown: {
      // specify the class used for active dropdowns
      active_class: 'is-open'
    },
    reveal: {
      bg_class: 'modal-background',
      dismiss_modal_class: 'modal-close',
      close_on_background_click: true
    },
    tab: {
      active_class: 'is-active'
    }
  });
  (0,_modal__WEBPACK_IMPORTED_MODULE_4__["default"])('[data-reveal]', {
    $context: $element
  });
  (0,_reveal_close__WEBPACK_IMPORTED_MODULE_5__["default"])('[data-reveal-close]', {
    $context: $element
  });
}

/***/ }),

/***/ "./assets/js/theme/global/modal.js":
/*!*****************************************!*\
  !*** ./assets/js/theme/global/modal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* binding */ Modal),
/* harmony export */   ModalEvents: () => (/* binding */ ModalEvents),
/* harmony export */   alertModal: () => (/* binding */ alertModal),
/* harmony export */   "default": () => (/* binding */ modalFactory),
/* harmony export */   defaultModal: () => (/* binding */ defaultModal),
/* harmony export */   showAlertModal: () => (/* binding */ showAlertModal)
/* harmony export */ });
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foundation */ "./assets/js/theme/global/foundation.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/dist/focus-trap.esm.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var bodyActiveClass = 'has-activeModal';
var loadingOverlayClass = 'loadingOverlay';
var modalBodyClass = 'modal-body';
var modalContentClass = 'modal-content';
var SizeClasses = {
  small: 'modal--small',
  large: 'modal--large',
  normal: ''
};
var ModalEvents = {
  close: 'close.fndtn.reveal',
  closed: 'closed.fndtn.reveal',
  open: 'open.fndtn.reveal',
  opened: 'opened.fndtn.reveal',
  loaded: 'loaded.data.custom'
};
function getSizeFromModal($modal) {
  if ($modal.hasClass(SizeClasses.small)) {
    return 'small';
  }
  if ($modal.hasClass(SizeClasses.large)) {
    return 'large';
  }
  return 'normal';
}
function getViewportHeight(multipler) {
  if (multipler === void 0) {
    multipler = 1;
  }
  var viewportHeight = $(window).height();
  return viewportHeight * multipler;
}
function wrapModalBody(content) {
  var $modalBody = $('<div>');
  $modalBody.addClass(modalBodyClass).html(content);
  return $modalBody;
}
function restrainContentHeight($content) {
  if ($content.length === 0) return;
  var $body = $("." + modalBodyClass, $content);
  if ($body.length === 0) return;
  var bodyHeight = $body.outerHeight();
  var contentHeight = $content.outerHeight();
  var viewportHeight = getViewportHeight(0.9);
  var maxHeight = viewportHeight - (contentHeight - bodyHeight);
  $body.css('max-height', maxHeight);
}
function createModalContent($modal) {
  var $content = $("." + modalContentClass, $modal);
  if ($content.length === 0) {
    var existingContent = $modal.children();
    $content = $('<div>').addClass(modalContentClass).append(existingContent).appendTo($modal);
  }
  return $content;
}
function createLoadingOverlay($modal) {
  var $loadingOverlay = $("." + loadingOverlayClass, $modal);
  if ($loadingOverlay.length === 0) {
    $loadingOverlay = $('<div>').addClass(loadingOverlayClass).appendTo($modal);
  }
  return $loadingOverlay;
}

/**
 * Require foundation.reveal
 * Decorate foundation.reveal with additional methods
 * @param {jQuery} $modal
 * @param {Object} [options]
 * @param {string} [options.size]
 */
var Modal = /*#__PURE__*/function () {
  function Modal($modal, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? null : _ref$size;
    this.$modal = $modal;
    this.$content = createModalContent(this.$modal);
    this.$overlay = createLoadingOverlay(this.$modal);
    this.defaultSize = size || getSizeFromModal($modal);
    this.size = this.defaultSize;
    this.pending = false;
    this.$preModalFocusedEl = null;
    this.focusTrap = null;
    this.onModalOpen = this.onModalOpen.bind(this);
    this.onModalOpened = this.onModalOpened.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onModalClosed = this.onModalClosed.bind(this);
    this.bindEvents();

    /* STRF-2471 - Multiple Wish Lists - prevents double-firing
     * of foundation.dropdown click.fndtn.dropdown event */
    this.$modal.on('click', '.dropdown-menu-button', function (e) {
      e.stopPropagation();
    });
  }
  var _proto = Modal.prototype;
  _proto.bindEvents = function bindEvents() {
    this.$modal.on(ModalEvents.close, this.onModalClose);
    this.$modal.on(ModalEvents.closed, this.onModalClosed);
    this.$modal.on(ModalEvents.open, this.onModalOpen);
    this.$modal.on(ModalEvents.opened, this.onModalOpened);
  };
  _proto.open = function open(_temp2) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
      size = _ref2.size,
      _ref2$pending = _ref2.pending,
      pending = _ref2$pending === void 0 ? true : _ref2$pending,
      _ref2$clearContent = _ref2.clearContent,
      clearContent = _ref2$clearContent === void 0 ? true : _ref2$clearContent;
    this.pending = pending;
    if (size) {
      this.size = size;
    }
    if (clearContent) {
      this.clearContent();
    }
    this.$modal.foundation('reveal', 'open');
  };
  _proto.close = function close() {
    this.$modal.foundation('reveal', 'close');
  };
  _proto.updateContent = function updateContent(content, _temp3) {
    var _ref3 = _temp3 === void 0 ? {} : _temp3,
      _ref3$wrap = _ref3.wrap,
      wrap = _ref3$wrap === void 0 ? false : _ref3$wrap;
    var $content = $(content);
    if (wrap) {
      $content = wrapModalBody(content);
    }
    this.pending = false;
    this.$content.html($content);
    this.$modal.trigger(ModalEvents.loaded);
    restrainContentHeight(this.$content);
    (0,_foundation__WEBPACK_IMPORTED_MODULE_0__["default"])(this.$content);
  };
  _proto.clearContent = function clearContent() {
    this.$content.html('');
  };
  _proto.setupFocusTrap = function setupFocusTrap() {
    var _this = this;
    if (!this.$preModalFocusedEl) this.$preModalFocusedEl = $(document.activeElement);
    if (!this.focusTrap) {
      this.focusTrap = focus_trap__WEBPACK_IMPORTED_MODULE_1__.createFocusTrap(this.$modal[0], {
        escapeDeactivates: false,
        returnFocusOnDeactivate: false,
        allowOutsideClick: true,
        fallbackFocus: function fallbackFocus() {
          var fallbackNode = _this.$preModalFocusedEl && _this.$preModalFocusedEl.length ? _this.$preModalFocusedEl[0] : $('[data-header-logo-link]')[0];
          return fallbackNode;
        }
      });
    }
    this.focusTrap.deactivate();
    this.focusTrap.activate();
  };
  _proto.onModalClose = function onModalClose() {
    $('body').removeClass(bodyActiveClass);
  };
  _proto.onModalClosed = function onModalClosed() {
    this.size = this.defaultSize;
    if (this.focusTrap) this.focusTrap.deactivate();
    if (this.$preModalFocusedEl) this.$preModalFocusedEl.focus();
    this.$preModalFocusedEl = null;
  };
  _proto.onModalOpen = function onModalOpen() {
    $('body').addClass(bodyActiveClass);
  };
  _proto.onModalOpened = function onModalOpened() {
    var _this2 = this;
    if (this.pending) {
      this.$modal.one(ModalEvents.loaded, function () {
        if (_this2.$modal.hasClass('open')) _this2.setupFocusTrap();
      });
    } else {
      this.setupFocusTrap();
    }
    restrainContentHeight(this.$content);
  };
  return _createClass(Modal, [{
    key: "pending",
    get: function get() {
      return this._pending;
    },
    set: function set(pending) {
      this._pending = pending;
      if (pending) {
        this.$overlay.show();
      } else {
        this.$overlay.hide();
      }
    }
  }, {
    key: "size",
    get: function get() {
      return this._size;
    },
    set: function set(size) {
      this._size = size;
      this.$modal.removeClass(SizeClasses.small).removeClass(SizeClasses.large).addClass(SizeClasses[size] || '');
    }
  }]);
}();

/**
 * Return an array of modals
 * @param {string} selector
 * @param {Object} [options]
 * @param {string} [options.size]
 * @returns {array}
 */
function modalFactory(selector, options) {
  if (selector === void 0) {
    selector = '[data-reveal]';
  }
  if (options === void 0) {
    options = {};
  }
  var $modals = $(selector, options.$context);
  return $modals.map(function (index, element) {
    var $modal = $(element);
    var instanceKey = 'modalInstance';
    var cachedModal = $modal.data(instanceKey);
    if (cachedModal instanceof Modal) {
      return cachedModal;
    }
    var modal = new Modal($modal, options);
    $modal.data(instanceKey, modal);
    return modal;
  }).toArray();
}

/*
 * Return the default page modal
 */
function defaultModal() {
  return modalFactory('#modal')[0];
}

/*
 * Return the default alert modal
 */
function alertModal() {
  return modalFactory('#alert-modal')[0];
}

/*
 * Display the given message in the default alert modal
 */
function showAlertModal(message) {
  var modal = alertModal();
  modal.open();
  modal.updateContent("<span>" + message + "</span>");
}

/***/ }),

/***/ "./assets/js/theme/global/reveal-close.js":
/*!************************************************!*\
  !*** ./assets/js/theme/global/reveal-close.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ revealCloseFactory)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var revealCloseAttr = 'revealClose';
var revealCloseSelector = "[data-" + revealCloseAttr + "]";
var revealSelector = '[data-reveal]';
var RevealClose = /*#__PURE__*/function () {
  function RevealClose($button) {
    this.$button = $button;
    this.modalId = $button.data(revealCloseAttr);
    this.onClick = this.onClick.bind(this);
    this.bindEvents();
  }
  var _proto = RevealClose.prototype;
  _proto.bindEvents = function bindEvents() {
    this.$button.on('click', this.onClick);
  };
  _proto.unbindEvents = function unbindEvents() {
    this.$button.off('click', this.onClick);
  };
  _proto.onClick = function onClick(event) {
    var modal = this.modal;
    if (modal) {
      event.preventDefault();
      modal.close();
    }
  };
  return _createClass(RevealClose, [{
    key: "modal",
    get: function get() {
      var $modal;
      if (this.modalId) {
        $modal = $("#" + this.modalId);
      } else {
        $modal = this.$button.parents(revealSelector).eq(0);
      }
      return $modal.data('modalInstance');
    }
  }]);
}();
/*
 * Extend foundation.reveal with the ability to close a modal by clicking on any of its child element
 * with data-reveal-close attribute.
 *
 * @example
 *
 * <div data-reveal id="helloModal">
 *   <button data-reveal-close>Continue</button>
 * </div>
 *
 * <div data-reveal id="helloModal"></div>
 * <button data-reveal-close="helloModal">Continue</button>
 */
function revealCloseFactory(selector, options) {
  if (selector === void 0) {
    selector = revealCloseSelector;
  }
  if (options === void 0) {
    options = {};
  }
  var $buttons = $(selector, options.$context);
  return $buttons.map(function (index, element) {
    var $button = $(element);
    var instanceKey = revealCloseAttr + "Instance";
    var cachedButton = $button.data(instanceKey);
    if (cachedButton instanceof RevealClose) {
      return cachedButton;
    }
    var button = new RevealClose($button);
    $button.data(instanceKey, button);
    return button;
  }).toArray();
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9nbG9iYWxfZm91bmRhdGlvbl9qcy1hc3NldHNfanNfdGhlbWVfZ2xvYmFsX21vZGFsX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1M7QUFDRjtBQUNIO0FBQ3BCO0FBQ2E7QUFFaEQsNkJBQWUsb0NBQVVFLFFBQVEsRUFBRTtFQUMvQkEsUUFBUSxDQUFDQyxVQUFVLENBQUM7SUFDaEJDLFFBQVEsRUFBRTtNQUNOO01BQ0FDLFlBQVksRUFBRTtJQUNsQixDQUFDO0lBQ0RDLE1BQU0sRUFBRTtNQUNKQyxRQUFRLEVBQUUsa0JBQWtCO01BQzVCQyxtQkFBbUIsRUFBRSxhQUFhO01BQ2xDQyx5QkFBeUIsRUFBRTtJQUMvQixDQUFDO0lBQ0RDLEdBQUcsRUFBRTtNQUNETCxZQUFZLEVBQUU7SUFDbEI7RUFDSixDQUFDLENBQUM7RUFFRkwsa0RBQVksQ0FBQyxlQUFlLEVBQUU7SUFBRVcsUUFBUSxFQUFFVDtFQUFTLENBQUMsQ0FBQztFQUNyREQseURBQWtCLENBQUMscUJBQXFCLEVBQUU7SUFBRVUsUUFBUSxFQUFFVDtFQUFTLENBQUMsQ0FBQztBQUNyRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QnNDO0FBQ0U7QUFFeEMsSUFBTVcsZUFBZSxHQUFHLGlCQUFpQjtBQUN6QyxJQUFNQyxtQkFBbUIsR0FBRyxnQkFBZ0I7QUFDNUMsSUFBTUMsY0FBYyxHQUFHLFlBQVk7QUFDbkMsSUFBTUMsaUJBQWlCLEdBQUcsZUFBZTtBQUV6QyxJQUFNQyxXQUFXLEdBQUc7RUFDaEJDLEtBQUssRUFBRSxjQUFjO0VBQ3JCQyxLQUFLLEVBQUUsY0FBYztFQUNyQkMsTUFBTSxFQUFFO0FBQ1osQ0FBQztBQUVNLElBQU1DLFdBQVcsR0FBRztFQUN2QkMsS0FBSyxFQUFFLG9CQUFvQjtFQUMzQkMsTUFBTSxFQUFFLHFCQUFxQjtFQUM3QkMsSUFBSSxFQUFFLG1CQUFtQjtF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Q0FBQytHLFFBQVEsRUFBd0JDLE9BQU8sRUFBTztFQUFBLElBQTlDRCxRQUFRO0lBQVJBLFFBQVEsR0FBR2dCLG1CQUFtQjtFQUFBO0VBQUEsSUFBRWYsT0FBTztJQUFQQSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0VBQUE7RUFDbkYsSUFBTTJCLFFBQVEsR0FBRzNHLENBQUMsQ0FBQytFLFFBQVEsRUFBRUMsT0FBTyxDQUFDdEcsUUFBUSxDQUFDO0VBRTlDLE9BQU9pSSxRQUFRLENBQUN6QixHQUFHLENBQUMsVUFBQ0MsS0FBSyxFQUFFQyxPQUFPLEVBQUs7SUFDcEMsSUFBTWMsT0FBTyxHQUFHbEcsQ0FBQyxDQUFDb0YsT0FBTyxDQUFDO0lBQzFCLElBQU1DLFdBQVcsR0FBTVMsZUFBZSxhQUFVO0lBQ2hELElBQU1jLFlBQVksR0FBR1YsT0FBTyxDQUFDWCxJQUFJLENBQUNGLFdBQVcsQ0FBQztJQUU5QyxJQUFJdUIsWUFBWSxZQUFZWCxXQUFXLEVBQUU7TUFDckMsT0FBT1csWUFBWTtJQUN2QjtJQUVBLElBQU1DLE1BQU0sR0FBRyxJQUFJWixXQUFXLENBQUNDLE9BQU8sQ0FBQztJQUV2Q0EsT0FBTyxDQUFDWCxJQUFJLENBQUNGLFdBQVcsRUFBRXdCLE1BQU0sQ0FBQztJQUVqQyxPQUFPQSxNQUFNO0VBQ2pCLENBQUMsQ0FBQyxDQUFDcEIsT0FBTyxDQUFDLENBQUM7QUFDaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Sb290cy8uL2Fzc2V0cy9qcy90aGVtZS9nbG9iYWwvZm91bmRhdGlvbi5qcyIsIndlYnBhY2s6Ly9Sb290cy8uL2Fzc2V0cy9qcy90aGVtZS9nbG9iYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vUm9vdHMvLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL3JldmVhbC1jbG9zZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24uZHJvcGRvd24nO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbi5yZXZlYWwnO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbi50YWInO1xuaW1wb3J0IG1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFsJztcbmltcG9ydCByZXZlYWxDbG9zZUZhY3RvcnkgZnJvbSAnLi9yZXZlYWwtY2xvc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoJGVsZW1lbnQpIHtcbiAgICAkZWxlbWVudC5mb3VuZGF0aW9uKHtcbiAgICAgICAgZHJvcGRvd246IHtcbiAgICAgICAgICAgIC8vIHNwZWNpZnkgdGhlIGNsYXNzIHVzZWQgZm9yIGFjdGl2ZSBkcm9wZG93bnNcbiAgICAgICAgICAgIGFjdGl2ZV9jbGFzczogJ2lzLW9wZW4nLFxuICAgICAgICB9LFxuICAgICAgICByZXZlYWw6IHtcbiAgICAgICAgICAgIGJnX2NsYXNzOiAnbW9kYWwtYmFja2dyb3VuZCcsXG4gICAgICAgICAgICBkaXNtaXNzX21vZGFsX2NsYXNzOiAnbW9kYWwtY2xvc2UnLFxuICAgICAgICAgICAgY2xvc2Vfb25fYmFja2dyb3VuZF9jbGljazogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgdGFiOiB7XG4gICAgICAgICAgICBhY3RpdmVfY2xhc3M6ICdpcy1hY3RpdmUnLFxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgbW9kYWxGYWN0b3J5KCdbZGF0YS1yZXZlYWxdJywgeyAkY29udGV4dDogJGVsZW1lbnQgfSk7XG4gICAgcmV2ZWFsQ2xvc2VGYWN0b3J5KCdbZGF0YS1yZXZlYWwtY2xvc2VdJywgeyAkY29udGV4dDogJGVsZW1lbnQgfSk7XG59XG4iLCJpbXBvcnQgZm91bmRhdGlvbiBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICogYXMgZm9jdXNUcmFwIGZyb20gJ2ZvY3VzLXRyYXAnO1xuXG5jb25zdCBib2R5QWN0aXZlQ2xhc3MgPSAnaGFzLWFjdGl2ZU1vZGFsJztcbmNvbnN0IGxvYWRpbmdPdmVybGF5Q2xhc3MgPSAnbG9hZGluZ092ZXJsYXknO1xuY29uc3QgbW9kYWxCb2R5Q2xhc3MgPSAnbW9kYWwtYm9keSc7XG5jb25zdCBtb2RhbENvbnRlbnRDbGFzcyA9ICdtb2RhbC1jb250ZW50JztcblxuY29uc3QgU2l6ZUNsYXNzZXMgPSB7XG4gICAgc21hbGw6ICdtb2RhbC0tc21hbGwnLFxuICAgIGxhcmdlOiAnbW9kYWwtLWxhcmdlJyxcbiAgICBub3JtYWw6ICcnLFxufTtcblxuZXhwb3J0IGNvbnN0IE1vZGFsRXZlbnRzID0ge1xuICAgIGNsb3NlOiAnY2xvc2UuZm5kdG4ucmV2ZWFsJyxcbiAgICBjbG9zZWQ6ICdjbG9zZWQuZm5kdG4ucmV2ZWFsJyxcbiAgICBvcGVuOiAnb3Blbi5mbmR0bi5yZXZlYWwnLFxuICAgIG9wZW5lZDogJ29wZW5lZC5mbmR0bi5yZXZlYWwnLFxuICAgIGxvYWRlZDogJ2xvYWRlZC5kYXRhLmN1c3RvbScsXG59O1xuXG5mdW5jdGlvbiBnZXRTaXplRnJvbU1vZGFsKCRtb2RhbCkge1xuICAgIGlmICgkbW9kYWwuaGFzQ2xhc3MoU2l6ZUNsYXNzZXMuc21hbGwpKSB7XG4gICAgICAgIHJldHVybiAnc21hbGwnO1xuICAgIH1cblxuICAgIGlmICgkbW9kYWwuaGFzQ2xhc3MoU2l6ZUNsYXNzZXMubGFyZ2UpKSB7XG4gICAgICAgIHJldHVybiAnbGFyZ2UnO1xuICAgIH1cblxuICAgIHJldHVybiAnbm9ybWFsJztcbn1cblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRIZWlnaHQobXVsdGlwbGVyID0gMSkge1xuICAgIGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuXG4gICAgcmV0dXJuIHZpZXdwb3J0SGVpZ2h0ICogbXVsdGlwbGVyO1xufVxuXG5mdW5jdGlvbiB3cmFwTW9kYWxCb2R5KGNvbnRlbnQpIHtcbiAgICBjb25zdCAkbW9kYWxCb2R5ID0gJCgnPGRpdj4nKTtcblxuICAgICRtb2RhbEJvZHlcbiAgICAgICAgLmFkZENsYXNzKG1vZGFsQm9keUNsYXNzKVxuICAgICAgICAuaHRtbChjb250ZW50KTtcblxuICAgIHJldHVybiAkbW9kYWxCb2R5O1xufVxuXG5mdW5jdGlvbiByZXN0cmFpbkNvbnRlbnRIZWlnaHQoJGNvbnRlbnQpIHtcbiAgICBpZiAoJGNvbnRlbnQubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICBjb25zdCAkYm9keSA9ICQoYC4ke21vZGFsQm9keUNsYXNzfWAsICRjb250ZW50KTtcblxuICAgIGlmICgkYm9keS5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIGNvbnN0IGJvZHlIZWlnaHQgPSAkYm9keS5vdXRlckhlaWdodCgpO1xuICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSAkY29udGVudC5vdXRlckhlaWdodCgpO1xuICAgIGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gZ2V0Vmlld3BvcnRIZWlnaHQoMC45KTtcbiAgICBjb25zdCBtYXhIZWlnaHQgPSB2aWV3cG9ydEhlaWdodCAtIChjb250ZW50SGVpZ2h0IC0gYm9keUhlaWdodCk7XG5cbiAgICAkYm9keS5jc3MoJ21heC1oZWlnaHQnLCBtYXhIZWlnaHQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2RhbENvbnRlbnQoJG1vZGFsKSB7XG4gICAgbGV0ICRjb250ZW50ID0gJChgLiR7bW9kYWxDb250ZW50Q2xhc3N9YCwgJG1vZGFsKTtcblxuICAgIGlmICgkY29udGVudC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdDb250ZW50ID0gJG1vZGFsLmNoaWxkcmVuKCk7XG5cbiAgICAgICAgJGNvbnRlbnQgPSAkKCc8ZGl2PicpXG4gICAgICAgICAgICAuYWRkQ2xhc3MobW9kYWxDb250ZW50Q2xhc3MpXG4gICAgICAgICAgICAuYXBwZW5kKGV4aXN0aW5nQ29udGVudClcbiAgICAgICAgICAgIC5hcHBlbmRUbygkbW9kYWwpO1xuICAgIH1cblxuICAgIHJldHVybiAkY29udGVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9hZGluZ092ZXJsYXkoJG1vZGFsKSB7XG4gICAgbGV0ICRsb2FkaW5nT3ZlcmxheSA9ICQoYC4ke2xvYWRpbmdPdmVybGF5Q2xhc3N9YCwgJG1vZGFsKTtcblxuICAgIGlmICgkbG9hZGluZ092ZXJsYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICRsb2FkaW5nT3ZlcmxheSA9ICQoJzxkaXY+JylcbiAgICAgICAgICAgIC5hZGRDbGFzcyhsb2FkaW5nT3ZlcmxheUNsYXNzKVxuICAgICAgICAgICAgLmFwcGVuZFRvKCRtb2RhbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICRsb2FkaW5nT3ZlcmxheTtcbn1cblxuLyoqXG4gKiBSZXF1aXJlIGZvdW5kYXRpb24ucmV2ZWFsXG4gKiBEZWNvcmF0ZSBmb3VuZGF0aW9uLnJldmVhbCB3aXRoIGFkZGl0aW9uYWwgbWV0aG9kc1xuICogQHBhcmFtIHtqUXVlcnl9ICRtb2RhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnNpemVdXG4gKi9cbmV4cG9ydCBjbGFzcyBNb2RhbCB7XG4gICAgY29uc3RydWN0b3IoJG1vZGFsLCB7XG4gICAgICAgIHNpemUgPSBudWxsLFxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLiRtb2RhbCA9ICRtb2RhbDtcbiAgICAgICAgdGhpcy4kY29udGVudCA9IGNyZWF0ZU1vZGFsQ29udGVudCh0aGlzLiRtb2RhbCk7XG4gICAgICAgIHRoaXMuJG92ZXJsYXkgPSBjcmVhdGVMb2FkaW5nT3ZlcmxheSh0aGlzLiRtb2RhbCk7XG4gICAgICAgIHRoaXMuZGVmYXVsdFNpemUgPSBzaXplIHx8IGdldFNpemVGcm9tTW9kYWwoJG1vZGFsKTtcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5kZWZhdWx0U2l6ZTtcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuJHByZU1vZGFsRm9jdXNlZEVsID0gbnVsbDtcbiAgICAgICAgdGhpcy5mb2N1c1RyYXAgPSBudWxsO1xuXG4gICAgICAgIHRoaXMub25Nb2RhbE9wZW4gPSB0aGlzLm9uTW9kYWxPcGVuLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Nb2RhbE9wZW5lZCA9IHRoaXMub25Nb2RhbE9wZW5lZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTW9kYWxDbG9zZSA9IHRoaXMub25Nb2RhbENsb3NlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Nb2RhbENsb3NlZCA9IHRoaXMub25Nb2RhbENsb3NlZC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuXG4gICAgICAgIC8qIFNUUkYtMjQ3MSAtIE11bHRpcGxlIFdpc2ggTGlzdHMgLSBwcmV2ZW50cyBkb3VibGUtZmlyaW5nXG4gICAgICAgICAqIG9mIGZvdW5kYXRpb24uZHJvcGRvd24gY2xpY2suZm5kdG4uZHJvcGRvd24gZXZlbnQgKi9cbiAgICAgICAgdGhpcy4kbW9kYWwub24oJ2NsaWNrJywgJy5kcm9wZG93bi1tZW51LWJ1dHRvbicsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IHBlbmRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wZW5kaW5nO1xuICAgIH1cblxuICAgIHNldCBwZW5kaW5nKHBlbmRpbmcpIHtcbiAgICAgICAgdGhpcy5fcGVuZGluZyA9IHBlbmRpbmc7XG5cbiAgICAgICAgaWYgKHBlbmRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgfVxuXG4gICAgc2V0IHNpemUoc2l6ZSkge1xuICAgICAgICB0aGlzLl9zaXplID0gc2l6ZTtcblxuICAgICAgICB0aGlzLiRtb2RhbFxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFNpemVDbGFzc2VzLnNtYWxsKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFNpemVDbGFzc2VzLmxhcmdlKVxuICAgICAgICAgICAgLmFkZENsYXNzKFNpemVDbGFzc2VzW3NpemVdIHx8ICcnKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRtb2RhbC5vbihNb2RhbEV2ZW50cy5jbG9zZSwgdGhpcy5vbk1vZGFsQ2xvc2UpO1xuICAgICAgICB0aGlzLiRtb2RhbC5vbihNb2RhbEV2ZW50cy5jbG9zZWQsIHRoaXMub25Nb2RhbENsb3NlZCk7XG4gICAgICAgIHRoaXMuJG1vZGFsLm9uKE1vZGFsRXZlbnRzLm9wZW4sIHRoaXMub25Nb2RhbE9wZW4pO1xuICAgICAgICB0aGlzLiRtb2RhbC5vbihNb2RhbEV2ZW50cy5vcGVuZWQsIHRoaXMub25Nb2RhbE9wZW5lZCk7XG4gICAgfVxuXG4gICAgb3Blbih7XG4gICAgICAgIHNpemUsXG4gICAgICAgIHBlbmRpbmcgPSB0cnVlLFxuICAgICAgICBjbGVhckNvbnRlbnQgPSB0cnVlLFxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnBlbmRpbmcgPSBwZW5kaW5nO1xuXG4gICAgICAgIGlmIChzaXplKSB7XG4gICAgICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsZWFyQ29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5jbGVhckNvbnRlbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJG1vZGFsLmZvdW5kYXRpb24oJ3JldmVhbCcsICdvcGVuJyk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuJG1vZGFsLmZvdW5kYXRpb24oJ3JldmVhbCcsICdjbG9zZScpO1xuICAgIH1cblxuICAgIHVwZGF0ZUNvbnRlbnQoY29udGVudCwgeyB3cmFwID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgICAgIGxldCAkY29udGVudCA9ICQoY29udGVudCk7XG5cbiAgICAgICAgaWYgKHdyYXApIHtcbiAgICAgICAgICAgICRjb250ZW50ID0gd3JhcE1vZGFsQm9keShjb250ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLiRjb250ZW50Lmh0bWwoJGNvbnRlbnQpO1xuICAgICAgICB0aGlzLiRtb2RhbC50cmlnZ2VyKE1vZGFsRXZlbnRzLmxvYWRlZCk7XG5cbiAgICAgICAgcmVzdHJhaW5Db250ZW50SGVpZ2h0KHRoaXMuJGNvbnRlbnQpO1xuICAgICAgICBmb3VuZGF0aW9uKHRoaXMuJGNvbnRlbnQpO1xuICAgIH1cblxuICAgIGNsZWFyQ29udGVudCgpIHtcbiAgICAgICAgdGhpcy4kY29udGVudC5odG1sKCcnKTtcbiAgICB9XG5cbiAgICBzZXR1cEZvY3VzVHJhcCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLiRwcmVNb2RhbEZvY3VzZWRFbCkgdGhpcy4kcHJlTW9kYWxGb2N1c2VkRWwgPSAkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuXG4gICAgICAgIGlmICghdGhpcy5mb2N1c1RyYXApIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNUcmFwID0gZm9jdXNUcmFwLmNyZWF0ZUZvY3VzVHJhcCh0aGlzLiRtb2RhbFswXSwge1xuICAgICAgICAgICAgICAgIGVzY2FwZURlYWN0aXZhdGVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYWxsb3dPdXRzaWRlQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgZmFsbGJhY2tGb2N1czogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmYWxsYmFja05vZGUgPSB0aGlzLiRwcmVNb2RhbEZvY3VzZWRFbCAmJiB0aGlzLiRwcmVNb2RhbEZvY3VzZWRFbC5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy4kcHJlTW9kYWxGb2N1c2VkRWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogJCgnW2RhdGEtaGVhZGVyLWxvZ28tbGlua10nKVswXTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsbGJhY2tOb2RlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZm9jdXNUcmFwLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgdGhpcy5mb2N1c1RyYXAuYWN0aXZhdGUoKTtcbiAgICB9XG5cbiAgICBvbk1vZGFsQ2xvc2UoKSB7XG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhib2R5QWN0aXZlQ2xhc3MpO1xuICAgIH1cblxuICAgIG9uTW9kYWxDbG9zZWQoKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZGVmYXVsdFNpemU7XG5cbiAgICAgICAgaWYgKHRoaXMuZm9jdXNUcmFwKSB0aGlzLmZvY3VzVHJhcC5kZWFjdGl2YXRlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuJHByZU1vZGFsRm9jdXNlZEVsKSB0aGlzLiRwcmVNb2RhbEZvY3VzZWRFbC5mb2N1cygpO1xuXG4gICAgICAgIHRoaXMuJHByZU1vZGFsRm9jdXNlZEVsID0gbnVsbDtcbiAgICB9XG5cbiAgICBvbk1vZGFsT3BlbigpIHtcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKGJvZHlBY3RpdmVDbGFzcyk7XG4gICAgfVxuXG4gICAgb25Nb2RhbE9wZW5lZCgpIHtcbiAgICAgICAgaWYgKHRoaXMucGVuZGluZykge1xuICAgICAgICAgICAgdGhpcy4kbW9kYWwub25lKE1vZGFsRXZlbnRzLmxvYWRlZCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiRtb2RhbC5oYXNDbGFzcygnb3BlbicpKSB0aGlzLnNldHVwRm9jdXNUcmFwKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dXBGb2N1c1RyYXAoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3RyYWluQ29udGVudEhlaWdodCh0aGlzLiRjb250ZW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IG9mIG1vZGFsc1xuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuc2l6ZV1cbiAqIEByZXR1cm5zIHthcnJheX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWxGYWN0b3J5KHNlbGVjdG9yID0gJ1tkYXRhLXJldmVhbF0nLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCAkbW9kYWxzID0gJChzZWxlY3Rvciwgb3B0aW9ucy4kY29udGV4dCk7XG5cbiAgICByZXR1cm4gJG1vZGFscy5tYXAoKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0ICRtb2RhbCA9ICQoZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlS2V5ID0gJ21vZGFsSW5zdGFuY2UnO1xuICAgICAgICBjb25zdCBjYWNoZWRNb2RhbCA9ICRtb2RhbC5kYXRhKGluc3RhbmNlS2V5KTtcblxuICAgICAgICBpZiAoY2FjaGVkTW9kYWwgaW5zdGFuY2VvZiBNb2RhbCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZE1vZGFsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoJG1vZGFsLCBvcHRpb25zKTtcblxuICAgICAgICAkbW9kYWwuZGF0YShpbnN0YW5jZUtleSwgbW9kYWwpO1xuXG4gICAgICAgIHJldHVybiBtb2RhbDtcbiAgICB9KS50b0FycmF5KCk7XG59XG5cbi8qXG4gKiBSZXR1cm4gdGhlIGRlZmF1bHQgcGFnZSBtb2RhbFxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdE1vZGFsKCkge1xuICAgIHJldHVybiBtb2RhbEZhY3RvcnkoJyNtb2RhbCcpWzBdO1xufVxuXG4vKlxuICogUmV0dXJuIHRoZSBkZWZhdWx0IGFsZXJ0IG1vZGFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhbGVydE1vZGFsKCkge1xuICAgIHJldHVybiBtb2RhbEZhY3RvcnkoJyNhbGVydC1tb2RhbCcpWzBdO1xufVxuXG4vKlxuICogRGlzcGxheSB0aGUgZ2l2ZW4gbWVzc2FnZSBpbiB0aGUgZGVmYXVsdCBhbGVydCBtb2RhbFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvd0FsZXJ0TW9kYWwobWVzc2FnZSkge1xuICAgIGNvbnN0IG1vZGFsID0gYWxlcnRNb2RhbCgpO1xuICAgIG1vZGFsLm9wZW4oKTtcbiAgICBtb2RhbC51cGRhdGVDb250ZW50KGA8c3Bhbj4ke21lc3NhZ2V9PC9zcGFuPmApO1xufVxuIiwiY29uc3QgcmV2ZWFsQ2xvc2VBdHRyID0gJ3JldmVhbENsb3NlJztcbmNvbnN0IHJldmVhbENsb3NlU2VsZWN0b3IgPSBgW2RhdGEtJHtyZXZlYWxDbG9zZUF0dHJ9XWA7XG5jb25zdCByZXZlYWxTZWxlY3RvciA9ICdbZGF0YS1yZXZlYWxdJztcblxuY2xhc3MgUmV2ZWFsQ2xvc2Uge1xuICAgIGNvbnN0cnVjdG9yKCRidXR0b24pIHtcbiAgICAgICAgdGhpcy4kYnV0dG9uID0gJGJ1dHRvbjtcbiAgICAgICAgdGhpcy5tb2RhbElkID0gJGJ1dHRvbi5kYXRhKHJldmVhbENsb3NlQXR0cik7XG5cbiAgICAgICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IG1vZGFsKCkge1xuICAgICAgICBsZXQgJG1vZGFsO1xuXG4gICAgICAgIGlmICh0aGlzLm1vZGFsSWQpIHtcbiAgICAgICAgICAgICRtb2RhbCA9ICQoYCMke3RoaXMubW9kYWxJZH1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRtb2RhbCA9IHRoaXMuJGJ1dHRvbi5wYXJlbnRzKHJldmVhbFNlbGVjdG9yKS5lcSgwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAkbW9kYWwuZGF0YSgnbW9kYWxJbnN0YW5jZScpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJGJ1dHRvbi5vbignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kYnV0dG9uLm9mZignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICAgIH1cblxuICAgIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgY29uc3QgeyBtb2RhbCB9ID0gdGhpcztcblxuICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qXG4gKiBFeHRlbmQgZm91bmRhdGlvbi5yZXZlYWwgd2l0aCB0aGUgYWJpbGl0eSB0byBjbG9zZSBhIG1vZGFsIGJ5IGNsaWNraW5nIG9uIGFueSBvZiBpdHMgY2hpbGQgZWxlbWVudFxuICogd2l0aCBkYXRhLXJldmVhbC1jbG9zZSBhdHRyaWJ1dGUuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiA8ZGl2IGRhdGEtcmV2ZWFsIGlkPVwiaGVsbG9Nb2RhbFwiPlxuICogICA8YnV0dG9uIGRhdGEtcmV2ZWFsLWNsb3NlPkNvbnRpbnVlPC9idXR0b24+XG4gKiA8L2Rpdj5cbiAqXG4gKiA8ZGl2IGRhdGEtcmV2ZWFsIGlkPVwiaGVsbG9Nb2RhbFwiPjwvZGl2PlxuICogPGJ1dHRvbiBkYXRhLXJldmVhbC1jbG9zZT1cImhlbGxvTW9kYWxcIj5Db250aW51ZTwvYnV0dG9uPlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXZlYWxDbG9zZUZhY3Rvcnkoc2VsZWN0b3IgPSByZXZlYWxDbG9zZVNlbGVjdG9yLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCAkYnV0dG9ucyA9ICQoc2VsZWN0b3IsIG9wdGlvbnMuJGNvbnRleHQpO1xuXG4gICAgcmV0dXJuICRidXR0b25zLm1hcCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgJGJ1dHRvbiA9ICQoZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlS2V5ID0gYCR7cmV2ZWFsQ2xvc2VBdHRyfUluc3RhbmNlYDtcbiAgICAgICAgY29uc3QgY2FjaGVkQnV0dG9uID0gJGJ1dHRvbi5kYXRhKGluc3RhbmNlS2V5KTtcblxuICAgICAgICBpZiAoY2FjaGVkQnV0dG9uIGluc3RhbmNlb2YgUmV2ZWFsQ2xvc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRCdXR0b247XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBidXR0b24gPSBuZXcgUmV2ZWFsQ2xvc2UoJGJ1dHRvbik7XG5cbiAgICAgICAgJGJ1dHRvbi5kYXRhKGluc3RhbmNlS2V5LCBidXR0b24pO1xuXG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfSkudG9BcnJheSgpO1xufVxuIl0sIm5hbWVzIjpbIm1vZGFsRmFjdG9yeSIsInJldmVhbENsb3NlRmFjdG9yeSIsIiRlbGVtZW50IiwiZm91bmRhdGlvbiIsImRyb3Bkb3duIiwiYWN0aXZlX2NsYXNzIiwicmV2ZWFsIiwiYmdfY2xhc3MiLCJkaXNtaXNzX21vZGFsX2NsYXNzIiwiY2xvc2Vfb25fYmFja2dyb3VuZF9jbGljayIsInRhYiIsIiRjb250ZXh0IiwiZm9jdXNUcmFwIiwiYm9keUFjdGl2ZUNsYXNzIiwibG9hZGluZ092ZXJsYXlDbGFzcyIsIm1vZGFsQm9keUNsYXNzIiwibW9kYWxDb250ZW50Q2xhc3MiLCJTaXplQ2xhc3NlcyIsInNtYWxsIiwibGFyZ2UiLCJub3JtYWwiLCJNb2RhbEV2ZW50cyIsImNsb3NlIiwiY2xvc2VkIiwib3BlbiIsIm9wZW5lZCIsImxvYWRlZCIsImdldFNpemVGcm9tTW9kYWwiLCIkbW9kYWwiLCJoYXNDbGFzcyIsImdldFZpZXdwb3J0SGVpZ2h0IiwibXVsdGlwbGVyIiwidmlld3BvcnRIZWlnaHQiLCIkIiwid2luZG93IiwiaGVpZ2h0Iiwid3JhcE1vZGFsQm9keSIsImNvbnRlbnQiLCIkbW9kYWxCb2R5IiwiYWRkQ2xhc3MiLCJodG1sIiwicmVzdHJhaW5Db250ZW50SGVpZ2h0IiwiJGNvbnRlbnQiLCJsZW5ndGgiLCIkYm9keSIsImJvZHlIZWlnaHQiLCJvdXRlckhlaWdodCIsImNvbnRlbnRIZWlnaHQiLCJtYXhIZWlnaHQiLCJjc3MiLCJjcmVhdGVNb2RhbENvbnRlbnQiLCJleGlzdGluZ0NvbnRlbnQiLCJjaGlsZHJlbiIsImFwcGVuZCIsImFwcGVuZFRvIiwiY3JlYXRlTG9hZGluZ092ZXJsYXkiLCIkbG9hZGluZ092ZXJsYXkiLCJNb2RhbCIsIl90ZW1wIiwiX3JlZiIsIl9yZWYkc2l6ZSIsInNpemUiLCIkb3ZlcmxheSIsImRlZmF1bHRTaXplIiwicGVuZGluZyIsIiRwcmVNb2RhbEZvY3VzZWRFbCIsIm9uTW9kYWxPcGVuIiwiYmluZCIsIm9uTW9kYWxPcGVuZWQiLCJvbk1vZGFsQ2xvc2UiLCJvbk1vZGFsQ2xvc2VkIiwiYmluZEV2ZW50cyIsIm9uIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIl9wcm90byIsInByb3RvdHlwZSIsIl90ZW1wMiIsIl9yZWYyIiwiX3JlZjIkcGVuZGluZyIsIl9yZWYyJGNsZWFyQ29udGVudCIsImNsZWFyQ29udGVudCIsInVwZGF0ZUNvbnRlbnQiLCJfdGVtcDMiLCJfcmVmMyIsIl9yZWYzJHdyYXAiLCJ3cmFwIiwidHJpZ2dlciIsInNldHVwRm9jdXNUcmFwIiwiX3RoaXMiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJjcmVhdGVGb2N1c1RyYXAiLCJlc2NhcGVEZWFjdGl2YXRlcyIsInJldHVybkZvY3VzT25EZWFjdGl2YXRlIiwiYWxsb3dPdXRzaWRlQ2xpY2siLCJmYWxsYmFja0ZvY3VzIiwiZmFsbGJhY2tOb2RlIiwiZGVhY3RpdmF0ZSIsImFjdGl2YXRlIiwicmVtb3ZlQ2xhc3MiLCJmb2N1cyIsIl90aGlzMiIsIm9uZSIsIl9jcmVhdGVDbGFzcyIsImtleSIsImdldCIsIl9wZW5kaW5nIiwic2V0Iiwic2hvdyIsImhpZGUiLCJfc2l6ZSIsInNlbGVjdG9yIiwib3B0aW9ucyIsIiRtb2RhbHMiLCJtYXAiLCJpbmRleCIsImVsZW1lbnQiLCJpbnN0YW5jZUtleSIsImNhY2hlZE1vZGFsIiwiZGF0YSIsIm1vZGFsIiwidG9BcnJheSIsImRlZmF1bHRNb2RhbCIsImFsZXJ0TW9kYWwiLCJzaG93QWxlcnRNb2RhbCIsIm1lc3NhZ2UiLCJyZXZlYWxDbG9zZUF0dHIiLCJyZXZlYWxDbG9zZVNlbGVjdG9yIiwicmV2ZWFsU2VsZWN0b3IiLCJSZXZlYWxDbG9zZSIsIiRidXR0b24iLCJtb2RhbElkIiwib25DbGljayIsInVuYmluZEV2ZW50cyIsIm9mZiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwYXJlbnRzIiwiZXEiLCIkYnV0dG9ucyIsImNhY2hlZEJ1dHRvbiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=