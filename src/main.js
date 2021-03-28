import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRateService from './exchangerate-service';

function convertCurrency(amount, rate) {
  return amount * rate;
}

function saveRatesInfo(response) {
  if (response instanceof Error) {
    sessionStorage.setItem('error',response);
  } else {
    let stringifiedResponse = JSON.stringify(response);
    sessionStorage.setItem('rates',stringifiedResponse);
  }
}

function showConversion(amountUsd, currencyCode) {
  let apiMessage = JSON.parse(sessionStorage.getItem('rates'));
  if (apiMessage['result']==='error') {
    $('.show-errors').text(`Error: ${apiMessage['error-type']}`);
  } else {
    if (apiMessage.conversion_rates[currencyCode]) {
      let conversionRate = apiMessage.conversion_rates[currencyCode];
      let convertedAmount = convertCurrency(amountUsd,conversionRate).toFixed(2);
      $('.show-conversion').text(`${amountUsd} USD is worth ${convertedAmount} ${currencyCode}`);
    } else {
      $('.show-errors').text(`Error: Invalid currency code`);
    }
  }
}

$(document).ready(function() {
  ExchangeRateService.getRates()
    .then(function(response) {
      saveRatesInfo(response);
    });

  $('#converter').on('submit', function(event) {
    event.preventDefault();
    $('.show-conversion').text("");
    $('.show-errors').text("");

    const userAmount = parseFloat($('#dollar-amount').val());
    const userCurrency = $('#foreign-currency').val();

    if (sessionStorage.getItem('error')) {
      $('.show-errors').text(`${sessionStorage.getItem('error')}`);
    } else {
      showConversion(userAmount, userCurrency);
    }
  
    $('#dollar-amount').val("");
    $("#foreign-currency").val("");
  });
});