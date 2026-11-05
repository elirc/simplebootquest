export function summariseMovies(movies) {
  return movies.map(({ id, title, year }) => ({ id, title, year }));
}
