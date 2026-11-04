test('encode', () => {
  expect(encode('aaabccdddd')).toBe('3ab2c4d');
  expect(encode('abc')).toBe('abc');
  expect(encode('')).toBe('');
  expect(encode('aaaaaaaaaaaa')).toBe('12a');
});

test('decode', () => {
  expect(decode('3ab2c4d')).toBe('aaabccdddd');
  expect(decode('12a')).toBe('aaaaaaaaaaaa');
});

test('round trip', () => {
  const s = 'WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW';
  expect(decode(encode(s))).toBe(s);
});
