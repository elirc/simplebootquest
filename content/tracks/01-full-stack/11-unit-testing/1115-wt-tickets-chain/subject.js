const TICKETS = [
  {id: 1, subject: "Dark mode", ageHours: 104, replies: 5, priority: "urgent", channel: "phone", resolved: false},
  {id: 2, subject: "Email change", ageHours: 29, replies: 5, priority: "urgent", channel: "email", resolved: true},
  {id: 3, subject: "Billing error", ageHours: 9, replies: 0, priority: "normal", channel: "chat", resolved: false},
  {id: 4, subject: "Feature idea", ageHours: 146, replies: 1, priority: "low", channel: "email", resolved: true},
  {id: 5, subject: "App crash", ageHours: 66, replies: 4, priority: "normal", channel: "email", resolved: false},
  {id: 6, subject: "Missing order", ageHours: 66, replies: 7, priority: "low", channel: "chat", resolved: false},
  {id: 7, subject: "Login fails", ageHours: 153, replies: 12, priority: "normal", channel: "phone", resolved: true},
  {id: 8, subject: "Wrong invoice", ageHours: 104, replies: 7, priority: "urgent", channel: "phone", resolved: true}
];

function ticketsInChannelRanked(tickets, value) {
  return tickets
    .filter((x) => x.channel === value)
    .sort((a, b) => b.replies - a.replies)
    .map((x) => x.subject);
}
