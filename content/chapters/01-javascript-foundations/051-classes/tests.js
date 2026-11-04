test('adds and merges items', () => {
  const cart = new ShoppingCart().add('pen', 2).add('book', 10, 2).add('pen', 2, 3);
  expect(cart.items()).toEqual([{ name: 'pen', price: 2, qty: 4 }, { name: 'book', price: 10, qty: 2 }]);
  expect(cart.count).toBe(6);
  expect(cart.total).toBe(28);
});

test('removes items', () => {
  const cart = new ShoppingCart().add('pen', 2).add('book', 10).remove('pen');
  expect(cart.items().map((i) => i.name)).toEqual(['book']);
});

test('items returns copies and the data is private', () => {
  const cart = new ShoppingCart().add('pen', 2);
  cart.items()[0].qty = 999;
  expect(cart.count).toBe(1);
  expect(Object.keys(cart)).toEqual([]);
});

test('empty cart', () => {
  const cart = new ShoppingCart();
  expect(cart.count).toBe(0);
  expect(cart.total).toBe(0);
});
