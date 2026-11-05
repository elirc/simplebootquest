export function summariseBooks(books) {
  return books.map(({ id, title, pages }) => ({ id, title, pages }));
}
