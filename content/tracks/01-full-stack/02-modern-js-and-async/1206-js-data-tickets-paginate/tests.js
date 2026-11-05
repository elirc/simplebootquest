const TICKETS = [
  {id: 1, subject: "Feature idea", ageHours: 72, replies: 12, priority: "low", channel: "chat", resolved: false},
  {id: 2, subject: "Password reset", ageHours: 163, replies: 2, priority: "low", channel: "phone", resolved: false},
  {id: 3, subject: "Bug in export", ageHours: 175, replies: 9, priority: "urgent", channel: "phone", resolved: true},
  {id: 4, subject: "Email change", ageHours: 32, replies: 4, priority: "low", channel: "chat", resolved: false},
  {id: 5, subject: "App crash", ageHours: 65, replies: 6, priority: "low", channel: "chat", resolved: false},
  {id: 6, subject: "Slow page", ageHours: 78, replies: 9, priority: "urgent", channel: "phone", resolved: true},
  {id: 7, subject: "Billing error", ageHours: 183, replies: 6, priority: "low", channel: "phone", resolved: true},
  {id: 8, subject: "Missing order", ageHours: 192, replies: 11, priority: "normal", channel: "email", resolved: true}
];

test("with 1, 3", () => {
  expect(pageOfTickets(TICKETS, 1, 3)).toEqual({"items":["Feature idea","Password reset","Bug in export"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfTickets(TICKETS, 2, 3)).toEqual({"items":["Email change","App crash","Slow page"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfTickets(TICKETS, 3, 3)).toEqual({"items":["Billing error","Missing order"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfTickets(TICKETS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
