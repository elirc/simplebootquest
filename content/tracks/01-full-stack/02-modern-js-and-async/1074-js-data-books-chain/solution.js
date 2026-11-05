export function booksInGenreRanked(books, value) {
  return books
    .filter((x) => x.genre === value)
    .sort((a, b) => b.year - a.year)
    .map((x) => x.title);
}
