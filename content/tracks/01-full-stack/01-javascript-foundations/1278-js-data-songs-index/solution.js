export function songsById(songs) {
  const byId = {};
  for (const x of songs) byId[x.id] = x.title;
  return byId;
}
