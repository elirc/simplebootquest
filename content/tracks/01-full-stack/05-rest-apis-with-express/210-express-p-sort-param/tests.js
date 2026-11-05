const ALLOWED = ['title', 'createdAt', 'priority'];
const FALLBACK = [{ field: 'createdAt', direction: 'desc' }];
test('single field', () => expect(parseSort('title', ALLOWED, FALLBACK)).toEqual([{ field: 'title', direction: 'asc' }]));
test('descending and multiple', () => expect(parseSort('-createdAt, title', ALLOWED, FALLBACK)).toEqual([
  { field: 'createdAt', direction: 'desc' },
  { field: 'title', direction: 'asc' },
]));
test('fallback', () => {
  expect(parseSort(undefined, ALLOWED, FALLBACK)).toEqual(FALLBACK);
  expect(parseSort('', ALLOWED, FALLBACK)).toEqual(FALLBACK);
  expect(parseSort(',', ALLOWED, FALLBACK)).toEqual(FALLBACK);
});
test('rejects unknown fields', () => {
  expect(() => parseSort('passwordHash', ALLOWED, FALLBACK)).toThrow('Cannot sort by "passwordHash"');
  expect(() => parseSort('title; DROP TABLE users', ALLOWED, FALLBACK)).toThrow('Cannot sort by');
});
test('dedupes', () => expect(parseSort('priority,-priority', ALLOWED, FALLBACK)).toEqual([{ field: 'priority', direction: 'asc' }]));
