const USER = { id: 7, name: 'Ada', email: 'ada@x.io', createdAt: new Date('2026-01-01'), roles: ['admin', 'editor'], profile: { city: 'London', bio: 'math' } };
test('subset of keys', () => {
  expect(matchObject(USER, { name: 'Ada' })).toBe(true);
  expect(matchObject(USER, { name: 'Grace' })).toBe(false);
  expect(matchObject(USER, { missing: undefined })).toBe(false);
});
test('nested objects', () => {
  expect(matchObject(USER, { profile: { city: 'London' } })).toBe(true);
  expect(matchObject(USER, { profile: { city: 'Paris' } })).toBe(false);
});
test('arrays must match in length', () => {
  expect(matchObject(USER, { roles: ['admin', 'editor'] })).toBe(true);
  expect(matchObject(USER, { roles: ['admin'] })).toBe(false);
  expect(matchObject([{ id: 1, x: 1 }, { id: 2 }], [{ id: 1 }, { id: 2 }])).toBe(true);
});
test('regexps and dates', () => {
  expect(matchObject(USER, { email: /@x\.io$/ })).toBe(true);
  expect(matchObject(USER, { email: /@gmail/ })).toBe(false);
  expect(matchObject(USER, { createdAt: new Date('2026-01-01') })).toBe(true);
  expect(matchObject(USER, { createdAt: new Date('2027-01-01') })).toBe(false);
});
test('primitives', () => {
  expect(matchObject(NaN, NaN)).toBe(true);
  expect(matchObject(0, -0)).toBe(false);
  expect(matchObject(null, {})).toBe(false);
  expect(matchObject({ a: null }, { a: null })).toBe(true);
  expect(matchObject('1', 1)).toBe(false);
});
