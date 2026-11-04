test('etagFor is stable and quoted', () => {
  expect(etagFor('')).toBe('"811c9dc5"');
  expect(etagFor('hello')).toBe(etagFor('hello'));
  expect(etagFor('hello')).not.toBe(etagFor('hellp'));
  expect(etagFor('hello')).toMatch(/^"[0-9a-f]+"$/);
});

test('first request gets 200 with an ETag', () => {
  const res = conditionalResponse({ headers: {} }, '{"todos":[]}', 'private, max-age=0, must-revalidate');
  expect(res.status).toBe(200);
  expect(res.body).toBe('{"todos":[]}');
  expect(res.headers['Cache-Control']).toBe('private, max-age=0, must-revalidate');
});

test('matching If-None-Match gets 304', () => {
  const body = '{"todos":[1]}';
  const etag = etagFor(body);
  expect(conditionalResponse({ headers: { 'if-none-match': `"zzz", ${etag}` } }, body, 'no-cache')).toEqual({
    status: 304,
    headers: { ETag: etag, 'Cache-Control': 'no-cache' },
    body: '',
  });
  expect(conditionalResponse({ headers: { 'if-none-match': '*' } }, body, 'no-cache').status).toBe(304);
});

test('stale ETag gets fresh content', () => {
  expect(conditionalResponse({ headers: { 'if-none-match': '"old"' } }, 'new', 'no-cache').status).toBe(200);
});
