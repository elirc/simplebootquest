interface Event {
  id: number;
  name: string;
  capacity: number;
  registered: number;
  format: "in-person" | "online" | "hybrid";
  free: boolean;
}

export function averageRegistered(events: Event[]): number | null {
  if (events.length === 0) return null;
  const total = events.reduce((sum, x) => sum + x.registered, 0);
  return Math.round((total / events.length) * 10) / 10;
}
