export function pricePerCategory(products) {
  const totals = {};
  for (const x of products) totals[x.category] = (totals[x.category] ?? 0) + x.price;
  return totals;
}
