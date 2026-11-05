export function nthByMinutes(recipes, n) {
  const sorted = [...recipes].sort((a, b) => b.minutes - a.minutes);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].name : null;
}
