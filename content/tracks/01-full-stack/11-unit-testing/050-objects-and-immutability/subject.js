function addTag(post, tag) {
  const clean = tag.trim().toLowerCase();
  if (!clean) throw new Error('Tag cannot be empty');
  if (post.tags.includes(clean)) return post;
  return { ...post, tags: [...post.tags, clean] };
}
