test("an empty update is fine", () => {
  expect(validateFlightUpdate({})).toEqual({"ok":true,"data":{}});
});

test("updates one field", () => {
  expect(validateFlightUpdate({"durationMin":55})).toEqual({"ok":true,"data":{"durationMin":55}});
});

test("still validates provided fields", () => {
  expect(validateFlightUpdate({"durationMin":841})).toEqual({"ok":false,"errors":[{"field":"durationMin","message":"must be a number from 55 to 840"}]});
});

test("rejects unknown categories", () => {
  expect(validateFlightUpdate({"airline":"nope"})).toEqual({"ok":false,"errors":[{"field":"airline","message":"must be one of oneworld, skyteam, star"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateFlightUpdate({"number":"New","ownerId":99,"role":"admin"})).toEqual({"ok":true,"data":{"number":"New"}});
});

test("rejects non-objects", () => {
  expect(validateFlightUpdate([1,2])).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
