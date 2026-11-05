test('stable hashing', () => {
  expect(hashKey(['todos', { page: 2, done: false }])).toBe(hashKey(['todos', { done: false, page: 2 }]));
  expect(hashKey(['t', { a: { y: 1, x: 2 } }])).toBe(hashKey(['t', { a: { x: 2, y: 1 } }]));
  expect(hashKey(['t', { a: 1, b: undefined }])).toBe(hashKey(['t', { a: 1 }]));
  expect(hashKey(['todos', 1])).not.toBe(hashKey(['todos', '1']));
});
test('prefix matching', () => {
  expect(matchesPrefix(['todos', { page: 1 }], ['todos'])).toBe(true);
  expect(matchesPrefix(['todos', 5, 'comments'], ['todos', 5])).toBe(true);
  expect(matchesPrefix(['todos', 6], ['todos', 5])).toBe(false);
  expect(matchesPrefix(['users'], ['todos'])).toBe(false);
  expect(matchesPrefix(['todos'], ['todos', 5])).toBe(false);
  expect(matchesPrefix(['todos', { b: 1, a: 2 }], ['todos', { a: 2, b: 1 }])).toBe(true);
});
test('registry get/set', () => {
  const r = createRegistry();
  r.set(['todos', { page: 1, done: true }], ['x']);
  expect(r.get(['todos', { done: true, page: 1 }])).toEqual(['x']);
  expect(r.get(['todos'])).toBeUndefined();
});
test('invalidate by prefix', () => {
  const r = createRegistry();
  r.set(['todos', { page: 1 }], 1);
  r.set(['todos', { page: 2 }], 2);
  r.set(['todos', 5], 3);
  r.set(['users', 1], 4);
  expect(r.invalidate(['todos'])).toBe(3);
  expect(r.get(['users', 1])).toBe(4);
  expect(r.get(['todos', 5])).toBeUndefined();
});
