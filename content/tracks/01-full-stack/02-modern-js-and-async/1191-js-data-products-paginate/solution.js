export function pageOfProducts(products, page, size) {
  const totalPages = Math.ceil(products.length / size);
  const items = products.slice((page - 1) * size, page * size).map((x) => x.name);
  return { items, page, totalPages };
}
