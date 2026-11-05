test('takes 10% off 5000 cents', () => {
  expect(applyDiscount(5000, 10)).toBe(4500);
});

test('0% leaves the price unchanged', () => {
  expect(applyDiscount(1234, 0)).toBe(1234);
});

test('100% makes it free', () => {
  expect(applyDiscount(1234, 100)).toBe(0);
});

test('rounds to the nearest cent', () => {
  expect(applyDiscount(999, 15)).toBe(849);
  expect(applyDiscount(1000, 33.35)).toBe(667);
});
