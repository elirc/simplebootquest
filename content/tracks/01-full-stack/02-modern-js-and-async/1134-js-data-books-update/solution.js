export function bumpPages(books, value, amount) {
  return books.map((x) => (x.genre === value ? { ...x, pages: x.pages + amount } : x));
}
