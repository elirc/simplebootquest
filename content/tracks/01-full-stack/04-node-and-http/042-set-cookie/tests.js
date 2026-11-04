test('serializes all attributes in order', () => {
  expect(serializeCookie('session', 'abc 123', { path: '/', maxAge: 3600.7, httpOnly: true, secure: true, sameSite: 'lax' })).toBe(
    'session=abc%20123; Path=/; Max-Age=3600; HttpOnly; Secure; SameSite=Lax',
  );
});

test('minimal cookie', () => {
  expect(serializeCookie('theme', 'dark')).toBe('theme=dark');
});

test('rejects SameSite=None without Secure', () => {
  expect(() => serializeCookie('x', '1', { sameSite: 'none' })).toThrow();
  expect(serializeCookie('x', '1', { sameSite: 'none', secure: true })).toBe('x=1; Secure; SameSite=None');
});

test('rejects invalid names', () => {
  expect(() => serializeCookie('bad name', 'x')).toThrow();
  expect(() => serializeCookie('a;b', 'x')).toThrow();
});

test('clearCookie', () => {
  expect(clearCookie('session', { path: '/' })).toBe('session=; Path=/; Max-Age=0');
});
