test("an empty update is fine", () => {
  expect(validateOrderUpdate({})).toEqual({"ok":true,"data":{}});
});

test("updates one field", () => {
  expect(validateOrderUpdate({"totalCents":500})).toEqual({"ok":true,"data":{"totalCents":500}});
});

test("still validates provided fields", () => {
  expect(validateOrderUpdate({"totalCents":25001})).toEqual({"ok":false,"errors":[{"field":"totalCents","message":"must be a number from 500 to 25000"}]});
});

test("rejects unknown categories", () => {
  expect(validateOrderUpdate({"status":"nope"})).toEqual({"ok":false,"errors":[{"field":"status","message":"must be one of pending, paid, shipped, cancelled"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateOrderUpdate({"code":"New","ownerId":99,"role":"admin"})).toEqual({"ok":true,"data":{"code":"New"}});
});

test("rejects non-objects", () => {
  expect(validateOrderUpdate([1,2])).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
