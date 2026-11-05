const PRODUCTS = [
  { id: 1, name: 'Keyboard', priceCents: 8900, stock: 5 },
  { id: 2, name: 'Mouse', priceCents: 2900, stock: 1 },
];
test('valid order priced from the catalogue', () => {
  expect(prepareOrder([{ productId: 1, quantity: 2, priceCents: 1 }, { productId: 2, quantity: 1 }], PRODUCTS)).toEqual({
    ok: true,
    lines: [
      { productId: 1, name: 'Keyboard', quantity: 2, unitPriceCents: 8900, lineTotalCents: 17800 },
      { productId: 2, name: 'Mouse', quantity: 1, unitPriceCents: 2900, lineTotalCents: 2900 },
    ],
    totalCents: 20700,
  });
});
test('empty cart', () => expect(prepareOrder([], PRODUCTS)).toEqual({ ok: false, errors: ['Cart is empty'] }));
test('merges duplicates before checking stock', () => {
  expect(prepareOrder([{ productId: 2, quantity: 1 }, { productId: 2, quantity: 1 }], PRODUCTS)).toEqual({ ok: false, errors: ['Only 1 left of Mouse'] });
  const ok = prepareOrder([{ productId: 1, quantity: 2 }, { productId: 1, quantity: 3 }], PRODUCTS);
  expect(ok.lines).toEqual([{ productId: 1, name: 'Keyboard', quantity: 5, unitPriceCents: 8900, lineTotalCents: 44500 }]);
});
test('collects every error', () => {
  expect(prepareOrder([{ productId: 9, quantity: 1 }, { productId: 1, quantity: 0 }, { productId: 2, quantity: 1.5 }], PRODUCTS)).toEqual({
    ok: false,
    errors: ['Product 9 not found', 'Invalid quantity for product 1', 'Invalid quantity for product 2'],
  });
});
