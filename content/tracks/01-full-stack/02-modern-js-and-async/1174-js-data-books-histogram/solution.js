export function pagesHistogram(books, width) {
  const buckets = {};
  for (const x of books) {
    const key = Math.floor(x.pages / width) * width;
    buckets[key] = (buckets[key] ?? 0) + 1;
  }
  return buckets;
}
