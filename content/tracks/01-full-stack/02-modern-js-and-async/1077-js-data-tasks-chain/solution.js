export function tasksInAssigneeRanked(tasks, value) {
  return tasks
    .filter((x) => x.assignee === value)
    .sort((a, b) => b.estimate - a.estimate)
    .map((x) => x.title);
}
