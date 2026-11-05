export function totalPriority(tasks) {
  return tasks.reduce((sum, x) => sum + x.priority, 0);
}
