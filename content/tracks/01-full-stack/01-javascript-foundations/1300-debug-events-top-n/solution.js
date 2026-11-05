export function topEventsByCapacity(events, n) {
  return [...events].sort((a, b) => b.capacity - a.capacity).slice(0, n).map((x) => x.name);
}
