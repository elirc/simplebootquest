test('basic', () => expect(buildQuery({ a: '1', b: 'two' })).toBe('a=1&b=two'));
test('encodes values', () => expect(buildQuery({ q: 'hello world', amp: 'a&b' })).toBe('q=hello%20world&amp=a%26b'));
test('arrays repeat the key', () => expect(buildQuery({ tags: ['a', 'b'] })).toBe('tags=a&tags=b'));
test('skips undefined and null', () => expect(buildQuery({ page: undefined, sort: null, limit: 10 })).toBe('limit=10'));
test('numbers and booleans', () => expect(buildQuery({ page: 2, done: false })).toBe('page=2&done=false'));
test('empty', () => expect(buildQuery({})).toBe(''));
