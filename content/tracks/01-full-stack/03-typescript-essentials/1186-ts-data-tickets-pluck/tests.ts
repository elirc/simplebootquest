const TICKETS = [
  {id: 1, subject: "Dark mode", ageHours: 150, replies: 12, priority: "normal", channel: "phone", resolved: false},
  {id: 2, subject: "App crash", ageHours: 38, replies: 9, priority: "low", channel: "phone", resolved: false},
  {id: 3, subject: "Refund request", ageHours: 11, replies: 10, priority: "normal", channel: "chat", resolved: true},
  {id: 4, subject: "Feature idea", ageHours: 25, replies: 0, priority: "urgent", channel: "phone", resolved: true},
  {id: 5, subject: "Billing error", ageHours: 198, replies: 6, priority: "low", channel: "chat", resolved: true},
  {id: 6, subject: "Wrong invoice", ageHours: 115, replies: 2, priority: "urgent", channel: "chat", resolved: true},
  {id: 7, subject: "Login fails", ageHours: 28, replies: 1, priority: "urgent", channel: "email", resolved: false},
  {id: 8, subject: "Email change", ageHours: 71, replies: 0, priority: "normal", channel: "chat", resolved: true}
];

test("an empty list", () => {
  expect(summariseTickets([])).toEqual([]);
});

test("all tickets", () => {
  expect(summariseTickets(TICKETS)).toEqual([{"id":1,"subject":"Dark mode","ageHours":150},{"id":2,"subject":"App crash","ageHours":38},{"id":3,"subject":"Refund request","ageHours":11},{"id":4,"subject":"Feature idea","ageHours":25},{"id":5,"subject":"Billing error","ageHours":198},{"id":6,"subject":"Wrong invoice","ageHours":115},{"id":7,"subject":"Login fails","ageHours":28},{"id":8,"subject":"Email change","ageHours":71}]);
});
