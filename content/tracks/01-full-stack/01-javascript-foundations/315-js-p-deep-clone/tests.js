test('nested objects and arrays are copied', () => {
  const original = { user: { tags: ['a'] }, n: 1 };
  const copy = deepClone(original);
  copy.user.tags.push('b');
  expect(original.user.tags).toEqual(['a']);
  expect(copy).toEqual({ user: { tags: ['a', 'b'] }, n: 1 });
});
test('dates, maps and sets', () => {
  const original = { when: new Date('2026-01-01T00:00:00Z'), m: new Map([['k', { v: 1 }]]), s: new Set([1, 2]) };
  const copy = deepClone(original);
  copy.when.setUTCFullYear(2030);
  copy.m.get('k').v = 99;
  copy.s.add(3);
  expect(original.when.getUTCFullYear()).toBe(2026);
  expect(original.m.get('k').v).toBe(1);
  expect(original.s.size).toBe(2);
});
test('primitives', () => expect(deepClone(5)).toBe(5));
