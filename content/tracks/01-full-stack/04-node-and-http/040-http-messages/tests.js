const rawPost = 'POST /api/todos HTTP/1.1\r\nHost: localhost:3000\r\nContent-Type: application/json\r\nX-Request-ID:  abc123 \r\n\r\n{"title":"Learn HTTP"}';

test('parses the request line', () => {
  const req = parseRequest(rawPost);
  expect(req.method).toBe('POST');
  expect(req.path).toBe('/api/todos');
  expect(req.version).toBe('HTTP/1.1');
});

test('lowercases header names and trims values', () => {
  expect(parseRequest(rawPost).headers).toEqual({
    host: 'localhost:3000',
    'content-type': 'application/json',
    'x-request-id': 'abc123',
  });
});

test('extracts the body', () => {
  expect(JSON.parse(parseRequest(rawPost).body)).toEqual({ title: 'Learn HTTP' });
});

test('handles requests without a body', () => {
  const req = parseRequest('GET / HTTP/1.1\r\nHost: x\r\n\r\n');
  expect(req.body).toBe('');
  expect(req.method).toBe('GET');
});

test('header values may contain colons', () => {
  expect(parseRequest('GET / HTTP/1.1\r\nHost: localhost:8080\r\n\r\n').headers.host).toBe('localhost:8080');
});

test('formats a response', () => {
  expect(formatResponse(201, { 'Content-Type': 'application/json' }, '{"id":1}')).toBe(
    'HTTP/1.1 201 Created\r\nContent-Type: application/json\r\nContent-Length: 8\r\n\r\n{"id":1}',
  );
});

test('content length counts bytes', () => {
  expect(formatResponse(200, {}, 'café')).toContain('Content-Length: 5');
});

test('handles empty bodies', () => {
  expect(formatResponse(204, {}, '')).toBe('HTTP/1.1 204 No Content\r\nContent-Length: 0\r\n\r\n');
});
