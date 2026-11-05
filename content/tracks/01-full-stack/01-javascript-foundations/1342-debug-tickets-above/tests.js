const TICKETS = [
  {id: 1, subject: "Password reset", ageHours: 138, replies: 6, priority: "urgent", channel: "phone", resolved: false},
  {id: 2, subject: "Billing error", ageHours: 197, replies: 9, priority: "low", channel: "phone", resolved: false},
  {id: 3, subject: "Email change", ageHours: 31, replies: 2, priority: "low", channel: "chat", resolved: false},
  {id: 4, subject: "App crash", ageHours: 10, replies: 4, priority: "low", channel: "chat", resolved: false},
  {id: 5, subject: "Feature idea", ageHours: 78, replies: 8, priority: "normal", channel: "phone", resolved: false},
  {id: 6, subject: "Dark mode", ageHours: 199, replies: 9, priority: "urgent", channel: "phone", resolved: false},
  {id: 7, subject: "Login fails", ageHours: 177, replies: 2, priority: "normal", channel: "chat", resolved: false},
  {id: 8, subject: "Slow page", ageHours: 183, replies: 3, priority: "urgent", channel: "email", resolved: true}
];

test("with 78", () => {
  expect(ticketsAbove(TICKETS, 78)).toEqual(["Password reset","Billing error","Dark mode","Login fails","Slow page"]);
});

test("with 177", () => {
  expect(ticketsAbove(TICKETS, 177)).toEqual(["Billing error","Dark mode","Slow page"]);
});

test("with 999999", () => {
  expect(ticketsAbove(TICKETS, 999999)).toEqual([]);
});
