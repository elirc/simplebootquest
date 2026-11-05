test('encodes like a JWT header', () => expect(encode('{"alg":"HS256","typ":"JWT"}')).toBe('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'));
test('no padding, URL-safe alphabet', () => {
  expect(encode('a')).toBe('YQ');
  expect(encode('??>')).toBe('Pz8-');
  expect(encode('???')).toBe('Pz8_');
});
test('unicode round trip', () => {
  for (const s of ['', 'héllo wörld', '日本語', '🎉 party']) expect(decode(encode(s))).toBe(s);
});
test('decodes unpadded input', () => expect(decode('eyJzdWIiOiI0MiJ9')).toBe('{"sub":"42"}'));
test('rejects invalid input', () => {
  expect(() => decode('abc+def')).toThrow('Invalid base64url');
  expect(() => decode('a b')).toThrow('Invalid base64url');
  expect(() => decode('A')).toThrow('Invalid base64url');
});
