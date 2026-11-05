test("an empty update is fine", () => {
  expect(validateWorkoutUpdate({})).toEqual({"ok":true,"data":{}});
});

test("updates one field", () => {
  expect(validateWorkoutUpdate({"minutes":15})).toEqual({"ok":true,"data":{"minutes":15}});
});

test("still validates provided fields", () => {
  expect(validateWorkoutUpdate({"minutes":121})).toEqual({"ok":false,"errors":[{"field":"minutes","message":"must be a number from 15 to 120"}]});
});

test("rejects unknown categories", () => {
  expect(validateWorkoutUpdate({"kind":"nope"})).toEqual({"ok":false,"errors":[{"field":"kind","message":"must be one of cardio, strength, mobility"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateWorkoutUpdate({"label":"New","ownerId":99,"role":"admin"})).toEqual({"ok":true,"data":{"label":"New"}});
});

test("rejects non-objects", () => {
  expect(validateWorkoutUpdate([1,2])).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
