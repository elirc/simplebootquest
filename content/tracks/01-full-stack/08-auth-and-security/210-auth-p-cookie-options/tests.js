test('minimal', () => expect(serializeCookie('theme', 'dark')).toBe('theme=dark; Path=/'));
test('session cookie', () => {
  expect(serializeCookie('sid', 'abc 123', { httpOnly: true, secure: true, sameSite: 'lax', maxAge: 3600.7 })).toBe(
    'sid=abc%20123; Max-Age=3600; Path=/; HttpOnly; Secure; SameSite=Lax',
  );
});
test('domain, path and expires', () => {
  expect(serializeCookie('a', '1', { domain: 'example.com', path: '/api', expires: new Date(Date.UTC(2030, 0, 1)) })).toBe(
    'a=1; Domain=example.com; Path=/api; Expires=Tue, 01 Jan 2030 00:00:00 GMT',
  );
});
test('clearing a cookie', () => expect(serializeCookie('sid', '', { maxAge: 0, httpOnly: true })).toBe('sid=; Max-Age=0; Path=/; HttpOnly'));
test('SameSite=None needs Secure', () => {
  expect(() => serializeCookie('x', '1', { sameSite: 'None' })).toThrow('SameSite=None requires Secure');
  expect(serializeCookie('x', '1', { sameSite: 'NONE', secure: true })).toBe('x=1; Path=/; Secure; SameSite=None');
});
test('invalid names', () => {
  expect(() => serializeCookie('bad name', '1')).toThrow('Invalid cookie name');
  expect(() => serializeCookie('a=b', '1')).toThrow('Invalid cookie name');
  expect(() => serializeCookie('', '1')).toThrow('Invalid cookie name');
});
