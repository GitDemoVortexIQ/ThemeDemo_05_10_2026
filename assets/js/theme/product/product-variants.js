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
function selectOptionFromGrid(optionId, valueId, source, form, productVariants) {
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
function getSelectedOptionsFromGrid() {
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



function addToCartVariationFromGrid(sku, addToCartButton) {
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

async function fetchProductVariantsGrid(id, token) {
    const query = `
        query getProductVariants($productId: Int!) {
            site {
                product(entityId: $productId) {
                    variants(first: 100, isPurchasable: true) {
                        edges {
                            node {
                                entityId
                                sku
                                defaultImage {
                                    url(width: 500, height: 500)
                                }
                                inventory {
                                    isInStock
                                    aggregated {
                                        availableToSell
                                    }
                                }
                                options(first: 50) {
                                    edges {
                                        node {
                                            displayName
                                            values(first: 50) {
                                                edges {
                                                    node {
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
        }
    `;

    try {
        const response = await fetch("/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${window.STOREFRONT_API_TOKEN}`
            },
            body: JSON.stringify({
                query: query,
                variables: { productId: id }
            })
        });

        const json = await response.json();
        return { id, data: json.data };
    } catch (error) {
        console.error("Error fetching product", id, error);
        return { id, data: null };
    }
}

async function fetchAllProductVariants(productIds, batchSize = 5) {
    for (let i = 0; i < productIds.length; i += batchSize) {
        const batch = productIds.slice(i, i + batchSize);

        const batchPromises = batch.map(id =>
            fetchProductVariantsGrid(id, window.STOREFRONT_API_TOKEN)
                .then(data => ({ id, data }))
                .catch(err => {
                    console.error(`Error fetching product ${id}`, err);
                    return null;
                })
        );

        const results = await Promise.all(batchPromises);

        results.forEach(result => {
            if (result?.data) {
                renderProductFormGrid(result.data, `.product-form-container-${result.id}`);
            }
        });
    }
}

async function renderProductFormGrid(productData, containerClass) {
    const uniqueFormId = `product-options-form-${new Date().getTime()}`;
    const productFormContainers = document.querySelectorAll(containerClass);

    let targetContainer = null;
    for (const container of productFormContainers) {
        if (!container.querySelector('form')) {
            targetContainer = container;
            break;
        }
    }

    if (!targetContainer) return;
    //console.log('productdata in renderform', productData);

    const product = productData?.site?.product;
    
    if (!product || !product.productOptions || !product.variants) {
        console.warn("Invalid or missing product data in renderProductForm", productData);
        return;
    }
    
    const productOptions = product.productOptions.edges || [];
    const productVariants = product.variants.edges || [];

    const form = document.createElement('form');
    form.id = uniqueFormId;

    let colorCount = 0;
    let sizeCount = 0;

    productOptions.forEach(option => {
        const optionName = option.node.displayName;
        const optionId = option.node.entityId;
        const isRequiredOption = option.node.isRequired;
        const optionWrapper = document.createElement('div');
        optionWrapper.classList.add('option-wrapper');
        const values = option.node.values.edges;

        if (optionName === 'Color') {
            const label = document.createElement('label');
            label.innerText = optionName;
            optionWrapper.appendChild(label);

            values.forEach(value => {
                const colorSwatch = document.createElement('div');
                colorSwatch.classList.add('color-swatch');
                const hexColors = value.node.hexColors;

                hexColors?.forEach((hexColor, index) => {
                    const colorSlice = document.createElement('div');
                    colorSlice.classList.add('color-slice');
                    colorSlice.style.backgroundColor = hexColor;

                    if (hexColors.length === 2) {
                        colorSlice.classList.add('split-2', `slice-${index + 1}`);
                    } else if (hexColors.length === 3) {
                        colorSlice.classList.add('split-3', `slice-${index + 1}`);
                    }

                    colorSwatch.appendChild(colorSlice);
                });

                colorSwatch.dataset.optionValueId = value.node.entityId;
                colorSwatch.addEventListener('click', () => {
                    selectOptionFromGrid(optionId, value.node.entityId, 'color-swatch', form, productVariants);
                });

                optionWrapper.appendChild(colorSwatch);
                colorCount++;
            });

        } else if (isRequiredOption) {
            const label = document.createElement('label');
            label.innerText = optionName;
            optionWrapper.appendChild(label);

            values.forEach(value => {
                const sizeRect = document.createElement('div');
                sizeRect.classList.add('size-option');
                sizeRect.innerText = value.node.label;
                sizeRect.dataset.optionValueId = value.node.entityId;

                sizeRect.addEventListener('click', () => {
                    selectOptionFromGrid(optionId, value.node.entityId, 'size-option', form, productVariants);
                });

                optionWrapper.appendChild(sizeRect);
                sizeCount++;
            });
        }

        form.appendChild(optionWrapper);

        const id = containerClass.split('-').pop();
        const colorsInfoDiv = document.getElementById(`colors-info-${id}`);
        if (colorsInfoDiv) {
            if (colorCount > 1 && sizeCount > 1) {
                colorsInfoDiv.innerHTML = `<span class="sizes">${sizeCount} ${window.translations.sizes} /</span> ${colorCount} ${window.translations.colors}`;
            } else if (colorCount > 1) {
                colorsInfoDiv.innerHTML = `${colorCount} ${window.translations.colors}`;
            } else if (sizeCount > 1) {
                colorsInfoDiv.innerHTML = `<span class="sizes">${sizeCount} ${window.translations.sizes}</span>`;
            }
        }
    });

    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('addtocart-wrapper');

    const addToCartButton = document.createElement('button');
    addToCartButton.type = 'button';
    addToCartButton.innerText = window.translations.atc;
    addToCartButton.classList.add('button', 'button--primary');

    buttonWrapper.appendChild(addToCartButton);

    addToCartButton.addEventListener('click', event => {
        const selectedOptions = getSelectedOptionsFromGrid();
        if (selectedVariantSku) {
            addToCartVariationFromGrid(selectedVariantSku, event.currentTarget);
        } else {
            console.error("No matching SKU found for the selected options.");
        }
    });

    form.appendChild(buttonWrapper);
    targetContainer.appendChild(form);
}

// 🚀 IntersectionObserver + fallback
function observeProductCards() {
    const productEls = document.querySelectorAll("[data-product-id]");
    const ids = Array.from(productEls).map(el => parseInt(el.dataset.productId));
    const uniqueIds = [...new Set(ids)];

    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: "200px",
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const productId = parseInt(entry.target.dataset.productId);
                    fetchProductVariantsGrid(productId, window.STOREFRONT_API_TOKEN)
                        .then(result => {
                            if (result && result.data) {
                                renderProductFormGrid(result.data, `.product-form-container-${result.id}`);
                            }
                        })
                        .catch(err => console.error("Error loading product variant:", err));
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        productEls.forEach(el => observer.observe(el));
    } else {
        console.warn("IntersectionObserver no soportado. Cargando todos los productos.");
        fetchAllProductVariants(uniqueIds);
    }
}

// Llamadas correctas, dentro del archivo JS
document.addEventListener("DOMContentLoaded", function () {
    observeProductCards(); // Primera ejecución al cargar la página
});

window.observeProductCards = observeProductCards;