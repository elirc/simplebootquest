export function allBooksUnder(books, limit) {
  return books.every((x) => x.pages < limit);
}
