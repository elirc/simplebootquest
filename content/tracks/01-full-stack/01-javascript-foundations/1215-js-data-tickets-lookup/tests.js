const TICKETS = [
  {id: 1, subject: "Email change", ageHours: 176, replies: 6, priority: "normal", channel: "phone", resolved: true},
  {id: 2, subject: "Wrong invoice", ageHours: 135, replies: 1, priority: "urgent", channel: "chat", resolved: false},
  {id: 3, subject: "Refund request", ageHours: 87, replies: 3, priority: "low", channel: "email", resolved: true},
  {id: 4, subject: "Login fails", ageHours: 88, replies: 4, priority: "normal", channel: "chat", resolved: false},
  {id: 5, subject: "Dark mode", ageHours: 20, replies: 3, priority: "urgent", channel: "chat", resolved: true},
  {id: 6, subject: "Billing error", ageHours: 18, replies: 9, priority: "normal", channel: "phone", resolved: false},
  {id: 7, subject: "Missing order", ageHours: 148, replies: 0, priority: "low", channel: "email", resolved: false},
  {id: 8, subject: "Bug in export", ageHours: 162, replies: 9, priority: "normal", channel: "phone", resolved: false}
];

test("with \"Wrong invoice\"", () => {
  expect(repliesOf(TICKETS, "Wrong invoice")).toEqual(1);
});

test("with \"Nope\"", () => {
  expect(repliesOf(TICKETS, "Nope")).toEqual(null);
});
