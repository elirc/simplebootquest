test('sumAll', () => {
  expect(sumAll(1, 2, 3)).toBe(6);
  expect(sumAll()).toBe(0);
});

test('joinWith skips empty parts', () => {
  expect(joinWith('/', 'api', 'todos', '42')).toBe('api/todos/42');
  expect(joinWith(' ', 'Ada', '', null, 'Lovelace', undefined)).toBe('Ada Lovelace');
});

test('maxOf', () => {
  expect(maxOf([3, 9, 1])).toBe(9);
  expect(maxOf([])).toBe(-Infinity);
});
