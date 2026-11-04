function frozenCart() {
  const items = [Object.freeze({ id: 1, price: 10 }), Object.freeze({ id: 2, price: 25 })];
  return Object.freeze({ owner: 'ada', items: Object.freeze(items) });
}

test('addItem returns a new cart', () => {
  const cart = frozenCart();
  const next = addItem(cart, { id: 3, price: 5 });
  expect(next.items.map((i) => i.id)).toEqual([1, 2, 3]);
  expect(next.owner).toBe('ada');
  expect(cart.items).toHaveLength(2);
});

test('removeItem returns a new cart', () => {
  const next = removeItem(frozenCart(), 1);
  expect(next.items.map((i) => i.id)).toEqual([2]);
});

test('applyDiscount returns new items', () => {
  const cart = frozenCart();
  const next = applyDiscount(cart, 10);
  expect(next.items.map((i) => i.price)).toEqual([9, 22.5]);
  expect(cart.items[0].price).toBe(10);
});
