function deepFreeze(o) {
  Object.values(o).forEach((v) => v && typeof v === 'object' && deepFreeze(v));
  return Object.freeze(o);
}
const cart = (...items) => deepFreeze({ items, coupon: null });

describe('cartReducer', () => {
  test('add: new item with qty 1', () => {
    expect(cartReducer(cart(), { type: 'add', sku: 'pen' })).toEqual({ items: [{ sku: 'pen', qty: 1 }], coupon: null });
  });

  test('add: increments an existing item without touching others', () => {
    const next = cartReducer(cart({ sku: 'pen', qty: 1 }, { sku: 'cup', qty: 3 }), { type: 'add', sku: 'pen' });
    expect(next.items).toEqual([{ sku: 'pen', qty: 2 }, { sku: 'cup', qty: 3 }]);
  });

  test('remove', () => {
    expect(cartReducer(cart({ sku: 'pen', qty: 1 }, { sku: 'cup', qty: 1 }), { type: 'remove', sku: 'pen' }).items).toEqual([{ sku: 'cup', qty: 1 }]);
  });

  test('setQty sets, and removes at zero or below', () => {
    const state = cart({ sku: 'pen', qty: 1 });
    expect(cartReducer(state, { type: 'setQty', sku: 'pen', qty: 5 }).items).toEqual([{ sku: 'pen', qty: 5 }]);
    expect(cartReducer(state, { type: 'setQty', sku: 'pen', qty: 0 }).items).toEqual([]);
  });

  test('applyCoupon uppercases the code', () => {
    expect(cartReducer(cart(), { type: 'applyCoupon', code: 'save10' }).coupon).toBe('SAVE10');
  });

  test('unknown actions return the same state', () => {
    const state = cart({ sku: 'pen', qty: 1 });
    expect(cartReducer(state, { type: 'nope' })).toBe(state);
  });
});
