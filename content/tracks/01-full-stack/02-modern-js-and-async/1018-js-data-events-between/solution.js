export function eventsInRange(events, low, high) {
  return events.filter((x) => x.capacity >= low && x.capacity <= high).map((x) => x.name);
}
