test("an empty update is fine", () => {
  expect(validateTicketUpdate({})).toEqual({"ok":true,"data":{}});
});

test("updates one field", () => {
  expect(validateTicketUpdate({"ageHours":1})).toEqual({"ok":true,"data":{"ageHours":1}});
});

test("still validates provided fields", () => {
  expect(validateTicketUpdate({"ageHours":201})).toEqual({"ok":false,"errors":[{"field":"ageHours","message":"must be a number from 1 to 200"}]});
});

test("rejects unknown categories", () => {
  expect(validateTicketUpdate({"priority":"nope"})).toEqual({"ok":false,"errors":[{"field":"priority","message":"must be one of low, normal, urgent"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateTicketUpdate({"subject":"New","ownerId":99,"role":"admin"})).toEqual({"ok":true,"data":{"subject":"New"}});
});

test("rejects non-objects", () => {
  expect(validateTicketUpdate([1,2])).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
