interface Event {
  id: number;
  name: string;
  capacity: number;
  registered: number;
  format: "in-person" | "online" | "hybrid";
  free: boolean;
}

export function highestCapacity(events: Event[]): string | null {
  // TODO
  return 0 as any;
}
