export function productsInRange(products, low, high) {
  return products.filter((x) => x.price >= low && x.price <= high).map((x) => x.name);
}
