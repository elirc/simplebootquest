interface Event {
  id: number;
  name: string;
  capacity: number;
  registered: number;
  format: "in-person" | "online" | "hybrid";
  free: boolean;
}

export function lowestCapacity(events: Event[]): string | null {
  let best = null;
  for (const x of events) if (best === null || x.capacity < best.capacity) best = x;
  return best ? best.name : null;
}
