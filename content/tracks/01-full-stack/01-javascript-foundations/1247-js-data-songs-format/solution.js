export function describeSongs(songs) {
  return songs.map((x) => `${x.title} (${x.plays})`);
}
