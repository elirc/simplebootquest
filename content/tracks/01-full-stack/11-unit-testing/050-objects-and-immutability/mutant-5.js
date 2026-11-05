// mutant: allows empty tags
function addTag(post, tag) {
  const clean = tag.trim().toLowerCase();
  
  if (post.tags.includes(clean)) return post;
  return { ...post, tags: [...post.tags, clean] };
}
