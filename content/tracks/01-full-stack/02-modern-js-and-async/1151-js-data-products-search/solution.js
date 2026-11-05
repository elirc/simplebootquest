export function searchProducts(products, query) {
  const q = query.trim().toLowerCase();
  return products.filter((x) => x.name.toLowerCase().includes(q)).map((x) => x.name);
}
