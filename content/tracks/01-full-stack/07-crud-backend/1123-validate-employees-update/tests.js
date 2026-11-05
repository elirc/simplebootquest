test("an empty update is fine", () => {
  expect(validateEmployeeUpdate({})).toEqual({"ok":true,"data":{}});
});

test("updates one field", () => {
  expect(validateEmployeeUpdate({"salary":42000})).toEqual({"ok":true,"data":{"salary":42000}});
});

test("still validates provided fields", () => {
  expect(validateEmployeeUpdate({"salary":160001})).toEqual({"ok":false,"errors":[{"field":"salary","message":"must be a number from 42000 to 160000"}]});
});

test("rejects unknown categories", () => {
  expect(validateEmployeeUpdate({"team":"nope"})).toEqual({"ok":false,"errors":[{"field":"team","message":"must be one of platform, product, data"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateEmployeeUpdate({"name":"New","ownerId":99,"role":"admin"})).toEqual({"ok":true,"data":{"name":"New"}});
});

test("rejects non-objects", () => {
  expect(validateEmployeeUpdate([1,2])).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
