test('percent coupon', () => expect(applyCoupon(5000, { type: 'percent', value: 10 })).toBe(500));
test('percent rounds down', () => expect(applyCoupon(999, { type: 'percent', value: 15 })).toBe(149));
test('percent cap', () => {
  expect(applyCoupon(10000, { type: 'percent', value: 20, maxCents: 1000 })).toBe(1000);
  expect(applyCoupon(4000, { type: 'percent', value: 20, maxCents: 1000 })).toBe(800);
});
test('fixed coupon never exceeds the subtotal', () => {
  expect(applyCoupon(2000, { type: 'fixed', value: 500 })).toBe(500);
  expect(applyCoupon(300, { type: 'fixed', value: 500 })).toBe(300);
});
test('minimum spend boundary', () => {
  const c = { type: 'fixed', value: 500, minSpendCents: 3000 };
  expect(applyCoupon(2999, c)).toBe(0);
  expect(applyCoupon(3000, c)).toBe(500);
});
test('no coupon or unknown type', () => {
  expect(applyCoupon(1000, null)).toBe(0);
  expect(applyCoupon(1000, { type: 'bogo', value: 1 })).toBe(0);
});
