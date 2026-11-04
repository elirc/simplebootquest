test('accepts a minimal valid todo and applies defaults', () => {
  expect(parseTodoInput({ title: '  Write tests ' })).toEqual({ ok: true, data: { title: 'Write tests', done: false, tags: [] } });
});

test('accepts all fields', () => {
  expect(parseTodoInput({ title: 'x', done: true, tags: ['a'] })).toEqual({ ok: true, data: { title: 'x', done: true, tags: ['a'] } });
});

test('rejects non-objects', () => {
  for (const bad of [null, 'todo', 42, [1, 2], undefined]) {
    expect(parseTodoInput(bad)).toEqual({ ok: false, errors: ['Input must be an object'] });
  }
});

test('requires a title', () => {
  expect(parseTodoInput({})).toEqual({ ok: false, errors: ['title is required'] });
  expect(parseTodoInput({ title: '   ' })).toEqual({ ok: false, errors: ['title is required'] });
  expect(parseTodoInput({ title: 5 })).toEqual({ ok: false, errors: ['title is required'] });
});

test('limits title length', () => {
  expect(parseTodoInput({ title: 'a'.repeat(101) })).toEqual({ ok: false, errors: ['title must be at most 100 characters'] });
  expect(parseTodoInput({ title: 'a'.repeat(100) }).ok).toBe(true);
});

test('collects every error', () => {
  expect(parseTodoInput({ done: 'yes', tags: [1] })).toEqual({
    ok: false,
    errors: ['title is required', 'done must be a boolean', 'tags must be an array of strings'],
  });
});
