const RAW = 'POST /todos?draft=1&tag=a+b HTTP/1.1\r\nHost: localhost:3000\r\nContent-Type:  application/json \r\nAccept: text/html\r\naccept: application/json\r\n\r\n{"title":"Learn HTTP"}';
test('request line', () => {
  const r = parseRequest(RAW);
  expect([r.method, r.path, r.version]).toEqual(['POST', '/todos', 'HTTP/1.1']);
});
test('query', () => expect(parseRequest(RAW).query).toEqual({ draft: '1', tag: 'a b' }));
test('headers', () => expect(parseRequest(RAW).headers).toEqual({ host: 'localhost:3000', 'content-type': 'application/json', accept: 'text/html, application/json' }));
test('body', () => expect(parseRequest(RAW).body).toBe('{"title":"Learn HTTP"}'));
test('no body, no query', () => {
  const r = parseRequest('GET / HTTP/1.0\r\nHost: x\r\n\r\n');
  expect(r).toEqual({ method: 'GET', path: '/', query: {}, version: 'HTTP/1.0', headers: { host: 'x' }, body: '' });
});
test('bad request line', () => {
  expect(() => parseRequest('get / HTTP/1.1\r\n\r\n')).toThrow('Bad request line');
  expect(() => parseRequest('GET /\r\n\r\n')).toThrow('Bad request line');
  expect(() => parseRequest('hello')).toThrow('Bad request line');
});
