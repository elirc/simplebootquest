export function moviesAbove(movies, min) {
  return movies.filter((x) => x.year >= min).map((x) => x.title);
}
