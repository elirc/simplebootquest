const defaults = Object.freeze({ theme: { mode: 'light', accent: 'blue' }, pageSize: 20, tags: ['a'] });
test('merges nested objects', () => {
  expect(deepMerge(defaults, { theme: { mode: 'dark' } })).toEqual({ theme: { mode: 'dark', accent: 'blue' }, pageSize: 20, tags: ['a'] });
});
test('arrays and primitives replace', () => {
  expect(deepMerge(defaults, { tags: ['b'], pageSize: 50 })).toMatchObject({ tags: ['b'], pageSize: 50 });
});
test('ignores undefined and does not mutate', () => {
  expect(deepMerge(defaults, { pageSize: undefined }).pageSize).toBe(20);
  expect(defaults.theme.mode).toBe('light');
});
