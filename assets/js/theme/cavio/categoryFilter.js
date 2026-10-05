let token,defaultSelection,levelOne,levelSecond,levelThird,levelFourth = ''; // Global token variable

export default async function (context) {
    // Update the global token variable
    token = context.bearerToken;
    defaultSelection = $('.filter-first-category-id').text();
    levelOne =$('#vch-level-1').find('[data-default-selection]').text();
    levelSecond =$('#vch-level-2').find('[data-default-selection]').text();
    levelThird =$('#vch-level-3').find('[data-default-selection]').text();
    levelFourth =$('#vch-level-4').find('[data-default-selection]').text();
    await changeEvents(token);

    if (localStorage.getItem("selectedFilters") != null) {
        var levels = localStorage.getItem("selectedFilters").split(',');
        for (let index = 0; index < levels.length; index++) {
            const element = levels[index].split(':');
            if (element[0] == 'first') {
                $("#vch-level-1 option:selected").removeAttr("selected");
                $('#vch-level-1 option[value="' + element[1] + '"]').prop('selected', true);
                $('#vch-level-1').val(element[1]);
                $('.vch-mobile-view .selection').append('<span>' + $("#vch-level-1 option:selected").text() + '</span>');
                await firstlevelSelection();
            } else if (element[0] == 'second') {
                $("#vch-level-2 option:selected").removeAttr("selected");
                $('#vch-level-2 option[value="' + element[1] + '"]').prop('selected', true);
                $('#vch-level-2').val(element[1]);
                $('.vch-mobile-view .selection').append('<span>' + $("#vch-level-2 option:selected").text() + '</span>');
                await secondLevelSelection();
            } else if (element[0] == 'third') {
                $("#vch-level-3 option:selected").removeAttr("selected");
                $('#vch-level-3 option[value="' + element[1] + '"]').prop('selected', true);
                $('#vch-level-3').val(element[1]);
                $('.vch-mobile-view .selection').append('<span>' + $("#vch-level-3 option:selected").text() + '</span>');
                await thirdLevelSelection();
            }
        }
        $(".vch-mobile-view").addClass('active-filter');
    } else {
        $(".vch-main").removeClass("hide-filter");
        $('#vch-select-search').addClass("disabled");
        $('#vch-level-2').prop('disabled', true);
        $('#vch-level-3').prop('disabled', true);
    }
}
const firstOptionValue1 = $('#vch-level-1 option:first').val();
const firstOptionValue2 = $('#vch-level-2 option:first').val();
const firstOptionValue3 = $('#vch-level-3 option:first').val();

async function changeEvents(token) {
    await getFirstLevelCategories(token,defaultSelection);

    $('#vch-level-1').on('change', async function () {
        await firstlevelSelection();
    });

    $('#vch-level-2').on('change', async function () {
        await secondLevelSelection();
    });

    $('#vch-level-3').on('change', async function () {
        await thirdLevelSelection();
    });

    $('#reset-filters').on('click', function() {
        localStorage.removeItem("selectedFilters")
        $('#vch-level-1').val(levelOne);
        $('#vch-level-1 option[value="'+levelOne+'"]').prop('selected', true);

        $('#vch-level-2').prop('disabled', true);
        $('#vch-level-2').val(levelSecond);
        $('#vch-level-2 option[value="'+levelSecond+'"]').prop('selected', true);
        $('#vch-level-2 option[data-test-path]').remove();

        $('#vch-level-3').prop('disabled', true);
        $('#vch-level-3').val(levelThird);
        $('#vch-level-3 option[value="'+levelThird+'"]').prop('selected', true);
        $('#vch-level-3 option[data-test-path]').remove();

        $('#vch-select-search').addClass("disabled");
        $(".vch-mobile-view").removeClass('active-filter');
        $(".vch-main").removeClass("hide-filter");
        $('body').removeClass('has-activeNavPages');
        $('.header').removeClass('is-open');
        $('.mobileMenu-toggle').removeClass('is-open');
        $('.mobile-menu.navPages-container').css('top', '');
    });

    $('.button.button--primary.srch-btn').on('click', function () {
        var location = window.location.origin;
        let selectedValue = '';
        if ($('#vch-level-3').find(":selected").val() != firstOptionValue3) {
            location = location + $('#vch-level-3').find(":selected").attr('data-test-path');
            selectedValue = "first:" + $('#vch-level-1').find(':selected').val() + ",second:" + $('#vch-level-2').find(':selected').val() + ",third:" + $('#vch-level-3').find(':selected').val();
        } else if ($('#vch-level-2').find(":selected").val() != firstOptionValue2) {
            location = location + $('#vch-level-2').find(":selected").attr('data-test-path');
            selectedValue = "first:" + $('#vch-level-1').find(':selected').val() + ",second:" + $('#vch-level-2').find(':selected').val();
        } else if ($('#vch-level-1').find(":selected").val() != firstOptionValue1) {
            location = location + $('#vch-level-1').find(":selected").attr('data-test-path');
            selectedValue = "first:" + $('#vch-level-1').find(':selected').val();
        }
        localStorage.setItem("selectedFilters", selectedValue);
        window.location.href = location;
    });
}

