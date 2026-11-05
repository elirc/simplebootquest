export function topTasksByPriority(tasks, n) {
  return [...tasks].sort((a, b) => a.priority - b.priority).slice(0, n).map((x) => x.title);
}
