const empty = Object.freeze({ items: Object.freeze([]), coupon: null });
const run = (actions) => actions.reduce(cartReducer, empty);

test('added increments existing items', () => {
  const s = run([{ type: 'added', sku: 'pen', price: 2 }, { type: 'added', sku: 'pen', price: 2 }, { type: 'added', sku: 'cup', price: 5 }]);
  expect(s.items).toEqual([{ sku: 'pen', price: 2, qty: 2 }, { sku: 'cup', price: 5, qty: 1 }]);
});

test('qtyChanged sets or removes', () => {
  const s = run([{ type: 'added', sku: 'pen', price: 2 }, { type: 'qtyChanged', sku: 'pen', qty: 5 }]);
  expect(s.items[0].qty).toBe(5);
  expect(cartReducer(s, { type: 'qtyChanged', sku: 'pen', qty: 0 }).items).toEqual([]);
});

test('removed, coupon and cleared', () => {
  let s = run([{ type: 'added', sku: 'a', price: 10 }, { type: 'added', sku: 'b', price: 20 }, { type: 'removed', sku: 'a' }]);
  expect(s.items.map((i) => i.sku)).toEqual(['b']);
  s = cartReducer(s, { type: 'couponApplied', code: 'SAVE10' });
  expect(cartTotal(s)).toBe(18);
  expect(cartReducer(s, { type: 'cleared' })).toEqual({ items: [], coupon: null });
});

test('cartTotal without coupon', () => {
  expect(cartTotal(run([{ type: 'added', sku: 'a', price: 1.1 }, { type: 'qtyChanged', sku: 'a', qty: 3 }]))).toBe(3.3);
});
