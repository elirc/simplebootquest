export function summariseProducts(products) {
  return products.map(({ id, name, stock }) => ({ id, name, stock }));
}
