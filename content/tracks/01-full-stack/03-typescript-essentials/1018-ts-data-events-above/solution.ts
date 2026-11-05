interface Event {
  id: number;
  name: string;
  capacity: number;
  registered: number;
  format: "in-person" | "online" | "hybrid";
  free: boolean;
}

export function eventsAbove(events: Event[], min: number): string[] {
  return events.filter((x) => x.capacity > min).map((x) => x.name);
}
