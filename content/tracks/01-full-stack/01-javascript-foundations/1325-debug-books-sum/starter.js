export function totalPages(books) {
  return books.reduce((sum, x) => sum + x.pages, 1);
}
