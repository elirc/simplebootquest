export function searchBooks(books, query) {
  const q = query.trim();
  return books.filter((x) => x.title.toLowerCase().includes(q)).map((x) => x.title);
}
