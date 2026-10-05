import 'focus-within-polyfill';

import './global/jquery-migrate';
import './common/select-option-plugin';
import PageManager from './page-manager';
import quickSearch from './global/quick-search';
import currencySelector from './global/currency-selector';
import mobileMenuToggle from './global/mobile-menu-toggle';
import menu from './global/menu';
import foundation from './global/foundation';
import quickView from './global/quick-view';
import cartPreview from './global/cart-preview';
import privacyCookieNotification from './global/cookieNotification';
import carousel from './common/carousel';
import svgInjector from './global/svg-injector';
import featuredCategories from './cavio/featured-categories';
import shopCollection from './cavio/shop-collection';
import instagramposts from './cavio/instagram';
import home from './cavio/cavio-homepage';
import global from './cavio/common';
import categoryFilter from './cavio/categoryFilter';

export default class Global extends PageManager {
    onReady() {
        const { cartId, secureBaseUrl } = this.context;
        cartPreview(secureBaseUrl, cartId);
        quickSearch();
        currencySelector(cartId);
        foundation($(document));
        quickView(this.context);
        carousel(this.context);
        menu();
        mobileMenuToggle();
        privacyCookieNotification();
        svgInjector();  
        global(this.context);
        if($(".category-dropdown-filter-section").length) {
            categoryFilter(this.context);
        }
        //if(this.context.pageType === 'default') {
            home(this.context);
        //}; 
        if((this.context.pageType === 'default') && (this.context.featuredCategories === true)) {
            featuredCategories(this.context);
        };
        if((this.context.pageType === 'default') && (this.context.instagramvisible === true)) {
            instagramposts(this.context);
        };        
        if((this.context.pageType === 'default') && (this.context.shopCollection === true)) {
            shopCollection(this.context);
        };  
    }
}
