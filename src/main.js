import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateService from './exchangerate-service';

function convertCurrency(amount, rate) {
  return amount * rate;
}

function saveRatesInfo(response) {
  let stringifiedResponse = JSON.stringify(response);
  sessionStorage.setItem('rates',stringifiedResponse);
}

$(document).ready(function() {
  ExchangeRateService.getRates()
    .then(function(response) {
      saveRatesInfo(response);
    });

  $('#converter').on('submit', function(event) {
    event.preventDefault();
    const amountUsd = parseInt($('#dollar-amount').val());
    const currencyCode = $('#foreign-currency').val();
    console.log(amountUsd);
    console.log(currencyCode);

    let apiMessage = JSON.parse(sessionStorage.getItem('rates'));

    if (apiMessage.conversion_rates) {
      let conversionRate = apiMessage.conversion_rates[currencyCode];
      let convertedAmount = convertCurrency(amountUsd,conversionRate).toFixed(2);
      $('.show-conversion').text(`You have ${convertedAmount} ${currencyCode}`);
    } else {
      // $('.show-errors')
    }
  });
});