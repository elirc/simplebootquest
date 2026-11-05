export function distinctPrioritys(tickets) {
  return [...new Set(tickets.map((x) => x.priority))].sort();
}
