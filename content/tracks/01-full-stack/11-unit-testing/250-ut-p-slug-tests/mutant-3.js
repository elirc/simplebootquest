// mutant: accents become dashes
function slugify(title) {
  let slug = title
    .normalize('NFD')
    
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  if (slug.length > 50) {
    const cut = slug.slice(0, 50);
    const lastDash = cut.lastIndexOf('-');
    slug = lastDash > 0 ? cut.slice(0, lastDash) : cut;
  }
  return slug || 'untitled';
}
