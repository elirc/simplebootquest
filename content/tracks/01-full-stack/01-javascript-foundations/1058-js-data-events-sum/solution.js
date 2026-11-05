export function totalRegistered(events) {
  return events.reduce((sum, x) => sum + x.registered, 0);
}
