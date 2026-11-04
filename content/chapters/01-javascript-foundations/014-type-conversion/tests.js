test('toNumber converts valid numbers', () => {
  expect(toNumber('12')).toBe(12);
  expect(toNumber(' 3.5 ')).toBe(3.5);
  expect(toNumber('-7')).toBe(-7);
});

test('toNumber rejects invalid input', () => {
  expect(toNumber('abc')).toBeNull();
  expect(toNumber('')).toBeNull();
  expect(toNumber('   ')).toBeNull();
  expect(toNumber('12px')).toBeNull();
});

test('parseBool', () => {
  expect(parseBool('TRUE')).toBe(true);
  expect(parseBool(' yes ')).toBe(true);
  expect(parseBool('0')).toBe(false);
  expect(parseBool('Off')).toBe(false);
  expect(parseBool('maybe')).toBeNull();
});

test('addStrings adds numerically', () => {
  expect(addStrings('5', '1')).toBe(6);
  expect(addStrings('2.5', '0.5')).toBe(3);
});
