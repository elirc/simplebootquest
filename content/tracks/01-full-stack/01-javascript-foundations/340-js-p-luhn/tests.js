test('valid test card numbers', () => {
  expect(luhnValid('4539 3195 0343 6467')).toBe(true);
  expect(luhnValid('79927398713')).toBe(true);
});
test('invalid', () => {
  expect(luhnValid('8273 1232 7352 0569')).toBe(false);
  expect(luhnValid('79927398710')).toBe(false);
});
test('format', () => {
  expect(luhnValid('0')).toBe(false);
  expect(luhnValid('4539-3195')).toBe(false);
});
