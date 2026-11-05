test('simple pairs', () => expect(parseQuery('?a=1&b=two')).toEqual({ a: '1', b: 'two' }));
test('works without a leading ?', () => expect(parseQuery('page=2')).toEqual({ page: '2' }));
test('empty string', () => {
  expect(parseQuery('')).toEqual({});
  expect(parseQuery('?')).toEqual({});
});
test('decodes + and percent-escapes', () => expect(parseQuery('q=hello+world&city=S%C3%A3o%20Paulo')).toEqual({ q: 'hello world', city: 'São Paulo' }));
test('repeated keys become arrays', () => expect(parseQuery('tag=a&tag=b&tag=c')).toEqual({ tag: ['a', 'b', 'c'] }));
test('keys without values', () => expect(parseQuery('debug&x=1')).toEqual({ debug: '', x: '1' }));
test('values may contain =', () => expect(parseQuery('token=abc==')).toEqual({ token: 'abc==' }));
