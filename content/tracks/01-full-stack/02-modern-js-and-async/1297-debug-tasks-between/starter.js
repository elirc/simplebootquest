export function tasksInRange(tasks, low, high) {
  return tasks.filter((x) => x.estimate > low && x.estimate <= high).map((x) => x.title);
}
