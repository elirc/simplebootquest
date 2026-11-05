function cartTotal(items) {
  let total = 0;
  for (let i = 1; i < items.length; i++) {
    total += items[i].priceCents * items[i].quantity;
  }
  if (total > 5000) total = Math.round(total * 0.9);
  return total;
}
