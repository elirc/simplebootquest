export function nthByItems(orders, n) {
  const sorted = [...orders].sort((a, b) => b.items - a.items);
  return n > 1 && n <= sorted.length ? sorted[n - 1].code : null;
}
