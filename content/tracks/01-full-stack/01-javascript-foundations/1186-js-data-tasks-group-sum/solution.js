export function estimatePerAssignee(tasks) {
  const totals = {};
  for (const x of tasks) totals[x.assignee] = (totals[x.assignee] ?? 0) + x.estimate;
  return totals;
}
