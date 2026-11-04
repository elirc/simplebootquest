const products = Object.freeze([
  { name: 'pear', price: 3, inStock: true },
  { name: 'Apple', price: 5, inStock: false },
  { name: 'banana', price: 3, inStock: true },
  { name: 'cherry', price: 10, inStock: true },
]);

test('sortByPrice', () => {
  expect(sortByPrice(products).map((p) => p.price)).toEqual([3, 3, 5, 10]);
});

test('sortByName ignores case', () => {
  expect(sortByName(products).map((p) => p.name)).toEqual(['Apple', 'banana', 'cherry', 'pear']);
});

test('sortForShop uses three keys', () => {
  expect(sortForShop(products).map((p) => p.name)).toEqual(['cherry', 'banana', 'pear', 'Apple']);
});
