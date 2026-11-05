interface Ticket {
  id: number;
  subject: string;
  ageHours: number;
  replies: number;
  priority: "low" | "normal" | "urgent";
  channel: "email" | "chat" | "phone";
  resolved: boolean;
}

export function ticketsInRange(tickets: Ticket[], low: number, high: number): string[] {
  // TODO
  return [] as any;
}
