test('active', () => {
  expect(active([{ id: 1, done: true }, { id: 2, done: false }])).toEqual([{ id: 2, done: false }]);
});

test('compact', () => {
  expect(compact([0, 1, '', 'a', null, undefined, NaN, false, true])).toEqual([1, 'a', true]);
});

test('search', () => {
  const users = [{ name: 'Ada Lovelace' }, { name: 'Grace Hopper' }];
  expect(search(users, 'ADA')).toEqual([{ name: 'Ada Lovelace' }]);
  expect(search(users, '')).toHaveLength(2);
});

test('between', () => expect(between([1, 5, 10, 15], 5, 10)).toEqual([5, 10]));

test('withoutIds', () => {
  expect(withoutIds([{ id: 1 }, { id: 2 }, { id: 3 }], [1, 3])).toEqual([{ id: 2 }]);
});
