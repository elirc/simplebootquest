test('adds a tag', () => {
  const post = { id: 1, tags: [] };
  expect(addTag(post, 'js').tags).toEqual(['js']);
});
