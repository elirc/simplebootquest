test('aggregates and sorts', () => {
  expect(customerTotals([
    { customer: 'bea', items: [{ price: 500, qty: 2 }] },
    { customer: 'al', items: [{ price: 300, qty: 1 }, { price: 200, qty: 1 }] },
    { customer: 'cy', items: [{ price: 1000, qty: 1 }] },
    { customer: 'al', items: [{ price: 500, qty: 1 }] },
  ])).toEqual([
    { customer: 'al', total: 1000, orders: 2 },
    { customer: 'bea', total: 1000, orders: 1 },
    { customer: 'cy', total: 1000, orders: 1 },
  ]);
});
test('empty', () => expect(customerTotals([])).toEqual([]));
