const TICKETS = [
  {id: 1, subject: "Bug in export", ageHours: 136, replies: 9, priority: "low", channel: "phone", resolved: false},
  {id: 2, subject: "Feature idea", ageHours: 2, replies: 6, priority: "urgent", channel: "email", resolved: true},
  {id: 3, subject: "Wrong invoice", ageHours: 149, replies: 8, priority: "normal", channel: "chat", resolved: false},
  {id: 4, subject: "Dark mode", ageHours: 17, replies: 10, priority: "urgent", channel: "phone", resolved: true},
  {id: 5, subject: "Slow page", ageHours: 33, replies: 0, priority: "low", channel: "phone", resolved: true},
  {id: 6, subject: "Billing error", ageHours: 191, replies: 3, priority: "low", channel: "chat", resolved: true},
  {id: 7, subject: "Email change", ageHours: 80, replies: 0, priority: "low", channel: "chat", resolved: false},
  {id: 8, subject: "App crash", ageHours: 95, replies: 4, priority: "urgent", channel: "email", resolved: false}
];

test("an empty list", () => {
  expect(countTicketsPerChannel([])).toEqual({});
});

test("all tickets", () => {
  expect(countTicketsPerChannel(TICKETS)).toEqual({"phone":3,"email":2,"chat":3});
});
