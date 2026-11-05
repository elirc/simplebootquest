test('just now', () => expect(timeAgo(59)).toBe('just now'));
test('minutes', () => {
  expect(timeAgo(60)).toBe('1 minute ago');
  expect(timeAgo(3599)).toBe('59 minutes ago');
});
test('hours and days', () => {
  expect(timeAgo(7200)).toBe('2 hours ago');
  expect(timeAgo(86400 * 3 + 5)).toBe('3 days ago');
});
test('months', () => expect(timeAgo(86400 * 65)).toBe('2 months ago'));
