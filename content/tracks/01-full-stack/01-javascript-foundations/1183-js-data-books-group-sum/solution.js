export function pagesPerGenre(books) {
  const totals = {};
  for (const x of books) totals[x.genre] = (totals[x.genre] ?? 0) + x.pages;
  return totals;
}
