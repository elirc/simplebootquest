test("accepts a valid body (trimmed)", () => {
  expect(validateTicket({"subject":"  Email change ","ageHours":16,"replies":3,"priority":"normal","channel":"chat"})).toEqual({"ok":true,"data":{"subject":"Email change","ageHours":16,"replies":3,"priority":"normal","channel":"chat"}});
});

test("requires a name", () => {
  expect(validateTicket({"subject":"   ","ageHours":16,"replies":3,"priority":"normal","channel":"chat"})).toEqual({"ok":false,"errors":[{"field":"subject","message":"must be 1-40 characters"}]});
});

test("checks number ranges", () => {
  expect(validateTicket({"subject":"  Email change ","ageHours":0,"replies":3,"priority":"normal","channel":"chat"})).toEqual({"ok":false,"errors":[{"field":"ageHours","message":"must be a number from 1 to 200"}]});
});

test("rejects wrong types", () => {
  expect(validateTicket({"subject":"  Email change ","ageHours":"1","replies":3,"priority":"normal","channel":"chat"})).toEqual({"ok":false,"errors":[{"field":"ageHours","message":"must be a number from 1 to 200"}]});
});

test("reports every problem at once", () => {
  expect(validateTicket({"subject":"","priority":"nope"})).toEqual({"ok":false,"errors":[{"field":"subject","message":"must be 1-40 characters"},{"field":"ageHours","message":"must be a number from 1 to 200"},{"field":"replies","message":"must be a number from 0 to 12"},{"field":"priority","message":"must be one of low, normal, urgent"},{"field":"channel","message":"must be one of email, chat, phone"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateTicket({"subject":"  Email change ","ageHours":16,"replies":3,"priority":"normal","channel":"chat","ownerId":99})).toEqual({"ok":true,"data":{"subject":"Email change","ageHours":16,"replies":3,"priority":"normal","channel":"chat"}});
});

test("rejects null", () => {
  expect(validateTicket(null)).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
