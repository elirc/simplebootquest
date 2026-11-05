export function distinctGenres(movies) {
  return [...new Set(movies.map((x) => x.genre))].sort();
}
