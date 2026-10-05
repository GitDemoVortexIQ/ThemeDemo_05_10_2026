import $ from 'jquery';
import 'slick-carousel';
import utils from '@bigcommerce/stencil-utils';  

export default (function(context) {
  // Get the current price and target price
    var spanText = $('.cart-total-grandTotal span').text();
    const api = "https://api.exchangerate-api.com/v4/latest/USD";
    // Extract the value before the integer
    var valueBeforeInteger = spanText.replace(/[0-9.]+/, '').trim();  
    var targetPrice = parseFloat($('.to-price.ship-price').text().replace('$', '').replace(',', ''));
    var remainPrice = parseFloat($('.cart-total-grandTotal span').text().replace(valueBeforeInteger, '').replace(',', ''));
    var activeCurrency = $('.navUser-action--currencySelector').attr('data-active-currency-code');
    var defaultCurrency = $('.default-currency').text();
    if(activeCurrency==undefined)
    {
      activeCurrency = defaultCurrency;
    }
    var actualvalue = $(".to-price.ship-price").attr('data-shipping-price');
    var defaultCurrency = $('.default-currency').text();
    getResults();// Currency exchange functionality
    // Check the conditions and add classes accordingly
    if (remainPrice < targetPrice) {
        // Calculate the percentage of targetPrice reached
        var percentageReached = 100 - ((targetPrice - remainPrice) / targetPrice) * 100;
        var mainprice =  targetPrice - remainPrice;
        // Update the text for the away message
        var awaytext = $('.cart-shipping-main .away-message').text();
        var awaytextchanged = awaytext.replace('{remain_price}', valueBeforeInteger + mainprice.toFixed(2));
        $('.away-message').text(awaytextchanged);
        // Set the width of the progress bar
        $('.myProgresslabel').css('width', percentageReached + '%');
        $('.away-message').addClass('highlight'); // Add your desired class here
        $('.freeshipping-message').removeClass('highlight'); // Remove the class if needed
        $('.currency-icon').text(valueBeforeInteger);
        $('.ship-price').addClass('visible-currency'); 
        $('.shp-in-prgs').removeClass('qualified-free-ship');  
    } else {
        $('.freeshipping-message').text(); // Adjust message if necessary
        // Set the progress bar to 100%
        $('.myProgresslabel').css('width', '100%');
        $('.freeshipping-message').addClass('highlight'); // Add your desired class here
        $('.away-message').removeClass('highlight'); // Remove the class if needed    
        $('.currency-icon').text(valueBeforeInteger);
        $('.ship-price').addClass('visible-currency');  
        $('.shp-in-prgs').addClass('qualified-free-ship');  
    }
  
    function displayResults(currency) {
      let fromRate = currency.rates[defaultCurrency];
      let toRate = currency.rates[activeCurrency];
      let finalValue =((toRate / fromRate) * actualvalue).toFixed(2);
      $(".to-price.ship-price .currency-value").text(finalValue);
      $('.currency-value').addClass('visible-price');
  }   

  function getResults() {
    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        }).then(displayResults);
  }
});
