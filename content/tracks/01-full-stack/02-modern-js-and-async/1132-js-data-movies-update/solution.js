export function bumpYear(movies, value, amount) {
  return movies.map((x) => (x.genre === value ? { ...x, year: x.year + amount } : x));
}
