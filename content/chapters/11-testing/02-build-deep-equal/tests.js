test('primitives', () => {
  expect(deepEqual(1, 1)).toBe(true);
  expect(deepEqual('a', 'b')).toBe(false);
  expect(deepEqual(null, undefined)).toBe(false);
  expect(deepEqual(NaN, NaN)).toBe(true);
});

test('objects regardless of key order', () => {
  expect(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 })).toBe(true);
  expect(deepEqual({ a: 1 }, { a: 1, b: undefined })).toBe(false);
  expect(deepEqual({ a: 1 }, { a: 2 })).toBe(false);
});

test('nested structures', () => {
  expect(deepEqual({ user: { tags: ['a', { x: 1 }] } }, { user: { tags: ['a', { x: 1 }] } })).toBe(true);
  expect(deepEqual({ user: { tags: ['a', { x: 1 }] } }, { user: { tags: ['a', { x: 2 }] } })).toBe(false);
});

test('arrays vs objects', () => {
  expect(deepEqual([], {})).toBe(false);
  expect(deepEqual([1, 2], [2, 1])).toBe(false);
  expect(deepEqual([1, 2], [1, 2])).toBe(true);
});

test('dates', () => {
  expect(deepEqual(new Date('2026-01-01'), new Date('2026-01-01'))).toBe(true);
  expect(deepEqual(new Date('2026-01-01'), new Date('2026-01-02'))).toBe(false);
  expect(deepEqual(new Date(0), {})).toBe(false);
});

test('circular references', () => {
  const a = { name: 'a' };
  a.self = a;
  const b = { name: 'a' };
  b.self = b;
  expect(deepEqual(a, b)).toBe(true);
});

test('diffKeys lists differing keys', () => {
  expect(diffKeys({ a: 1, b: [1], c: 3 }, { a: 1, b: [2], d: 4 })).toEqual(['b', 'c', 'd']);
  expect(diffKeys({ a: { x: 1 } }, { a: { x: 1 } })).toEqual([]);
});
