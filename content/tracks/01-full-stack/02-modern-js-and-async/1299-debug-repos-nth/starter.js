export function nthByStars(repos, n) {
  const sorted = [...repos].sort((a, b) => b.stars - a.stars);
  return n > 1 && n <= sorted.length ? sorted[n - 1].name : null;
}
