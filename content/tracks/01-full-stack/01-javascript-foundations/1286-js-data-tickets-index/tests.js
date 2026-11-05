const TICKETS = [
  {id: 1, subject: "App crash", ageHours: 17, replies: 6, priority: "normal", channel: "phone", resolved: true},
  {id: 2, subject: "Missing order", ageHours: 72, replies: 2, priority: "urgent", channel: "phone", resolved: false},
  {id: 3, subject: "Email change", ageHours: 143, replies: 9, priority: "urgent", channel: "email", resolved: false},
  {id: 4, subject: "Wrong invoice", ageHours: 75, replies: 2, priority: "urgent", channel: "phone", resolved: true},
  {id: 5, subject: "Password reset", ageHours: 75, replies: 1, priority: "urgent", channel: "email", resolved: false},
  {id: 6, subject: "Login fails", ageHours: 168, replies: 6, priority: "urgent", channel: "chat", resolved: false},
  {id: 7, subject: "Bug in export", ageHours: 174, replies: 12, priority: "normal", channel: "phone", resolved: false},
  {id: 8, subject: "Slow page", ageHours: 32, replies: 5, priority: "normal", channel: "email", resolved: true}
];

test("an empty list", () => {
  expect(ticketsById([])).toEqual({});
});

test("all tickets", () => {
  expect(ticketsById(TICKETS)).toEqual({"1":"App crash","2":"Missing order","3":"Email change","4":"Wrong invoice","5":"Password reset","6":"Login fails","7":"Bug in export","8":"Slow page"});
});
