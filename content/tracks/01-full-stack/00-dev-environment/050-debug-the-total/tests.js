test('adds every line', () => {
  expect(cartTotal([{ priceCents: 1000, quantity: 2 }, { priceCents: 250, quantity: 4 }])).toBe(3000);
});
test('discount from exactly 5000 cents', () => {
  expect(cartTotal([{ priceCents: 2500, quantity: 2 }])).toBe(4500);
});
test('discount rounds to the nearest cent', () => {
  expect(cartTotal([{ priceCents: 5555, quantity: 1 }])).toBe(5000);
});
test('empty cart', () => expect(cartTotal([])).toBe(0));
