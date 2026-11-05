export function averagePrice(products) {
  if (products.length === 0) return null;
  const total = products.reduce((sum, x) => sum + x.price, 0);
  return Math.round((total / products.length) * 10) / 10;
}
