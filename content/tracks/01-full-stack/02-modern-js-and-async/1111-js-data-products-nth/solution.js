export function nthByStock(products, n) {
  const sorted = [...products].sort((a, b) => b.stock - a.stock);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].name : null;
}
