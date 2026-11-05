export function totalPrice(products) {
  return products.reduce((sum, x) => sum + x.price, 0);
}
