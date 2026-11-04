test('shout trims, uppercases and adds !', () => {
  expect(shout('  hello ')).toBe('HELLO!');
});

test('initials uses first and last word', () => {
  expect(initials('ada lovelace')).toBe('AL');
  expect(initials('  grace   brewster hopper ')).toBe('GH');
});

test('lastChar', () => {
  expect(lastChar('abc')).toBe('c');
  expect(lastChar('')).toBe('');
});
