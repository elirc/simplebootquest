export function countBooksPerGenre(books) {
  const counts = {};
  for (const x of books) counts[x.genre] = (counts[x.genre] ?? 0) + 1;
  return counts;
}
