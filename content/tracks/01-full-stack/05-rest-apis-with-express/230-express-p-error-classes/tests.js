function mockRes() {
  const res = { statusCode: 200, headers: {}, body: undefined, ended: false };
  res.status = (c) => { res.statusCode = c; return res; };
  res.set = (k, v) => { res.headers[k.toLowerCase()] = v; return res; };
  res.get = (k) => res.headers[k.toLowerCase()];
  res.json = (b) => { res.body = b; res.ended = true; return res; };
  res.end = () => { res.ended = true; return res; };
  return res;
}

test('error classes', () => {
  const e = new NotFoundError('Todo');
  expect(e instanceof HttpError).toBe(true);
  expect(e instanceof Error).toBe(true);
  expect([e.status, e.message, e.code, e.name]).toEqual([404, 'Todo not found', 'NOT_FOUND', 'HttpError']);
  const c = new ConflictError('Email already registered');
  expect([c.status, c.code, c.message]).toEqual([409, 'CONFLICT', 'Email already registered']);
});
test('handles HttpErrors', () => {
  const res = mockRes();
  errorHandler(new NotFoundError('User'), { log: vi.fn() }, res, vi.fn());
  expect(res.statusCode).toBe(404);
  expect(res.body).toEqual({ error: { code: 'NOT_FOUND', message: 'User not found' } });
});
test('handles validation errors', () => {
  const res = mockRes();
  const issues = [{ path: ['title'], message: 'Required' }];
  errorHandler(Object.assign(new Error('zod'), { issues }), { log: vi.fn() }, res, vi.fn());
  expect(res.statusCode).toBe(400);
  expect(res.body).toEqual({ error: { code: 'VALIDATION', message: 'Invalid request', issues } });
});
test('hides unexpected errors but logs them', () => {
  const res = mockRes();
  const log = vi.fn();
  const err = new Error('connect ECONNREFUSED 10.0.0.5:5432');
  errorHandler(err, { log }, res, vi.fn());
  expect(res.statusCode).toBe(500);
  expect(res.body).toEqual({ error: { code: 'INTERNAL', message: 'Something went wrong' } });
  expect(log).toHaveBeenCalledWith(err);
});
