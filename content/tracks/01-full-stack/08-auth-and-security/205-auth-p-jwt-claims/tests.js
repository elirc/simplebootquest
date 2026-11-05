const b64 = (obj) => btoa(JSON.stringify(obj)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const make = (payload, header = { alg: 'HS256', typ: 'JWT' }) => `${b64(header)}.${b64(payload)}.sig`;
const NOW = 1_700_000_000_000;
const OPTS = { now: NOW, issuer: 'sbq', audience: 'web' };
const GOOD = { sub: '42', iss: 'sbq', aud: 'web', exp: NOW / 1000 + 600 };
test('valid token', () => expect(checkClaims(make(GOOD), OPTS)).toEqual({ valid: true, payload: GOOD }));
test('malformed', () => {
  expect(checkClaims('abc.def', OPTS)).toEqual({ valid: false, reason: 'malformed' });
  expect(checkClaims('!!.@@.##', OPTS)).toEqual({ valid: false, reason: 'malformed' });
});
test('alg none', () => expect(checkClaims(make(GOOD, { alg: 'none' }), OPTS).reason).toBe('alg none not allowed'));
test('expiry with leeway', () => {
  expect(checkClaims(make({ ...GOOD, exp: NOW / 1000 - 10 }), OPTS).valid).toBe(true);
  expect(checkClaims(make({ ...GOOD, exp: NOW / 1000 - 31 }), OPTS).reason).toBe('expired');
  const { exp, ...noExp } = GOOD;
  expect(checkClaims(make(noExp), OPTS).reason).toBe('expired');
});
test('not before', () => expect(checkClaims(make({ ...GOOD, nbf: NOW / 1000 + 120 }), OPTS).reason).toBe('not yet valid'));
test('issuer and audience', () => {
  expect(checkClaims(make({ ...GOOD, iss: 'evil' }), OPTS).reason).toBe('wrong issuer');
  expect(checkClaims(make({ ...GOOD, aud: 'mobile' }), OPTS).reason).toBe('wrong audience');
  expect(checkClaims(make({ ...GOOD, aud: ['mobile', 'web'] }), OPTS).valid).toBe(true);
});
