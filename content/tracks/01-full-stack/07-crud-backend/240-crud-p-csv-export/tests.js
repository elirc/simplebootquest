const COLS = [{ key: 'id', header: 'ID' }, { key: 'name', header: 'Name' }, { key: 'note', header: 'Note' }];
test('plain values', () => expect(toCsv([{ id: 1, name: 'Ada', note: 'hi' }], COLS)).toBe('ID,Name,Note\r\n1,Ada,hi'));
test('escapes commas, quotes and newlines', () => {
  expect(toCsv([{ id: 2, name: 'Smith, John', note: 'She said "hi"\nthen left' }], COLS)).toBe('ID,Name,Note\r\n2,"Smith, John","She said ""hi""\nthen left"');
});
test('null, undefined and dates', () => {
  expect(toCsv([{ id: 3, name: null, note: new Date('2026-01-02T03:04:05Z') }], COLS)).toBe('ID,Name,Note\r\n3,,2026-01-02T03:04:05.000Z');
});
test('neutralises formulas', () => {
  expect(toCsv([{ id: 4, name: '=HYPERLINK("http://evil.test")', note: '+1' }], COLS)).toBe(`ID,Name,Note\r\n4,"'=HYPERLINK(""http://evil.test"")",'+1`);
  expect(toCsv([{ id: 5, name: '@SUM(A1)', note: '-2' }], COLS)).toBe("ID,Name,Note\r\n5,'@SUM(A1),'-2");
});
test('numbers are not mangled', () => expect(toCsv([{ id: -1, name: 'x', note: 0 }], COLS)).toBe("ID,Name,Note\r\n'-1,x,0"));
test('headers are escaped too', () => expect(toCsv([], [{ key: 'a', header: 'Price, USD' }])).toBe('"Price, USD"'));
