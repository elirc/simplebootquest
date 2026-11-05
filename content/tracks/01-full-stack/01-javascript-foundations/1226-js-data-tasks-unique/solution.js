export function distinctStatuss(tasks) {
  return [...new Set(tasks.map((x) => x.status))].sort();
}
