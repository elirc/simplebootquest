export function totalMinutes(movies) {
  return movies.reduce((sum, x) => sum + x.minutes, 0);
}
