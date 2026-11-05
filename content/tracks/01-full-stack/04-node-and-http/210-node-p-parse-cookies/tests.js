test('basic', () => expect(parseCookies('session=abc123; theme=dark')).toEqual({ session: 'abc123', theme: 'dark' }));
test('decodes values', () => expect(parseCookies('cart=%7B%22n%22%3A2%7D')).toEqual({ cart: '{"n":2}' }));
test('values may contain =', () => expect(parseCookies('t=YWJj==;x=1')).toEqual({ t: 'YWJj==', x: '1' }));
test('ignores junk', () => expect(parseCookies('novalue; =empty; ok=1')).toEqual({ ok: '1' }));
test('first value wins', () => expect(parseCookies('id=1; id=2')).toEqual({ id: '1' }));
test('bad escapes are kept raw', () => expect(parseCookies('bad=%E0%A4%A')).toEqual({ bad: '%E0%A4%A' }));
test('missing header', () => {
  expect(parseCookies(undefined)).toEqual({});
  expect(parseCookies('')).toEqual({});
});
