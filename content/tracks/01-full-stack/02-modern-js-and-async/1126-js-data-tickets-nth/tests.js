const TICKETS = [
  {id: 1, subject: "Email change", ageHours: 126, replies: 5, priority: "low", channel: "chat", resolved: false},
  {id: 2, subject: "Password reset", ageHours: 86, replies: 6, priority: "urgent", channel: "chat", resolved: false},
  {id: 3, subject: "App crash", ageHours: 58, replies: 5, priority: "normal", channel: "chat", resolved: true},
  {id: 4, subject: "Missing order", ageHours: 32, replies: 7, priority: "normal", channel: "phone", resolved: true},
  {id: 5, subject: "Login fails", ageHours: 188, replies: 12, priority: "normal", channel: "phone", resolved: false},
  {id: 6, subject: "Dark mode", ageHours: 169, replies: 0, priority: "urgent", channel: "phone", resolved: false},
  {id: 7, subject: "Billing error", ageHours: 195, replies: 11, priority: "low", channel: "email", resolved: true},
  {id: 8, subject: "Wrong invoice", ageHours: 78, replies: 2, priority: "normal", channel: "email", resolved: true}
];

test("with 1", () => {
  expect(nthByAgeHours(TICKETS, 1)).toEqual("Billing error");
});

test("with 2", () => {
  expect(nthByAgeHours(TICKETS, 2)).toEqual("Login fails");
});

test("with 5", () => {
  expect(nthByAgeHours(TICKETS, 5)).toEqual("Password reset");
});

test("with 0", () => {
  expect(nthByAgeHours(TICKETS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByAgeHours(TICKETS, 99)).toEqual(null);
});
