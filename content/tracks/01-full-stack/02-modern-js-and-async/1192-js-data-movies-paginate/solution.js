export function pageOfMovies(movies, page, size) {
  const totalPages = Math.ceil(movies.length / size);
  const items = movies.slice((page - 1) * size, page * size).map((x) => x.title);
  return { items, page, totalPages };
}
