function mockRes() {
  const res = { statusCode: 200, headers: {}, body: undefined, ended: false };
  res.status = (c) => { res.statusCode = c; return res; };
  res.set = (k, v) => { res.headers[k.toLowerCase()] = v; return res; };
  res.get = (k) => res.headers[k.toLowerCase()];
  res.json = (b) => { res.body = b; res.ended = true; return res; };
  res.end = () => { res.ended = true; return res; };
  return res;
}

const guard = methodGuard({ '/todos': ['GET', 'POST'], '/todos/:id': ['GET', 'PATCH', 'DELETE'], '/login': ['POST'] });
function run(method, path) {
  const res = mockRes();
  const next = vi.fn();
  guard({ method, path }, res, next);
  return { res, next };
}
test('supported methods pass', () => {
  expect(run('GET', '/todos').next).toHaveBeenCalled();
  expect(run('DELETE', '/todos/5').next).toHaveBeenCalled();
});
test('unknown paths pass through to the 404 handler', () => expect(run('GET', '/nope').next).toHaveBeenCalled());
test('unsupported methods get 405', () => {
  const { res, next } = run('DELETE', '/todos');
  expect(next).not.toHaveBeenCalled();
  expect(res.statusCode).toBe(405);
  expect(res.body).toEqual({ error: 'Method Not Allowed' });
  expect(res.headers.allow).toBe('GET, POST, HEAD');
});
test('HEAD follows GET', () => {
  expect(run('HEAD', '/todos/1').next).toHaveBeenCalled();
  expect(run('HEAD', '/login').res.statusCode).toBe(405);
  expect(run('GET', '/login').res.headers.allow).toBe('POST');
});
test('OPTIONS is always allowed', () => expect(run('OPTIONS', '/login').next).toHaveBeenCalled());
test('params match one segment only', () => expect(run('PUT', '/todos/5/comments').next).toHaveBeenCalled());
