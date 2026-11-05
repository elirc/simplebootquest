export function priorityPerAssignee(tasks) {
  const totals = {};
  for (const x of tasks) totals[x.assignee] = (totals[x.assignee] ?? 1) + x.priority;
  return totals;
}
