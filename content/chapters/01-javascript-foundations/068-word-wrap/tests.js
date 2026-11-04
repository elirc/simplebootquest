test('wraps greedily', () => {
  expect(wrap('the quick brown fox jumps over the lazy dog', 10)).toEqual(['the quick', 'brown fox', 'jumps over', 'the lazy', 'dog']);
});

test('long words get their own line', () => {
  expect(wrap('a supercalifragilistic word', 8)).toEqual(['a', 'supercalifragilistic', 'word']);
});

test('collapses whitespace', () => {
  expect(wrap('  hello    world  ', 20)).toEqual(['hello world']);
  expect(wrap('   ', 5)).toEqual([]);
});
