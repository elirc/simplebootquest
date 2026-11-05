export function topTasksByEstimate(tasks, n) {
  return [...tasks].sort((a, b) => b.estimate - a.estimate).slice(0, n).map((x) => x.title);
}
