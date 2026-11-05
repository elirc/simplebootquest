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
  let best = null;
  for (const x of tickets) if (best === null || x.replies < best.replies) best = x;
  return best ? best.subject : null;
}
