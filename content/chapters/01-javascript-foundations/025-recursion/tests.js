test('sumDigits', () => {
  expect(sumDigits(1234)).toBe(10);
  expect(sumDigits(7)).toBe(7);
  expect(sumDigits(0)).toBe(0);
});

test('flatten', () => {
  expect(flatten([1, [2, [3, [4]]], 5])).toEqual([1, 2, 3, 4, 5]);
  expect(flatten([])).toEqual([]);
});

test('countFiles walks the tree', () => {
  const tree = {
    type: 'folder', name: 'src', children: [
      { type: 'file', name: 'index.js' },
      { type: 'folder', name: 'utils', children: [
        { type: 'file', name: 'a.js' },
        { type: 'file', name: 'b.js' },
        { type: 'folder', name: 'empty', children: [] },
      ] },
    ],
  };
  expect(countFiles(tree)).toBe(3);
  expect(countFiles({ type: 'file', name: 'x' })).toBe(1);
});
