interface Ticket {
  id: number;
  subject: string;
  ageHours: number;
  replies: number;
  priority: "low" | "normal" | "urgent";
  channel: "email" | "chat" | "phone";
  resolved: boolean;
}

export function countTicketsByChannel(tickets: Ticket[], value: string): number {
  // TODO
  return 0 as any;
}
