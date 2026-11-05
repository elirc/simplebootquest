export function topBooksByPages(books, n) {
  return [...books].sort((a, b) => a.pages - b.pages).slice(0, n).map((x) => x.title);
}
