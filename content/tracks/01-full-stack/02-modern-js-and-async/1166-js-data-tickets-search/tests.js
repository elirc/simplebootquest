const TICKETS = [
  {id: 1, subject: "Missing order", ageHours: 174, replies: 3, priority: "low", channel: "chat", resolved: true},
  {id: 2, subject: "Email change", ageHours: 31, replies: 4, priority: "normal", channel: "phone", resolved: false},
  {id: 3, subject: "Login fails", ageHours: 177, replies: 5, priority: "low", channel: "phone", resolved: true},
  {id: 4, subject: "Password reset", ageHours: 105, replies: 9, priority: "normal", channel: "email", resolved: false},
  {id: 5, subject: "Bug in export", ageHours: 179, replies: 3, priority: "urgent", channel: "phone", resolved: true},
  {id: 6, subject: "Feature idea", ageHours: 86, replies: 6, priority: "urgent", channel: "email", resolved: true},
  {id: 7, subject: "Billing error", ageHours: 4, replies: 11, priority: "normal", channel: "chat", resolved: true},
  {id: 8, subject: "Dark mode", ageHours: 1, replies: 5, priority: "low", channel: "phone", resolved: false}
];

test("with \"ar\"", () => {
  expect(searchTickets(TICKETS, "ar")).toEqual(["Dark mode"]);
});

test("with \"AR\"", () => {
  expect(searchTickets(TICKETS, "AR")).toEqual(["Dark mode"]);
});

test("with \"  \"", () => {
  expect(searchTickets(TICKETS, "  ")).toEqual(["Missing order","Email change","Login fails","Password reset","Bug in export","Feature idea","Billing error","Dark mode"]);
});

test("with \"zzz\"", () => {
  expect(searchTickets(TICKETS, "zzz")).toEqual([]);
});
