// mutant: rounds down instead of to the nearest cent
function applyDiscount(priceCents, percent) {
  const discounted = Math.floor(priceCents * (1 - percent / 100));
  return Math.max(0, discounted);
}
