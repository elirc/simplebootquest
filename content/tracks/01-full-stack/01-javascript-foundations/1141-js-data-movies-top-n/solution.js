export function topMoviesByRating(movies, n) {
  return [...movies].sort((a, b) => b.rating - a.rating).slice(0, n).map((x) => x.title);
}
