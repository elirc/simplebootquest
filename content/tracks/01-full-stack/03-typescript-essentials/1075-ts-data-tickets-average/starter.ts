interface Ticket {
  id: number;
  subject: string;
  ageHours: number;
  replies: number;
  priority: "low" | "normal" | "urgent";
  channel: "email" | "chat" | "phone";
  resolved: boolean;
}

export function averageAgeHours(tickets: Ticket[]): number | null {
  // TODO
  return 0 as any;
}
