test("an empty update is fine", () => {
  expect(validateTransactionUpdate({})).toEqual({"ok":true,"data":{}});
});

test("updates one field", () => {
  expect(validateTransactionUpdate({"amount":-400})).toEqual({"ok":true,"data":{"amount":-400}});
});

test("still validates provided fields", () => {
  expect(validateTransactionUpdate({"amount":1201})).toEqual({"ok":false,"errors":[{"field":"amount","message":"must be a number from -400 to 1200"}]});
});

test("rejects unknown categories", () => {
  expect(validateTransactionUpdate({"category":"nope"})).toEqual({"ok":false,"errors":[{"field":"category","message":"must be one of food, rent, salary, travel, fun"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateTransactionUpdate({"reference":"New","ownerId":99,"role":"admin"})).toEqual({"ok":true,"data":{"reference":"New"}});
});

test("rejects non-objects", () => {
  expect(validateTransactionUpdate([1,2])).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
