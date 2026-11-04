function searchProducts(products, options = {}) {
  const { query = '', minPrice, maxPrice, inStockOnly = false, sort } = options;
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);

  const result = products.filter((p) => {
    const haystack = [p.name, ...(p.tags ?? [])].join(' ').toLowerCase();
    if (!words.every((w) => haystack.includes(w))) return false;
    if (minPrice !== undefined && p.price < minPrice) return false;
    if (maxPrice !== undefined && p.price > maxPrice) return false;
    if (inStockOnly && p.stock <= 0) return false;
    return true;
  });

  if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
  else if (sort === 'name') result.sort((a, b) => a.name.localeCompare(b.name));
  return result;
}
