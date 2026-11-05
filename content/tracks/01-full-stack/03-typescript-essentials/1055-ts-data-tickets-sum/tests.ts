const TICKETS = [
  {id: 1, subject: "Refund request", ageHours: 189, replies: 9, priority: "low", channel: "phone", resolved: true},
  {id: 2, subject: "Bug in export", ageHours: 179, replies: 8, priority: "normal", channel: "phone", resolved: false},
  {id: 3, subject: "Password reset", ageHours: 17, replies: 10, priority: "normal", channel: "email", resolved: true},
  {id: 4, subject: "Missing order", ageHours: 1, replies: 3, priority: "normal", channel: "chat", resolved: true},
  {id: 5, subject: "App crash", ageHours: 8, replies: 9, priority: "urgent", channel: "email", resolved: true},
  {id: 6, subject: "Feature idea", ageHours: 102, replies: 5, priority: "normal", channel: "email", resolved: true},
  {id: 7, subject: "Wrong invoice", ageHours: 109, replies: 10, priority: "urgent", channel: "phone", resolved: true},
  {id: 8, subject: "Login fails", ageHours: 134, replies: 3, priority: "urgent", channel: "phone", resolved: true}
];

test("an empty list", () => {
  expect(totalReplies([])).toEqual(0);
});

test("all tickets", () => {
  expect(totalReplies(TICKETS)).toEqual(57);
});
