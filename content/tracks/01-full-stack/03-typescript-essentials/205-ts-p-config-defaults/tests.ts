test('defaults', () => expect(resolveOptions()).toEqual({ port: 3000, host: 'localhost', cors: false }));
test('keeps falsy values', () => expect(resolveOptions({ port: 0, host: '' })).toEqual({ port: 0, host: '', cors: false }));
test('overrides', () => expect(resolveOptions({ cors: true, port: 8080 })).toEqual({ port: 8080, host: 'localhost', cors: true }));
test('validates port', () => expect(() => resolveOptions({ port: 70000 })).toThrow(RangeError));
