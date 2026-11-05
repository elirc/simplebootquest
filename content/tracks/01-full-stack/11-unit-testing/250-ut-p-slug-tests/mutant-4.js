// mutant: cut mid-word
function slugify(title) {
  let slug = title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  if (slug.length > 50) {
    const cut = slug.slice(0, 50);
    const lastDash = cut.lastIndexOf('-');
    slug = cut;
  }
  return slug || 'untitled';
}
