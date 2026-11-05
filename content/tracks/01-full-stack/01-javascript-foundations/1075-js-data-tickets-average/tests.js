const TICKETS = [
  {id: 1, subject: "Missing order", ageHours: 187, replies: 7, priority: "urgent", channel: "chat", resolved: true},
  {id: 2, subject: "Dark mode", ageHours: 164, replies: 5, priority: "normal", channel: "chat", resolved: true},
  {id: 3, subject: "Login fails", ageHours: 75, replies: 2, priority: "urgent", channel: "chat", resolved: false},
  {id: 4, subject: "Email change", ageHours: 33, replies: 3, priority: "urgent", channel: "phone", resolved: false},
  {id: 5, subject: "App crash", ageHours: 97, replies: 8, priority: "urgent", channel: "email", resolved: true},
  {id: 6, subject: "Password reset", ageHours: 27, replies: 8, priority: "urgent", channel: "email", resolved: true},
  {id: 7, subject: "Bug in export", ageHours: 144, replies: 10, priority: "low", channel: "phone", resolved: false},
  {id: 8, subject: "Refund request", ageHours: 162, replies: 10, priority: "low", channel: "email", resolved: true}
];

test("an empty list", () => {
  expect(averageReplies([])).toEqual(null);
});

test("all tickets", () => {
  expect(averageReplies(TICKETS)).toEqual(6.6);
});
