function b64url(obj) {
  return btoa(JSON.stringify(obj)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

test('parses bearer tokens', () => {
  expect(parseBearer('Bearer abc.def.ghi')).toBe('abc.def.ghi');
  expect(parseBearer('bearer   abc  ')).toBe('abc');
});

test('rejects malformed authorization headers', () => {
  for (const bad of [undefined, '', 'Bearer', 'Basic dXNlcjpwYXNz', 'Bearer a b', 'abc']) {
    expect(parseBearer(bad)).toBeNull();
  }
});

test('parses cookies', () => {
  expect(parseCookies('token=abc; theme=dark')).toEqual({ token: 'abc', theme: 'dark' });
});

test('decodes cookie values and splits on the first =', () => {
  expect(parseCookies('msg=hello%20world; data=a=b=c')).toEqual({ msg: 'hello world', data: 'a=b=c' });
});

test('ignores junk segments', () => {
  expect(parseCookies('; ; novalue; a=1;')).toEqual({ a: '1' });
  expect(parseCookies(undefined)).toEqual({});
});

test('decodes JWT payloads', () => {
  const token = `${b64url({ alg: 'HS256' })}.${b64url({ sub: 42, name: 'Ada', exp: 2000000000 })}.signature`;
  expect(decodeJwtPayload(token)).toEqual({ sub: 42, name: 'Ada', exp: 2000000000 });
});

test('handles base64url characters', () => {
  const token = `x.${b64url({ q: '>>>???' })}.y`;
  expect(decodeJwtPayload(token)).toEqual({ q: '>>>???' });
});

test('returns null for bad tokens', () => {
  expect(decodeJwtPayload('only.two')).toBeNull();
  expect(decodeJwtPayload('a.!!!notbase64.c')).toBeNull();
  expect(decodeJwtPayload(`a.${btoa('not json')}.c`)).toBeNull();
});

test('checks expiry', () => {
  expect(isExpired({ exp: 100 }, 100)).toBe(true);
  expect(isExpired({ exp: 101 }, 100)).toBe(false);
  expect(isExpired({}, 100)).toBe(false);
});
