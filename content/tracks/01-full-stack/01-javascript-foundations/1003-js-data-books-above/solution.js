export function booksAbove(books, min) {
  return books.filter((x) => x.year > min).map((x) => x.title);
}
