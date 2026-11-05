export function bumpCapacity(events, value, amount) {
  return events.map((x) => (x.format === value ? { ...x, capacity: x.capacity + amount } : x));
}
