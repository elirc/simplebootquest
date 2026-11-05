test("an empty update is fine", () => {
  expect(validateRepoUpdate({})).toEqual({"ok":true,"data":{}});
});

test("updates one field", () => {
  expect(validateRepoUpdate({"stars":0})).toEqual({"ok":true,"data":{"stars":0}});
});

test("still validates provided fields", () => {
  expect(validateRepoUpdate({"stars":5401})).toEqual({"ok":false,"errors":[{"field":"stars","message":"must be a number from 0 to 5400"}]});
});

test("rejects unknown categories", () => {
  expect(validateRepoUpdate({"language":"nope"})).toEqual({"ok":false,"errors":[{"field":"language","message":"must be one of TypeScript, Go, Python"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateRepoUpdate({"name":"New","ownerId":99,"role":"admin"})).toEqual({"ok":true,"data":{"name":"New"}});
});

test("rejects non-objects", () => {
  expect(validateRepoUpdate([1,2])).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
