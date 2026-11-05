interface Event {
  id: number;
  name: string;
  capacity: number;
  registered: number;
  format: "in-person" | "online" | "hybrid";
  free: boolean;
}

export function countEventsByFormat(events: Event[], value: string): number {
  let count = 0;
  for (const x of events) if (x.format === value) count++;
  return count;
}
