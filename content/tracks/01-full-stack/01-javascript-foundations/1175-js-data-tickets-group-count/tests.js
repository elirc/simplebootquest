const TICKETS = [
  {id: 1, subject: "Billing error", ageHours: 178, replies: 5, priority: "urgent", channel: "chat", resolved: true},
  {id: 2, subject: "Login fails", ageHours: 167, replies: 2, priority: "low", channel: "phone", resolved: true},
  {id: 3, subject: "Password reset", ageHours: 141, replies: 1, priority: "low", channel: "phone", resolved: false},
  {id: 4, subject: "Bug in export", ageHours: 8, replies: 1, priority: "urgent", channel: "phone", resolved: false},
  {id: 5, subject: "Missing order", ageHours: 163, replies: 2, priority: "low", channel: "chat", resolved: false},
  {id: 6, subject: "Slow page", ageHours: 53, replies: 1, priority: "low", channel: "phone", resolved: false},
  {id: 7, subject: "Dark mode", ageHours: 195, replies: 3, priority: "normal", channel: "email", resolved: false},
  {id: 8, subject: "Email change", ageHours: 55, replies: 10, priority: "urgent", channel: "email", resolved: true}
];

test("an empty list", () => {
  expect(countTicketsPerChannel([])).toEqual({});
});

test("all tickets", () => {
  expect(countTicketsPerChannel(TICKETS)).toEqual({"chat":2,"phone":4,"email":2});
});
