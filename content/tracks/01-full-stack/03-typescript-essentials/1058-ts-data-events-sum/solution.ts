interface Event {
  id: number;
  name: string;
  capacity: number;
  registered: number;
  format: "in-person" | "online" | "hybrid";
  free: boolean;
}

export function totalCapacity(events: Event[]): number {
  return events.reduce((sum, x) => sum + x.capacity, 0);
}
