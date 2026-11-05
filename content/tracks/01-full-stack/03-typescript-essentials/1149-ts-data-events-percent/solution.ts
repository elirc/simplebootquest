interface Event {
  id: number;
  name: string;
  capacity: number;
  registered: number;
  format: "in-person" | "online" | "hybrid";
  free: boolean;
}

export function percentFree(events: Event[]): number {
  if (events.length === 0) return 0;
  return Math.round((events.filter((x) => x.free).length / events.length) * 100);
}
