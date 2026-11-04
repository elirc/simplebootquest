test('hashKey is order-independent for objects', () => {
  expect(hashKey(['todos', { a: 1, b: { d: 2, c: 3 } }])).toBe(hashKey(['todos', { b: { c: 3, d: 2 }, a: 1 }]));
  expect(hashKey(['todos', 1])).not.toBe(hashKey(['todos', '1']));
});

test('matchesPrefix', () => {
  expect(matchesPrefix(['todos', { done: false }], ['todos'])).toBe(true);
  expect(matchesPrefix(['todos', { done: false }], ['todos', { done: false }])).toBe(true);
  expect(matchesPrefix(['todos', { done: true }], ['todos', { done: false }])).toBe(false);
  expect(matchesPrefix(['todo'], ['todos'])).toBe(false);
  expect(matchesPrefix(['todos'], ['todos', 1])).toBe(false);
});

test('cache invalidation by prefix', () => {
  const cache = createQueryCache();
  cache.set(['todos', { page: 1 }], ['a']);
  cache.set(['todos', 42], { id: 42 });
  cache.set(['user'], { name: 'Ada' });
  expect(cache.invalidate(['todos'])).toBe(2);
  expect(cache.isStale(['todos', { page: 1 }])).toBe(true);
  expect(cache.isStale(['user'])).toBe(false);
  expect(cache.get(['todos', 42])).toEqual({ id: 42 });
  cache.set(['todos', 42], { id: 42, done: true });
  expect(cache.isStale(['todos', 42])).toBe(false);
});
