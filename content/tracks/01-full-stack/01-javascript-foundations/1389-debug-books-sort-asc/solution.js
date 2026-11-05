export function booksByPages(books) {
  return [...books].sort((a, b) => a.pages - b.pages).map((x) => x.title);
}
