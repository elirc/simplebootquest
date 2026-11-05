export function moviesInRange(movies, low, high) {
  return movies.filter((x) => x.minutes >= low && x.minutes <= high).map((x) => x.title);
}
