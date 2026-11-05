export function songsBySeconds(songs) {
  return [...songs].sort((a, b) => b.seconds - a.seconds).map((x) => x.title);
}
