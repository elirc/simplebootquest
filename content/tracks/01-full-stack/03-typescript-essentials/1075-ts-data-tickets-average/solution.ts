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
  if (tickets.length === 0) return null;
  const total = tickets.reduce((sum, x) => sum + x.ageHours, 0);
  return Math.round((total / tickets.length) * 10) / 10;
}
