test('matching etag', () => expect(isFresh({ 'if-none-match': '"v2"' }, { etag: '"v2"' })).toBe(true));
test('list of etags', () => expect(isFresh({ 'if-none-match': '"v1", "v2"' }, { etag: '"v2"' })).toBe(true));
test('weak comparison', () => {
  expect(isFresh({ 'if-none-match': 'W/"v3"' }, { etag: '"v3"' })).toBe(true);
  expect(isFresh({ 'if-none-match': '"v3"' }, { etag: 'W/"v3"' })).toBe(true);
});
test('stale etag', () => expect(isFresh({ 'if-none-match': '"v1"' }, { etag: '"v2"' })).toBe(false));
test('star', () => expect(isFresh({ 'if-none-match': '*' }, { etag: '"anything"' })).toBe(true));
test('if-modified-since', () => {
  const res = { 'last-modified': 'Mon, 01 Jan 2024 00:00:00 GMT' };
  expect(isFresh({ 'if-modified-since': 'Tue, 02 Jan 2024 00:00:00 GMT' }, res)).toBe(true);
  expect(isFresh({ 'if-modified-since': 'Mon, 01 Jan 2024 00:00:00 GMT' }, res)).toBe(true);
  expect(isFresh({ 'if-modified-since': 'Sun, 31 Dec 2023 00:00:00 GMT' }, res)).toBe(false);
});
test('if-none-match wins over if-modified-since', () => {
  const req = { 'if-none-match': '"old"', 'if-modified-since': 'Tue, 02 Jan 2024 00:00:00 GMT' };
  expect(isFresh(req, { etag: '"new"', 'last-modified': 'Mon, 01 Jan 2024 00:00:00 GMT' })).toBe(false);
});
test('no conditional headers', () => expect(isFresh({}, { etag: '"v1"' })).toBe(false));
