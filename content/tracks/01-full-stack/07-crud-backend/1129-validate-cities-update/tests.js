test("an empty update is fine", () => {
  expect(validateCityUpdate({})).toEqual({"ok":true,"data":{}});
});

test("updates one field", () => {
  expect(validateCityUpdate({"population":300})).toEqual({"ok":true,"data":{"population":300}});
});

test("still validates provided fields", () => {
  expect(validateCityUpdate({"population":9901})).toEqual({"ok":false,"errors":[{"field":"population","message":"must be a number from 300 to 9900"}]});
});

test("rejects unknown categories", () => {
  expect(validateCityUpdate({"continent":"nope"})).toEqual({"ok":false,"errors":[{"field":"continent","message":"must be one of Europe, Africa, Americas, Asia, Oceania"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateCityUpdate({"name":"New","ownerId":99,"role":"admin"})).toEqual({"ok":true,"data":{"name":"New"}});
});

test("rejects non-objects", () => {
  expect(validateCityUpdate([1,2])).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
