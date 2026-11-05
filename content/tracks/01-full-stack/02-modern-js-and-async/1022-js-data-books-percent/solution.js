export function percentAvailable(books) {
  if (books.length === 0) return 0;
  return Math.round((books.filter((x) => x.available).length / books.length) * 100);
}
