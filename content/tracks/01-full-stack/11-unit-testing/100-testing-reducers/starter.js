test('adds an item', () => {
  const state = { items: [], coupon: null };
  expect(cartReducer(state, { type: 'add', sku: 'pen' }).items).toEqual([{ sku: 'pen', qty: 1 }]);
});
