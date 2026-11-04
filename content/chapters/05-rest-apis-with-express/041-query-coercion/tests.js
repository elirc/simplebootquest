const spec = {
  page: { type: 'int', default: 1, min: 1 },
  pageSize: { type: 'int', default: 20, min: 1, max: 100 },
  minPrice: { type: 'number' },
  inStock: { type: 'boolean', default: false },
  sort: { type: 'enum', values: ['price', 'name'], default: 'name' },
  tags: { type: 'list' },
};

test('defaults', () => {
  expect(parseQuery({}, spec)).toEqual({ page: 1, pageSize: 20, inStock: false, sort: 'name' });
});

test('coerces valid values', () => {
  expect(parseQuery({ page: '3', pageSize: '500', minPrice: '10.5', inStock: '1', sort: 'price', tags: ['a', 'b,c'] }, spec)).toEqual({
    page: 3, pageSize: 100, minPrice: 10.5, inStock: true, sort: 'price', tags: ['a', 'b', 'c'],
  });
});

test('invalid values fall back', () => {
  expect(parseQuery({ page: 'abc', pageSize: '2.5', minPrice: 'x', inStock: 'yes', sort: 'evil', tags: ',,' }, spec)).toEqual({
    page: 1, pageSize: 20, inStock: false, sort: 'name',
  });
});

test('first value wins for repeated scalar keys, unknown keys ignored', () => {
  expect(parseQuery({ page: ['4', '9'], admin: 'true' }, spec)).toEqual({ page: 4, pageSize: 20, inStock: false, sort: 'name' });
  expect(parseQuery({ page: '0' }, spec).page).toBe(1);
});
