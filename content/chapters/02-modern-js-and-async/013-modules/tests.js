test('named exports', () => {
  expect(exports.TAX_RATE).toBe(0.2);
  expect(exports.withTax(10)).toBe(12);
  expect(exports.withTax(9.99)).toBe(11.99);
});

test('default export', () => {
  expect(exports.default(12)).toBe('$12.00');
});
