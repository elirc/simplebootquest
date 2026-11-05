const TICKETS = [
  {id: 1, subject: "Bug in export", ageHours: 181, replies: 9, priority: "normal", channel: "chat", resolved: true},
  {id: 2, subject: "Password reset", ageHours: 41, replies: 8, priority: "low", channel: "phone", resolved: true},
  {id: 3, subject: "Billing error", ageHours: 114, replies: 2, priority: "normal", channel: "chat", resolved: false},
  {id: 4, subject: "Dark mode", ageHours: 64, replies: 1, priority: "low", channel: "phone", resolved: false},
  {id: 5, subject: "App crash", ageHours: 123, replies: 0, priority: "urgent", channel: "email", resolved: true},
  {id: 6, subject: "Missing order", ageHours: 171, replies: 8, priority: "normal", channel: "chat", resolved: false},
  {id: 7, subject: "Slow page", ageHours: 8, replies: 2, priority: "normal", channel: "chat", resolved: true},
  {id: 8, subject: "Refund request", ageHours: 130, replies: 9, priority: "urgent", channel: "phone", resolved: false}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(TICKETS);
  bumpAgeHours(TICKETS, "low", 10);
  expect(JSON.stringify(TICKETS)).toBe(before);
});

test("with \"low\", 10", () => {
  expect(bumpAgeHours(TICKETS, "low", 10)).toEqual([{"id":1,"subject":"Bug in export","ageHours":181,"replies":9,"priority":"normal","channel":"chat","resolved":true},{"id":2,"subject":"Password reset","ageHours":51,"replies":8,"priority":"low","channel":"phone","resolved":true},{"id":3,"subject":"Billing error","ageHours":114,"replies":2,"priority":"normal","channel":"chat","resolved":false},{"id":4,"subject":"Dark mode","ageHours":74,"replies":1,"priority":"low","channel":"phone","resolved":false},{"id":5,"subject":"App crash","ageHours":123,"replies":0,"priority":"urgent","channel":"email","resolved":true},{"id":6,"subject":"Missing order","ageHours":171,"replies":8,"priority":"normal","channel":"chat","resolved":false},{"id":7,"subject":"Slow page","ageHours":8,"replies":2,"priority":"normal","channel":"chat","resolved":true},{"id":8,"subject":"Refund request","ageHours":130,"replies":9,"priority":"urgent","channel":"phone","resolved":false}]);
});

test("with \"normal\", 1", () => {
  expect(bumpAgeHours(TICKETS, "normal", 1)).toEqual([{"id":1,"subject":"Bug in export","ageHours":182,"replies":9,"priority":"normal","channel":"chat","resolved":true},{"id":2,"subject":"Password reset","ageHours":41,"replies":8,"priority":"low","channel":"phone","resolved":true},{"id":3,"subject":"Billing error","ageHours":115,"replies":2,"priority":"normal","channel":"chat","resolved":false},{"id":4,"subject":"Dark mode","ageHours":64,"replies":1,"priority":"low","channel":"phone","resolved":false},{"id":5,"subject":"App crash","ageHours":123,"replies":0,"priority":"urgent","channel":"email","resolved":true},{"id":6,"subject":"Missing order","ageHours":172,"replies":8,"priority":"normal","channel":"chat","resolved":false},{"id":7,"subject":"Slow page","ageHours":9,"replies":2,"priority":"normal","channel":"chat","resolved":true},{"id":8,"subject":"Refund request","ageHours":130,"replies":9,"priority":"urgent","channel":"phone","resolved":false}]);
});
