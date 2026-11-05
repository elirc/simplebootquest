export function topOrdersByItems(orders, n) {
  return [...orders].sort((a, b) => b.items - a.items).slice(0, n).map((x) => x.code);
}
