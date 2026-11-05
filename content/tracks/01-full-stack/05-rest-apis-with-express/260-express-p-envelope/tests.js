function mockRes() {
  const res = { statusCode: 200, headers: {}, body: undefined, ended: false };
  res.status = (c) => { res.statusCode = c; return res; };
  res.set = (k, v) => { res.headers[k.toLowerCase()] = v; return res; };
  res.get = (k) => res.headers[k.toLowerCase()];
  res.json = (b) => { res.body = b; res.ended = true; return res; };
  res.end = () => { res.ended = true; return res; };
  return res;
}

test('ok', () => {
  const res = mockRes();
  ok(res, [1, 2]);
  expect([res.statusCode, res.body]).toEqual([200, { data: [1, 2] }]);
  const res2 = mockRes();
  ok(res2, [], { cursor: null });
  expect(res2.body).toEqual({ data: [], meta: { cursor: null } });
});
test('created', () => {
  const res = mockRes();
  created(res, { id: 7 }, '/todos/7');
  expect([res.statusCode, res.body, res.headers.location]).toEqual([201, { data: { id: 7 } }, '/todos/7']);
  const res2 = mockRes();
  created(res2, { id: 8 });
  expect(res2.headers.location).toBeUndefined();
});
test('noContent', () => {
  const res = mockRes();
  noContent(res);
  expect([res.statusCode, res.ended, res.body]).toEqual([204, true, undefined]);
});
test('fail', () => {
  const res = mockRes();
  fail(res, 404, 'NOT_FOUND', 'Todo not found');
  expect([res.statusCode, res.body]).toEqual([404, { error: { code: 'NOT_FOUND', message: 'Todo not found' } }]);
  const res2 = mockRes();
  fail(res2, 400, 'VALIDATION', 'Invalid', [{ path: 'title' }]);
  expect(res2.body).toEqual({ error: { code: 'VALIDATION', message: 'Invalid', details: [{ path: 'title' }] } });
});
test('paginated', () => {
  const res = mockRes();
  paginated(res, ['a'], { page: 2, limit: 10, total: 21 });
  expect(res.body).toEqual({ data: ['a'], meta: { page: 2, limit: 10, total: 21, totalPages: 3 } });
});
