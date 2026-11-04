test('add creates todos with increasing ids', () => {
  const list = createTodoList();
  expect(list.add('Buy milk')).toEqual({ id: 1, title: 'Buy milk', done: false });
  expect(list.add('  Write code  ')).toEqual({ id: 2, title: 'Write code', done: false });
});

test('add rejects empty titles', () => {
  const list = createTodoList();
  expect(() => list.add('   ')).toThrow();
});

test('list returns a copy in insertion order', () => {
  const list = createTodoList();
  list.add('a');
  list.add('b');
  const items = list.list();
  expect(items.map((t) => t.title)).toEqual(['a', 'b']);
  items.push({ id: 99 });
  expect(list.list()).toHaveLength(2);
});

test('get finds by id', () => {
  const list = createTodoList();
  list.add('a');
  expect(list.get(1).title).toBe('a');
  expect(list.get(42)).toBeUndefined();
});

test('toggle flips done', () => {
  const list = createTodoList();
  list.add('a');
  expect(list.toggle(1).done).toBe(true);
  expect(list.toggle(1).done).toBe(false);
  expect(list.toggle(5)).toBeUndefined();
});

test('rename updates the title with validation', () => {
  const list = createTodoList();
  list.add('a');
  expect(list.rename(1, ' b ').title).toBe('b');
  expect(() => list.rename(1, '')).toThrow();
  expect(list.rename(9, 'x')).toBeUndefined();
});

test('remove deletes and never reuses ids', () => {
  const list = createTodoList();
  list.add('a');
  list.add('b');
  expect(list.remove(1)).toBe(true);
  expect(list.remove(1)).toBe(false);
  expect(list.add('c').id).toBe(3);
});

test('stats summarises the list', () => {
  const list = createTodoList();
  list.add('a');
  list.add('b');
  list.add('c');
  list.toggle(2);
  expect(list.stats()).toEqual({ total: 3, done: 1, remaining: 2 });
});

test('lists are independent', () => {
  const one = createTodoList();
  const two = createTodoList();
  one.add('a');
  expect(two.list()).toEqual([]);
});
