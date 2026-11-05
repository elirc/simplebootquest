interface Event {
  id: number;
  name: string;
  capacity: number;
  registered: number;
  format: "in-person" | "online" | "hybrid";
  free: boolean;
}

export function eventsInRange(events: Event[], low: number, high: number): string[] {
  // TODO
  return [] as any;
}
