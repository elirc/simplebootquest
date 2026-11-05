export function lowestRegistered(events) {
  let best = null;
  for (const x of events) if (best === null || x.registered < best.registered) best = x;
  return best ? best.name : null;
}
