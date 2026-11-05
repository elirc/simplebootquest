test("an empty update is fine", () => {
  expect(validateProductUpdate({})).toEqual({"ok":true,"data":{}});
});

test("updates one field", () => {
  expect(validateProductUpdate({"price":3})).toEqual({"ok":true,"data":{"price":3}});
});

test("still validates provided fields", () => {
  expect(validateProductUpdate({"price":121})).toEqual({"ok":false,"errors":[{"field":"price","message":"must be a number from 3 to 120"}]});
});

test("rejects unknown categories", () => {
  expect(validateProductUpdate({"category":"nope"})).toEqual({"ok":false,"errors":[{"field":"category","message":"must be one of office, tech, home"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateProductUpdate({"name":"New","ownerId":99,"role":"admin"})).toEqual({"ok":true,"data":{"name":"New"}});
});

test("rejects non-objects", () => {
  expect(validateProductUpdate([1,2])).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
