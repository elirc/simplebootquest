const TICKETS = [
  {id: 1, subject: "Wrong invoice", ageHours: 31, replies: 6, priority: "low", channel: "chat", resolved: false},
  {id: 2, subject: "Password reset", ageHours: 67, replies: 1, priority: "normal", channel: "phone", resolved: true},
  {id: 3, subject: "Missing order", ageHours: 48, replies: 11, priority: "normal", channel: "chat", resolved: true},
  {id: 4, subject: "Bug in export", ageHours: 151, replies: 11, priority: "normal", channel: "phone", resolved: false},
  {id: 5, subject: "Feature idea", ageHours: 38, replies: 8, priority: "low", channel: "chat", resolved: true},
  {id: 6, subject: "Slow page", ageHours: 132, replies: 4, priority: "urgent", channel: "chat", resolved: false},
  {id: 7, subject: "Login fails", ageHours: 121, replies: 0, priority: "urgent", channel: "chat", resolved: false},
  {id: 8, subject: "Refund request", ageHours: 6, replies: 3, priority: "normal", channel: "chat", resolved: false}
];

test("an empty list", () => {
  expect(splitTicketsByResolved([])).toEqual({"yes":[],"no":[]});
});

test("all tickets", () => {
  expect(splitTicketsByResolved(TICKETS)).toEqual({"yes":["Password reset","Missing order","Feature idea"],"no":["Wrong invoice","Bug in export","Slow page","Login fails","Refund request"]});
});
