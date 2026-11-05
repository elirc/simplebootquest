test('normalises case and whitespace', () => expect(normalizeEmail('  Ada.Lovelace@Example.COM ')).toBe('ada.lovelace@example.com'));
test('keeps dots and plus tags', () => expect(normalizeEmail('first.last+news@gmail.com')).toBe('first.last+news@gmail.com'));
test('rejects implausible emails', () => {
  for (const bad of ['', 'no-at-sign', 'a@b', 'a@@b.com', 'a@b@c.com', '@example.com', 'a@.com', 'a@example.', 'a b@example.com', 'x'.repeat(65) + '@example.com', 42]) {
    expect(normalizeEmail(bad)).toBeNull();
  }
});
test('length limit', () => expect(normalizeEmail('a@' + 'b'.repeat(250) + '.com')).toBeNull());
test('sameAccount', () => {
  expect(sameAccount('Ada@Example.com', ' ada@example.com')).toBe(true);
  expect(sameAccount('ada@example.com', 'a.da@example.com')).toBe(false);
  expect(sameAccount('bad', 'bad')).toBe(false);
});
