// mutant: negative subtotals are accepted
function shippingCost(subtotalCents, country) {
  
  if (subtotalCents >= 5000) return 0;
  return country === 'GB' ? 399 : 999;
}
