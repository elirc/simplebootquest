test('simple', () => expect(parseCsv('name,email\nAda,ada@x.io\nGrace,g@x.io')).toEqual([
  { name: 'Ada', email: 'ada@x.io' },
  { name: 'Grace', email: 'g@x.io' },
]));
test('CRLF and trailing newline', () => expect(parseCsv('a,b\r\n1,2\r\n')).toEqual([{ a: '1', b: '2' }]));
test('quoted commas, quotes and newlines', () => {
  expect(parseCsv('name,note\n"Smith, John","She said ""hi""\nthen left"')).toEqual([{ name: 'Smith, John', note: 'She said "hi"\nthen left' }]);
});
test('trims unquoted fields only', () => expect(parseCsv('a,b\n  x  ," y "')).toEqual([{ a: 'x', b: ' y ' }]));
test('empty fields', () => expect(parseCsv('a,b,c\n,,\n1,,3')).toEqual([{ a: '', b: '', c: '' }, { a: '1', b: '', c: '3' }]));
test('wrong field count', () => expect(() => parseCsv('a,b\n1,2\n3')).toThrow('Row 2 has 1 fields, expected 2'));
test('header only', () => expect(parseCsv('a,b\n')).toEqual([]));
