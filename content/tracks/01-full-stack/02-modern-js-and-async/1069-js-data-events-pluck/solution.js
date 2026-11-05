export function summariseEvents(events) {
  return events.map(({ id, name, capacity }) => ({ id, name, capacity }));
}
