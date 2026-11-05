export function songsByPlays(songs) {
  return [...songs].sort((a, b) => a.plays - b.plays).map((x) => x.title);
}
