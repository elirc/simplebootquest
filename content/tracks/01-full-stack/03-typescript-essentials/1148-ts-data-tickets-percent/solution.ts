interface Ticket {
  id: number;
  subject: string;
  ageHours: number;
  replies: number;
  priority: "low" | "normal" | "urgent";
  channel: "email" | "chat" | "phone";
  resolved: boolean;
}

export function percentResolved(tickets: Ticket[]): number {
  if (tickets.length === 0) return 0;
  return Math.round((tickets.filter((x) => x.resolved).length / tickets.length) * 100);
}
