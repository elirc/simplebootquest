test('formats cents as dollars', () => {
  expect(formatPrice(1250)).toBe('$12.50');
  expect(formatPrice(5)).toBe('$0.05');
  expect(formatPrice(0)).toBe('$0.00');
});

test('supports other currencies', () => {
  expect(formatPrice(999, '€')).toBe('€9.99');
});

test('formats negatives', () => {
  expect(formatPrice(-300)).toBe('-$3.00');
});

test('parses positive whole numbers', () => {
  expect(parseQuantity('3')).toBe(3);
  expect(parseQuantity('  12 ')).toBe(12);
});

test('rejects everything else', () => {
  for (const bad of ['abc', '2.5', '0', '-1', '', '1e3', '3 apples']) {
    expect(parseQuantity(bad)).toBeNull();
  }
});
