"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_wishlist_js"],{

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
/* harmony import */ var _cavio_dev_advanced_swatch_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cavio/dev-advanced-swatch-image */ "./assets/js/theme/cavio/dev-advanced-swatch-image.js");
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
    (0,_cavio_dev_advanced_swatch_image__WEBPACK_IMPORTED_MODULE_6__["default"])();
  };
  return WishList;
}(_page_manager__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV93aXNobGlzdF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLDZCQUE2QixHQUFHLFNBQWhDQSw2QkFBNkJBLENBQUlDLFdBQVc7RUFBQSxTQUFBQyxJQUFBLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxFQUFLQyxlQUFlLE9BQUFDLEtBQUEsQ0FBQUosSUFBQSxPQUFBQSxJQUFBLFdBQUFLLElBQUEsTUFBQUEsSUFBQSxHQUFBTCxJQUFBLEVBQUFLLElBQUE7SUFBZkYsZUFBZSxDQUFBRSxJQUFBLFFBQUFKLFNBQUEsQ0FBQUksSUFBQTtFQUFBO0VBQUEsT0FBS0MsQ0FBQyxDQUFDQyxJQUFJLENBQUNKLGVBQWUsRUFBRSxVQUFDSyxDQUFDLEVBQUVDLEtBQUssRUFBSztJQUM3RyxJQUFNQyxjQUFjLEdBQUdELEtBQUssQ0FBQ0UsUUFBUSxDQUFDLGtCQUFrQixDQUFDO0lBRXpELElBQUlGLEtBQUssQ0FBQ1AsTUFBTSxJQUFJLENBQUNRLGNBQWMsQ0FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7TUFDaEUsSUFBTUMsVUFBVSxHQUFHSixjQUFjLENBQUNFLElBQUksQ0FBQyxNQUFNLENBQUM7TUFDOUNGLGNBQWMsQ0FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBS2IsV0FBVyxhQUFRZSxVQUFZLENBQUM7SUFDbkU7RUFDSixDQUFDLENBQUM7QUFBQTs7QUFFRjtBQUNBO0FBQ0E7QUFDTyxJQUFNQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQXVCQSxDQUFBLEVBQVM7RUFDekMsSUFBTUMsZUFBZSxHQUFHVixDQUFDLENBQUMsa0JBQWtCLENBQUM7RUFFN0MsSUFBSSxDQUFDVSxlQUFlLENBQUNkLE1BQU0sRUFBRTtFQUU3QixJQUFNZSxTQUFTLEdBQUdYLENBQUMsQ0FBQyx3QkFBd0IsRUFBRVUsZUFBZSxDQUFDO0VBQzlELElB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QU0sRUFBRTtNQUN4Q2EsdUZBQXVCLENBQUMsQ0FBQztJQUM3QjtJQUVBLElBQUlpRCxnQkFBZ0IsQ0FBQzlELE1BQU0sRUFBRTtNQUN6QixJQUFJLENBQUM2Qyw2QkFBNkIsQ0FBQ2lCLGdCQUFnQixDQUFDO0lBQ3hEO0lBRUEsSUFBSSxDQUFDMUIscUJBQXFCLENBQUMsQ0FBQztJQUM1QlosNEVBQXNCLENBQUMsQ0FBQztFQUM1QixDQUFDO0VBQUEsT0FBQUMsUUFBQTtBQUFBLEVBcEVpQ0gscURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvcGFnaW5hdGlvbi11dGlscy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS93aXNobGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjaGFuZ2VXaXNobGlzdFBhZ2luYXRpb25MaW5rcyA9ICh3aXNobGlzdFVybCwgLi4ucGFnaW5hdGlvbkl0ZW1zKSA9PiAkLmVhY2gocGFnaW5hdGlvbkl0ZW1zLCAoXywgJGl0ZW0pID0+IHtcbiAgICBjb25zdCBwYWdpbmF0aW9uTGluayA9ICRpdGVtLmNoaWxkcmVuKCcucGFnaW5hdGlvbi1saW5rJyk7XG5cbiAgICBpZiAoJGl0ZW0ubGVuZ3RoICYmICFwYWdpbmF0aW9uTGluay5hdHRyKCdocmVmJykuaW5jbHVkZXMoJ3BhZ2U9JykpIHtcbiAgICAgICAgY29uc3QgcGFnZU51bWJlciA9IHBhZ2luYXRpb25MaW5rLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgcGFnaW5hdGlvbkxpbmsuYXR0cignaHJlZicsIGAke3dpc2hsaXN0VXJsfXBhZ2U9JHtwYWdlTnVtYmVyfWApO1xuICAgIH1cbn0pO1xuXG4vKipcbiAqIGhlbHBzIHRvIHdpdGhkcmF3IGRpZmZlcmVuY2VzIGluIHN0cnVjdHVyZXMgYXJvdW5kIHRoZSBzdGVuY2lsIHJlc291cmNlIHBhZ2luYXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IHdpc2hsaXN0UGFnaW5hdG9ySGVscGVyID0gKCkgPT4ge1xuICAgIGNvbnN0ICRwYWdpbmF0aW9uTGlzdCA9ICQoJy5wYWdpbmF0aW9uLWxpc3QnKTtcblxuICAgIGlmICghJHBhZ2luYXRpb25MaXN0Lmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgY29uc3QgJG5leHRJdGVtID0gJCgnLnBhZ2luYXRpb24taXRlbS0tbmV4dCcsICRwYWdpbmF0aW9uTGlzdCk7XG4gICAgY29uc3QgJHByZXZJdGVtID0gJCgnLnBhZ2luYXRpb24taXRlbS0tcHJldmlvdXMnLCAkcGFnaW5hdGlvbkxpc3QpO1xuICAgIGNvbnN0IGN1cnJlbnRIcmVmID0gJCgnW2RhdGEtcGFnaW5hdGlvbi1jdXJyZW50LXBhZ2UtbGlua10nKS5hdHRyKCdocmVmJyk7XG4gICAgY29uc3QgcGFydGlhbFBhZ2luYXRpb25VcmwgPSBjdXJyZW50SHJlZi5zcGxpdCgncGFnZT0nKS5zaGlmdCgpO1xuXG4gICAgY2hhbmdlV2lzaGxpc3RQYWdpbmF0aW9uTGlua3MocGFydGlhbFBhZ2luYXRpb25VcmwsICRwcmV2SXRlbSwgJG5leHRJdGVtKTtcbn07XG4iLCJpbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24ucmV2ZWFsJztcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgeyB3aXNobGlzdFBhZ2luYXRvckhlbHBlciB9IGZyb20gJy4vY29tbW9uL3V0aWxzL3BhZ2luYXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IGRldkFkdmFuY2VkU3dhdGNoSW1hZ2UgZnJvbSAnLi9jYXZpby9kZXYtYWR2YW5jZWQtc3dhdGNoLWltYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lzaExpc3QgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2FjY291bnQvYWRkLXdpc2hsaXN0JyxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgY29uZmlybSBib3ggYmVmb3JlIGRlbGV0aW5nIGFsbCB3aXNoIGxpc3RzXG4gICAgICovXG4gICAgd2lzaGxpc3REZWxldGVDb25maXJtKCkge1xuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXdpc2hsaXN0LWRlbGV0ZV0nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25maXJtZWQgPSB3aW5kb3cuY29uZmlybSh0aGlzLmNvbnRleHQud2lzaGxpc3REZWxldGUpO1xuXG4gICAgICAgICAgICBpZiAoY29uZmlybWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQWRkV2lzaExpc3RWYWxpZGF0aW9uKCRhZGRXaXNobGlzdEZvcm0pIHtcbiAgICAgICAgdGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICcud2lzaGxpc3QtZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLndpc2hsaXN0LWZvcm0gaW5wdXRbbmFtZT1cIndpc2hsaXN0bmFtZVwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGggPiAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlcldpc2hsaXN0TmFtZUVycm9yLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgJGFkZFdpc2hsaXN0Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYWRkV2lzaGxpc3RWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCAkYWRkV2lzaExpc3RGb3JtID0gJCgnLndpc2hsaXN0LWZvcm0nKTtcblxuICAgICAgICBpZiAoJCgnW2RhdGEtcGFnaW5hdGlvbi13aXNobGlzdF0nKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHdpc2hsaXN0UGFnaW5hdG9ySGVscGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGFkZFdpc2hMaXN0Rm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJBZGRXaXNoTGlzdFZhbGlkYXRpb24oJGFkZFdpc2hMaXN0Rm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLndpc2hsaXN0RGVsZXRlQ29uZmlybSgpO1xuICAgICAgICBkZXZBZHZhbmNlZFN3YXRjaEltYWdlKCk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImNoYW5nZVdpc2hsaXN0UGFnaW5hdGlvbkxpbmtzIiwid2lzaGxpc3RVcmwiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicGFnaW5hdGlvbkl0ZW1zIiwiQXJyYXkiLCJfa2V5IiwiJCIsImVhY2giLCJfIiwiJGl0ZW0iLCJwYWdpbmF0aW9uTGluayIsImNoaWxkcmVuIiwiYXR0ciIsImluY2x1ZGVzIiwicGFnZU51bWJlciIsIndpc2hsaXN0UGFnaW5hdG9ySGVscGVyIiwiJHBhZ2luYXRpb25MaXN0IiwiJG5leHRJdGVtIiwiJHByZXZJdGVtIiwiY3VycmVudEhyZWYiLCJwYXJ0aWFsUGFnaW5hdGlvblVybCIsInNwbGl0Iiwic2hpZnQiLCJub2QiLCJQYWdlTWFuYWdlciIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCJkZXZBZHZhbmNlZFN3YXRjaEltYWdlIiwiV2lzaExpc3QiLCJfUGFnZU1hbmFnZXIiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwib3B0aW9ucyIsInRlbXBsYXRlIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwid2lzaGxpc3REZWxldGVDb25maXJtIiwiX3RoaXMyIiwib24iLCJldmVudCIsImNvbmZpcm1lZCIsIndpbmRvdyIsImNvbmZpcm0iLCJ3aXNobGlzdERlbGV0ZSIsInByZXZlbnREZWZhdWx0IiwicmVnaXN0ZXJBZGRXaXNoTGlzdFZhbGlkYXRpb24iLCIkYWRkV2lzaGxpc3RGb3JtIiwiX3RoaXMzIiwiYWRkV2lzaGxpc3RWYWxpZGF0b3IiLCJzdWJtaXQiLCJ0YXAiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJ2YWwiLCJyZXN1bHQiLCJlcnJvck1lc3NhZ2UiLCJlbnRlcldpc2hsaXN0TmFtZUVycm9yIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwib25SZWFkeSIsIiRhZGRXaXNoTGlzdEZvcm0iLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==
