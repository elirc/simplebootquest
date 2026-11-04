test('overrides win', () => {
  expect(mergeSettings({ theme: 'light', size: 14 }, { theme: 'dark' })).toEqual({ theme: 'dark', size: 14 });
});

test('undefined overrides are ignored', () => {
  const merged = mergeSettings({ theme: 'light', size: 14 }, { theme: undefined, size: 16 });
  expect(merged.theme).toBe('light');
  expect(merged.size).toBe(16);
});

test('does not mutate the defaults', () => {
  const defaults = { theme: 'light' };
  mergeSettings(defaults, { theme: 'dark' });
  expect(defaults.theme).toBe('light');
});

test('removes the password', () => {
  const user = { id: 1, name: 'Ada', password: 'hunter2' };
  const safe = withoutPassword(user);
  expect(safe).toEqual({ id: 1, name: 'Ada' });
  expect('password' in safe).toBe(false);
  expect(user.password).toBe('hunter2');
});

test('toPair returns [key, value]', () => {
  expect(toPair({ key: 'a', value: 1 })).toEqual(['a', 1]);
});
