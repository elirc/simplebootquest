test('short text is unchanged', () => expect(splitMessage('hello there', 20)).toEqual(['hello there']));
test('splits with prefixes within the limit', () => {
  const parts = splitMessage('the quick brown fox jumps over the lazy dog', 20);
  expect(parts).toEqual(['(1/4) the quick', '(2/4) brown fox', '(3/4) jumps over the', '(4/4) lazy dog']);
  for (const p of parts) expect(p.length).toBeLessThanOrEqual(20);
});
