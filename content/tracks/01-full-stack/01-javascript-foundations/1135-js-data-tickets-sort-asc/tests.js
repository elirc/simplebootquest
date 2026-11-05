const TICKETS = [
  {id: 1, subject: "Login fails", ageHours: 101, replies: 7, priority: "urgent", channel: "chat", resolved: false},
  {id: 2, subject: "Missing order", ageHours: 169, replies: 11, priority: "low", channel: "email", resolved: true},
  {id: 3, subject: "App crash", ageHours: 46, replies: 1, priority: "low", channel: "email", resolved: false},
  {id: 4, subject: "Password reset", ageHours: 5, replies: 2, priority: "urgent", channel: "phone", resolved: true},
  {id: 5, subject: "Bug in export", ageHours: 15, replies: 6, priority: "low", channel: "phone", resolved: false},
  {id: 6, subject: "Slow page", ageHours: 47, replies: 10, priority: "normal", channel: "chat", resolved: true},
  {id: 7, subject: "Email change", ageHours: 123, replies: 5, priority: "urgent", channel: "email", resolved: true},
  {id: 8, subject: "Wrong invoice", ageHours: 12, replies: 11, priority: "normal", channel: "phone", resolved: false}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(TICKETS);
  ticketsByAgeHours(TICKETS);
  expect(JSON.stringify(TICKETS)).toBe(before);
});

test("all tickets", () => {
  expect(ticketsByAgeHours(TICKETS)).toEqual(["Password reset","Wrong invoice","Bug in export","App crash","Slow page","Login fails","Email change","Missing order"]);
});
