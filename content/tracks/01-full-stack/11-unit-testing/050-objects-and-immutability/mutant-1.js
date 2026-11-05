// mutant: mutates the original tags array
function addTag(post, tag) {
  const clean = tag.trim().toLowerCase();
  if (!clean) throw new Error('Tag cannot be empty');
  if (post.tags.includes(clean)) return post;
  post.tags.push(clean);
  return { ...post };
}
