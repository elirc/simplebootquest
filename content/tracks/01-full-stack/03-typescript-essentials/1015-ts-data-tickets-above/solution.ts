interface Ticket {
  id: number;
  subject: string;
  ageHours: number;
  replies: number;
  priority: "low" | "normal" | "urgent";
  channel: "email" | "chat" | "phone";
  resolved: boolean;
}

export function ticketsAbove(tickets: Ticket[], min: number): string[] {
  return tickets.filter((x) => x.replies > min).map((x) => x.subject);
}
