const TICKETS = [
  {id: 1, subject: "Login fails", ageHours: 24, replies: 1, priority: "urgent", channel: "chat", resolved: true},
  {id: 2, subject: "Feature idea", ageHours: 199, replies: 5, priority: "low", channel: "phone", resolved: false},
  {id: 3, subject: "Email change", ageHours: 117, replies: 4, priority: "low", channel: "chat", resolved: false},
  {id: 4, subject: "Wrong invoice", ageHours: 56, replies: 12, priority: "urgent", channel: "chat", resolved: false},
  {id: 5, subject: "Dark mode", ageHours: 85, replies: 9, priority: "urgent", channel: "phone", resolved: true},
  {id: 6, subject: "Refund request", ageHours: 103, replies: 5, priority: "normal", channel: "phone", resolved: true},
  {id: 7, subject: "App crash", ageHours: 93, replies: 7, priority: "normal", channel: "email", resolved: false},
  {id: 8, subject: "Bug in export", ageHours: 50, replies: 1, priority: "normal", channel: "chat", resolved: true}
];

function averageAgeHours(tickets) {
  if (tickets.length === 0) return null;
  const total = tickets.reduce((sum, x) => sum + x.ageHours, 0);
  return Math.round((total / tickets.length) * 10) / 10;
}
