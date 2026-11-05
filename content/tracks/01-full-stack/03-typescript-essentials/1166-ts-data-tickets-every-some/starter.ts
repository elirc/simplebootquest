interface Ticket {
  id: number;
  subject: string;
  ageHours: number;
  replies: number;
  priority: "low" | "normal" | "urgent";
  channel: "email" | "chat" | "phone";
  resolved: boolean;
}

export function allTicketsUnder(tickets: Ticket[], limit: number): boolean {
  // TODO
  return 0 as any;
}
