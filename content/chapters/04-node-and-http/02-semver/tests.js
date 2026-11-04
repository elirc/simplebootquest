test('parses versions', () => {
  expect(parseVersion('1.4.2')).toEqual({ major: 1, minor: 4, patch: 2 });
  expect(parseVersion('10.0.15')).toEqual({ major: 10, minor: 0, patch: 15 });
});

test('rejects invalid versions', () => {
  for (const bad of ['1.4', '1.4.2.1', 'a.b.c', '-1.0.0', '']) {
    expect(() => parseVersion(bad)).toThrow();
  }
});

test('compares numerically, not as strings', () => {
  expect(compareVersions('1.10.0', '1.9.0')).toBe(1);
  expect(compareVersions('1.2.3', '1.2.3')).toBe(0);
  expect(compareVersions('0.9.9', '1.0.0')).toBe(-1);
});

test('sorts with compareVersions', () => {
  expect(['1.10.0', '1.2.0', '0.5.0', '1.2.10'].sort(compareVersions)).toEqual(['0.5.0', '1.2.0', '1.2.10', '1.10.0']);
});

test('exact versions', () => {
  expect(satisfies('5.1.0', '5.1.0')).toBe(true);
  expect(satisfies('5.1.1', '5.1.0')).toBe(false);
});

test('tilde ranges allow patches', () => {
  expect(satisfies('5.1.9', '~5.1.0')).toBe(true);
  expect(satisfies('5.2.0', '~5.1.0')).toBe(false);
  expect(satisfies('5.0.9', '~5.1.0')).toBe(false);
});

test('caret ranges allow minors', () => {
  expect(satisfies('5.9.3', '^5.1.0')).toBe(true);
  expect(satisfies('6.0.0', '^5.1.0')).toBe(false);
  expect(satisfies('5.0.0', '^5.1.0')).toBe(false);
});

test('caret ranges on 0.x are stricter', () => {
  expect(satisfies('0.3.9', '^0.3.1')).toBe(true);
  expect(satisfies('0.4.0', '^0.3.1')).toBe(false);
});
