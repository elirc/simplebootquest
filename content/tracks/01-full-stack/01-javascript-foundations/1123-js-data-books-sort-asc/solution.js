export function booksByYear(books) {
  return [...books].sort((a, b) => a.year - b.year).map((x) => x.title);
}
