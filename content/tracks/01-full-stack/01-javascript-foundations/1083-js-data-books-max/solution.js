export function highestPages(books) {
  let best = null;
  for (const x of books) if (best === null || x.pages > best.pages) best = x;
  return best ? best.title : null;
}
