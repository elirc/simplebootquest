test('describes sign ups', () => {
  expect(describeEvent({ type: 'user_signed_up', email: 'ada@example.com' })).toBe('ada@example.com signed up');
});

test('describes orders', () => {
  expect(describeEvent({ type: 'order_placed', orderId: 7, total: 1999 })).toBe('Order #7 placed for $19.99');
});

test('describes cancellations with and without a reason', () => {
  expect(describeEvent({ type: 'order_cancelled', orderId: 7, reason: 'changed mind' })).toBe('Order #7 cancelled: changed mind');
  expect(describeEvent({ type: 'order_cancelled', orderId: 8 })).toBe('Order #8 cancelled');
});

test('sums revenue minus cancellations', () => {
  const events = [
    { type: 'user_signed_up', email: 'a@b.c' },
    { type: 'order_placed', orderId: 1, total: 1000 },
    { type: 'order_placed', orderId: 2, total: 2500 },
    { type: 'order_placed', orderId: 3, total: 500 },
    { type: 'order_cancelled', orderId: 2 },
  ] as const;
  expect(totalRevenue([...events])).toBe(1500);
});

test('empty event list has no revenue', () => {
  expect(totalRevenue([])).toBe(0);
});
