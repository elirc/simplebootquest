test('does not mutate the input', () => {
  const before = JSON.stringify(TICKETS);
  bumpAgeHours(TICKETS, "email", 10);
  expect(JSON.stringify(TICKETS)).toBe(before);
});

test("with \"email\", 10", () => {
  expect(bumpAgeHours(TICKETS, "email", 10)).toEqual([{"id":1,"subject":"Email change","ageHours":106,"replies":0,"priority":"urgent","channel":"email","resolved":true},{"id":2,"subject":"Dark mode","ageHours":83,"replies":5,"priority":"normal","channel":"chat","resolved":false},{"id":3,"subject":"Login fails","ageHours":30,"replies":6,"priority":"urgent","channel":"email","resolved":true},{"id":4,"subject":"Billing error","ageHours":93,"replies":8,"priority":"urgent","channel":"chat","resolved":false},{"id":5,"subject":"App crash","ageHours":195,"replies":11,"priority":"urgent","channel":"phone","resolved":true},{"id":6,"subject":"Password reset","ageHours":104,"replies":7,"priority":"urgent","channel":"phone","resolved":false},{"id":7,"subject":"Feature idea","ageHours":38,"replies":5,"priority":"low","channel":"phone","resolved":false},{"id":8,"subject":"Bug in export","ageHours":38,"replies":4,"priority":"urgent","channel":"email","resolved":false}]);
});

test("with \"chat\", 1", () => {
  expect(bumpAgeHours(TICKETS, "chat", 1)).toEqual([{"id":1,"subject":"Email change","ageHours":96,"replies":0,"priority":"urgent","channel":"email","resolved":true},{"id":2,"subject":"Dark mode","ageHours":84,"replies":5,"priority":"normal","channel":"chat","resolved":false},{"id":3,"subject":"Login fails","ageHours":20,"replies":6,"priority":"urgent","channel":"email","resolved":true},{"id":4,"subject":"Billing error","ageHours":94,"replies":8,"priority":"urgent","channel":"chat","resolved":false},{"id":5,"subject":"App crash","ageHours":195,"replies":11,"priority":"urgent","channel":"phone","resolved":true},{"id":6,"subject":"Password reset","ageHours":104,"replies":7,"priority":"urgent","channel":"phone","resolved":false},{"id":7,"subject":"Feature idea","ageHours":38,"replies":5,"priority":"low","channel":"phone","resolved":false},{"id":8,"subject":"Bug in export","ageHours":28,"replies":4,"priority":"urgent","channel":"email","resolved":false}]);
});
