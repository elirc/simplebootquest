const BOARD = [{ id: 'a', position: 0 }, { id: 'b', position: 1 }, { id: 'c', position: 2 }, { id: 'd', position: 3 }];
test('move down', () => {
  const { items, changed } = moveItem(BOARD, 'a', 2);
  expect(items.map((i) => i.id)).toEqual(['b', 'c', 'a', 'd']);
  expect(items.map((i) => i.position)).toEqual([0, 1, 2, 3]);
  expect(changed).toEqual(['b', 'c', 'a']);
});
test('move up', () => {
  const { items, changed } = moveItem(BOARD, 'd', 1);
  expect(items.map((i) => i.id)).toEqual(['a', 'd', 'b', 'c']);
  expect(changed).toEqual(['d', 'b', 'c']);
});
test('no-op move changes nothing', () => expect(moveItem(BOARD, 'b', 1).changed).toEqual([]));
test('clamps the target index', () => {
  expect(moveItem(BOARD, 'a', 99).items.map((i) => i.id)).toEqual(['b', 'c', 'd', 'a']);
  expect(moveItem(BOARD, 'c', -5).items.map((i) => i.id)).toEqual(['c', 'a', 'b', 'd']);
});
test('handles gaps and unsorted input', () => {
  const { items, changed } = moveItem([{ id: 'y', position: 7 }, { id: 'x', position: 0 }, { id: 'z', position: 3 }], 'y', 0);
  expect(items).toEqual([{ id: 'y', position: 0 }, { id: 'x', position: 1 }, { id: 'z', position: 2 }]);
  expect(changed).toEqual(['y', 'x', 'z']);
});
test('unknown id and immutability', () => {
  expect(() => moveItem(BOARD, 'q', 0)).toThrow('Item not found');
  moveItem(BOARD, 'a', 3);
  expect(BOARD[0]).toEqual({ id: 'a', position: 0 });
});
