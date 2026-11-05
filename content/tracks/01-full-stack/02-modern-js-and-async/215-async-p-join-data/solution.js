function attachAuthors(posts, users) {
  const byId = new Map(users.map((u) => [u.id, { id: u.id, name: u.name }]));
  return posts.map(({ authorId, ...post }) => ({ ...post, author: byId.get(authorId) ?? null }));
}
