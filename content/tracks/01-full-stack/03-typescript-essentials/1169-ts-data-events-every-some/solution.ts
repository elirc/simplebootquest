interface Event {
  id: number;
  name: string;
  capacity: number;
  registered: number;
  format: "in-person" | "online" | "hybrid";
  free: boolean;
}

export function allEventsUnder(events: Event[], limit: number): boolean {
  return events.every((x) => x.registered < limit);
}
