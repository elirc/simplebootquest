const defaults = { q: '', page: 1, sort: 'relevance', tags: [], inStock: false };

test('parse defaults and values', () => {
  expect(parseFilters('')).toEqual(defaults);
  expect(parseFilters('?q=shoe&tags=red&tags=sale&page=2&sort=price-asc&inStock=true')).toEqual({ q: 'shoe', page: 2, sort: 'price-asc', tags: ['red', 'sale'], inStock: true });
});

test('bad values fall back', () => {
  expect(parseFilters('?page=-3&sort=evil&inStock=yes')).toEqual(defaults);
  expect(parseFilters('?page=abc').page).toBe(1);
});

test('serialize omits defaults', () => {
  expect(serializeFilters(defaults)).toBe('');
  expect(serializeFilters({ ...defaults, q: 'red shoe', tags: ['a', 'b'], page: 3 })).toBe('q=red+shoe&page=3&tags=a&tags=b');
});

test('round trip', () => {
  const f = { q: 'x', page: 4, sort: 'price-desc', tags: ['t'], inStock: true };
  expect(parseFilters('?' + serializeFilters(f))).toEqual(f);
});

test('changing a filter resets the page', () => {
  const f = { ...defaults, page: 5 };
  expect(setFilter(f, 'q', 'boots').page).toBe(1);
  expect(setFilter(f, 'page', 6).page).toBe(6);
  expect(f.page).toBe(5);
});
