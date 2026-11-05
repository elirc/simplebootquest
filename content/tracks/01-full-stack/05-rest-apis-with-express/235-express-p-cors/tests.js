function mockRes() {
  const res = { statusCode: 200, headers: {}, body: undefined, ended: false };
  res.status = (c) => { res.statusCode = c; return res; };
  res.set = (k, v) => { res.headers[k.toLowerCase()] = v; return res; };
  res.get = (k) => res.headers[k.toLowerCase()];
  res.json = (b) => { res.body = b; res.ended = true; return res; };
  res.end = () => { res.ended = true; return res; };
  return res;
}

const mw = cors({ origins: ['https://app.test'], credentials: true });
function run(req) {
  const res = mockRes();
  const next = vi.fn();
  mw({ headers: {}, method: 'GET', ...req }, res, next);
  return { res, next };
}
test('allowed origin', () => {
  const { res, next } = run({ headers: { origin: 'https://app.test' } });
  expect(res.headers['access-control-allow-origin']).toBe('https://app.test');
  expect(res.headers['access-control-allow-credentials']).toBe('true');
  expect(res.headers.vary).toBe('Origin');
  expect(next).toHaveBeenCalled();
});
test('disallowed origin', () => {
  const { res, next } = run({ headers: { origin: 'https://evil.test' } });
  expect(res.headers['access-control-allow-origin']).toBeUndefined();
  expect(res.headers.vary).toBe('Origin');
  expect(next).toHaveBeenCalled();
});
test('no origin header (same-origin or curl)', () => {
  const { res, next } = run({});
  expect(res.headers['access-control-allow-origin']).toBeUndefined();
  expect(next).toHaveBeenCalled();
});
test('preflight', () => {
  const { res, next } = run({ method: 'OPTIONS', headers: { origin: 'https://app.test', 'access-control-request-headers': 'content-type,x-request-id' } });
  expect(res.statusCode).toBe(204);
  expect(res.ended).toBe(true);
  expect(res.headers['access-control-allow-methods']).toBe('GET,POST,PUT,PATCH,DELETE');
  expect(res.headers['access-control-allow-headers']).toBe('content-type,x-request-id');
  expect(next).not.toHaveBeenCalled();
});
test('preflight default headers', () => {
  const { res } = run({ method: 'OPTIONS', headers: { origin: 'https://app.test' } });
  expect(res.headers['access-control-allow-headers']).toBe('Content-Type');
});
test('credentials off by default', () => {
  const res = mockRes();
  cors({ origins: ['https://a.test'] })({ method: 'GET', headers: { origin: 'https://a.test' } }, res, () => {});
  expect(res.headers['access-control-allow-credentials']).toBeUndefined();
});
