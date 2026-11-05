interface Event {
  id: number;
  name: string;
  capacity: number;
  registered: number;
  format: "in-person" | "online" | "hybrid";
  free: boolean;
}

export function eventsAbove(events: Event[], min: number): string[] {
  // TODO
  return [] as any;
}
