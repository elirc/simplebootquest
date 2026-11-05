test("an empty update is fine", () => {
  expect(validateSongUpdate({})).toEqual({"ok":true,"data":{}});
});

test("updates one field", () => {
  expect(validateSongUpdate({"seconds":120})).toEqual({"ok":true,"data":{"seconds":120}});
});

test("still validates provided fields", () => {
  expect(validateSongUpdate({"seconds":421})).toEqual({"ok":false,"errors":[{"field":"seconds","message":"must be a number from 120 to 420"}]});
});

test("rejects unknown categories", () => {
  expect(validateSongUpdate({"artist":"nope"})).toEqual({"ok":false,"errors":[{"field":"artist","message":"must be one of Nova, The Pines, Kairo"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateSongUpdate({"title":"New","ownerId":99,"role":"admin"})).toEqual({"ok":true,"data":{"title":"New"}});
});

test("rejects non-objects", () => {
  expect(validateSongUpdate([1,2])).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
