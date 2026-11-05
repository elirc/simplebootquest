export function countTasksByAssignee(tasks, value) {
  let count = 0;
  for (const x of tasks) if (x.assignee === value) count++;
  return count;
}
