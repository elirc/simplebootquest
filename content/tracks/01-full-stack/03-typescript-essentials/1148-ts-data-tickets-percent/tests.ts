const TICKETS = [
  {id: 1, subject: "Feature idea", ageHours: 85, replies: 1, priority: "low", channel: "email", resolved: true},
  {id: 2, subject: "Billing error", ageHours: 84, replies: 11, priority: "normal", channel: "email", resolved: false},
  {id: 3, subject: "Login fails", ageHours: 126, replies: 4, priority: "normal", channel: "email", resolved: false},
  {id: 4, subject: "Bug in export", ageHours: 95, replies: 12, priority: "normal", channel: "email", resolved: false},
  {id: 5, subject: "Missing order", ageHours: 82, replies: 6, priority: "normal", channel: "phone", resolved: true},
  {id: 6, subject: "Refund request", ageHours: 45, replies: 4, priority: "normal", channel: "email", resolved: true},
  {id: 7, subject: "Slow page", ageHours: 49, replies: 11, priority: "low", channel: "email", resolved: false},
  {id: 8, subject: "Wrong invoice", ageHours: 39, replies: 4, priority: "normal", channel: "chat", resolved: true}
];

test("an empty list", () => {
  expect(percentResolved([])).toEqual(0);
});

test("all tickets", () => {
  expect(percentResolved(TICKETS)).toEqual(50);
});
