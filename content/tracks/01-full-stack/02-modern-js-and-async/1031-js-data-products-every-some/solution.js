export function allProductsUnder(products, limit) {
  return products.every((x) => x.price < limit);
}
