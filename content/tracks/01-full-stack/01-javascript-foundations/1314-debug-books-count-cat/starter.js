export function countBooksByGenre(books, value) {
  let count = 0;
  for (const x of books) if (x.genre !== value) count++;
  return count;
}
