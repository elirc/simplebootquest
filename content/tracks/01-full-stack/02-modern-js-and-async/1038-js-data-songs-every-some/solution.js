export function allSongsUnder(songs, limit) {
  return songs.every((x) => x.plays < limit);
}
