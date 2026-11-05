export function topProductsByStock(products, n) {
  return [...products].sort((a, b) => a.stock - b.stock).slice(0, n).map((x) => x.name);
}
