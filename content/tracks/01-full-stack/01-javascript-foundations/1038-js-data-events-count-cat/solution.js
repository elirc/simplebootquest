export function countEventsByFormat(events, value) {
  let count = 0;
  for (const x of events) if (x.format === value) count++;
  return count;
}
