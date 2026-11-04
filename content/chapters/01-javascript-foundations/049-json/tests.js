test('toJson pretty-prints', () => {
  expect(toJson({ a: 1 })).toBe('{\n  "a": 1\n}');
});

test('parseOr', () => {
  expect(parseOr('{"a":1}', null)).toEqual({ a: 1 });
  expect(parseOr('{nope', 'fallback')).toBe('fallback');
});

test('roundTrip loses non-JSON values', () => {
  const out = roundTrip({ a: undefined, fn: () => 1, when: new Date('2026-01-01T00:00:00Z'), n: NaN, keep: [1] });
  expect(out).toEqual({ when: '2026-01-01T00:00:00.000Z', n: null, keep: [1] });
  expect('a' in out).toBe(false);
});

test('serializeUser only includes safe fields', () => {
  const json = serializeUser({ id: 1, name: 'Ada', passwordHash: 'secret', createdAt: new Date('2026-01-01T00:00:00Z') });
  expect(JSON.parse(json)).toEqual({ id: 1, name: 'Ada', createdAt: '2026-01-01T00:00:00.000Z' });
});
