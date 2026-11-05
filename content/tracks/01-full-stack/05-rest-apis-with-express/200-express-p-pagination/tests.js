test('defaults', () => expect(parsePagination({})).toEqual({ page: 1, limit: 20, offset: 0 }));
test('parses values', () => expect(parsePagination({ page: '3', limit: '50' })).toEqual({ page: 3, limit: 50, offset: 100 }));
test('caps limit', () => expect(parsePagination({ limit: '5000' })).toEqual({ page: 1, limit: 100, offset: 0 }));
test('rejects junk', () => {
  expect(parsePagination({ page: 'abc', limit: '0' })).toEqual({ page: 1, limit: 20, offset: 0 });
  expect(parsePagination({ page: '-2', limit: '1.5' })).toEqual({ page: 1, limit: 20, offset: 0 });
  expect(parsePagination({ page: ['2', '3'] })).toEqual({ page: 1, limit: 20, offset: 0 });
});
