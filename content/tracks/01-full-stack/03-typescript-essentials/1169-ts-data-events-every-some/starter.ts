interface Event {
  id: number;
  name: string;
  capacity: number;
  registered: number;
  format: "in-person" | "online" | "hybrid";
  free: boolean;
}

export function allEventsUnder(events: Event[], limit: number): boolean {
  // TODO
  return 0 as any;
}
