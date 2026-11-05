const TICKETS = [
  {id: 1, subject: "App crash", ageHours: 86, replies: 1, priority: "urgent", channel: "phone", resolved: false},
  {id: 2, subject: "Missing order", ageHours: 35, replies: 5, priority: "low", channel: "chat", resolved: true},
  {id: 3, subject: "Email change", ageHours: 144, replies: 12, priority: "low", channel: "chat", resolved: false},
  {id: 4, subject: "Bug in export", ageHours: 87, replies: 8, priority: "normal", channel: "chat", resolved: true},
  {id: 5, subject: "Password reset", ageHours: 159, replies: 4, priority: "low", channel: "chat", resolved: false},
  {id: 6, subject: "Billing error", ageHours: 186, replies: 4, priority: "low", channel: "chat", resolved: true},
  {id: 7, subject: "Refund request", ageHours: 162, replies: 5, priority: "normal", channel: "phone", resolved: true},
  {id: 8, subject: "Dark mode", ageHours: 199, replies: 1, priority: "urgent", channel: "chat", resolved: false}
];

test("an empty list", () => {
  expect(averageAgeHoursPerChannel([])).toEqual({});
});

test("all tickets", () => {
  expect(averageAgeHoursPerChannel(TICKETS)).toEqual({"phone":124,"chat":135});
});
