export function yearOf(movies, title) {
  const found = movies.find((x) => x.title === title);
  return found ? found.year : null;
}
