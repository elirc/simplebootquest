test("an empty update is fine", () => {
  expect(validateTaskUpdate({})).toEqual({"ok":true,"data":{}});
});

test("updates one field", () => {
  expect(validateTaskUpdate({"estimate":1})).toEqual({"ok":true,"data":{"estimate":1}});
});

test("still validates provided fields", () => {
  expect(validateTaskUpdate({"estimate":17})).toEqual({"ok":false,"errors":[{"field":"estimate","message":"must be a number from 1 to 16"}]});
});

test("rejects unknown categories", () => {
  expect(validateTaskUpdate({"status":"nope"})).toEqual({"ok":false,"errors":[{"field":"status","message":"must be one of todo, doing, done"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateTaskUpdate({"title":"New","ownerId":99,"role":"admin"})).toEqual({"ok":true,"data":{"title":"New"}});
});

test("rejects non-objects", () => {
  expect(validateTaskUpdate([1,2])).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
