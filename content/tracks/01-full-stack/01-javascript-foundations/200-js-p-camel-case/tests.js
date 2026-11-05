test('converts mixed separators', () => expect(toCamelCase('hello world-foo_bar')).toBe('helloWorldFooBar'));
test('normalises case', () => expect(toCamelCase('USER ID')).toBe('userId'));
test('ignores extra separators', () => expect(toCamelCase('  --created__at  ')).toBe('createdAt'));
test('single word', () => expect(toCamelCase('Name')).toBe('name'));
