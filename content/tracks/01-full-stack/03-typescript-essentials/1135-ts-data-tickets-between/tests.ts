const TICKETS = [
  {id: 1, subject: "Password reset", ageHours: 165, replies: 11, priority: "normal", channel: "phone", resolved: false},
  {id: 2, subject: "Missing order", ageHours: 17, replies: 10, priority: "urgent", channel: "phone", resolved: false},
  {id: 3, subject: "Feature idea", ageHours: 141, replies: 2, priority: "urgent", channel: "phone", resolved: true},
  {id: 4, subject: "App crash", ageHours: 139, replies: 7, priority: "urgent", channel: "email", resolved: false},
  {id: 5, subject: "Bug in export", ageHours: 50, replies: 5, priority: "low", channel: "chat", resolved: true},
  {id: 6, subject: "Wrong invoice", ageHours: 47, replies: 1, priority: "low", channel: "phone", resolved: true},
  {id: 7, subject: "Refund request", ageHours: 74, replies: 9, priority: "normal", channel: "phone", resolved: true},
  {id: 8, subject: "Email change", ageHours: 167, replies: 2, priority: "normal", channel: "email", resolved: false}
];

test("with 2, 7", () => {
  expect(ticketsInRange(TICKETS, 2, 7)).toEqual(["Feature idea","App crash","Bug in export","Email change"]);
});

test("with 7, 9", () => {
  expect(ticketsInRange(TICKETS, 7, 9)).toEqual(["App crash","Refund request"]);
});

test("with 2, 2", () => {
  expect(ticketsInRange(TICKETS, 2, 2)).toEqual(["Feature idea","Email change"]);
});
