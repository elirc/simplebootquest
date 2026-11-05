function applyDiscount(priceCents, percent) {
  const discounted = Math.round(priceCents * (1 - percent / 100));
  return Math.max(0, discounted);
}
