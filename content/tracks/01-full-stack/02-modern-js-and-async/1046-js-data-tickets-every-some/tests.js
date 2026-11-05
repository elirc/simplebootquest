const TICKETS = [
  {id: 1, subject: "Billing error", ageHours: 11, replies: 9, priority: "normal", channel: "phone", resolved: false},
  {id: 2, subject: "Refund request", ageHours: 60, replies: 3, priority: "normal", channel: "phone", resolved: false},
  {id: 3, subject: "Wrong invoice", ageHours: 197, replies: 9, priority: "normal", channel: "phone", resolved: false},
  {id: 4, subject: "Feature idea", ageHours: 162, replies: 0, priority: "low", channel: "chat", resolved: true},
  {id: 5, subject: "Login fails", ageHours: 121, replies: 3, priority: "normal", channel: "email", resolved: false},
  {id: 6, subject: "Missing order", ageHours: 22, replies: 11, priority: "urgent", channel: "phone", resolved: true},
  {id: 7, subject: "App crash", ageHours: 119, replies: 0, priority: "urgent", channel: "phone", resolved: false},
  {id: 8, subject: "Slow page", ageHours: 49, replies: 11, priority: "normal", channel: "email", resolved: false}
];

test("with 3", () => {
  expect(allTicketsUnder(TICKETS, 3)).toEqual(false);
});

test("with 12", () => {
  expect(allTicketsUnder(TICKETS, 12)).toEqual(true);
});

test("with 11", () => {
  expect(allTicketsUnder(TICKETS, 11)).toEqual(false);
});
