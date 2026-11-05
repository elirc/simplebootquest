const PEN = { id: 'pen', name: 'Pen', priceCents: 250 };
const BOOK = { id: 'book', name: 'Book', priceCents: 1000 };
const EMPTY = Object.freeze({ items: Object.freeze([]) });
test('add and increment', () => {
  let s = cartReducer(EMPTY, { type: 'add', product: PEN });
  s = cartReducer(s, { type: 'add', product: BOOK });
  s = cartReducer(s, { type: 'add', product: PEN });
  expect(s.items).toEqual([{ ...PEN, qty: 2 }, { ...BOOK, qty: 1 }]);
});
test('never mutates', () => {
  const s1 = cartReducer(EMPTY, { type: 'add', product: PEN });
  const frozen = Object.freeze({ items: Object.freeze(s1.items.map((i) => Object.freeze(i))) });
  const s2 = cartReducer(frozen, { type: 'add', product: PEN });
  expect(frozen.items[0].qty).toBe(1);
  expect(s2.items[0].qty).toBe(2);
});
test('setQty, remove and clear', () => {
  let s = { items: [{ ...PEN, qty: 1 }, { ...BOOK, qty: 1 }] };
  expect(cartReducer(s, { type: 'setQty', id: 'pen', qty: 5 }).items[0].qty).toBe(5);
  expect(cartReducer(s, { type: 'setQty', id: 'pen', qty: 0 }).items.map((i) => i.id)).toEqual(['book']);
  expect(cartReducer(s, { type: 'remove', id: 'book' }).items.map((i) => i.id)).toEqual(['pen']);
  expect(cartReducer(s, { type: 'clear' })).toEqual({ items: [] });
});
test('unknown action returns the same object', () => {
  const s = { items: [] };
  expect(cartReducer(s, { type: 'nope' }) === s).toBe(true);
});
test('totals and summary', () => {
  const s = { items: [{ ...PEN, qty: 2 }, { ...BOOK, qty: 1 }] };
  expect(cartTotals(s)).toEqual({ count: 3, totalCents: 1500 });
  expect(text(render(<CartSummary state={s} />))).toBe('3 item(s): $15.00');
  expect(text(render(<CartSummary state={EMPTY} />))).toBe('Your cart is empty');
});
