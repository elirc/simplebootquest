export function pagesOf(books, title) {
  const found = books.find((x) => x.title === title);
  return found ? found.pages : null;
}
