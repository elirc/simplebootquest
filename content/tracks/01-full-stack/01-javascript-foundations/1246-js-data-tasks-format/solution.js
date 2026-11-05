export function describeTasks(tasks) {
  return tasks.map((x) => `${x.title} (${x.priority})`);
}
