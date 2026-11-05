test('whole dollars', () => expect(parseMoney('12')).toBe(1200));
test('one decimal place means tens of cents', () => expect(parseMoney('12.5')).toBe(1250));
test('two decimal places', () => expect(parseMoney('0.07')).toBe(7));
test('dollar sign and thousands separators', () => {
  expect(parseMoney('$1,234.56')).toBe(123456);
  expect(parseMoney('1,234,567.89')).toBe(123456789);
});
test('negative amounts', () => expect(parseMoney('-$5.00')).toBe(-500));
test('whitespace', () => expect(parseMoney('  3.10 ')).toBe(310));
test('invalid input', () => {
  for (const bad of ['', 'abc', '1.234', '12.', '$', '1,23']) expect(() => parseMoney(bad)).toThrow('Invalid amount');
});
