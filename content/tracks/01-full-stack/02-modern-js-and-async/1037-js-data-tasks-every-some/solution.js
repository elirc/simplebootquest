export function allTasksUnder(tasks, limit) {
  return tasks.every((x) => x.estimate < limit);
}
