function slugify(title) {
  return title.toLowerCase().replace(/ /g, '-');
}

function uniqueSlug(title, taken) {
  return slugify(title);
}
