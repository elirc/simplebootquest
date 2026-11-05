test('joins authors', () => {
  const users = [{ id: 1, name: 'Ada', email: 'secret@x' }, { id: 2, name: 'Grace' }];
  const posts = [{ id: 10, title: 'Hi', authorId: 2 }, { id: 11, title: 'Orphan', authorId: 9 }];
  expect(attachAuthors(posts, users)).toEqual([
    { id: 10, title: 'Hi', author: { id: 2, name: 'Grace' } },
    { id: 11, title: 'Orphan', author: null },
  ]);
});
