export function productsByPrice(products) {
  return [...products].sort((a, b) => a.price - b.price).map((x) => x.name);
}
