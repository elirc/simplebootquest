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
  return tickets.every((x) => x.replies < limit);
}
