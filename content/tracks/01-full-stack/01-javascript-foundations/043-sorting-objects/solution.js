function sortByPrice(products) {
  return [...products].sort((a, b) => a.price - b.price);
}

function sortByName(products) {
  return [...products].sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
}

function sortForShop(products) {
  return [...products].sort(
    (a, b) => Number(b.inStock) - Number(a.inStock) || b.price - a.price || a.name.localeCompare(b.name),
  );
}
