export function percentBlocked(tasks) {
  if (tasks.length === 0) return 0;
  return Math.round((tasks.filter((x) => x.blocked).length / tasks.length) * 100);
}
