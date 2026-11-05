export function nthByStars(hotels, n) {
  const sorted = [...hotels].sort((a, b) => b.stars - a.stars);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].name : null;
}
