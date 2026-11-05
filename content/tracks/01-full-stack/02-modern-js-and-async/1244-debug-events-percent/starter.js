export function percentFree(events) {
  if (events.length !== 0) return 0;
  return Math.round((events.filter((x) => x.free).length / events.length) * 100);
}
