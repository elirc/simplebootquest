export function eventsAbove(events, min) {
  return events.filter((x) => x.registered > min).map((x) => x.name);
}
