export function topSongsByPlays(songs, n) {
  return [...songs].sort((a, b) => a.plays - b.plays).slice(0, n).map((x) => x.title);
}
