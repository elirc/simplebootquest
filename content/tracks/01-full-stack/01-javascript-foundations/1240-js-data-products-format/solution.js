export function describeProducts(products) {
  return products.map((x) => `${x.name} (${x.stock})`);
}
