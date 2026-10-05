import { hooks } from '@bigcommerce/stencil-utils';
import CatalogPage from './catalog';
import $ from 'jquery';
import FacetedSearch from './common/faceted-search';

export default class Brand extends CatalogPage {
    onReady() {
        if ($('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            hooks.on('sortBy-submitted', this.onSortBySubmit);
        }

        this.showmore_product();
    }

    initFacetedSearch() {
        const $productListingContainer = $('#product-listing-container');
        const $facetedSearchContainer = $('#faceted-search-container');
        const productsPerPage = this.context.brandProductsPerPage;
        const requestOptions = {
            template: {
                productListing: 'brand/product-listing',
                sidebar: 'brand/sidebar',
            },
            config: {
                shop_by_brand: true,
                brand: {
                    products: {
                        limit: productsPerPage,
                    },
                },
            },
            showMore: 'brand/show-more',
        };

        this.facetedSearch = new FacetedSearch(requestOptions, (content) => {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);

            $('html, body').animate({
                scrollTop: 0,
            }, 100);
        });
    }

    showmore_product() {
        var check_link = $(".pagination-item--current").next();
        if (check_link.length === 0) {
            $('#button-showmore-category').css('display', 'none');
        } else {
            $(document).on('click', '#button-showmore-category', function (e) {
                e.preventDefault();
                var nextPage = $(".pagination-item--current").next(),
                    link = nextPage.find("a").attr("href");
                $('#button-showmore-category').addClass('loadding');
                $.ajax({
                    type: 'get',
                    url: link.replace("http://", "//"),
                    success: function (data) {
                        if ($(data).find('#productLayout').length > 0) {
                            $('#productLayout').append($(data).find('#productLayout').children());
                            $('.pagination-list').html($(data).find(".pagination-list").html());
                            $('#button-showmore-category').removeClass('loadding');
                            if (Number($(data).find('.pagination-info .end').text()) <= Number($(data).find('.pagination-info .total').text())) {
                                $('.pagination .pagination-info .end').html($(data).find('.pagination-info .end').text());
                            } else {
                                $('.pagination .pagination-info .end').html($(data).find('.pagination-info .total').text());
                            }
                            nextPage = $(".pagination-item--current").next();
                            if (nextPage.length === 0) {
                                $('#button-showmore-category').css('display', 'none');
                            }
                        }
                    }
                })
            })
        }
    }
}
