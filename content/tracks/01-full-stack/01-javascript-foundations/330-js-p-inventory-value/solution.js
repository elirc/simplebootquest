const totalValue = (items) => items.reduce((sum, i) => sum + i.price * i.qty, 0);

function valueByCategory(items) {
  const out = {};
  for (const i of items) out[i.category] = (out[i.category] ?? 0) + i.price * i.qty;
  return out;
}

function restockList(items, threshold) {
  return items
    .filter((i) => i.qty < threshold)
    .sort((a, b) => a.qty - b.qty || a.sku.localeCompare(b.sku))
    .map((i) => i.sku);
}
