const TICKETS = [
  {id: 1, subject: "Login fails", ageHours: 151, replies: 2, priority: "urgent", channel: "email", resolved: false},
  {id: 2, subject: "Wrong invoice", ageHours: 165, replies: 0, priority: "urgent", channel: "email", resolved: true},
  {id: 3, subject: "Dark mode", ageHours: 127, replies: 7, priority: "normal", channel: "email", resolved: true},
  {id: 4, subject: "Slow page", ageHours: 126, replies: 1, priority: "low", channel: "phone", resolved: false},
  {id: 5, subject: "Bug in export", ageHours: 121, replies: 4, priority: "low", channel: "phone", resolved: true},
  {id: 6, subject: "Refund request", ageHours: 31, replies: 5, priority: "normal", channel: "email", resolved: true},
  {id: 7, subject: "Billing error", ageHours: 149, replies: 3, priority: "normal", channel: "chat", resolved: false},
  {id: 8, subject: "App crash", ageHours: 154, replies: 12, priority: "urgent", channel: "email", resolved: false}
];

test("an empty list", () => {
  expect(totalAgeHours([])).toEqual(0);
});

test("all tickets", () => {
  expect(totalAgeHours(TICKETS)).toEqual(1024);
});
