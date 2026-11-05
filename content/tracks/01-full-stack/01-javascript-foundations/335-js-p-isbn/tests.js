test('valid', () => {
  expect(isValidIsbn10('0-306-40615-2')).toBe(true);
  expect(isValidIsbn10('0 8044 2957 X')).toBe(true);
});
test('invalid checksum', () => expect(isValidIsbn10('0-306-40615-3')).toBe(false));
test('invalid format', () => {
  expect(isValidIsbn10('X306406152')).toBe(false);
  expect(isValidIsbn10('12345')).toBe(false);
});
