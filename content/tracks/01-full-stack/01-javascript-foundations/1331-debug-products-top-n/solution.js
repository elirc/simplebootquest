export function topProductsByStock(products, n) {
  return [...products].sort((a, b) => b.stock - a.stock).slice(0, n).map((x) => x.name);
}
