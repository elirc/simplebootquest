test('basic slug', () => expect(slugify('Hello World')).toBe('hello-world'));
test('collapses runs of symbols', () => expect(slugify('Hello,   World!!!')).toBe('hello-world'));
test('trims dashes at both ends', () => expect(slugify('  --Hello--  ')).toBe('hello'));
test('removes accents', () => expect(slugify('Crème Brûlée')).toBe('creme-brulee'));
test('keeps digits', () => expect(slugify('Top 10 Tips')).toBe('top-10-tips'));
test('empty result', () => expect(slugify('!!!')).toBe('untitled'));
test('long titles are cut at a word boundary', () => {
  const s = slugify('the quick brown fox jumps over the lazy dog and keeps on running');
  expect(s).toBe('the-quick-brown-fox-jumps-over-the-lazy-dog-and');
  expect(s.length <= 50).toBe(true);
});
test('a single long word is cut at 50', () => expect(slugify('a'.repeat(60))).toBe('a'.repeat(50)));
