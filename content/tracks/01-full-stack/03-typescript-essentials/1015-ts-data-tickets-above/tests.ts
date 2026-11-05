const TICKETS = [
  {id: 1, subject: "Login fails", ageHours: 154, replies: 6, priority: "low", channel: "email", resolved: true},
  {id: 2, subject: "Missing order", ageHours: 35, replies: 8, priority: "normal", channel: "phone", resolved: false},
  {id: 3, subject: "Wrong invoice", ageHours: 22, replies: 6, priority: "urgent", channel: "email", resolved: true},
  {id: 4, subject: "Billing error", ageHours: 130, replies: 4, priority: "normal", channel: "email", resolved: true},
  {id: 5, subject: "Slow page", ageHours: 187, replies: 4, priority: "urgent", channel: "email", resolved: false},
  {id: 6, subject: "Password reset", ageHours: 177, replies: 1, priority: "normal", channel: "phone", resolved: true},
  {id: 7, subject: "Feature idea", ageHours: 47, replies: 9, priority: "urgent", channel: "email", resolved: true},
  {id: 8, subject: "Dark mode", ageHours: 154, replies: 9, priority: "normal", channel: "email", resolved: true}
];

test("with 4", () => {
  expect(ticketsAbove(TICKETS, 4)).toEqual(["Login fails","Missing order","Wrong invoice","Feature idea","Dark mode"]);
});

test("with 6", () => {
  expect(ticketsAbove(TICKETS, 6)).toEqual(["Missing order","Feature idea","Dark mode"]);
});

test("with 999999", () => {
  expect(ticketsAbove(TICKETS, 999999)).toEqual([]);
});
