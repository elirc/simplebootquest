test("an empty update is fine", () => {
  expect(validateCarUpdate({})).toEqual({"ok":true,"data":{}});
});

test("updates one field", () => {
  expect(validateCarUpdate({"priceK":14})).toEqual({"ok":true,"data":{"priceK":14}});
});

test("still validates provided fields", () => {
  expect(validateCarUpdate({"priceK":59})).toEqual({"ok":false,"errors":[{"field":"priceK","message":"must be a number from 14 to 58"}]});
});

test("rejects unknown categories", () => {
  expect(validateCarUpdate({"fuel":"nope"})).toEqual({"ok":false,"errors":[{"field":"fuel","message":"must be one of petrol, diesel, electric, hybrid"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateCarUpdate({"model":"New","ownerId":99,"role":"admin"})).toEqual({"ok":true,"data":{"model":"New"}});
});

test("rejects non-objects", () => {
  expect(validateCarUpdate([1,2])).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
