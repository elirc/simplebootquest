test('the classic floating-point case', () => {
  expect(isCloseTo(0.1 + 0.2, 0.3)).toBe(true);
  expect(0.1 + 0.2 === 0.3).toBe(false);
});
test('default precision is 2 digits', () => {
  expect(isCloseTo(1.004, 1)).toBe(true);
  expect(isCloseTo(1.006, 1)).toBe(false);
});
test('custom precision', () => {
  expect(isCloseTo(3.14159, 3.14, 2)).toBe(true);
  expect(isCloseTo(3.14159, 3.14, 4)).toBe(false);
  expect(isCloseTo(1234, 1200, -2)).toBe(true);
});
test('special values', () => {
  expect(isCloseTo(Infinity, Infinity)).toBe(true);
  expect(isCloseTo(-Infinity, Infinity)).toBe(false);
  expect(isCloseTo(NaN, NaN)).toBe(false);
});
test('messages', () => {
  expect(closeToMessage(0.1 + 0.2, 0.3)).toBeNull();
  expect(closeToMessage(0.1 + 0.2, 0.4)).toBe('expected 0.30000000000000004 to be close to 0.4 (± 0.005), difference 0.09999999999999998');
});
