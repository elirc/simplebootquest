test("an empty update is fine", () => {
  expect(validateCourseUpdate({})).toEqual({"ok":true,"data":{}});
});

test("updates one field", () => {
  expect(validateCourseUpdate({"lessons":6})).toEqual({"ok":true,"data":{"lessons":6}});
});

test("still validates provided fields", () => {
  expect(validateCourseUpdate({"lessons":49})).toEqual({"ok":false,"errors":[{"field":"lessons","message":"must be a number from 6 to 48"}]});
});

test("rejects unknown categories", () => {
  expect(validateCourseUpdate({"level":"nope"})).toEqual({"ok":false,"errors":[{"field":"level","message":"must be one of beginner, intermediate, advanced"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateCourseUpdate({"title":"New","ownerId":99,"role":"admin"})).toEqual({"ok":true,"data":{"title":"New"}});
});

test("rejects non-objects", () => {
  expect(validateCourseUpdate([1,2])).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
