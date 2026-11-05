test('assertDefined', () => {
  expect(() => assertDefined(null, 'nope')).toThrow('nope');
  expect(() => assertDefined(undefined, 'nope')).toThrow('nope');
  expect(() => assertDefined(0, 'nope')).not.toThrow();
});
test('assert', () => {
  expect(() => assert(1 > 2, 'math is broken')).toThrow('math is broken');
  expect(() => assert('x', 'fine')).not.toThrow();
});
test('getRequiredEnv', () => {
  expect(getRequiredEnv({ PORT: '3000' }, 'PORT')).toBe('3000');
  expect(() => getRequiredEnv({ PORT: '' }, 'PORT')).toThrow('Missing environment variable: PORT');
  expect(() => getRequiredEnv({}, 'DATABASE_URL')).toThrow('Missing environment variable: DATABASE_URL');
});
