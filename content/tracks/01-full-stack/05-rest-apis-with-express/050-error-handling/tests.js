function mockRes() {
  const res = { statusCode: 200, body: undefined };
  res.status = (code) => { res.statusCode = code; return res; };
  res.json = (body) => { res.body = body; return res; };
  return res;
}

test('HttpError carries a status', () => {
  const err = new HttpError(404, 'Todo not found');
  expect(err).toBeInstanceOf(Error);
  expect(err.name).toBe('HttpError');
  expect(err.status).toBe(404);
  expect(err.message).toBe('Todo not found');
});

test('handles HttpError', () => {
  const res = mockRes();
  createErrorHandler(() => {})(new HttpError(404, 'Todo not found'), {}, res, () => {});
  expect(res.statusCode).toBe(404);
  expect(res.body).toEqual({ error: 'Todo not found' });
});

test('includes details when present', () => {
  const res = mockRes();
  createErrorHandler(() => {})(new HttpError(400, 'Validation failed', { title: 'is required' }), {}, res, () => {});
  expect(res.body).toEqual({ error: 'Validation failed', details: { title: 'is required' } });
});

test('handles malformed JSON', () => {
  const res = mockRes();
  const err = Object.assign(new SyntaxError('Unexpected token'), { type: 'entity.parse.failed' });
  createErrorHandler(() => {})(err, {}, res, () => {});
  expect(res.statusCode).toBe(400);
  expect(res.body).toEqual({ error: 'Invalid JSON' });
});

test('hides unexpected errors and logs them', () => {
  const res = mockRes();
  const logged = [];
  const err = new Error('relation "users" does not exist');
  createErrorHandler((e) => logged.push(e))(err, {}, res, () => {});
  expect(res.statusCode).toBe(500);
  expect(res.body).toEqual({ error: 'Internal Server Error' });
  expect(logged).toEqual([err]);
});

test('does not log expected errors', () => {
  const logged = [];
  createErrorHandler((e) => logged.push(e))(new HttpError(404, 'x'), {}, mockRes(), () => {});
  expect(logged).toEqual([]);
});

test('notFound describes the route', () => {
  const res = mockRes();
  notFound({ method: 'GET', path: '/nope' }, res);
  expect(res.statusCode).toBe(404);
  expect(res.body).toEqual({ error: 'Route GET /nope not found' });
});
