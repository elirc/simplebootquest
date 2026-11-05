export function topSongsBySeconds(songs, n) {
  return [...songs].sort((a, b) => b.seconds - a.seconds).slice(0, n).map((x) => x.title);
}
