export function pageOfBooks(books, page, size) {
  const totalPages = Math.ceil(books.length / size);
  const items = books.slice((page - 1) * size, page * size).map((x) => x.title);
  return { items, page, totalPages };
}
