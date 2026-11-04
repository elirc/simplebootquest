test('defaults', () => {
  expect(parsePagination({})).toEqual({ page: 1, pageSize: 20, skip: 0, take: 20 });
});

test('parses valid values', () => {
  expect(parsePagination({ page: '3', pageSize: '10' })).toEqual({ page: 3, pageSize: 10, skip: 20, take: 10 });
});

test('invalid pages fall back to 1', () => {
  for (const page of ['0', '-2', 'abc', '1.5', '']) {
    expect(parsePagination({ page }).page).toBe(1);
  }
});

test('page size is clamped', () => {
  expect(parsePagination({ pageSize: '1000' }).pageSize).toBe(100);
  expect(parsePagination({ pageSize: '0' }).pageSize).toBe(1);
  expect(parsePagination({ pageSize: 'lots' }).pageSize).toBe(20);
});

test('builds metadata', () => {
  expect(paginate(['a', 'b'], 95, 2, 20)).toEqual({
    data: ['a', 'b'],
    meta: { page: 2, pageSize: 20, total: 95, totalPages: 5, hasNext: true, hasPrev: true },
  });
});

test('last page has no next', () => {
  expect(paginate([], 40, 2, 20).meta).toMatchObject({ totalPages: 2, hasNext: false, hasPrev: true });
});

test('empty results still have one page', () => {
  expect(paginate([], 0, 1, 20).meta).toMatchObject({ totalPages: 1, hasNext: false, hasPrev: false });
});
