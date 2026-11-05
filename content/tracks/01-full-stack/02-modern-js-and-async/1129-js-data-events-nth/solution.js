export function nthByCapacity(events, n) {
  const sorted = [...events].sort((a, b) => b.capacity - a.capacity);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].name : null;
}
