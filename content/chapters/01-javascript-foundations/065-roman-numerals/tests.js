test('toRoman', () => {
  expect(toRoman(3)).toBe('III');
  expect(toRoman(4)).toBe('IV');
  expect(toRoman(58)).toBe('LVIII');
  expect(toRoman(1994)).toBe('MCMXCIV');
  expect(toRoman(3999)).toBe('MMMCMXCIX');
});

test('fromRoman', () => {
  expect(fromRoman('IX')).toBe(9);
  expect(fromRoman('MCMXCIV')).toBe(1994);
});

test('round trip', () => {
  for (let n = 1; n < 400; n += 7) expect(fromRoman(toRoman(n))).toBe(n);
});
