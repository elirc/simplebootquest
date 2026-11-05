const TICKETS = [
  {id: 1, subject: "Email change", ageHours: 82, replies: 2, priority: "low", channel: "email", resolved: false},
  {id: 2, subject: "Login fails", ageHours: 194, replies: 5, priority: "urgent", channel: "email", resolved: false},
  {id: 3, subject: "App crash", ageHours: 135, replies: 11, priority: "urgent", channel: "chat", resolved: true},
  {id: 4, subject: "Billing error", ageHours: 74, replies: 10, priority: "low", channel: "phone", resolved: false},
  {id: 5, subject: "Slow page", ageHours: 65, replies: 5, priority: "normal", channel: "phone", resolved: true},
  {id: 6, subject: "Wrong invoice", ageHours: 196, replies: 9, priority: "low", channel: "email", resolved: true},
  {id: 7, subject: "Dark mode", ageHours: 143, replies: 3, priority: "urgent", channel: "chat", resolved: true},
  {id: 8, subject: "Password reset", ageHours: 109, replies: 0, priority: "urgent", channel: "chat", resolved: true}
];

function ticketsByReplies(tickets) {
  return [...tickets].sort((a, b) => a.replies - b.replies).map((x) => x.subject);
}
