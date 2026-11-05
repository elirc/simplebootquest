test('numbers', () => {
  expect(formatValue(1234.5)).toBe('1,234.5');
  expect(formatValue(2 / 3)).toBe('0.67');
});
test('dates', () => expect(formatValue(new Date('2026-03-05T22:00:00Z'))).toBe('2026-03-05'));
test('lists', () => expect(formatValue([1000, new Date('2026-01-01T00:00:00Z')])).toBe('1,000, 2026-01-01'));
