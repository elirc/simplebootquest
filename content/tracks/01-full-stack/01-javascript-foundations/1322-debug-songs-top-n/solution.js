export function topSongsByPlays(songs, n) {
  return [...songs].sort((a, b) => b.plays - a.plays).slice(0, n).map((x) => x.title);
}
