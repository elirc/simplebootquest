interface Ticket {
  id: number;
  subject: string;
  ageHours: number;
  replies: number;
  priority: "low" | "normal" | "urgent";
  channel: "email" | "chat" | "phone";
  resolved: boolean;
}

export function summariseTickets(tickets: Ticket[]): { id: number; subject: string; ageHours: number }[] {
  return tickets.map(({ id, subject, ageHours }) => ({ id, subject, ageHours }));
}
