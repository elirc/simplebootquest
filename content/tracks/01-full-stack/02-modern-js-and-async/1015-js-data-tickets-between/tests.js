const TICKETS = [
  {id: 1, subject: "Slow page", ageHours: 178, replies: 6, priority: "normal", channel: "chat", resolved: false},
  {id: 2, subject: "Login fails", ageHours: 108, replies: 3, priority: "normal", channel: "email", resolved: false},
  {id: 3, subject: "Billing error", ageHours: 72, replies: 7, priority: "low", channel: "chat", resolved: true},
  {id: 4, subject: "Wrong invoice", ageHours: 160, replies: 5, priority: "urgent", channel: "email", resolved: false},
  {id: 5, subject: "App crash", ageHours: 181, replies: 10, priority: "urgent", channel: "phone", resolved: false},
  {id: 6, subject: "Missing order", ageHours: 2, replies: 10, priority: "urgent", channel: "chat", resolved: false},
  {id: 7, subject: "Bug in export", ageHours: 10, replies: 5, priority: "normal", channel: "email", resolved: false},
  {id: 8, subject: "Password reset", ageHours: 184, replies: 9, priority: "urgent", channel: "email", resolved: false}
];

test("with 72, 160", () => {
  expect(ticketsInRange(TICKETS, 72, 160)).toEqual(["Login fails","Billing error","Wrong invoice"]);
});

test("with 160, 178", () => {
  expect(ticketsInRange(TICKETS, 160, 178)).toEqual(["Slow page","Wrong invoice"]);
});

test("with 72, 72", () => {
  expect(ticketsInRange(TICKETS, 72, 72)).toEqual(["Billing error"]);
});
