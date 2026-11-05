export function ratingPerGenre(movies) {
  const totals = {};
  for (const x of movies) totals[x.genre] = (totals[x.genre] ?? 1) + x.rating;
  return totals;
}
