export function describeMovies(movies) {
  return movies.map((x) => `${x.title} (${x.rating})`);
}
