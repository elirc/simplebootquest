const TICKETS = [
  {id: 1, subject: "Password reset", ageHours: 130, replies: 12, priority: "urgent", channel: "email", resolved: true},
  {id: 2, subject: "Email change", ageHours: 18, replies: 11, priority: "low", channel: "chat", resolved: true},
  {id: 3, subject: "Slow page", ageHours: 192, replies: 3, priority: "normal", channel: "chat", resolved: true},
  {id: 4, subject: "Feature idea", ageHours: 175, replies: 7, priority: "low", channel: "email", resolved: false},
  {id: 5, subject: "App crash", ageHours: 129, replies: 0, priority: "normal", channel: "chat", resolved: false},
  {id: 6, subject: "Missing order", ageHours: 158, replies: 2, priority: "normal", channel: "chat", resolved: false},
  {id: 7, subject: "Dark mode", ageHours: 14, replies: 10, priority: "normal", channel: "email", resolved: true},
  {id: 8, subject: "Refund request", ageHours: 145, replies: 7, priority: "normal", channel: "chat", resolved: true}
];

test("an empty list", () => {
  expect(averageAgeHours([])).toEqual(null);
});

test("all tickets", () => {
  expect(averageAgeHours(TICKETS)).toEqual(120.1);
});
