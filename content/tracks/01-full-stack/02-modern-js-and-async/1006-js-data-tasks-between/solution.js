export function tasksInRange(tasks, low, high) {
  return tasks.filter((x) => x.priority >= low && x.priority <= high).map((x) => x.title);
}
