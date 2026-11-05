test('detects every kind of change', () => {
  const before = [{ id: 1, t: 'a' }, { id: 2, t: 'b' }, { id: 3, t: 'c' }];
  const after = [{ id: 3, t: 'c!' }, { id: 1, t: 'a' }, { id: 4, t: 'd' }];
  expect(diffById(before, after)).toEqual({ added: [4], removed: [2], changed: [3] });
});
test('no changes', () => expect(diffById([{ id: 1 }], [{ id: 1 }])).toEqual({ added: [], removed: [], changed: [] }));
