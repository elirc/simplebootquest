test("an empty update is fine", () => {
  expect(validateHotelUpdate({})).toEqual({"ok":true,"data":{}});
});

test("updates one field", () => {
  expect(validateHotelUpdate({"nightlyPrice":45})).toEqual({"ok":true,"data":{"nightlyPrice":45}});
});

test("still validates provided fields", () => {
  expect(validateHotelUpdate({"nightlyPrice":421})).toEqual({"ok":false,"errors":[{"field":"nightlyPrice","message":"must be a number from 45 to 420"}]});
});

test("rejects unknown categories", () => {
  expect(validateHotelUpdate({"city":"nope"})).toEqual({"ok":false,"errors":[{"field":"city","message":"must be one of Lisbon, Kyoto, Toronto"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateHotelUpdate({"name":"New","ownerId":99,"role":"admin"})).toEqual({"ok":true,"data":{"name":"New"}});
});

test("rejects non-objects", () => {
  expect(validateHotelUpdate([1,2])).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
