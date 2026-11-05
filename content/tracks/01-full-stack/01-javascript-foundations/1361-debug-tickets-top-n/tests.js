const TICKETS = [
  {id: 1, subject: "Refund request", ageHours: 17, replies: 7, priority: "urgent", channel: "chat", resolved: false},
  {id: 2, subject: "Password reset", ageHours: 158, replies: 3, priority: "urgent", channel: "chat", resolved: true},
  {id: 3, subject: "Slow page", ageHours: 118, replies: 11, priority: "low", channel: "email", resolved: false},
  {id: 4, subject: "Dark mode", ageHours: 59, replies: 10, priority: "low", channel: "chat", resolved: false},
  {id: 5, subject: "Feature idea", ageHours: 152, replies: 2, priority: "urgent", channel: "phone", resolved: true},
  {id: 6, subject: "Missing order", ageHours: 57, replies: 6, priority: "normal", channel: "email", resolved: false},
  {id: 7, subject: "App crash", ageHours: 66, replies: 7, priority: "low", channel: "chat", resolved: true},
  {id: 8, subject: "Wrong invoice", ageHours: 192, replies: 11, priority: "urgent", channel: "email", resolved: false}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(TICKETS);
  topTicketsByReplies(TICKETS, 1);
  expect(JSON.stringify(TICKETS)).toBe(before);
});

test("with 1", () => {
  expect(topTicketsByReplies(TICKETS, 1)).toEqual(["Slow page"]);
});

test("with 3", () => {
  expect(topTicketsByReplies(TICKETS, 3)).toEqual(["Slow page","Wrong invoice","Dark mode"]);
});

test("with 0", () => {
  expect(topTicketsByReplies(TICKETS, 0)).toEqual([]);
});
