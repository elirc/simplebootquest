export function distinctGenres(books) {
  return [...new Set(books.map((x) => x.genre))].sort();
}
