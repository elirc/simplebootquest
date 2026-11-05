export function topProductsByPrice(products, n) {
  return [...products].sort((a, b) => b.price - a.price).slice(0, n).map((x) => x.name);
}
