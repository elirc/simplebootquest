const people = Object.freeze([Object.freeze({ id: 1, name: 'Ada', email: ' ADA@X.IO ' }), Object.freeze({ id: 2, name: 'Grace', email: 'g@x.io' })]);

test('ids', () => expect(ids(people)).toEqual([1, 2]));

test('toOptions', () => {
  expect(toOptions(people)).toEqual([{ value: 1, label: 'Ada' }, { value: 2, label: 'Grace' }]);
});

test('withIndex', () => {
  expect(withIndex(['a', 'b'])).toEqual([{ index: 0, item: 'a' }, { index: 1, item: 'b' }]);
});

test('normalizeEmails does not mutate', () => {
  expect(normalizeEmails(people)[0]).toEqual({ id: 1, name: 'Ada', email: 'ada@x.io' });
  expect(people[0].email).toBe(' ADA@X.IO ');
});
