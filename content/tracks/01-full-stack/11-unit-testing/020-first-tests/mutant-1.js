// mutant: the percentage is applied as a fraction twice
function applyDiscount(priceCents, percent) {
  const discounted = Math.round(priceCents * (1 - percent / 10000));
  return Math.max(0, discounted);
}
