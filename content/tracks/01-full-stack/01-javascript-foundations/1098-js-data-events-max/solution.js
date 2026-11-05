export function highestCapacity(events) {
  let best = null;
  for (const x of events) if (best === null || x.capacity > best.capacity) best = x;
  return best ? best.name : null;
}
