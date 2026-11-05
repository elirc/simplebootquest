test('parse', () => {
  expect(parse('1.4.2')).toEqual({ major: 1, minor: 4, patch: 2, pre: null });
  expect(parse('2.0.0-beta.1')).toEqual({ major: 2, minor: 0, patch: 0, pre: 'beta.1' });
  for (const bad of ['1.2', 'v1.2.3', '1.2.3.4', 'a.b.c']) expect(() => parse(bad)).toThrow('Invalid version');
});
test('compare numbers numerically', () => {
  expect(compare('1.10.0', '1.9.0')).toBe(1);
  expect(compare('1.2.3', '1.2.3')).toBe(0);
  expect(compare('0.9.9', '1.0.0')).toBe(-1);
});
test('pre-releases sort before releases', () => {
  expect(compare('2.0.0-beta.1', '2.0.0')).toBe(-1);
  expect(compare('2.0.0-beta.2', '2.0.0-beta.10')).toBe(-1);
  expect(compare('2.0.0-alpha', '2.0.0-beta')).toBe(-1);
  expect(compare('2.0.0-rc.1', '1.9.9')).toBe(1);
});
test('bump', () => {
  expect(['major', 'minor', 'patch'].map((t) => bump('1.4.2', t))).toEqual(['2.0.0', '1.5.0', '1.4.3']);
  expect(bump('2.0.0-beta.3', 'major')).toBe('2.0.0');
  expect(bump('1.5.0-rc.1', 'minor')).toBe('1.5.0');
  expect(bump('1.4.3-rc.1', 'patch')).toBe('1.4.3');
});
test('satisfies', () => {
  expect(satisfies('1.9.0', '^1.4.2')).toBe(true);
  expect(satisfies('2.0.0', '^1.4.2')).toBe(false);
  expect(satisfies('1.4.1', '^1.4.2')).toBe(false);
  expect(satisfies('1.4.9', '~1.4.2')).toBe(true);
  expect(satisfies('1.5.0', '~1.4.2')).toBe(false);
  expect(satisfies('1.5.0-beta.1', '^1.4.2')).toBe(false);
  expect(satisfies('1.4.2', '1.4.2')).toBe(true);
});
