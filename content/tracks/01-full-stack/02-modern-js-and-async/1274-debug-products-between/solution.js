export function productsInRange(products, low, high) {
  return products.filter((x) => x.stock >= low && x.stock <= high).map((x) => x.name);
}
