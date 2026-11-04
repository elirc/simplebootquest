const nested = [
  { id: 1, title: 'Hello', author: { id: 7, name: 'Ada' } },
  { id: 2, title: 'Again', author: { id: 8, name: 'Grace' } },
  { id: 3, title: 'More', author: { id: 7, name: 'Ada' } },
];

test('normalize', () => {
  const s = normalize(nested);
  expect(s.posts.allIds).toEqual([1, 2, 3]);
  expect(s.posts.byId[3]).toEqual({ id: 3, title: 'More', authorId: 7 });
  expect(s.authors.allIds).toEqual([7, 8]);
  expect(s.authors.byId[8]).toEqual({ id: 8, name: 'Grace' });
});

test('denormalize round-trips', () => {
  expect(denormalize(normalize(nested))).toEqual(nested);
});

test('renameAuthor updates every post at once', () => {
  const s = renameAuthor(normalize(nested), 7, 'Ada Lovelace');
  const posts = denormalize(s);
  expect(posts[0].author.name).toBe('Ada Lovelace');
  expect(posts[2].author.name).toBe('Ada Lovelace');
});
