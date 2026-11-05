const TICKETS = [
  {id: 1, subject: "Refund request", ageHours: 156, replies: 2, priority: "urgent", channel: "email", resolved: true},
  {id: 2, subject: "Feature idea", ageHours: 181, replies: 5, priority: "normal", channel: "chat", resolved: false},
  {id: 3, subject: "Slow page", ageHours: 121, replies: 4, priority: "urgent", channel: "email", resolved: false},
  {id: 4, subject: "Bug in export", ageHours: 158, replies: 12, priority: "urgent", channel: "chat", resolved: true},
  {id: 5, subject: "Wrong invoice", ageHours: 31, replies: 7, priority: "urgent", channel: "email", resolved: true},
  {id: 6, subject: "Dark mode", ageHours: 14, replies: 5, priority: "normal", channel: "email", resolved: true},
  {id: 7, subject: "Missing order", ageHours: 29, replies: 11, priority: "normal", channel: "phone", resolved: false},
  {id: 8, subject: "Email change", ageHours: 129, replies: 12, priority: "urgent", channel: "phone", resolved: true}
];

function pageOfTickets(tickets, page, size) {
  const totalPages = Math.ceil(tickets.length / size);
  const items = tickets.slice((page - 1) * size, page * size).map((x) => x.subject);
  return { items, page, totalPages };
}
