test('emailDomain', () => {
  expect(emailDomain('ada@example.com')).toBe('example.com');
  expect(emailDomain('not-an-email')).toBeNull();
});

test('truncate leaves short text alone', () => {
  expect(truncate('hello', 5)).toBe('hello');
});

test('truncate shortens long text to exactly max characters', () => {
  expect(truncate('hello world', 6)).toBe('hello…');
  expect(truncate('hello world', 6)).toHaveLength(6);
});

test('fileExtension uses the last dot', () => {
  expect(fileExtension('Photo.JPG')).toBe('jpg');
  expect(fileExtension('archive.tar.gz')).toBe('gz');
  expect(fileExtension('README')).toBe('');
});
