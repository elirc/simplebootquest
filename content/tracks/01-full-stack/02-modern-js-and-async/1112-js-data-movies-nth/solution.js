export function nthByMinutes(movies, n) {
  const sorted = [...movies].sort((a, b) => b.minutes - a.minutes);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].title : null;
}
