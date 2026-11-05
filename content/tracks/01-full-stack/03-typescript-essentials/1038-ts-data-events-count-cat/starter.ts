interface Event {
  id: number;
  name: string;
  capacity: number;
  registered: number;
  format: "in-person" | "online" | "hybrid";
  free: boolean;
}

export function countEventsByFormat(events: Event[], value: string): number {
  // TODO
  return 0 as any;
}
