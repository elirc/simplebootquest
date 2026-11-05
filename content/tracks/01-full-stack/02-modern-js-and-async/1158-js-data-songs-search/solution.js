export function searchSongs(songs, query) {
  const q = query.trim().toLowerCase();
  return songs.filter((x) => x.title.toLowerCase().includes(q)).map((x) => x.title);
}
