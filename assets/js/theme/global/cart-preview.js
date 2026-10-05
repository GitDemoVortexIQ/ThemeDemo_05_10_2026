import $ from 'jquery';
import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.dropdown';
import utils from '@bigcommerce/stencil-utils';

export const CartPreviewEvents = {
    close: 'closed.fndtn.dropdown',
    open: 'opened.fndtn.dropdown',
};

export default function () {
    const loadingClass = 'is-loading';
    const $cart = $('[data-cart-preview]');
    const $cartDropdown = $('.dropdown-cart');
    const $cartLoading = $('<div class="loadingOverlay"></div>');

    $('body').on('cart-quantity-update', (event, quantity) => {
        $('.cart-quantity')
            .text(quantity)
            .toggleClass('countPill--positive', quantity > 0);

        
        $( document ).ajaxComplete(function( event, xhr, settings ) {

            if ( settings.url.indexOf("/cart.php") === 0 ) {
                if ($('.previewCartCheckout-price', $(xhr.responseText)).length) {
                    $('.navUser-action-price .cart-total-grandTotal').text( $('.previewCartCheckout-price', $(xhr.responseText)).text().trim() );
                } else {
                    var obj = JSON.parse(xhr.responseText);
                    $('.navUser-action-price .cart-total-grandTotal').text( $('.cart-total-value:eq(0)', $(obj['components/cart/totals'])).text().trim() );
                }
            }
        });

    });

    $cart.on('click', function(event) {
        event.preventDefault();
        const options = {
            template: 'common/cart-preview',
        };

        // Redirect to full cart page
        //
        // https://developer.mozilla.org/en-US/docs/Browser_detection_using_the_user_agent
        // In summary, we recommend looking for the string 'Mobi' anywhere in the User Agent to detect a mobile device.
        // if (/Mobi/i.test(navigator.userAgent)) {
        //     return event.stopPropagation();
        // }
       
        $(this).parent().toggleClass('is-open');

        $cartDropdown
            .addClass(loadingClass)
            .html($cartLoading);
        $cartLoading
            .show();

        utils.api.cart.getContent(options, (err, response) => {
            $cartDropdown
                .removeClass(loadingClass)
                .html(response);
            $cartLoading
                .hide();
        });
    });

    $('body').on('click', function(event) {
        if ($(event.target).closest('.themevale_cart').length === 0 && $cart.parent().hasClass('is-open')) {
            $cart.parent().removeClass('is-open');
        }
    });
}
