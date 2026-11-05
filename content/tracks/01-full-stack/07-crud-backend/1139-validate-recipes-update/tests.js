test("an empty update is fine", () => {
  expect(validateRecipeUpdate({})).toEqual({"ok":true,"data":{}});
});

test("updates one field", () => {
  expect(validateRecipeUpdate({"minutes":10})).toEqual({"ok":true,"data":{"minutes":10}});
});

test("still validates provided fields", () => {
  expect(validateRecipeUpdate({"minutes":121})).toEqual({"ok":false,"errors":[{"field":"minutes","message":"must be a number from 10 to 120"}]});
});

test("rejects unknown categories", () => {
  expect(validateRecipeUpdate({"cuisine":"nope"})).toEqual({"ok":false,"errors":[{"field":"cuisine","message":"must be one of italian, asian, mexican, middle-eastern"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateRecipeUpdate({"name":"New","ownerId":99,"role":"admin"})).toEqual({"ok":true,"data":{"name":"New"}});
});

test("rejects non-objects", () => {
  expect(validateRecipeUpdate([1,2])).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
