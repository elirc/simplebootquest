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
  // TODO
  return 0 as any;
}
