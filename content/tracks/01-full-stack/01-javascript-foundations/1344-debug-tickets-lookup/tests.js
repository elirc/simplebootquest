const TICKETS = [
  {id: 1, subject: "Password reset", ageHours: 9, replies: 5, priority: "low", channel: "chat", resolved: true},
  {id: 2, subject: "Dark mode", ageHours: 194, replies: 12, priority: "normal", channel: "chat", resolved: true},
  {id: 3, subject: "Refund request", ageHours: 67, replies: 1, priority: "low", channel: "phone", resolved: true},
  {id: 4, subject: "Feature idea", ageHours: 6, replies: 2, priority: "low", channel: "phone", resolved: false},
  {id: 5, subject: "Billing error", ageHours: 11, replies: 9, priority: "low", channel: "email", resolved: false},
  {id: 6, subject: "App crash", ageHours: 129, replies: 3, priority: "normal", channel: "phone", resolved: false},
  {id: 7, subject: "Slow page", ageHours: 100, replies: 12, priority: "urgent", channel: "phone", resolved: false},
  {id: 8, subject: "Wrong invoice", ageHours: 9, replies: 7, priority: "urgent", channel: "phone", resolved: false}
];

test("with \"Wrong invoice\"", () => {
  expect(repliesOf(TICKETS, "Wrong invoice")).toEqual(7);
});

test("with \"Nope\"", () => {
  expect(repliesOf(TICKETS, "Nope")).toEqual(null);
});
