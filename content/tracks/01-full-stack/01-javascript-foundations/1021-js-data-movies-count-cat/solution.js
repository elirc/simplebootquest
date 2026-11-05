export function countMoviesByGenre(movies, value) {
  let count = 0;
  for (const x of movies) if (x.genre === value) count++;
  return count;
}
