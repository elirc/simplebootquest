const order = { id: 7, customer: { name: 'Ada', address: { city: 'London' } }, items: [{ sku: 'A1' }], note: null };

test('get follows paths', () => {
  expect(get(order, 'customer.address.city')).toBe('London');
  expect(get(order, 'items.0.sku')).toBe('A1');
  expect(get(order, 'id')).toBe(7);
});

test('get returns the fallback for missing paths', () => {
  expect(get(order, 'customer.phone', 'n/a')).toBe('n/a');
  expect(get(order, 'note.text', '?')).toBe('?');
  expect(get(order, 'items.5.sku', 'none')).toBe('none');
});

test('set returns a new object', () => {
  const next = set(order, 'customer.address.city', 'Paris');
  expect(next.customer.address.city).toBe('Paris');
  expect(order.customer.address.city).toBe('London');
  expect(next.customer.name).toBe('Ada');
});

test('set creates missing levels', () => {
  expect(set({}, 'a.b.c', 1)).toEqual({ a: { b: { c: 1 } } });
});

test('countKeys', () => {
  expect(countKeys({ a: 1, b: { c: 2, d: { e: 3 } }, f: [1, 2] })).toBe(6);
});
