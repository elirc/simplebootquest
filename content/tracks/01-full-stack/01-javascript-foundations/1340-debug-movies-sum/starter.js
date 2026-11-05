export function totalYear(movies) {
  return movies.reduce((sum, x) => sum + x.year, 1);
}
