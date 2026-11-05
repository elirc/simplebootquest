test('bytes', () => expect(formatBytes(512)).toBe('512 B'));
test('kilobytes', () => {
  expect(formatBytes(1536)).toBe('1.5 KB');
  expect(formatBytes(2048)).toBe('2 KB');
});
test('larger units', () => {
  expect(formatBytes(3.2 * 1024 * 1024)).toBe('3.2 MB');
  expect(formatBytes(1024 ** 3)).toBe('1 GB');
});
