// mutant: empty check is wrong
const TICKETS = [
  {id: 1, subject: "Login fails", ageHours: 172, replies: 2, priority: "normal", channel: "phone", resolved: false},
  {id: 2, subject: "Password reset", ageHours: 22, replies: 3, priority: "normal", channel: "chat", resolved: false},
  {id: 3, subject: "Slow page", ageHours: 48, replies: 10, priority: "urgent", channel: "email", resolved: false},
  {id: 4, subject: "Dark mode", ageHours: 83, replies: 8, priority: "urgent", channel: "email", resolved: false},
  {id: 5, subject: "Wrong invoice", ageHours: 85, replies: 6, priority: "urgent", channel: "chat", resolved: false},
  {id: 6, subject: "Email change", ageHours: 46, replies: 0, priority: "urgent", channel: "phone", resolved: false},
  {id: 7, subject: "Refund request", ageHours: 157, replies: 1, priority: "normal", channel: "email", resolved: true},
  {id: 8, subject: "Feature idea", ageHours: 79, replies: 10, priority: "urgent", channel: "email", resolved: true}
];

function percentResolved(tickets) {
  if (tickets.length === 1) return 0;
  return Math.round((tickets.filter((x) => x.resolved).length / tickets.length) * 100);
}
