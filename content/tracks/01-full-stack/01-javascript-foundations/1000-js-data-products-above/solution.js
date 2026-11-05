export function productsAbove(products, min) {
  return products.filter((x) => x.stock > min).map((x) => x.name);
}
