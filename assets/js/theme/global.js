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
import adminBar from './global/adminBar';
import carousel from './common/carousel';
import loadingProgressBar from './global/loading-progress-bar';
import svgInjector from './global/svg-injector';
import rootsLoaded from './roots/global';
import b3lang from './{relative-path}/b3lang';
import 'slick-carousel';

export default class Global extends PageManager {
    onReady() {
        const {
            channelId, cartId, productId, categoryId, secureBaseUrl, maintenanceModeSettings, adminBarLanguage
        } = this.context;
        cartPreview(secureBaseUrl, cartId);
        quickSearch();
        currencySelector(cartId);
        foundation($(document));
        quickView(this.context);
        carousel(this.context);
        menu();
        mobileMenuToggle();
        privacyCookieNotification();
        adminBar(secureBaseUrl, channelId, maintenanceModeSettings, JSON.parse(adminBarLanguage), productId, categoryId);
        loadingProgressBar();
        svgInjector();
        
        rootsLoaded();

        /* BundleB2B */
        const $body = $('body');
        const B3StorefrontURL = 'https://cdn.bundleb2b.net/b3-auto-loader.js';
        // const B3StorefrontURL = 'http://127.0.0.1:8080/bundleb2b.latest.js';
        $body.append(`<script src="${B3StorefrontURL}"></script>`);
        window.b3themeConfig = window.b3themeConfig || {};
        
        //console.log('locale', document.documentElement.lang)
        window.b3themeConfig.lang = document.documentElement.lang;
        window.b3themeConfig.locales = b3lang;

        window.b3themeConfig.useContainers = {
            'dashboard.endMasquerade.container': '.header .header-logo--wrap',
            'pdp.shoppinglist.container': '.productView-details .productView-options .form .add-to-cart-wrapper .product-actions .favs-section #b3Container__shoppinglist',
        };
        window.b3themeConfig.useJavaScript = {
            login: {
                callback(instance) {
                    const {
                        context: {
                            inDevelopment,
                        },
                        isB2BUser,
                        isMobile,
                    } = instance;

                    if (inDevelopment) {
                        console.log(instance.name, instance);
                    }

                    const showBCOrdersContent = () => { 
                        const style = `
                            <style>
                                .page_type__account_orderstatus .body .container .account {
                                    display: block !important;
                                }
                            </style>
                        `;
                        $('head').append(style);
                    };

                    const hideWishlists = () => { 
                        const $navPages_subMenu_item__wishlists = $('.navPages_subMenu_item__wishlists');
                        if ($navPages_subMenu_item__wishlists && $navPages_subMenu_item__wishlists.length) $navPages_subMenu_item__wishlists.hide()
                    };

                    if (isB2BUser) {
                        if (isMobile) hideWishlists();
                    } else {
                        showBCOrdersContent();
                    }
                },
            },
            orders: {
                callback(instance) {
                    const {
                        context: {
                            inDevelopment,
                        },
                        isB2BUser,
                    } = instance;

                    if (inDevelopment) {
                        console.log(instance.name, instance);
                    }

                    const fixClasslist = () => { 
                        $('.order-lists-wrap').addClass('account');
                    };

                    const showB3OrdersContent = () => { 
                        const style = `
                            <style>
                                .page_type__account_orderstatus .body .container .order-lists-wrap {
                                    display: block !important;
                                }
                            </style>
                        `;
                        $('head').append(style);
                    };

                    if (isB2BUser) {
                        fixClasslist();
                        showB3OrdersContent();
                    }
                },
            },
        };
        /* BundleB2B */

        $(".tablinks").on("click", function (event) {
            const tab = $(this).data("tab");

            // Hide all tab contents
            $(".tabcontent").hide();

            if (tab === 'news') {
                $("div#news.tabcontent").show();
                setTimeout(() => {
                    $('#newproducts-slider').slick('destroy').slick();
                }, 100);
            }
            if (tab === 'offers') {
                $("div#offers.tabcontent").show();
                setTimeout(() => {
                    $('#featured-products').slick('destroy').slick();
                }, 100);
            }
        });        
    }

}

        const selectedOptions = {};
        var selectedVariantSku = null;
        
        // Function to update the "Add to Cart" button state based on stock availability
        function updateAddToCartButtonState(sku, productVariants, form) {
            const variant = productVariants.find(variant => variant.node.sku === sku);

            if (variant) {
                const isInStock = variant.node.inventory.isInStock;
                const availableToSell = variant.node.inventory.aggregated.availableToSell;
          
                const addToCartButton = form.querySelector('.button.button--primary');

                if (addToCartButton) {
                    if (!isInStock || availableToSell <= 0) {
                        addToCartButton.disabled = true;
                        addToCartButton.style.opacity = '0.3';
                        addToCartButton.textContent = window.translations.soldout;
                    } else {
                        addToCartButton.disabled = false;
                        addToCartButton.style.opacity = '1';
                        addToCartButton.textContent = window.translations.atc;
                    }
                }
            }
        }

        const activeSelections = {
            color: null,
            size: null
        };
        // Select option
        function selectOption(optionId, valueId, source, form, productVariants) {
            const isColorOption = source === 'color-swatch';
            const isSizeOption = source === 'size-option';

            if (isColorOption) {
                // Remove active class from all color swatches
                document.querySelectorAll('.color-swatch').forEach(swatch => {
                    swatch.classList.remove('active');
                });

                // Add active class to the selected color swatch
                const selectedSwatch = document.querySelector(`${'#'+form.id} .color-swatch[data-option-value-id="${valueId}"]`);
                if (selectedSwatch) {
                    selectedSwatch.classList.add('active');
                }
                
                // Update active selection
                activeSelections.color = valueId;

            } else if (isSizeOption) {
                // Remove active class from all size options
                document.querySelectorAll('.size-option').forEach(option => {
                    option.classList.remove('active');
                });

                // Add active class to the selected size option
                const selectedSize = document.querySelector(`${'#'+form.id} .size-option[data-option-value-id="${valueId}"]`);
                if (selectedSize) {
                    selectedSize.classList.add('active');
                }
                
                activeSelections.size = valueId;
            }

            selectedOptions[optionId] = valueId;

            updateAddToCartButtonState(getSelectedVariantSku(selectedOptions, productVariants), productVariants, form);

            //console.log('Selected Options:', selectedOptions);
        }

        // Get selected options in the format required for Add to Cart
        function getSelectedOptions() {
            return Object.keys(selectedOptions).map(optionId => {
                return {
                    option_id: parseInt(optionId),
                    option_value: parseInt(selectedOptions[optionId])
                };
            });
        }


        function getSelectedVariantSku(selectedOptions, productVariants) {
            for (const variant of productVariants) {
                const variantOptions = {};

                variant.node.options.edges.forEach(option => {
                    const optionId = option.node.displayName;
                    const values = option.node.values.edges.map(value => value.node.entityId);
                    variantOptions[optionId] = values;
                });

                // Check if selected values match variant option values
                const allMatch = Object.keys(selectedOptions).every(optionId => {
                    const selectedId = selectedOptions[optionId]; // Get the selected entity ID
                    // Check if the variant has the selected ID in its options
                    return Object.values(variantOptions).some(optionValues => optionValues.includes(selectedId));
                });

                // Return the SKU if all selected options match
                if (allMatch) {
                    selectedVariantSku = variant.node.sku;
                    return variant.node.sku;
                }
            }
            return null;
        }



        function addToCartVariation(sku, addToCartButton) {
            var xhr = new XMLHttpRequest();
            var url = '/cart.php?action=add&sku=' + encodeURIComponent(sku)+ '&qty=1';

            addToCartButton.innerText = window.translations.addingtc; 
            addToCartButton.disabled = true;

            xhr.open('GET', url, true);
            
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    // Successful request
                    var responseData = xhr.responseText;
                    location.reload();
                } else {
                    // Request failed
                    console.error('Request failed with status ' + xhr.status);
                    addToCartButton.innerText = window.translations.atc;
                    addToCartButton.disabled = false;
                }
            };

            xhr.onerror = function () {
                console.error('An error occurred during the request.');
                // Revert the button back to its original state
                addToCartButton.innerText = window.translations.atc;
                addToCartButton.disabled = false;
            };

            xhr.send();
        };

        // Function to render the product form
        async function renderProductForm(productData, containerClass) {
            // Generate unique form ID based on the current time (to avoid duplicate IDs)
            const uniqueFormId = `product-options-form-${new Date().getTime()}`;
            // Find the containers to render the form into
            const productFormContainers = document.querySelectorAll(containerClass);

            let targetContainer = null;
            for (const container of productFormContainers) {
                if (!container.querySelector('form')) {
                    targetContainer = container;
                    break;
                }
            }

            // If no container is found, return
            if (!targetContainer) {
                return;
            }

            //console.log('product',productData)
            
            // Extract the product options (Color and Size)
            const productOptions = productData.data.site.product.productOptions.edges;
            const productVariants = productData.data.site.product.variants.edges;
            // Create the form
            const form = document.createElement('form');
            form.id = uniqueFormId;

            let colorCount = 0;
            let sizeCount = 0;

            // Loop through product options to create swatches for color and size
            productOptions.forEach(option => {
                const optionName = option.node.displayName;
                const optionId = option.node.entityId;
                const isRequiredOption = option.node.isRequired;
                // Create an option wrapper
                const optionWrapper = document.createElement('div');
                optionWrapper.classList.add('option-wrapper');
                const values = option.node.values.edges;
                if (optionName === 'Color') {
                    const label = document.createElement('label');
                    label.innerText = optionName;
                    optionWrapper.appendChild(label);
                    // Color swatches
                    values.forEach(value => {
                        const colorSwatch = document.createElement('div');
                        colorSwatch.classList.add('color-swatch');
                        const hexColors = value.node.hexColors;
                        //console.log('hex',hexColors)

                        hexColors?.forEach((hexColor, index) => {
                            const colorSlice = document.createElement('div');
                            colorSlice.classList.add('color-slice');
                            colorSlice.style.backgroundColor = hexColor;

                            // Add dynamic classes based on number of colors
                            if (hexColors.length === 2) {
                                colorSlice.classList.add('split-2', `slice-${index + 1}`);
                            } else if (hexColors.length === 3) {
                                colorSlice.classList.add('split-3', `slice-${index + 1}`);
                            }

                            colorSwatch.appendChild(colorSlice);
                        });

                        colorSwatch.dataset.optionValueId = value.node.entityId;

                        colorSwatch.addEventListener('click', function() {
                            selectOption(optionId, value.node.entityId, 'color-swatch', form, productVariants);
                        });

                        optionWrapper.appendChild(colorSwatch);
                        colorCount++;
                    });
                } else if (isRequiredOption) {
                    const label = document.createElement('label');
                    label.innerText = optionName;
                    optionWrapper.appendChild(label);
                    // Size options
                    values.forEach(value => {
                        const sizeRect = document.createElement('div');
                        sizeRect.classList.add('size-option');
                        sizeRect.innerText = value.node.label; // Size label
                        sizeRect.dataset.optionValueId = value.node.entityId;

                        sizeRect.addEventListener('click', function() {
                            selectOption(optionId, value.node.entityId , 'size-option', form, productVariants);
                        });

                        optionWrapper.appendChild(sizeRect);
                        sizeCount++;
                    });
                }

                form.appendChild(optionWrapper);
                const id = containerClass.split('-').pop(); 
                const colorsInfoDiv = document.getElementById(`colors-info-${id}`);
                if (colorsInfoDiv) {
                    if(colorCount>1 && sizeCount>1){
                        colorsInfoDiv.innerHTML = `<span class="sizes">${sizeCount} ${window.translations.sizes} /</span> ${colorCount} ${window.translations.colors}`;
                    }
                    else if(colorCount>1){
                        colorsInfoDiv.innerHTML = `${colorCount} ${window.translations.colors}`;
                    }
                    else if(sizeCount>1){
                        colorsInfoDiv.innerHTML = `<span class="sizes">${sizeCount} ${window.translations.sizes}</span>`;
                    }
                }
            });

            const buttonWrapper = document.createElement('div');
            buttonWrapper.classList.add('addtocart-wrapper'); 

            // Add an "Add to Cart" button
            const addToCartButton = document.createElement('button');
            addToCartButton.type = 'button';
            addToCartButton.innerText = window.translations.atc;
            addToCartButton.classList.add('button', 'button--primary');

            buttonWrapper.appendChild(addToCartButton);

            addToCartButton.addEventListener('click', async function(event) {
                const selectedOptions = getSelectedOptions();

                if (selectedVariantSku) {
                    addToCartVariation(selectedVariantSku, event.currentTarget);
                } else {
                    console.error("No matching SKU found for the selected options.");
                }
            });
            form.appendChild(buttonWrapper);
            targetContainer.querySelectorAll('form').forEach(f => f.remove());
            targetContainer.appendChild(form);
        }

            // Function to fetch product variants
            async function fetchProductVariants(id, token) {
                let getProductVariants = `
                query getProductVariants($productId: Int!) {
                    site {
                        product (entityId: $productId) {
                            variants (first:100, isPurchasable: true) {
                                edges {
                                    node {
                                        entityId
                                        sku
                                        defaultImage {
                                            url(width: 500, height: 500)
                                        }
                                        inventory {
                                            isInStock
                                            aggregated{
                                                availableToSell
                                            }
                                        }
                                        options(first:50){
                                            edges{
                                                node{
                                                    displayName values(first:50){
                                                        edges{
                                                            node{
                                                                label
                                                                entityId
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            productOptions(first: 5) {
                                edges {
                                    node {
                                        entityId
                                        displayName
                                        isRequired
                                        ... on CheckboxOption {
                                            checkedByDefault
                                        }
                                        ... on MultipleChoiceOption {
                                            values(first: 10) {
                                                edges {
                                                    node {
                                                        entityId
                                                        label
                                                        isDefault
                                                        ... on SwatchOptionValue {
                                                            hexColors
                                                            imageUrl(width: 200)
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }`;
            
                try {
                    
                    const response = await fetch("/graphql", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        },
                        body: JSON.stringify({
                            query: getProductVariants,
                            variables: { productId: id },
                        }),
                    });
            
                    const data = await response.json();
            
                    renderProductForm(data, `.product-form-container-${id}`);
            
                } catch (error) {
                    console.error("Error fetching product variants information:", error);
                }
            }
            
            window.fetchProductVariants = fetchProductVariants;

            async function fetchCategorySeo(categoryId,token) {
                const categoryH1 = `
                query GetCategoryH1 {
                    site {
                        category(entityId: ${categoryId}) {
                            metafields(namespace: "seo", first: 50){
                                edges {
                                    node {
                                        value
                                        key
                                    }
                                }
                            }
                        }
                    }
                }
                `;
                try {
                    const response = await fetch("/graphql", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        },
                        body: JSON.stringify({
                        query: categoryH1
                        }),
                    });

                    const data = await response.json();
                                        
                    let heading = document.querySelector('h1.page-heading');
                    let useful_links = document.querySelector('#useful-links-container');
                    let additionalInfo = document.querySelector('#category-additional-info');

                    let edges = data.data.site.category.metafields.edges || [];
                    if (heading) {
                        // Find the metafield with key 'h1'
                        let h1Metafield = edges.find(edge => edge.node.key === 'h1');
            
                        if (h1Metafield && h1Metafield.node.value) {
                            heading.textContent = h1Metafield.node.value;
                        }
                        heading.style.visibility = 'visible';
                    }
                    if (useful_links) {
                        // Filter metafields that start with 'label_'
                        let labelMetafields = edges.filter(edge => edge.node.key.startsWith('label_'));
                    
                        let usefulLinksContainer = document.querySelector(".useful-links");
                        let titleElement = document.getElementById("useful-links-title");
                    
                        if (labelMetafields.length > 0) {
                            useful_links.innerHTML = "";
                    
                            // Show the container and title
                            usefulLinksContainer.style.display = "block";
                            titleElement.style.display = "block";
                    
                            labelMetafields.forEach(label => {
                                let linkElement = document.createElement("a");
                                linkElement.href = label.node.value;
                                linkElement.textContent = label.node.key.replace(/^label_/, '');
                                linkElement.classList.add("useful-link");
                    
                                useful_links.appendChild(linkElement);
                            });
                        } else {
                            usefulLinksContainer.style.display = "none";
                        }
                    }
                    if (additionalInfo) {
                        let metaSeoTextMetafield = edges.find(edge => edge.node.key === 'meta_seo_text');
            
                        if (metaSeoTextMetafield && metaSeoTextMetafield.node.value) {
                            additionalInfo.innerHTML = metaSeoTextMetafield.node.value;
                        } 
                    }
            
                } catch (error) {
                    document.querySelector('h1.page-heading').style.visibility = 'visible';
                    console.error("Error fetching category seo information:", error);
                }
            };

            window.fetchCategorySeo = fetchCategorySeo;


            function bindDiscounts(token, origen) {
                window.stencilUtils.api.cart.getCart('', (err, response) => {
                    const entityIds = [];
                    const qtyIds = [];
                    const qty = [];
        
                    for (let i = 0; i < response.lineItems.physicalItems.length; i++) {
                        qtyIds[response.lineItems.physicalItems[i].productId] = response.lineItems.physicalItems[i].quantity;
                        entityIds.push(response.lineItems.physicalItems[i].productId);
                        qty.push(response.lineItems.physicalItems[i].quantity);
                    }
                    for (let i = 0; i < response.lineItems.digitalItems.length; i++) {
                        qtyIds[response.lineItems.digitalItems[i].productId] = response.lineItems.digitalItems[i].quantity;
                        entityIds.push(response.lineItems.digitalItems[i].productId);
                        qty.push(response.lineItems.digitalItems[i].quantity);
                    }
        
                    entityIds.join(',');
                    fetch('/graphql', {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        },
                        body: JSON.stringify({
                            query: `
                                query ProductById {
                                    site {
                                        products(entityIds: [${entityIds}]) {
                                            edges {
                                                node {
                                                    id
                                                    entityId
                                                    prices(includeTax: true) {
                                                        price{
                                                            currencyCode
                                                            value
                                                            formatted
                                                        }
                                                        basePrice {
                                                            currencyCode
                                                            value
                                                            formatted
                                                        }
                                                        salePrice {
                                                            currencyCode
                                                            value
                                                            formatted
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            `,
                        }),
                    })
                        .then(res => res.json())
                        .then(json => {
                            const productPrices = json.data.site.products.edges;
                            productPrices.forEach((productPrice) => {
    
                                if(origen == 'cart'){
                                    if (productPrice.node.prices.salePrice != null ) {
                                        // Before and after price
                                        document.querySelector(`.priceBefore-${productPrice.node.entityId}`).innerHTML += productPrice.node.prices.basePrice.formatted;
                                        document.querySelector(`#sale-price-${productPrice.node.entityId}`).style.color = '#E82222';
                                    
                                    } else {
                                        const discountedPriceElement = document.querySelector(`#price-discounted-${productPrice.node.entityId}`)
                                        if(discountedPriceElement){
                                            var discountedPrice = discountedPriceElement.getAttribute('data-price-discounted');
                                            if(productPrice.node.prices.basePrice.value > discountedPrice ){
                                                document.querySelector(`.priceBefore-${productPrice.node.entityId}`).innerHTML += productPrice.node.prices.basePrice.formatted;
                                            } 
                                        }else {
                                            document.querySelector(`.priceBefore-${productPrice.node.entityId}`).style.display = 'none';
                                        }
                                    }
                                }
                                else{
                                    if (productPrice.node.prices.salePrice != null && 
                                        productPrice.node.prices.basePrice.value > productPrice.node.prices.salePrice.value && 
                                        productPrice.node.prices.basePrice.value > 0 ) 
                                    {
                                        let priceElement = document.querySelector(`.mini-priceBefore-${productPrice.node.entityId}`);
                                        priceElement.innerHTML = '';
                                        priceElement.innerHTML = productPrice.node.prices.basePrice.formatted;
                                    }
                                }
                            });
                        });
                });
            }
            window.bindDiscounts = bindDiscounts;
