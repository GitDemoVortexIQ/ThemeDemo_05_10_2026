import $ from 'jquery';
import './common/select-option-plugin';
import PageManager from './page-manager';
import quickSearch from './global/quick-search';
import currencySelector from './global/currency-selector';
import mobileMenuToggle from './global/mobile-menu-toggle';
import foundation from './global/foundation';
import quickView from './global/quick-view';
import cartPreview from './global/cart-preview';
import compareProducts from './global/compare-products';
import privacyCookieNotification from './global/cookieNotification';
import maintenanceMode from './global/maintenanceMode';
import carousel from './common/carousel';
import 'lazysizes';
import loadingProgressBar from './global/loading-progress-bar';
import sweetAlert from './global/sweet-alert';
import svgInjector from './global/svg-injector';

/*=========================================
=            www.themevale.com            =
=========================================*/

import themevale_Global from './themevale/themevale_Global';
import themevaleAddToCart from './themevale/themevale_AddToCart';
import themevaleRecentlyBought from './themevale/themevale_RecentlyBought';
import themevaleSticky from './themevale/themevale_StickyNavigation';
    window.themevaleSticky = themevaleSticky;

import themevaleMenu from './themevale/themevale_MegaMenu';
    window.themevaleMenu = themevaleMenu;

import themevaleNewsletterPopup from './themevale/themevale_NewsletterPopup';
    window.themevaleNewsletterPopup = themevaleNewsletterPopup;

/*=====  End of www.themevale.com  ======*/

export default class Global extends PageManager {
    onReady() {
        // Only load visible elements until the onload event fires,
        // after which preload nearby elements.
        window.lazySizesConfig = window.lazySizesConfig || {};
        window.lazySizesConfig.loadMode = 1;

        quickSearch();
        currencySelector();
        foundation($(document));
        quickView(this.context);
        cartPreview();
        compareProducts(this.context.urls);
        carousel();
        mobileMenuToggle();
        privacyCookieNotification();
        maintenanceMode(this.context.maintenanceMode);
        loadingProgressBar();
        sweetAlert();
        svgInjector();

        themevale_Global();
        themevaleAddToCart();
        themevaleRecentlyBought(this.context);
    }
}
