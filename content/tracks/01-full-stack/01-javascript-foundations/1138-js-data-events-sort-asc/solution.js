export function eventsByCapacity(events) {
  return [...events].sort((a, b) => a.capacity - b.capacity).map((x) => x.name);
}
