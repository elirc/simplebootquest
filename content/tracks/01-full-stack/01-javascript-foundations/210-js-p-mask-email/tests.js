test('masks the local part', () => expect(maskEmail('ada@example.com')).toBe('a**@example.com'));
test('one-letter names still get a star', () => expect(maskEmail('a@b.co')).toBe('a*@b.co'));
test('keeps the domain', () => expect(maskEmail('grace.hopper@navy.mil')).toBe('g***********@navy.mil'));
test('no @', () => expect(maskEmail('nope')).toBe('nope'));
