function updateCity(user, city) {
  return { ...user, address: { ...user.address, city } };
}

function addTag(post, tag) {
  if (post.meta.tags.includes(tag)) return post;
  return { ...post, meta: { ...post.meta, tags: [...post.meta.tags, tag] } };
}

function renameAuthor(blog, postId, name) {
  return {
    ...blog,
    posts: blog.posts.map((p) => (p.id === postId ? { ...p, author: { ...p.author, name } } : p)),
  };
}
