test("an empty update is fine", () => {
  expect(validateMovieUpdate({})).toEqual({"ok":true,"data":{}});
});

test("updates one field", () => {
  expect(validateMovieUpdate({"year":1980})).toEqual({"ok":true,"data":{"year":1980}});
});

test("still validates provided fields", () => {
  expect(validateMovieUpdate({"year":2025})).toEqual({"ok":false,"errors":[{"field":"year","message":"must be a number from 1980 to 2024"}]});
});

test("rejects unknown categories", () => {
  expect(validateMovieUpdate({"genre":"nope"})).toEqual({"ok":false,"errors":[{"field":"genre","message":"must be one of drama, comedy, sci-fi, thriller"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateMovieUpdate({"title":"New","ownerId":99,"role":"admin"})).toEqual({"ok":true,"data":{"title":"New"}});
});

test("rejects non-objects", () => {
  expect(validateMovieUpdate([1,2])).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
