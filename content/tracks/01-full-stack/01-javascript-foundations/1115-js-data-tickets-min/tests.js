const TICKETS = [
  {id: 1, subject: "Email change", ageHours: 88, replies: 8, priority: "normal", channel: "email", resolved: false},
  {id: 2, subject: "Billing error", ageHours: 144, replies: 0, priority: "low", channel: "chat", resolved: false},
  {id: 3, subject: "Password reset", ageHours: 179, replies: 12, priority: "low", channel: "phone", resolved: false},
  {id: 4, subject: "Dark mode", ageHours: 43, replies: 5, priority: "normal", channel: "phone", resolved: false},
  {id: 5, subject: "Login fails", ageHours: 117, replies: 8, priority: "normal", channel: "chat", resolved: false},
  {id: 6, subject: "Wrong invoice", ageHours: 132, replies: 11, priority: "low", channel: "phone", resolved: true},
  {id: 7, subject: "Slow page", ageHours: 25, replies: 7, priority: "normal", channel: "email", resolved: false},
  {id: 8, subject: "Feature idea", ageHours: 151, replies: 11, priority: "low", channel: "phone", resolved: true}
];

test("an empty list", () => {
  expect(lowestReplies([])).toEqual(null);
});

test("all tickets", () => {
  expect(lowestReplies(TICKETS)).toEqual("Billing error");
});
