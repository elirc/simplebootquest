export function booksInRange(books, low, high) {
  return books.filter((x) => x.pages > low && x.pages <= high).map((x) => x.title);
}
