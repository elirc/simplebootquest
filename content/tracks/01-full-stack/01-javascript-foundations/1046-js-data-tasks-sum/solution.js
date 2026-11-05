export function totalEstimate(tasks) {
  return tasks.reduce((sum, x) => sum + x.estimate, 0);
}
