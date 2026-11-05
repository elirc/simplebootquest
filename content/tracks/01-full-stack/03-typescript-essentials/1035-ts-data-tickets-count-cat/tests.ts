const TICKETS = [
  {id: 1, subject: "Slow page", ageHours: 98, replies: 4, priority: "normal", channel: "phone", resolved: false},
  {id: 2, subject: "Wrong invoice", ageHours: 128, replies: 5, priority: "urgent", channel: "chat", resolved: true},
  {id: 3, subject: "Billing error", ageHours: 102, replies: 12, priority: "low", channel: "chat", resolved: true},
  {id: 4, subject: "Bug in export", ageHours: 84, replies: 3, priority: "urgent", channel: "phone", resolved: false},
  {id: 5, subject: "App crash", ageHours: 98, replies: 0, priority: "urgent", channel: "email", resolved: false},
  {id: 6, subject: "Missing order", ageHours: 25, replies: 5, priority: "normal", channel: "chat", resolved: false},
  {id: 7, subject: "Login fails", ageHours: 106, replies: 8, priority: "urgent", channel: "chat", resolved: false},
  {id: 8, subject: "Feature idea", ageHours: 61, replies: 3, priority: "normal", channel: "phone", resolved: true}
];

test("with \"email\"", () => {
  expect(countTicketsByChannel(TICKETS, "email")).toEqual(1);
});

test("with \"chat\"", () => {
  expect(countTicketsByChannel(TICKETS, "chat")).toEqual(4);
});

test("with \"phone\"", () => {
  expect(countTicketsByChannel(TICKETS, "phone")).toEqual(3);
});

test("with \"nope\"", () => {
  expect(countTicketsByChannel(TICKETS, "nope")).toEqual(0);
});
