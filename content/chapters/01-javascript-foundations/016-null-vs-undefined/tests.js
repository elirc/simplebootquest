test('special cases', () => {
  expect(describeType(null)).toBe('null');
  expect(describeType([1])).toBe('array');
  expect(describeType(NaN)).toBe('nan');
  expect(describeType(new Date())).toBe('date');
});

test('falls back to typeof', () => {
  expect(describeType('x')).toBe('string');
  expect(describeType(1)).toBe('number');
  expect(describeType({})).toBe('object');
  expect(describeType(undefined)).toBe('undefined');
  expect(describeType(() => 1)).toBe('function');
});

test('isMissing', () => {
  expect(isMissing(null)).toBe(true);
  expect(isMissing(undefined)).toBe(true);
  expect(isMissing(0)).toBe(false);
  expect(isMissing('')).toBe(false);
  expect(isMissing(false)).toBe(false);
});
