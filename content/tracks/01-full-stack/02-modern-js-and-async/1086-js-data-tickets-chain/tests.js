const TICKETS = [
  {id: 1, subject: "Bug in export", ageHours: 8, replies: 4, priority: "urgent", channel: "email", resolved: false},
  {id: 2, subject: "Missing order", ageHours: 148, replies: 4, priority: "urgent", channel: "chat", resolved: false},
  {id: 3, subject: "Email change", ageHours: 154, replies: 0, priority: "urgent", channel: "chat", resolved: true},
  {id: 4, subject: "Login fails", ageHours: 95, replies: 7, priority: "urgent", channel: "chat", resolved: false},
  {id: 5, subject: "App crash", ageHours: 178, replies: 4, priority: "low", channel: "email", resolved: false},
  {id: 6, subject: "Slow page", ageHours: 23, replies: 10, priority: "urgent", channel: "email", resolved: true},
  {id: 7, subject: "Password reset", ageHours: 178, replies: 8, priority: "urgent", channel: "chat", resolved: false},
  {id: 8, subject: "Feature idea", ageHours: 156, replies: 2, priority: "urgent", channel: "phone", resolved: false}
];

test("with \"email\"", () => {
  expect(ticketsInChannelRanked(TICKETS, "email")).toEqual(["App crash","Slow page","Bug in export"]);
});

test("with \"chat\"", () => {
  expect(ticketsInChannelRanked(TICKETS, "chat")).toEqual(["Password reset","Email change","Missing order","Login fails"]);
});

test("with \"phone\"", () => {
  expect(ticketsInChannelRanked(TICKETS, "phone")).toEqual(["Feature idea"]);
});
