test("an empty update is fine", () => {
  expect(validateStudentUpdate({})).toEqual({"ok":true,"data":{}});
});

test("updates one field", () => {
  expect(validateStudentUpdate({"score":31})).toEqual({"ok":true,"data":{"score":31}});
});

test("still validates provided fields", () => {
  expect(validateStudentUpdate({"score":101})).toEqual({"ok":false,"errors":[{"field":"score","message":"must be a number from 31 to 100"}]});
});

test("rejects unknown categories", () => {
  expect(validateStudentUpdate({"course":"nope"})).toEqual({"ok":false,"errors":[{"field":"course","message":"must be one of web, data, design"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateStudentUpdate({"name":"New","ownerId":99,"role":"admin"})).toEqual({"ok":true,"data":{"name":"New"}});
});

test("rejects non-objects", () => {
  expect(validateStudentUpdate([1,2])).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
