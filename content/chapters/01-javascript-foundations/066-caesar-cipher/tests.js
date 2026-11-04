test('shifts and wraps', () => {
  expect(caesar('abc xyz', 3)).toBe('def abc');
});

test('preserves case and punctuation', () => {
  expect(caesar('Hello, World!', 1)).toBe('Ifmmp, Xpsme!');
});

test('negative and large shifts', () => {
  expect(caesar('def', -3)).toBe('abc');
  expect(caesar('abc', 29)).toBe('def');
});

test('rot13 twice is the identity', () => {
  expect(rot13('Hello')).toBe('Uryyb');
  expect(rot13(rot13('Secret message!'))).toBe('Secret message!');
});
