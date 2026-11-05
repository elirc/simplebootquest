test("an empty update is fine", () => {
  expect(validateEventUpdate({})).toEqual({"ok":true,"data":{}});
});

test("updates one field", () => {
  expect(validateEventUpdate({"capacity":20})).toEqual({"ok":true,"data":{"capacity":20}});
});

test("still validates provided fields", () => {
  expect(validateEventUpdate({"capacity":401})).toEqual({"ok":false,"errors":[{"field":"capacity","message":"must be a number from 20 to 400"}]});
});

test("rejects unknown categories", () => {
  expect(validateEventUpdate({"format":"nope"})).toEqual({"ok":false,"errors":[{"field":"format","message":"must be one of in-person, online, hybrid"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateEventUpdate({"name":"New","ownerId":99,"role":"admin"})).toEqual({"ok":true,"data":{"name":"New"}});
});

test("rejects non-objects", () => {
  expect(validateEventUpdate([1,2])).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
