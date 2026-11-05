test('byteLength counts UTF-8 bytes', () => {
  expect(byteLength('hello')).toBe(5);
  expect(byteLength('héllo')).toBe(6);
  expect(byteLength('🎉')).toBe(4);
});
test('404 JSON response', () => {
  const body = '{"error":"Not found"}';
  expect(serializeResponse({ status: 404, headers: { 'Content-Type': 'application/json' }, body })).toBe(
    'HTTP/1.1 404 Not Found\r\nContent-Type: application/json\r\nContent-Length: 21\r\n\r\n' + body,
  );
});
test('Content-Length uses bytes', () => expect(serializeResponse({ status: 200, body: 'café' })).toBe('HTTP/1.1 200 OK\r\nContent-Length: 5\r\n\r\ncafé'));
test('204 has no body or length', () => expect(serializeResponse({ status: 204, body: 'ignored' })).toBe('HTTP/1.1 204 No Content\r\n\r\n'));
test('unknown status', () => expect(serializeResponse({ status: 418 }).startsWith('HTTP/1.1 418 Unknown\r\n')).toBe(true));
test('defaults', () => expect(serializeResponse({ status: 201 })).toBe('HTTP/1.1 201 Created\r\nContent-Length: 0\r\n\r\n'));
