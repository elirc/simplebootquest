export function tasksAbove(tasks, min) {
  return tasks.filter((x) => x.estimate > min).map((x) => x.title);
}
