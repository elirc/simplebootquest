const TICKETS = [
  {id: 1, subject: "Slow page", ageHours: 29, replies: 2, priority: "normal", channel: "email", resolved: true},
  {id: 2, subject: "Login fails", ageHours: 133, replies: 4, priority: "low", channel: "chat", resolved: true},
  {id: 3, subject: "Billing error", ageHours: 96, replies: 5, priority: "low", channel: "phone", resolved: false},
  {id: 4, subject: "Bug in export", ageHours: 2, replies: 5, priority: "normal", channel: "email", resolved: false},
  {id: 5, subject: "Dark mode", ageHours: 195, replies: 9, priority: "urgent", channel: "phone", resolved: true},
  {id: 6, subject: "Missing order", ageHours: 152, replies: 5, priority: "low", channel: "chat", resolved: false},
  {id: 7, subject: "Wrong invoice", ageHours: 160, replies: 10, priority: "urgent", channel: "email", resolved: true},
  {id: 8, subject: "Password reset", ageHours: 11, replies: 1, priority: "urgent", channel: "chat", resolved: true}
];

function ticketsInRange(tickets, low, high) {
  return tickets.filter((x) => x.ageHours >= low && x.ageHours <= high).map((x) => x.subject);
}
