interface Ticket {
  id: number;
  subject: string;
  ageHours: number;
  replies: number;
  priority: "low" | "normal" | "urgent";
  channel: "email" | "chat" | "phone";
  resolved: boolean;
}

export function lowestReplies(tickets: Ticket[]): string | null {
  // TODO
  return 0 as any;
}
