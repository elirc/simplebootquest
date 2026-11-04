const Todo = object({
  title: string(),
  done: optional(boolean()),
  tags: array(string()),
  meta: optional(object({ priority: number() })),
});

function issuesOf(fn) {
  try {
    fn();
  } catch (e) {
    expect(e).toBeInstanceOf(SchemaError);
    expect(e.message).toBe('Validation failed');
    return e.issues;
  }
  throw new Error('expected a SchemaError');
}

test('parses valid data and strips unknown keys', () => {
  expect(Todo.parse({ title: 'x', tags: ['a'], extra: true })).toEqual({ title: 'x', tags: ['a'] });
  expect(Todo.parse({ title: 'x', tags: [], done: true, meta: { priority: 2 } })).toEqual({ title: 'x', tags: [], done: true, meta: { priority: 2 } });
});

test('primitives', () => {
  expect(issuesOf(() => string().parse(1))).toEqual([{ path: '', message: 'Expected string' }]);
  expect(issuesOf(() => number().parse(NaN))).toEqual([{ path: '', message: 'Expected number' }]);
});

test('collects every issue with paths', () => {
  expect(issuesOf(() => Todo.parse({ title: 5, tags: ['ok', 3, 4], meta: { priority: 'high' } }))).toEqual([
    { path: 'title', message: 'Expected string' },
    { path: 'tags.1', message: 'Expected string' },
    { path: 'tags.2', message: 'Expected string' },
    { path: 'meta.priority', message: 'Expected number' },
  ]);
});

test('root-level type errors', () => {
  expect(issuesOf(() => Todo.parse(null))).toEqual([{ path: '', message: 'Expected object' }]);
  expect(issuesOf(() => array(number()).parse('x'))).toEqual([{ path: '', message: 'Expected array' }]);
});
