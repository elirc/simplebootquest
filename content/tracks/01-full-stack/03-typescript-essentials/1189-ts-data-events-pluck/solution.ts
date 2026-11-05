interface Event {
  id: number;
  name: string;
  capacity: number;
  registered: number;
  format: "in-person" | "online" | "hybrid";
  free: boolean;
}

export function summariseEvents(events: Event[]): { id: number; name: string; capacity: number }[] {
  return events.map(({ id, name, capacity }) => ({ id, name, capacity }));
}
