const TICKETS = [
  {id: 1, subject: "Missing order", ageHours: 143, replies: 6, priority: "low", channel: "chat", resolved: true},
  {id: 2, subject: "Billing error", ageHours: 162, replies: 4, priority: "normal", channel: "chat", resolved: false},
  {id: 3, subject: "Refund request", ageHours: 175, replies: 10, priority: "urgent", channel: "email", resolved: false},
  {id: 4, subject: "App crash", ageHours: 50, replies: 9, priority: "low", channel: "email", resolved: false},
  {id: 5, subject: "Password reset", ageHours: 188, replies: 1, priority: "normal", channel: "chat", resolved: false},
  {id: 6, subject: "Wrong invoice", ageHours: 105, replies: 1, priority: "low", channel: "email", resolved: true},
  {id: 7, subject: "Dark mode", ageHours: 42, replies: 0, priority: "normal", channel: "chat", resolved: false},
  {id: 8, subject: "Slow page", ageHours: 116, replies: 2, priority: "low", channel: "phone", resolved: true}
];

test("an empty list", () => {
  expect(repliesPerPriority([])).toEqual({});
});

test("all tickets", () => {
  expect(repliesPerPriority(TICKETS)).toEqual({"low":18,"normal":5,"urgent":10});
});
