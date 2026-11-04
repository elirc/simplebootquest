test('generateToken', () => {
  const a = generateToken();
  expect(a).toMatch(/^[0-9a-f]{64}$/);
  expect(generateToken()).not.toBe(a);
});

test('timingSafeEqual', () => {
  expect(timingSafeEqual('abc', 'abc')).toBe(true);
  expect(timingSafeEqual('abc', 'abd')).toBe(false);
  expect(timingSafeEqual('abc', 'abcd')).toBe(false);
  expect(timingSafeEqual('', '')).toBe(true);
});

test('safe methods pass', () => {
  expect(csrfProtection({ method: 'GET', cookies: {}, headers: {} })).toEqual({ ok: true });
});

test('state-changing requests need matching tokens', () => {
  const token = generateToken();
  expect(csrfProtection({ method: 'POST', cookies: { csrf: token }, headers: { 'x-csrf-token': token } })).toEqual({ ok: true });
  expect(csrfProtection({ method: 'POST', cookies: { csrf: token }, headers: {} })).toEqual({ ok: false, status: 403, error: 'Invalid CSRF token' });
  expect(csrfProtection({ method: 'DELETE', cookies: { csrf: token }, headers: { 'x-csrf-token': token + 'x' } }).ok).toBe(false);
  expect(csrfProtection({ method: 'PUT', cookies: {}, headers: { 'x-csrf-token': token } }).ok).toBe(false);
});
