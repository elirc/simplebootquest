test('small values', () => expect([0, 1, 5, 10].map(factorial)).toEqual([1, 1, 120, 3628800]));
test('rejects invalid input', () => {
  expect(() => factorial(-1)).toThrow(RangeError);
  expect(() => factorial(2.5)).toThrow(RangeError);
});
test('uses BigInt past 20', () => {
  expect(factorial(20)).toBe(2432902008176640000);
  expect(factorial(25)).toBe(15511210043330985984000000n);
});
