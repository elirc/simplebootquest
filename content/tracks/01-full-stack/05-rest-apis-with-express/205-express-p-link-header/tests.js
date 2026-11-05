const B = 'https://api.test/todos';
test('middle page', () => {
  expect(buildLinks(B, { page: 2, limit: 10, total: 35 })).toBe(
    '<https://api.test/todos?page=1&limit=10>; rel="first", <https://api.test/todos?page=1&limit=10>; rel="prev", <https://api.test/todos?page=3&limit=10>; rel="next", <https://api.test/todos?page=4&limit=10>; rel="last"',
  );
});
test('first page has no prev', () => {
  const h = buildLinks(B, { page: 1, limit: 10, total: 35 });
  expect(h.includes('rel="prev"')).toBe(false);
  expect(h.includes('page=2&limit=10>; rel="next"')).toBe(true);
});
test('last page has no next', () => expect(buildLinks(B, { page: 4, limit: 10, total: 35 }).includes('rel="next"')).toBe(false));
test('empty collection', () => expect(buildLinks(B, { page: 1, limit: 10, total: 0 })).toBe('<https://api.test/todos?page=1&limit=10>; rel="first", <https://api.test/todos?page=1&limit=10>; rel="last"'));
test('existing query string', () => expect(buildLinks(B + '?done=true', { page: 1, limit: 5, total: 5 })).toBe('<https://api.test/todos?done=true&page=1&limit=5>; rel="first", <https://api.test/todos?done=true&page=1&limit=5>; rel="last"'));
