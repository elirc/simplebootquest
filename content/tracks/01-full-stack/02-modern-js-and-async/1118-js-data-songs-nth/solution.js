export function nthByPlays(songs, n) {
  const sorted = [...songs].sort((a, b) => b.plays - a.plays);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].title : null;
}
