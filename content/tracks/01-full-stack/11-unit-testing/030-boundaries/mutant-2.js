// mutant: free shipping starts one cent too early
function shippingCost(subtotalCents, country) {
  if (subtotalCents < 0) throw new RangeError('Subtotal cannot be negative');
  if (subtotalCents >= 4999) return 0;
  return country === 'GB' ? 399 : 999;
}
