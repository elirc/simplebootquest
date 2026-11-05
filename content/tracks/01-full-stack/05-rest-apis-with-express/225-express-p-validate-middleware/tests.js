function mockRes() {
  const res = { statusCode: 200, headers: {}, body: undefined, ended: false };
  res.status = (c) => { res.statusCode = c; return res; };
  res.set = (k, v) => { res.headers[k.toLowerCase()] = v; return res; };
  res.get = (k) => res.headers[k.toLowerCase()];
  res.json = (b) => { res.body = b; res.ended = true; return res; };
  res.end = () => { res.ended = true; return res; };
  return res;
}

const titleSchema = {
  safeParse(input) {
    if (input && typeof input.title === 'string' && input.title.trim()) return { success: true, data: { title: input.title.trim() } };
    return { success: false, error: { issues: [{ path: ['title'], message: 'Required' }, { path: ['meta', 'tags', 0], message: 'Bad tag' }] } };
  },
};
test('valid body replaces req.body and calls next', () => {
  const req = { body: { title: ' Hi ', isAdmin: true } };
  const res = mockRes();
  const next = vi.fn();
  validateBody(titleSchema)(req, res, next);
  expect(next).toHaveBeenCalledTimes(1);
  expect(req.body).toEqual({ title: 'Hi' });
  expect(res.ended).toBe(false);
});
test('invalid body returns 400 with issues', () => {
  const res = mockRes();
  const next = vi.fn();
  validateBody(titleSchema)({ body: {} }, res, next);
  expect(next).not.toHaveBeenCalled();
  expect(res.statusCode).toBe(400);
  expect(res.body).toEqual({ error: 'Validation failed', issues: [{ path: 'title', message: 'Required' }, { path: 'meta.tags.0', message: 'Bad tag' }] });
});
test('validateQuery reads req.query', () => {
  const req = { body: {}, query: { title: 'search' } };
  const next = vi.fn();
  validateQuery(titleSchema)(req, mockRes(), next);
  expect(next).toHaveBeenCalled();
  expect(req.query).toEqual({ title: 'search' });
});
