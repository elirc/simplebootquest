const nested = { a: { b: 1, c: { d: 2 } }, e: 3, tags: ['x'], none: null };
test('flatten', () => expect(flattenObject(nested)).toEqual({ 'a.b': 1, 'a.c.d': 2, e: 3, tags: ['x'], none: null }));
test('unflatten', () => expect(unflattenObject({ 'a.b': 1, 'a.c.d': 2, e: 3 })).toEqual({ a: { b: 1, c: { d: 2 } }, e: 3 }));
test('round trip', () => expect(unflattenObject(flattenObject(nested))).toEqual(nested));
