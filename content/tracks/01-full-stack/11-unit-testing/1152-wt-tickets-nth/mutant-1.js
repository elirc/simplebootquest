// mutant: boundary: `>=` became `>`
const TICKETS = [
  {id: 1, subject: "Slow page", ageHours: 50, replies: 2, priority: "low", channel: "chat", resolved: false},
  {id: 2, subject: "Missing order", ageHours: 113, replies: 9, priority: "low", channel: "chat", resolved: true},
  {id: 3, subject: "Refund request", ageHours: 68, replies: 4, priority: "low", channel: "email", resolved: false},
  {id: 4, subject: "Dark mode", ageHours: 169, replies: 1, priority: "low", channel: "chat", resolved: false},
  {id: 5, subject: "Login fails", ageHours: 155, replies: 8, priority: "urgent", channel: "phone", resolved: true},
  {id: 6, subject: "Feature idea", ageHours: 44, replies: 1, priority: "normal", channel: "chat", resolved: false},
  {id: 7, subject: "Wrong invoice", ageHours: 171, replies: 4, priority: "urgent", channel: "chat", resolved: true},
  {id: 8, subject: "App crash", ageHours: 37, replies: 6, priority: "urgent", channel: "email", resolved: true}
];

function nthByReplies(tickets, n) {
  const sorted = [...tickets].sort((a, b) => b.replies - a.replies);
  return n > 1 && n <= sorted.length ? sorted[n - 1].subject : null;
}
