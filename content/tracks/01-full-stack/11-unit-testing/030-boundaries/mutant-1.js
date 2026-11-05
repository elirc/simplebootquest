// mutant: free shipping starts one cent too late (> instead of >=)
function shippingCost(subtotalCents, country) {
  if (subtotalCents < 0) throw new RangeError('Subtotal cannot be negative');
  if (subtotalCents > 5000) return 0;
  return country === 'GB' ? 399 : 999;
}
