const TICKETS = [
  {id: 1, subject: "Refund request", ageHours: 20, replies: 5, priority: "normal", channel: "email", resolved: true},
  {id: 2, subject: "Slow page", ageHours: 105, replies: 4, priority: "low", channel: "chat", resolved: false},
  {id: 3, subject: "Bug in export", ageHours: 89, replies: 6, priority: "normal", channel: "phone", resolved: false},
  {id: 4, subject: "Dark mode", ageHours: 12, replies: 6, priority: "urgent", channel: "email", resolved: true},
  {id: 5, subject: "Login fails", ageHours: 104, replies: 1, priority: "urgent", channel: "chat", resolved: false},
  {id: 6, subject: "App crash", ageHours: 14, replies: 1, priority: "normal", channel: "phone", resolved: false},
  {id: 7, subject: "Email change", ageHours: 154, replies: 11, priority: "low", channel: "email", resolved: true},
  {id: 8, subject: "Wrong invoice", ageHours: 149, replies: 7, priority: "normal", channel: "email", resolved: true}
];

function topTicketsByAgeHours(tickets, n) {
  return [...tickets].sort((a, b) => b.ageHours - a.ageHours).slice(0, n).map((x) => x.subject);
}
