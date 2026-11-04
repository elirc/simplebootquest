const config = { origins: ['https://app.com'], methods: ['GET', 'POST', 'PUT', 'DELETE'], headers: ['Content-Type'], credentials: true, maxAge: 600 };

test('same-origin or no Origin header', () => {
  expect(corsHeaders({ method: 'GET', headers: {} }, config)).toEqual({ status: 200, headers: {} });
});

test('allowed origin on a simple request', () => {
  expect(corsHeaders({ method: 'GET', headers: { origin: 'https://app.com' } }, config)).toEqual({
    status: 200,
    headers: { 'Access-Control-Allow-Origin': 'https://app.com', Vary: 'Origin', 'Access-Control-Allow-Credentials': 'true' },
  });
});

test('disallowed origins get no CORS headers', () => {
  expect(corsHeaders({ method: 'GET', headers: { origin: 'https://evil.com' } }, config)).toEqual({ status: 200, headers: {} });
  expect(corsHeaders({ method: 'OPTIONS', headers: { origin: 'https://evil.com', 'access-control-request-method': 'PUT' } }, config).status).toBe(403);
});

test('preflight', () => {
  const res = corsHeaders({ method: 'OPTIONS', headers: { origin: 'https://app.com', 'access-control-request-method': 'put' } }, config);
  expect(res.status).toBe(204);
  expect(res.headers['Access-Control-Allow-Methods']).toBe('GET, POST, PUT, DELETE');
  expect(res.headers['Access-Control-Allow-Headers']).toBe('Content-Type');
  expect(res.headers['Access-Control-Max-Age']).toBe('600');
});

test('preflight for a disallowed method', () => {
  expect(corsHeaders({ method: 'OPTIONS', headers: { origin: 'https://app.com', 'access-control-request-method': 'PATCH' } }, config)).toEqual({ status: 403, headers: {} });
});
