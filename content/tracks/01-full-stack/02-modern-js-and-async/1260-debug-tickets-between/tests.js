const TICKETS = [
  {id: 1, subject: "Feature idea", ageHours: 6, replies: 6, priority: "low", channel: "chat", resolved: false},
  {id: 2, subject: "Password reset", ageHours: 1, replies: 1, priority: "urgent", channel: "email", resolved: false},
  {id: 3, subject: "Email change", ageHours: 104, replies: 2, priority: "urgent", channel: "phone", resolved: true},
  {id: 4, subject: "Missing order", ageHours: 45, replies: 8, priority: "normal", channel: "phone", resolved: true},
  {id: 5, subject: "App crash", ageHours: 13, replies: 1, priority: "urgent", channel: "email", resolved: false},
  {id: 6, subject: "Slow page", ageHours: 152, replies: 2, priority: "normal", channel: "email", resolved: false},
  {id: 7, subject: "Bug in export", ageHours: 11, replies: 9, priority: "low", channel: "email", resolved: false},
  {id: 8, subject: "Billing error", ageHours: 149, replies: 11, priority: "low", channel: "chat", resolved: false}
];

test("with 2, 6", () => {
  expect(ticketsInRange(TICKETS, 2, 6)).toEqual(["Feature idea","Email change","Slow page"]);
});

test("with 6, 8", () => {
  expect(ticketsInRange(TICKETS, 6, 8)).toEqual(["Feature idea","Missing order"]);
});

test("with 2, 2", () => {
  expect(ticketsInRange(TICKETS, 2, 2)).toEqual(["Email change","Slow page"]);
});
