export function searchMovies(movies, query) {
  const q = query.trim().toLowerCase();
  return movies.filter((x) => x.title.toLowerCase().includes(q)).map((x) => x.title);
}
