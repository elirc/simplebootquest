test('encodes chunks with hex sizes', () => expect(encodeChunked(['Hello', ' world'])).toBe('5\r\nHello\r\n6\r\n world\r\n0\r\n\r\n'));
test('sizes are hexadecimal', () => expect(encodeChunked(['x'.repeat(26)]).startsWith('1a\r\n')).toBe(true));
test('skips empty chunks', () => expect(encodeChunked(['a', '', 'b'])).toBe('1\r\na\r\n1\r\nb\r\n0\r\n\r\n'));
test('empty body', () => expect(encodeChunked([])).toBe('0\r\n\r\n'));
test('round trip', () => {
  const parts = ['{"items":[', '1,2,3', ']}', 'x'.repeat(300)];
  expect(decodeChunked(encodeChunked(parts))).toBe(parts.join(''));
});
test('decodes uppercase hex', () => expect(decodeChunked('A\r\n0123456789\r\n0\r\n\r\n')).toBe('0123456789'));
test('malformed input', () => {
  expect(() => decodeChunked('zz\r\nhello\r\n0\r\n\r\n')).toThrow('Malformed chunk');
  expect(() => decodeChunked('5\r\nhi\r\n0\r\n\r\n')).toThrow('Malformed chunk');
  expect(() => decodeChunked('5\r\nhello')).toThrow('Malformed chunk');
});
