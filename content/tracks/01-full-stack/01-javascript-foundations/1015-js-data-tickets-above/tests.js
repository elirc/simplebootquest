const TICKETS = [
  {id: 1, subject: "Refund request", ageHours: 108, replies: 6, priority: "normal", channel: "chat", resolved: true},
  {id: 2, subject: "Slow page", ageHours: 163, replies: 9, priority: "low", channel: "phone", resolved: true},
  {id: 3, subject: "Email change", ageHours: 36, replies: 3, priority: "urgent", channel: "email", resolved: true},
  {id: 4, subject: "Login fails", ageHours: 81, replies: 8, priority: "normal", channel: "phone", resolved: true},
  {id: 5, subject: "App crash", ageHours: 175, replies: 7, priority: "normal", channel: "phone", resolved: false},
  {id: 6, subject: "Password reset", ageHours: 191, replies: 5, priority: "normal", channel: "email", resolved: false},
  {id: 7, subject: "Wrong invoice", ageHours: 95, replies: 12, priority: "urgent", channel: "phone", resolved: false},
  {id: 8, subject: "Bug in export", ageHours: 61, replies: 5, priority: "urgent", channel: "chat", resolved: false}
];

test("with 5", () => {
  expect(ticketsAbove(TICKETS, 5)).toEqual(["Refund request","Slow page","Login fails","App crash","Wrong invoice"]);
});

test("with 7", () => {
  expect(ticketsAbove(TICKETS, 7)).toEqual(["Slow page","Login fails","Wrong invoice"]);
});

test("with 999999", () => {
  expect(ticketsAbove(TICKETS, 999999)).toEqual([]);
});
