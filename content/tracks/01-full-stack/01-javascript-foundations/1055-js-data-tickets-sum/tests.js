const TICKETS = [
  {id: 1, subject: "App crash", ageHours: 43, replies: 10, priority: "normal", channel: "email", resolved: true},
  {id: 2, subject: "Email change", ageHours: 138, replies: 4, priority: "low", channel: "chat", resolved: true},
  {id: 3, subject: "Wrong invoice", ageHours: 147, replies: 6, priority: "urgent", channel: "email", resolved: false},
  {id: 4, subject: "Missing order", ageHours: 192, replies: 1, priority: "low", channel: "chat", resolved: false},
  {id: 5, subject: "Slow page", ageHours: 50, replies: 9, priority: "low", channel: "email", resolved: false},
  {id: 6, subject: "Dark mode", ageHours: 163, replies: 6, priority: "urgent", channel: "chat", resolved: true},
  {id: 7, subject: "Bug in export", ageHours: 87, replies: 2, priority: "low", channel: "phone", resolved: false},
  {id: 8, subject: "Password reset", ageHours: 53, replies: 1, priority: "low", channel: "phone", resolved: true}
];

test("an empty list", () => {
  expect(totalReplies([])).toEqual(0);
});

test("all tickets", () => {
  expect(totalReplies(TICKETS)).toEqual(39);
});
