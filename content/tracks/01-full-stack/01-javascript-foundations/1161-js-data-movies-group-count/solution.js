export function countMoviesPerGenre(movies) {
  const counts = {};
  for (const x of movies) counts[x.genre] = (counts[x.genre] ?? 0) + 1;
  return counts;
}
