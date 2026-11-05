export function nthByHeightCm(plants, n) {
  const sorted = [...plants].sort((a, b) => b.heightCm - a.heightCm);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].name : null;
}
