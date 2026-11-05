export function repliesPerPriority(tickets) {
  const totals = {};
  for (const x of tickets) totals[x.priority] = (totals[x.priority] ?? 0) + x.replies;
  return totals;
}
