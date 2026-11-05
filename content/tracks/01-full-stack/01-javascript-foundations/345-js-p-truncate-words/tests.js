test('cuts long text', () => expect(truncateWords('The quick brown fox jumps', 3)).toBe('The quick brown…'));
test('strips trailing punctuation before the ellipsis', () => expect(truncateWords('Hello, world, again', 1)).toBe('Hello…'));
test('short text unchanged', () => expect(truncateWords('  Short   text ', 5)).toBe('Short text'));
