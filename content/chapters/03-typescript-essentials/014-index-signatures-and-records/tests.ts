const tasks = [
  { title: 'Design', status: 'done' },
  { title: 'Build', status: 'doing' },
  { title: 'Test', status: 'todo' },
  { title: 'Docs', status: 'todo' },
];

test('countStatuses includes zeros', () => {
  expect(countStatuses(tasks)).toEqual({ todo: 2, doing: 1, done: 1 });
  expect(countStatuses([])).toEqual({ todo: 0, doing: 0, done: 0 });
});

test('columns', () => {
  expect(columns(tasks)).toEqual({ todo: ['Test', 'Docs'], doing: ['Build'], done: ['Design'] });
});

test('lookup keeps zero', () => {
  expect(lookup({ a: 0, b: 5 }, 'a', 99)).toBe(0);
  expect(lookup({ a: 0 }, 'z', 99)).toBe(99);
});
