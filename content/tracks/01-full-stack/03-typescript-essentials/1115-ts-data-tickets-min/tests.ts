const TICKETS = [
  {id: 1, subject: "Bug in export", ageHours: 150, replies: 4, priority: "low", channel: "phone", resolved: true},
  {id: 2, subject: "Wrong invoice", ageHours: 53, replies: 8, priority: "normal", channel: "chat", resolved: false},
  {id: 3, subject: "Email change", ageHours: 115, replies: 8, priority: "normal", channel: "phone", resolved: true},
  {id: 4, subject: "Feature idea", ageHours: 155, replies: 7, priority: "normal", channel: "chat", resolved: true},
  {id: 5, subject: "Password reset", ageHours: 182, replies: 2, priority: "low", channel: "phone", resolved: false},
  {id: 6, subject: "Refund request", ageHours: 108, replies: 1, priority: "normal", channel: "phone", resolved: true},
  {id: 7, subject: "Missing order", ageHours: 69, replies: 7, priority: "urgent", channel: "phone", resolved: false},
  {id: 8, subject: "Login fails", ageHours: 60, replies: 1, priority: "normal", channel: "email", resolved: true}
];

test("an empty list", () => {
  expect(lowestReplies([])).toEqual(null);
});

test("all tickets", () => {
  expect(lowestReplies(TICKETS)).toEqual("Refund request");
});
