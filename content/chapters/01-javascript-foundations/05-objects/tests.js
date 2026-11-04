test('counts words', () => {
  expect(countWords('the cat and the hat')).toEqual({ the: 2, cat: 1, and: 1, hat: 1 });
});

test('is case-insensitive and ignores extra whitespace', () => {
  expect(countWords('  Go go   GO  ')).toEqual({ go: 3 });
});

test('empty text gives an empty object', () => {
  expect(countWords('')).toEqual({});
  expect(countWords('   ')).toEqual({});
});

test('picks only the requested keys', () => {
  const user = { id: 1, name: 'Ada', password: 'secret' };
  expect(pick(user, ['id', 'name'])).toEqual({ id: 1, name: 'Ada' });
});

test('ignores keys that do not exist and does not mutate', () => {
  const user = { id: 1 };
  const picked = pick(user, ['id', 'nope']);
  expect(picked).toEqual({ id: 1 });
  expect(picked).not.toBe(user);
});
