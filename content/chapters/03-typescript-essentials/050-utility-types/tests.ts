const todo = { id: 1, title: 'Learn TS', done: false, createdAt: '2026-01-01' };

test('applies a patch', () => {
  expect(applyPatch(todo, { done: true })).toEqual({ ...todo, done: true });
});

test('ignores undefined values', () => {
  expect(applyPatch(todo, { title: undefined, done: true }).title).toBe('Learn TS');
});

test('never changes the id', () => {
  expect(applyPatch(todo, { id: 99, title: 'x' }).id).toBe(1);
});

test('does not mutate the entity', () => {
  const copy = { ...todo };
  applyPatch(copy, { done: true });
  expect(copy.done).toBe(false);
});

test('creates a preview', () => {
  expect(toPreview(todo)).toEqual({ id: 1, title: 'Learn TS' });
});

test('diffs two versions', () => {
  expect(diff(todo, { ...todo, done: true, title: 'Learn TypeScript' })).toEqual({ done: true, title: 'Learn TypeScript' });
  expect(diff(todo, { ...todo })).toEqual({});
});
