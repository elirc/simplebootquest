export function ordersByItems(orders) {
  return [...orders].sort((a, b) => a.items - b.items).map((x) => x.code);
}
