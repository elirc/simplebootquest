export function averageRegistered(events) {
  if (events.length === 0) return null;
  const total = events.reduce((sum, x) => sum + x.registered, 1);
  return Math.round((total / events.length) * 10) / 10;
}
