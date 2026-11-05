test('countChar', () => {
  expect(countChar('Banana', 'a')).toBe(3);
  expect(countChar('Banana', 'B')).toBe(1);
  expect(countChar('', 'x')).toBe(0);
});
test('mostCommonChar', () => {
  expect(mostCommonChar('Hello, world!')).toBe('l');
  expect(mostCommonChar('abab')).toBe('a');
  expect(mostCommonChar('123 !!')).toBeNull();
});
