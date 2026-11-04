const empty = { pages: [] };

test('first page', () => {
  expect(hasMore(empty)).toBe(true);
  expect(nextCursor(empty)).toBeNull();
});

test('appends and flattens without duplicates', () => {
  let s = addPage(empty, { cursor: null, items: [{ id: 5 }, { id: 4 }], nextCursor: 'c1' });
  s = addPage(s, { cursor: 'c1', items: [{ id: 4 }, { id: 3 }], nextCursor: 'c2' });
  expect(flatItems(s).map((i) => i.id)).toEqual([5, 4, 3]);
  expect(nextCursor(s)).toBe('c2');
  expect(hasMore(s)).toBe(true);
});

test('refetching a page replaces it', () => {
  let s = addPage(empty, { cursor: null, items: [{ id: 1 }], nextCursor: 'c1' });
  s = addPage(s, { cursor: null, items: [{ id: 2 }, { id: 1 }], nextCursor: 'c1' });
  expect(s.pages).toHaveLength(1);
  expect(flatItems(s).map((i) => i.id)).toEqual([2, 1]);
});

test('stops at the end', () => {
  const s = addPage(empty, { cursor: null, items: [], nextCursor: null });
  expect(hasMore(s)).toBe(false);
});
