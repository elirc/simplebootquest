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
  // TODO
  return {} as any;
}
