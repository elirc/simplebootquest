export function nthByYear(books, n) {
  const sorted = [...books].sort((a, b) => b.year - a.year);
  return n > 1 && n <= sorted.length ? sorted[n - 1].title : null;
}
