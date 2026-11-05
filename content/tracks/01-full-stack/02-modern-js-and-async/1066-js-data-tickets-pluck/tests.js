const TICKETS = [
  {id: 1, subject: "Slow page", ageHours: 12, replies: 6, priority: "low", channel: "chat", resolved: false},
  {id: 2, subject: "Billing error", ageHours: 3, replies: 11, priority: "normal", channel: "email", resolved: true},
  {id: 3, subject: "Refund request", ageHours: 17, replies: 2, priority: "urgent", channel: "chat", resolved: true},
  {id: 4, subject: "Login fails", ageHours: 155, replies: 3, priority: "normal", channel: "chat", resolved: false},
  {id: 5, subject: "Wrong invoice", ageHours: 30, replies: 7, priority: "normal", channel: "phone", resolved: true},
  {id: 6, subject: "Missing order", ageHours: 124, replies: 7, priority: "urgent", channel: "email", resolved: false},
  {id: 7, subject: "Email change", ageHours: 32, replies: 2, priority: "urgent", channel: "chat", resolved: false},
  {id: 8, subject: "Bug in export", ageHours: 97, replies: 4, priority: "low", channel: "phone", resolved: true}
];

test("an empty list", () => {
  expect(summariseTickets([])).toEqual([]);
});

test("all tickets", () => {
  expect(summariseTickets(TICKETS)).toEqual([{"id":1,"subject":"Slow page","ageHours":12},{"id":2,"subject":"Billing error","ageHours":3},{"id":3,"subject":"Refund request","ageHours":17},{"id":4,"subject":"Login fails","ageHours":155},{"id":5,"subject":"Wrong invoice","ageHours":30},{"id":6,"subject":"Missing order","ageHours":124},{"id":7,"subject":"Email change","ageHours":32},{"id":8,"subject":"Bug in export","ageHours":97}]);
});
