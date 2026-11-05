export function booksByPages(books) {
  return [...books].sort((a, b) => b.pages - a.pages).map((x) => x.title);
}
