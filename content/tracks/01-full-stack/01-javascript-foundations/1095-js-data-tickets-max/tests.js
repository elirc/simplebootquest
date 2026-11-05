const TICKETS = [
  {id: 1, subject: "Dark mode", ageHours: 101, replies: 10, priority: "urgent", channel: "email", resolved: false},
  {id: 2, subject: "Slow page", ageHours: 128, replies: 6, priority: "low", channel: "email", resolved: false},
  {id: 3, subject: "Refund request", ageHours: 113, replies: 10, priority: "urgent", channel: "email", resolved: false},
  {id: 4, subject: "Bug in export", ageHours: 148, replies: 5, priority: "urgent", channel: "phone", resolved: false},
  {id: 5, subject: "Email change", ageHours: 176, replies: 5, priority: "urgent", channel: "phone", resolved: false},
  {id: 6, subject: "Login fails", ageHours: 7, replies: 10, priority: "normal", channel: "email", resolved: true},
  {id: 7, subject: "Feature idea", ageHours: 192, replies: 11, priority: "urgent", channel: "phone", resolved: true},
  {id: 8, subject: "App crash", ageHours: 176, replies: 6, priority: "normal", channel: "chat", resolved: true}
];

test("an empty list", () => {
  expect(highestReplies([])).toEqual(null);
});

test("all tickets", () => {
  expect(highestReplies(TICKETS)).toEqual("Feature idea");
});
