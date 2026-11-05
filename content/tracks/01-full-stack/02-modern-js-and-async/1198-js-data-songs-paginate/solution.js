export function pageOfSongs(songs, page, size) {
  const totalPages = Math.ceil(songs.length / size);
  const items = songs.slice((page - 1) * size, page * size).map((x) => x.title);
  return { items, page, totalPages };
}
