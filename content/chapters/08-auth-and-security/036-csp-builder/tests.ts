const directives = {
  'default-src': ["'self'"],
  'script-src': ["'self'", 'https://cdn.example.com'],
  'img-src': ["'self'", 'data:'],
  'style-src': [],
  'object-src': ["'none'"],
};

test('buildCsp', () => {
  expect(buildCsp(directives)).toBe("default-src 'self'; script-src 'self' https://cdn.example.com; img-src 'self' data:; object-src 'none'");
});

test('refuses unsafe-inline scripts unless allowed', () => {
  expect(() => buildCsp({ 'script-src': ["'self'", "'unsafe-inline'"] })).toThrow("Unsafe source: 'unsafe-inline'");
  expect(buildCsp({ 'script-src': ["'unsafe-inline'"] }, { allowUnsafeInline: true })).toBe("script-src 'unsafe-inline'");
});

test('parseCsp round trip', () => {
  const header = buildCsp(directives);
  const { 'style-src': _empty, ...nonEmpty } = directives;
  expect(parseCsp(header)).toEqual(nonEmpty);
  expect(parseCsp("default-src 'self'; img-src *")).toEqual({ 'default-src': ["'self'"], 'img-src': ['*'] });
});

test('allowsScript', () => {
  const csp = parseCsp(buildCsp(directives));
  expect(allowsScript(csp, 'https://app.com/main.js', 'https://app.com')).toBe(true);
  expect(allowsScript(csp, 'https://cdn.example.com/lib.js', 'https://app.com')).toBe(true);
  expect(allowsScript(csp, 'https://evil.com/x.js', 'https://app.com')).toBe(false);
  expect(allowsScript({ 'default-src': ["'none'"] }, 'https://app.com/a.js', 'https://app.com')).toBe(false);
  expect(allowsScript({ 'default-src': ['https:'] }, 'https://any.com/a.js', 'https://app.com')).toBe(true);
});
