const TICKETS = [
  {id: 1, subject: "Email change", ageHours: 96, replies: 0, priority: "urgent", channel: "email", resolved: true},
  {id: 2, subject: "Dark mode", ageHours: 83, replies: 5, priority: "normal", channel: "chat", resolved: false},
  {id: 3, subject: "Login fails", ageHours: 20, replies: 6, priority: "urgent", channel: "email", resolved: true},
  {id: 4, subject: "Billing error", ageHours: 93, replies: 8, priority: "urgent", channel: "chat", resolved: false},
  {id: 5, subject: "App crash", ageHours: 195, replies: 11, priority: "urgent", channel: "phone", resolved: true},
  {id: 6, subject: "Password reset", ageHours: 104, replies: 7, priority: "urgent", channel: "phone", resolved: false},
  {id: 7, subject: "Feature idea", ageHours: 38, replies: 5, priority: "low", channel: "phone", resolved: false},
  {id: 8, subject: "Bug in export", ageHours: 28, replies: 4, priority: "urgent", channel: "email", resolved: false}
];

function bumpAgeHours(tickets, value, amount) {
  return tickets.map((x) => (x.channel === value ? { ...x, ageHours: x.ageHours + amount } : x));
}
