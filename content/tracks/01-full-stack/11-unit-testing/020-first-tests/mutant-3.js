// mutant: returns the discount amount instead of the discounted price
function applyDiscount(priceCents, percent) {
  const discounted = Math.round(priceCents * (percent / 100));
  return Math.max(0, discounted);
}
