import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$('#converter').on('submit', function(event) {
  event.preventDefault();
  const amountUsd = parseInt($('#dollar-amount').val());
  const currencyCode = $('#foreign-currency').val();
  console.log(amountUsd);
  console.log(currencyCode);
});