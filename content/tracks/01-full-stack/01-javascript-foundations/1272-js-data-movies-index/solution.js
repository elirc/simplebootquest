export function moviesById(movies) {
  const byId = {};
  for (const x of movies) byId[x.id] = x.title;
  return byId;
}
