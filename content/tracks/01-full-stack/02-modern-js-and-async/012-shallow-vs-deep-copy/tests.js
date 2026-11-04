function deepFreeze(o) {
  Object.values(o).forEach((v) => v && typeof v === 'object' && deepFreeze(v));
  return Object.freeze(o);
}

test('updateCity', () => {
  const user = deepFreeze({ name: 'Ada', address: { city: 'London', zip: 'N1' } });
  const next = updateCity(user, 'Paris');
  expect(next.address).toEqual({ city: 'Paris', zip: 'N1' });
  expect(user.address.city).toBe('London');
});

test('addTag', () => {
  const post = deepFreeze({ id: 1, meta: { tags: ['js'], views: 3 } });
  expect(addTag(post, 'node').meta).toEqual({ tags: ['js', 'node'], views: 3 });
  expect(addTag(post, 'js').meta.tags).toEqual(['js']);
});

test('renameAuthor keeps untouched posts identical', () => {
  const blog = deepFreeze({ title: 'B', posts: [{ id: 1, author: { name: 'a', id: 9 } }, { id: 2, author: { name: 'b' } }] });
  const next = renameAuthor(blog, 1, 'Ada');
  expect(next.posts[0].author).toEqual({ name: 'Ada', id: 9 });
  expect(next.posts[1]).toBe(blog.posts[1]);
  expect(next.title).toBe('B');
});
