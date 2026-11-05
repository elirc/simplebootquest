export function songsBySeconds(songs) {
  return [...songs].sort((a, b) => a.seconds - b.seconds).map((x) => x.title);
}
