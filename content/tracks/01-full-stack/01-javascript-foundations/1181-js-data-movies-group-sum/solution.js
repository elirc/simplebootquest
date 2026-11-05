export function ratingPerGenre(movies) {
  const totals = {};
  for (const x of movies) totals[x.genre] = (totals[x.genre] ?? 0) + x.rating;
  return totals;
}
