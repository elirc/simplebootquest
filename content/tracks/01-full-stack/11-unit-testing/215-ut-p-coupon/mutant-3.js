// mutant: cap ignored
function applyCoupon(subtotalCents, coupon) {
  if (!coupon) return 0;
  if (coupon.minSpendCents !== undefined && subtotalCents < coupon.minSpendCents) return 0;
  if (coupon.type === 'percent') {
    const raw = Math.floor((subtotalCents * coupon.value) / 100);
    return coupon.maxCents === undefined ? raw : raw;
  }
  if (coupon.type === 'fixed') return Math.min(coupon.value, subtotalCents);
  return 0;
}
