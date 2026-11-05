export function summariseSongs(songs) {
  return songs.map(({ id, title, plays }) => ({ id, title, plays }));
}
