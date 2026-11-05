// mutant: input is no longer trimmed
const TICKETS = [
  {id: 1, subject: "App crash", ageHours: 152, replies: 0, priority: "urgent", channel: "email", resolved: true},
  {id: 2, subject: "Feature idea", ageHours: 102, replies: 10, priority: "urgent", channel: "chat", resolved: false},
  {id: 3, subject: "Dark mode", ageHours: 188, replies: 9, priority: "low", channel: "chat", resolved: true},
  {id: 4, subject: "Login fails", ageHours: 176, replies: 1, priority: "normal", channel: "phone", resolved: false},
  {id: 5, subject: "Password reset", ageHours: 1, replies: 7, priority: "low", channel: "email", resolved: false},
  {id: 6, subject: "Wrong invoice", ageHours: 76, replies: 4, priority: "normal", channel: "phone", resolved: true},
  {id: 7, subject: "Slow page", ageHours: 77, replies: 5, priority: "normal", channel: "chat", resolved: false},
  {id: 8, subject: "Missing order", ageHours: 191, replies: 1, priority: "urgent", channel: "chat", resolved: true}
];

function searchTickets(tickets, query) {
  const q = query.toLowerCase();
  return tickets.filter((x) => x.subject.toLowerCase().includes(q)).map((x) => x.subject);
}
