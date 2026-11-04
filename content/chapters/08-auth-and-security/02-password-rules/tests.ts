const ctx = { email: 'ada.lovelace@example.com', name: 'Ada' };

test('accepts a good passphrase', () => {
  expect(checkPassword('correct horse battery staple', ctx)).toEqual([]);
});

test('enforces length', () => {
  expect(checkPassword('short', ctx)).toContain('Must be at least 8 characters');
  expect(checkPassword('x'.repeat(100) + 'y'.repeat(29), ctx)).toEqual(['Must be at most 128 characters']);
});

test('blocks common passwords case-insensitively', () => {
  expect(checkPassword('PASSWORD', ctx)).toEqual(['Too common']);
});

test('blocks personal info', () => {
  expect(checkPassword('my-ada.lovelace-pass', ctx)).toContain('Must not contain your name or email');
  expect(checkPassword('i-am-ADA-forever', ctx)).toContain('Must not contain your name or email');
});

test('ignores very short names', () => {
  expect(checkPassword('the bo sky is blue', { email: 'bo@x.com', name: 'Bo' })).toEqual([]);
});

test('blocks repetitive passwords', () => {
  expect(checkPassword('aaaaaaaaaa', ctx)).toEqual(['Too repetitive']);
});

test('returns every problem', () => {
  expect(checkPassword('aaa', { email: 'aaa@x.com' })).toEqual([
    'Must be at least 8 characters',
    'Must not contain your name or email',
    'Too repetitive',
  ]);
});

test('rates strength by length', () => {
  expect(passwordStrength('abc')).toBe('weak');
  expect(passwordStrength('abcdefghij')).toBe('ok');
  expect(passwordStrength('a long passphrase!')).toBe('strong');
});
