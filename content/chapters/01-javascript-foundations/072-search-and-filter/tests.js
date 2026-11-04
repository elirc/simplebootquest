const catalogue = [
  { name: 'Red Running Shoe', price: 80, stock: 3, tags: ['sport'] },
  { name: 'Blue Sandal', price: 30, stock: 0, tags: ['summer'] },
  { name: 'Red Scarf', price: 20, stock: 10, tags: ['winter', 'wool'] },
  { name: 'Hiking Boot', price: 120, stock: 1, tags: ['sport', 'outdoor'] },
];
const names = (list) => list.map((p) => p.name);

test('no options returns everything in order', () => {
  expect(names(searchProducts(catalogue))).toEqual(names(catalogue));
});

test('query matches every word across name and tags', () => {
  expect(names(searchProducts(catalogue, { query: 'red shoe' }))).toEqual(['Red Running Shoe']);
  expect(names(searchProducts(catalogue, { query: 'SPORT' }))).toEqual(['Red Running Shoe', 'Hiking Boot']);
  expect(names(searchProducts(catalogue, { query: 'wool red' }))).toEqual(['Red Scarf']);
});

test('price bounds and stock', () => {
  expect(names(searchProducts(catalogue, { minPrice: 30, maxPrice: 100 }))).toEqual(['Red Running Shoe', 'Blue Sandal']);
  expect(names(searchProducts(catalogue, { inStockOnly: true, maxPrice: 50 }))).toEqual(['Red Scarf']);
});

test('sorting', () => {
  expect(names(searchProducts(catalogue, { sort: 'price-desc' }))[0]).toBe('Hiking Boot');
  expect(names(searchProducts(catalogue, { sort: 'name' }))).toEqual(['Blue Sandal', 'Hiking Boot', 'Red Running Shoe', 'Red Scarf']);
  expect(names(catalogue)[0]).toBe('Red Running Shoe');
});
