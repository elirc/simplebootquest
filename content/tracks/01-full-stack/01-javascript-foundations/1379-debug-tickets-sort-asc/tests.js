const TICKETS = [
  {id: 1, subject: "Password reset", ageHours: 127, replies: 12, priority: "low", channel: "phone", resolved: true},
  {id: 2, subject: "Feature idea", ageHours: 170, replies: 11, priority: "normal", channel: "phone", resolved: false},
  {id: 3, subject: "Missing order", ageHours: 72, replies: 10, priority: "normal", channel: "chat", resolved: false},
  {id: 4, subject: "Email change", ageHours: 113, replies: 12, priority: "normal", channel: "chat", resolved: true},
  {id: 5, subject: "Bug in export", ageHours: 82, replies: 5, priority: "normal", channel: "chat", resolved: true},
  {id: 6, subject: "Refund request", ageHours: 47, replies: 8, priority: "urgent", channel: "chat", resolved: false},
  {id: 7, subject: "Billing error", ageHours: 198, replies: 9, priority: "urgent", channel: "email", resolved: false},
  {id: 8, subject: "Login fails", ageHours: 96, replies: 1, priority: "urgent", channel: "chat", resolved: false}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(TICKETS);
  ticketsByReplies(TICKETS);
  expect(JSON.stringify(TICKETS)).toBe(before);
});

test("all tickets", () => {
  expect(ticketsByReplies(TICKETS)).toEqual(["Login fails","Bug in export","Refund request","Billing error","Missing order","Feature idea","Password reset","Email change"]);
});
