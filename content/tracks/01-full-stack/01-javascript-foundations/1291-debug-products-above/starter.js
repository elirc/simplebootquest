export function productsAbove(products, min) {
  return products.filter((x) => x.price >= min).map((x) => x.name);
}
