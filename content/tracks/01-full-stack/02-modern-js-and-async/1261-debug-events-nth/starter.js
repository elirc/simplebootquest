export function nthByRegistered(events, n) {
  const sorted = [...events].sort((a, b) => b.registered - a.registered);
  return n > 1 && n <= sorted.length ? sorted[n - 1].name : null;
}
