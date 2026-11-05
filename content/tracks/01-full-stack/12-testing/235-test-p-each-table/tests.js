const TABLE = `
  input       | expected | valid
  "hello"     | 5        | true
  ""          | 0        | false
  -2.5        | null     | false
  plain words | 1.5      | true
`;
test('parses and converts cells', () => {
  expect(parseTable(TABLE)).toEqual([
    { input: 'hello', expected: 5, valid: true },
    { input: '', expected: 0, valid: false },
    { input: -2.5, expected: null, valid: false },
    { input: 'plain words', expected: 1.5, valid: true },
  ]);
});
test('wrong cell count', () => expect(() => parseTable('a | b\n1 | 2\n3')).toThrow('Row 2 has 1 cells, expected 2'));
test('empty table', () => expect(parseTable('\n  \n')).toEqual([]));
test('formatName', () => {
  expect(formatName('$a + $b = $expected', { a: 1, b: 2, expected: 3 })).toBe('1 + 2 = 3');
  expect(formatName('length of $input is $expected', { input: 'hi', expected: 2 })).toBe('length of "hi" is 2');
  expect(formatName('$missing stays', {})).toBe('$missing stays');
  expect(formatName('$v', { v: null })).toBe('null');
});
