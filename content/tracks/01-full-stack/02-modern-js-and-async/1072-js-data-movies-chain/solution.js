export function moviesInGenreRanked(movies, value) {
  return movies
    .filter((x) => x.genre === value)
    .sort((a, b) => b.rating - a.rating)
    .map((x) => x.title);
}
