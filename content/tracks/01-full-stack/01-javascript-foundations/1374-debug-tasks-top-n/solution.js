export function topTasksByPriority(tasks, n) {
  return [...tasks].sort((a, b) => b.priority - a.priority).slice(0, n).map((x) => x.title);
}
