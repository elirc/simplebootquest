export function averageEstimatePerAssignee(tasks) {
  const groups = {};
  for (const x of tasks) (groups[x.assignee] ??= []).push(x.estimate);
  return Object.fromEntries(Object.entries(groups).map(([k, vals]) => [k, Math.round(vals.reduce((a, b) => a + b, 0) / vals.length)]));
}
