const posts = Array.from({ length: 7 }, (_, i) => ({ id: i + 1, title: `Post ${i + 1}` }));

test('cursor round trip', () => {
  expect(decodeCursor(encodeCursor(42))).toEqual({ id: 42 });
  expect(decodeCursor('not base64!!')).toBeNull();
  expect(decodeCursor(btoa('{"nope":1}'))).toBeNull();
});

test('walks every page without gaps', () => {
  const p1 = paginate(posts, { limit: 3 });
  expect(p1.data.map((p) => p.id)).toEqual([7, 6, 5]);
  const p2 = paginate(posts, { limit: 3, cursor: p1.nextCursor });
  expect(p2.data.map((p) => p.id)).toEqual([4, 3, 2]);
  const p3 = paginate(posts, { limit: 3, cursor: p2.nextCursor });
  expect(p3.data.map((p) => p.id)).toEqual([1]);
  expect(p3.nextCursor).toBeNull();
});

test('stable when new items are inserted while paging', () => {
  const p1 = paginate(posts, { limit: 3 });
  const withNew = [...posts, { id: 8, title: 'Brand new' }];
  expect(paginate(withNew, { limit: 3, cursor: p1.nextCursor }).data.map((p) => p.id)).toEqual([4, 3, 2]);
});

test('invalid cursors throw', () => {
  expect(() => paginate(posts, { limit: 3, cursor: '%%%' })).toThrow('Invalid cursor');
});
