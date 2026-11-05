export function allMoviesUnder(movies, limit) {
  return movies.every((x) => x.year < limit);
}
