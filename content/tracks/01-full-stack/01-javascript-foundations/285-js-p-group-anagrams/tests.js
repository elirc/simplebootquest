test('groups anagrams', () => {
  expect(groupAnagrams(['listen', 'google', 'Silent', 'enlist', 'gogole'])).toEqual([['listen', 'Silent', 'enlist'], ['google', 'gogole']]);
});
test('singletons', () => expect(groupAnagrams(['a', 'b'])).toEqual([['a'], ['b']]));
test('empty', () => expect(groupAnagrams([])).toEqual([]));
