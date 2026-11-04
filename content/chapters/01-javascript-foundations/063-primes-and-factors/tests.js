test('isPrime', () => {
  expect([0, 1, 2, 3, 4, 17, 21, 97].map(isPrime)).toEqual([false, false, true, true, false, true, false, true]);
});

test('primesUpTo', () => {
  expect(primesUpTo(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  expect(primesUpTo(1)).toEqual([]);
});

test('gcd', () => {
  expect(gcd(48, 18)).toBe(6);
  expect(gcd(17, 5)).toBe(1);
  expect(gcd(10, 0)).toBe(10);
});

test('primeFactors', () => {
  expect(primeFactors(12)).toEqual([2, 2, 3]);
  expect(primeFactors(97)).toEqual([97]);
  expect(primeFactors(360)).toEqual([2, 2, 2, 3, 3, 5]);
});
