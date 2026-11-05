export function describeEvents(events) {
  return events.map((x) => `${x.name} (${x.registered})`);
}
