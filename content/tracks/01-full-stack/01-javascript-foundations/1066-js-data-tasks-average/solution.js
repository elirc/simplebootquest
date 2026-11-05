export function averagePriority(tasks) {
  if (tasks.length === 0) return null;
  const total = tasks.reduce((sum, x) => sum + x.priority, 0);
  return Math.round((total / tasks.length) * 10) / 10;
}
