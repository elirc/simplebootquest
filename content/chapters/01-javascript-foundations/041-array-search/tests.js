const people = [{ email: 'Ada@Example.com', name: 'Ada' }, { email: 'grace@navy.mil', name: 'Grace' }];
const todos = [
  { id: 1, done: true, due: '2026-01-01' },
  { id: 2, done: false, due: '2026-03-01' },
  { id: 3, done: false },
];

test('findUserByEmail is case-insensitive', () => {
  expect(findUserByEmail(people, 'ada@example.COM').name).toBe('Ada');
  expect(findUserByEmail(people, 'nobody@x.com')).toBeUndefined();
});

test('allCompleted', () => {
  expect(allCompleted(todos)).toBe(false);
  expect(allCompleted([{ done: true }])).toBe(true);
  expect(allCompleted([])).toBe(true);
});

test('anyOverdue ignores done and undated todos', () => {
  expect(anyOverdue(todos, '2026-02-01')).toBe(false);
  expect(anyOverdue(todos, '2026-03-02')).toBe(true);
});

test('positionOf is 1-based', () => {
  expect(positionOf(todos, 1)).toBe(1);
  expect(positionOf(todos, 3)).toBe(3);
  expect(positionOf(todos, 9)).toBeNull();
});
