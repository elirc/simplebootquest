const TICKETS = [
  {id: 1, subject: "Wrong invoice", ageHours: 18, replies: 0, priority: "normal", channel: "phone", resolved: false},
  {id: 2, subject: "Dark mode", ageHours: 184, replies: 4, priority: "urgent", channel: "phone", resolved: false},
  {id: 3, subject: "App crash", ageHours: 41, replies: 3, priority: "low", channel: "chat", resolved: true},
  {id: 4, subject: "Slow page", ageHours: 87, replies: 4, priority: "normal", channel: "chat", resolved: false},
  {id: 5, subject: "Refund request", ageHours: 84, replies: 7, priority: "urgent", channel: "phone", resolved: false},
  {id: 6, subject: "Email change", ageHours: 192, replies: 3, priority: "urgent", channel: "email", resolved: false},
  {id: 7, subject: "Login fails", ageHours: 160, replies: 6, priority: "low", channel: "chat", resolved: false},
  {id: 8, subject: "Feature idea", ageHours: 198, replies: 0, priority: "normal", channel: "chat", resolved: false}
];

test("an empty list", () => {
  expect(averageAgeHours([])).toEqual(null);
});

test("all tickets", () => {
  expect(averageAgeHours(TICKETS)).toEqual(120.5);
});
