interface Event {
  id: number;
  name: string;
  capacity: number;
  registered: number;
  format: "in-person" | "online" | "hybrid";
  free: boolean;
}

export function eventsInRange(events: Event[], low: number, high: number): string[] {
  return events.filter((x) => x.registered >= low && x.registered <= high).map((x) => x.name);
}
