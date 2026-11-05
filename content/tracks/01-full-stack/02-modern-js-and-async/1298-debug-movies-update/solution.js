export function bumpRating(movies, value, amount) {
  return movies.map((x) => (x.genre === value ? { ...x, rating: x.rating + amount } : x));
}
