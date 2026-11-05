const TICKETS = [
  {id: 1, subject: "Wrong invoice", ageHours: 157, replies: 5, priority: "urgent", channel: "chat", resolved: false},
  {id: 2, subject: "Missing order", ageHours: 11, replies: 7, priority: "normal", channel: "phone", resolved: false},
  {id: 3, subject: "Email change", ageHours: 74, replies: 11, priority: "normal", channel: "email", resolved: false},
  {id: 4, subject: "Bug in export", ageHours: 64, replies: 5, priority: "urgent", channel: "chat", resolved: true},
  {id: 5, subject: "Feature idea", ageHours: 33, replies: 9, priority: "low", channel: "phone", resolved: true},
  {id: 6, subject: "App crash", ageHours: 101, replies: 1, priority: "urgent", channel: "chat", resolved: false},
  {id: 7, subject: "Billing error", ageHours: 145, replies: 2, priority: "normal", channel: "email", resolved: false},
  {id: 8, subject: "Refund request", ageHours: 23, replies: 10, priority: "urgent", channel: "phone", resolved: false}
];

test("with 5", () => {
  expect(allTicketsUnder(TICKETS, 5)).toEqual(false);
});

test("with 12", () => {
  expect(allTicketsUnder(TICKETS, 12)).toEqual(true);
});

test("with 11", () => {
  expect(allTicketsUnder(TICKETS, 11)).toEqual(false);
});
