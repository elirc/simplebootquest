test("an empty update is fine", () => {
  expect(validateBookUpdate({})).toEqual({"ok":true,"data":{}});
});

test("updates one field", () => {
  expect(validateBookUpdate({"pages":120})).toEqual({"ok":true,"data":{"pages":120}});
});

test("still validates provided fields", () => {
  expect(validateBookUpdate({"pages":781})).toEqual({"ok":false,"errors":[{"field":"pages","message":"must be a number from 120 to 780"}]});
});

test("rejects unknown categories", () => {
  expect(validateBookUpdate({"genre":"nope"})).toEqual({"ok":false,"errors":[{"field":"genre","message":"must be one of fiction, classic, tech, sci-fi"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateBookUpdate({"title":"New","ownerId":99,"role":"admin"})).toEqual({"ok":true,"data":{"title":"New"}});
});

test("rejects non-objects", () => {
  expect(validateBookUpdate([1,2])).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
