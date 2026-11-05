test('equal strings', () => {
  expect(safeEqual('s3cr3t-token', 's3cr3t-token')).toBe(true);
  expect(safeEqual('', '')).toBe(true);
});
test('different strings', () => {
  expect(safeEqual('s3cr3t-token', 's3cr3t-tokeN')).toBe(false);
  expect(safeEqual('a', 'b')).toBe(false);
});
test('different lengths', () => {
  expect(safeEqual('abc', 'abcd')).toBe(false);
  expect(safeEqual('abcd', 'abc')).toBe(false);
  expect(safeEqual('', 'x')).toBe(false);
});
test('does not compare whole strings with ===', () => {
  expect(/a\s*===\s*b|b\s*===\s*a/.test(safeEqual.toString())).toBe(false);
});
