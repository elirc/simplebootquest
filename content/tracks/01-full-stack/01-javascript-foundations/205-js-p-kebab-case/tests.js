test('camelCase', () => expect(toKebabCase('helloWorld')).toBe('hello-world'));
test('mixed', () => expect(toKebabCase('helloWorld Foo_bar')).toBe('hello-world-foo-bar'));
test('acronyms', () => expect(toKebabCase('userID')).toBe('user-id'));
test('already kebab', () => expect(toKebabCase('a-b')).toBe('a-b'));
