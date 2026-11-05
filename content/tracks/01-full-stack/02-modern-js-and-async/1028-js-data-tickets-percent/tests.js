const TICKETS = [
  {id: 1, subject: "Refund request", ageHours: 94, replies: 3, priority: "normal", channel: "chat", resolved: true},
  {id: 2, subject: "Billing error", ageHours: 131, replies: 11, priority: "low", channel: "chat", resolved: false},
  {id: 3, subject: "Wrong invoice", ageHours: 43, replies: 6, priority: "normal", channel: "email", resolved: true},
  {id: 4, subject: "Password reset", ageHours: 44, replies: 2, priority: "urgent", channel: "phone", resolved: false},
  {id: 5, subject: "Login fails", ageHours: 115, replies: 3, priority: "low", channel: "chat", resolved: true},
  {id: 6, subject: "Dark mode", ageHours: 34, replies: 6, priority: "low", channel: "chat", resolved: false},
  {id: 7, subject: "Email change", ageHours: 87, replies: 9, priority: "low", channel: "phone", resolved: false},
  {id: 8, subject: "Feature idea", ageHours: 174, replies: 12, priority: "normal", channel: "email", resolved: false}
];

test("an empty list", () => {
  expect(percentResolved([])).toEqual(0);
});

test("all tickets", () => {
  expect(percentResolved(TICKETS)).toEqual(38);
});
