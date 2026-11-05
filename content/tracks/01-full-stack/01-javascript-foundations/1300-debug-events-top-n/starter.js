export function topEventsByCapacity(events, n) {
  return [...events].sort((a, b) => a.capacity - b.capacity).slice(0, n).map((x) => x.name);
}
