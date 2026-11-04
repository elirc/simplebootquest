test('byteLength counts UTF-8 bytes', () => {
  expect(byteLength('abc')).toBe(3);
  expect(byteLength('é')).toBe(2);
  expect(byteLength('👋')).toBe(4);
});

test('base64 round trip with unicode', () => {
  expect(toBase64('hello')).toBe('aGVsbG8=');
  expect(fromBase64(toBase64('héllo 👋'))).toBe('héllo 👋');
});

test('basic auth', () => {
  expect(basicAuthHeader('ada', 'p:ss')).toBe('Basic YWRhOnA6c3M=');
  expect(parseBasicAuth('Basic YWRhOnA6c3M=')).toEqual({ user: 'ada', pass: 'p:ss' });
  expect(parseBasicAuth('Bearer xyz')).toBeNull();
  expect(parseBasicAuth('Basic !!!')).toBeNull();
  expect(parseBasicAuth(`Basic ${toBase64('nocolon')}`)).toBeNull();
});
