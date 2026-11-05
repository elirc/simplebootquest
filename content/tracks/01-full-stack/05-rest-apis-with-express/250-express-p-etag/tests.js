function mockRes() {
  const res = { statusCode: 200, headers: {}, body: undefined, ended: false };
  res.status = (c) => { res.statusCode = c; return res; };
  res.set = (k, v) => { res.headers[k.toLowerCase()] = v; return res; };
  res.get = (k) => res.headers[k.toLowerCase()];
  res.json = (b) => { res.body = b; res.ended = true; return res; };
  res.end = () => { res.ended = true; return res; };
  return res;
}

test('fnv1a known values', () => {
  expect(fnv1a('')).toBe(2166136261);
  expect(fnv1a('a')).toBe(0xe40c292c);
  expect(fnv1a('foobar')).toBe(0xbf9cf968);
});
test('etagFor', () => {
  expect(etagFor('a')).toBe('W/"1-e40c292c"');
  expect(etagFor('{"id":1}')).toBe(`W/"8-${fnv1a('{"id":1}').toString(16)}"`);
  expect(etagFor('{"id":1}')).not.toBe(etagFor('{"id":2}'));
});
test('first request gets 200 and an ETag', () => {
  const res = mockRes();
  sendJson({ headers: {} }, res, { id: 1 });
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual({ id: 1 });
  expect(res.headers.etag).toBe(etagFor('{"id":1}'));
});
test('matching If-None-Match gets 304', () => {
  const res = mockRes();
  sendJson({ headers: { 'if-none-match': etagFor('{"id":1}') } }, res, { id: 1 });
  expect(res.statusCode).toBe(304);
  expect(res.body).toBeUndefined();
});
test('changed data gets 200', () => {
  const res = mockRes();
  sendJson({ headers: { 'if-none-match': etagFor('{"id":1}') } }, res, { id: 1, title: 'new' });
  expect(res.statusCode).toBe(200);
});
