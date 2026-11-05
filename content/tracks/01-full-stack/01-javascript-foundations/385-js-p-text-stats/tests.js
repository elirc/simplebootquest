test('counts', () => {
  expect(textStats('Hello world. How are you? Fine!')).toEqual({ words: 6, sentences: 3, avgWordLength: 3.8, readingMinutes: 1 });
});
test('trailing sentence without punctuation', () => expect(textStats('One. Two').sentences).toBe(2));
test('long text', () => expect(textStats('word '.repeat(450)).readingMinutes).toBe(3));
test('empty', () => expect(textStats('   ')).toEqual({ words: 0, sentences: 0, avgWordLength: 0, readingMinutes: 0 }));
