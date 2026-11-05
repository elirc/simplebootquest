export function describeBooks(books) {
  return books.map((x) => `${x.title} (${x.pages})`);
}
