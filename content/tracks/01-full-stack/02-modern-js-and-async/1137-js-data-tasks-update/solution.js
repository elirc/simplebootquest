export function bumpPriority(tasks, value, amount) {
  return tasks.map((x) => (x.assignee === value ? { ...x, priority: x.priority + amount } : x));
}