async function getFirstLevelCategories(token,entityId) {
    // Fetch first level categories.
    await fetch('/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            query: `query levelOneCategories {
                site {
                    categoryTree(rootEntityId: ${entityId}) {
                        children {
                            name
                            path
                            entityId
                        }
                    }
                }
            }`
        })
    })
    .then(res => res.json())
    .then(function(res) {
        // Add first level categories to select option
        for(let i = 0; i < res.data.site.categoryTree[0].children.length; i++) {
            $('#vch-level-1').append('<option value="'+res.data.site.categoryTree[0].children[i].entityId+'" data-test-path="'+res.data.site.categoryTree[0].children[i].path+'">'+res.data.site.categoryTree[0].children[i].name+'</option>');
        }
    });
}

async function getChildrenCategories(token, entityId, catLevel) {
    // Fetch child categories.
    await fetch('/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
            query: `query levelOneCategories {
                site {
                    categoryTree(rootEntityId: ${entityId}) {
                        children {
                            name
                            path
                            entityId
                        }
                    }
                }
            }`
        })
    })
    .then(res => res.json())
    .then(function(res) {
        if(res.data.site.categoryTree[0].children.length) {
            $('#vch-select-search').addClass("disabled");
            
            if(catLevel === 'second') 
                $('#vch-level-2 option:not(:first)').remove();
            else if(catLevel === "third")
                $('#vch-level-3 option:not(:first)').remove();
           
            for(let i = 0; i < res.data.site.categoryTree[0].children.length; i++) {
                // Add categories to appropiate select option
                if(catLevel === 'second') {
                    $('#vch-level-2').append('<option value="'+res.data.site.categoryTree[0].children[i].entityId+'" data-test-path="'+res.data.site.categoryTree[0].children[i].path+'">'+res.data.site.categoryTree[0].children[i].name+'</option>');
                    $('#vch-level-2').prop('disabled', false);
                } else if(catLevel === "third"){
                    $('#vch-level-3').append('<option value="'+res.data.site.categoryTree[0].children[i].entityId+'" data-test-path="'+res.data.site.categoryTree[0].children[i].path+'">'+res.data.site.categoryTree[0].children[i].name+'</option>');
                    $('#vch-level-3').prop('disabled', false);
                } 
            }
        } else {
            $('#vch-select-search').removeClass("disabled");
            // Disable and clear appropriate select options
            if(catLevel === 'second') {
                $('#vch-level-2').prop('disabled', true);
                $('#vch-level-2 option[value="'+levelSecond+'"]').prop('selected', true);
                $('#vch-level-2 option[data-test-path]').remove();

                $('#vch-level-3').prop('disabled', true);
                $('#vch-level-3 option[value="'+levelThird+'"]').prop('selected', true);
                $('#vch-level-3 option[data-test-path]').remove();

            } else if(catLevel === "third"){
                $('#vch-level-3').prop('disabled', true);
                $('#vch-level-3 option[value="'+levelThird+'"]').prop('selected', true);
                $('#vch-level-3 option[data-test-path]').remove();
            }
        }
    });
}
async function firstlevelSelection(){ //On change of first level category, get second level categories
    if($('#vch-level-1').find(':selected').val() != levelOne) {
        $('#vch-level-2').prop('disabled', true);
        $('#vch-level-2 option[value="'+levelSecond+'"]').prop('selected', true);
        $('#vch-level-2').val(levelSecond);
        $('#vch-level-3').prop('disabled', true);
        $('#vch-level-3 option[value="'+levelThird+'"]').prop('selected', true);
        $('#vch-level-3').val(levelThird);
        // Add second level categories if first level category is valid
        const entityId = $('#vch-level-1').find(':selected').val();
        await getChildrenCategories(token, entityId, "second");
        $('#vch-level-1').parent('.form-field').addClass("form-field--success");
    } else {
        // Disable and clear selects if first level category is invalid
        $('#vch-select-search').addClass("disabled");
        $('#vch-level-2').prop('disabled', true);
        $('#vch-level-2').val(levelSecond);
        $('#vch-level-2 option[value="'+levelSecond+'"]').prop('selected', true);
        $('#vch-level-3').prop('disabled', true);
        $('#vch-level-3').val(levelThird);
        $('#vch-level-3 option[value="'+levelThird+'"]').prop('selected', true);
        $('#vch-level-1').parent('.form-field').removeClass("form-field--success");
    }
}

async function secondLevelSelection(){
    if($('#vch-level-2').find(':selected').val() != levelSecond) {
        $('#vch-level-3').prop('disabled', true);
        $('#vch-level-3 option[value="'+levelThird+'"]').prop('selected', true);
        $('#vch-level-3').val(''+levelThird+'');
        // Add third level categories if second level category is valid
        const entityId = $('#vch-level-2').find(':selected').val();
        await getChildrenCategories(token, entityId, "third");
        $('#vch-level-2').parent('.form-field').addClass("form-field--success");
    } else {
        // Disable and clear third select if second level category is invalid
        $('#vch-level-3').prop('disabled', true);
        $('#vch-level-3 option[value="'+levelThird+'"]').prop('selected', true);
        $('#vch-level-3').val(levelThird);
        $('#vch-level-2').parent('.form-field').removeClass("form-field--success");
    }
}


async function thirdLevelSelection() {
    $('#vch-select-search').removeClass("disabled");
    if($('#vch-level-3').find(':selected').val() != levelThird) {
        $('#vch-level-3').parent('.form-field').addClass("form-field--success");
    } else {
        $('#vch-level-3').parent('.form-field').removeClass("form-field--success");
    }
}

$(document).ready(function () {
    $('#reveal-btn').click(function () {
        var section = $('.hidden-section');

        if (section.is(':visible')) {
            section.removeClass('show');
            setTimeout(function () {
                section.hide();
                $("body").removeClass("category-filter-sec-active");
            }, 10);
        } else {
            section.show();
            setTimeout(function () {
                section.addClass('show');
                $("body").addClass("category-filter-sec-active");
            }, 10);
        }
    });
    $(document).on('click', function(event) {
        const $categoryFilter = $('.top-nav-right-section.category-filter-right-active');
        const $elementToHide = $('.hidden-section');

        if (!$categoryFilter.is(event.target) && $categoryFilter.has(event.target).length === 0) {
            $elementToHide.hide(); // Hide the element
            $elementToHide.removeClass('show');
            $("body").removeClass("category-filter-sec-active");
        }   
    }); 
});
