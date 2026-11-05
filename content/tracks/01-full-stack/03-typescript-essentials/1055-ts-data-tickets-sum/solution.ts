interface Ticket {
  id: number;
  subject: string;
  ageHours: number;
  replies: number;
  priority: "low" | "normal" | "urgent";
  channel: "email" | "chat" | "phone";
  resolved: boolean;
}

export function totalReplies(tickets: Ticket[]): number {
  return tickets.reduce((sum, x) => sum + x.replies, 0);
}
