export function summariseTasks(tasks) {
  return tasks.map(({ id, title, estimate }) => ({ id, title, estimate }));
}
