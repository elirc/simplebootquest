interface Ticket {
  id: number;
  subject: string;
  ageHours: number;
  replies: number;
  priority: "low" | "normal" | "urgent";
  channel: "email" | "chat" | "phone";
  resolved: boolean;
}

export function countTicketsByChannel(tickets: Ticket[], value: string): number {
  let count = 0;
  for (const x of tickets) if (x.channel === value) count++;
  return count;
}
