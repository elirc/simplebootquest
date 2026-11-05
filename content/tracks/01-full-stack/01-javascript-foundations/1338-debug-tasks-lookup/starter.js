export function priorityOf(tasks, title) {
  const found = tasks.find((x) => x.title !== title);
  return found ? found.priority : null;
}
