test('chunks arrays and strings', () => {
  expect([...chunks([1, 2, 3, 4, 5], 2)]).toEqual([[1, 2], [3, 4], [5]]);
  expect([...chunks('abc', 2)]).toEqual([['a', 'b'], ['c']]);
});
test('works with infinite generators', () => {
  expect(takeN(chunks(idGenerator('u'), 2), 2)).toEqual([['u-1', 'u-2'], ['u-3', 'u-4']]);
});
