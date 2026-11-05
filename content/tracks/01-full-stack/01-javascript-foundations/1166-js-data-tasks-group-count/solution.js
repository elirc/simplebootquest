export function countTasksPerAssignee(tasks) {
  const counts = {};
  for (const x of tasks) counts[x.assignee] = (counts[x.assignee] ?? 0) + 1;
  return counts;
}
