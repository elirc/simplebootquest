const LETTERS = ['a', 'b', 'c', 'd', 'e'];
test('first page', () => expect(paginate(LETTERS, 1, 2)).toEqual({ items: ['a', 'b'], page: 1, totalPages: 3, hasPrev: false, hasNext: true }));
test('middle page', () => expect(paginate(LETTERS, 2, 2)).toEqual({ items: ['c', 'd'], page: 2, totalPages: 3, hasPrev: true, hasNext: true }));
test('partial last page', () => expect(paginate(LETTERS, 3, 2)).toEqual({ items: ['e'], page: 3, totalPages: 3, hasPrev: true, hasNext: false }));
test('exact multiple of the page size', () => expect(paginate(['a', 'b', 'c', 'd'], 2, 2).totalPages).toBe(2));
test('empty list', () => expect(paginate([], 1, 10)).toEqual({ items: [], page: 1, totalPages: 1, hasPrev: false, hasNext: false }));
test('clamps the page', () => {
  expect(paginate(LETTERS, 0, 2).page).toBe(1);
  expect(paginate(LETTERS, 99, 2)).toEqual({ items: ['e'], page: 3, totalPages: 3, hasPrev: true, hasNext: false });
});
test('invalid page size', () => {
  expect(() => paginate(LETTERS, 1, 0)).toThrow(RangeError);
  expect(() => paginate(LETTERS, 1, 2.5)).toThrow(RangeError);
});
