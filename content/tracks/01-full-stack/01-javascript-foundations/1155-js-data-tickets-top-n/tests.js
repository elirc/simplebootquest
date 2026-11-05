const TICKETS = [
  {id: 1, subject: "Wrong invoice", ageHours: 35, replies: 4, priority: "urgent", channel: "chat", resolved: true},
  {id: 2, subject: "Bug in export", ageHours: 129, replies: 5, priority: "urgent", channel: "email", resolved: true},
  {id: 3, subject: "Slow page", ageHours: 6, replies: 7, priority: "urgent", channel: "chat", resolved: true},
  {id: 4, subject: "Billing error", ageHours: 77, replies: 0, priority: "normal", channel: "email", resolved: true},
  {id: 5, subject: "App crash", ageHours: 176, replies: 2, priority: "low", channel: "chat", resolved: false},
  {id: 6, subject: "Dark mode", ageHours: 33, replies: 10, priority: "normal", channel: "email", resolved: true},
  {id: 7, subject: "Password reset", ageHours: 39, replies: 4, priority: "low", channel: "chat", resolved: true},
  {id: 8, subject: "Refund request", ageHours: 143, replies: 0, priority: "low", channel: "chat", resolved: true}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(TICKETS);
  topTicketsByReplies(TICKETS, 1);
  expect(JSON.stringify(TICKETS)).toBe(before);
});

test("with 1", () => {
  expect(topTicketsByReplies(TICKETS, 1)).toEqual(["Dark mode"]);
});

test("with 3", () => {
  expect(topTicketsByReplies(TICKETS, 3)).toEqual(["Dark mode","Slow page","Bug in export"]);
});

test("with 0", () => {
  expect(topTicketsByReplies(TICKETS, 0)).toEqual([]);
});
