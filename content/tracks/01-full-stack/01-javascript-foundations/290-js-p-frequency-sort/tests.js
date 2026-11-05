test('counts and ranks', () => {
  expect(topWords('the cat and the hat and the bat', 2)).toEqual([['the', 3], ['and', 2]]);
});
test('ties alphabetical, punctuation ignored', () => {
  expect(topWords("Bob's dog. A dog! bob's", 3)).toEqual([["bob's", 2], ['dog', 2], ['a', 1]]);
});
test('empty text', () => expect(topWords('', 3)).toEqual([]));
