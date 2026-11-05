export function nthByPriority(tasks, n) {
  const sorted = [...tasks].sort((a, b) => b.priority - a.priority);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].title : null;
}
