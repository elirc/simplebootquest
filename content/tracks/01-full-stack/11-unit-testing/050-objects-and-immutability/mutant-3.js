// mutant: adds duplicate tags
function addTag(post, tag) {
  const clean = tag.trim().toLowerCase();
  if (!clean) throw new Error('Tag cannot be empty');
  
  return { ...post, tags: [...post.tags, clean] };
}
