test('formatMoney', () => {
  expect(formatMoney(123450, 'USD', 'en-US')).toBe('$1,234.50');
  expect(formatMoney(999, 'GBP', 'en-GB')).toBe('£9.99');
});

test('compactNumber', () => {
  expect(compactNumber(1200)).toBe('1.2K');
  expect(compactNumber(3400000)).toBe('3.4M');
  expect(compactNumber(999)).toBe('999');
});

test('listNames', () => {
  expect(listNames(['Ada'])).toBe('Ada');
  expect(listNames(['Ada', 'Grace'])).toBe('Ada and Grace');
  expect(listNames(['Ada', 'Grace', 'Linus'])).toBe('Ada, Grace, and Linus');
});

test('formatDate', () => {
  expect(formatDate('2026-03-05')).toBe('5 March 2026');
});
