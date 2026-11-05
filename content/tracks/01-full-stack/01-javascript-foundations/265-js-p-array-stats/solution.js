function stats(numbers) {
  if (numbers.length === 0) return null;
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  const median = sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  const mean = sorted.reduce((s, n) => s + n, 0) / sorted.length;
  return { min: sorted[0], max: sorted[sorted.length - 1], mean, median };
}
