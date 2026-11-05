interface Event {
  id: number;
  name: string;
  capacity: number;
  registered: number;
  format: "in-person" | "online" | "hybrid";
  free: boolean;
}

export function percentFree(events: Event[]): number {
  // TODO
  return 0 as any;
}
