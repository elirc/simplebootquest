function parseRequest(raw) {
  const [method, path] = raw.split(' ');
  return { method, path, query: {}, version: 'HTTP/1.1', headers: {}, body: '' };
}
