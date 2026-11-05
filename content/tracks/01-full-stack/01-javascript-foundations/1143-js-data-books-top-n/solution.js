export function topBooksByPages(books, n) {
  return [...books].sort((a, b) => b.pages - a.pages).slice(0, n).map((x) => x.title);
}
