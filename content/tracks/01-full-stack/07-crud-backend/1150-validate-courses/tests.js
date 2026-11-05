test("accepts a valid body (trimmed)", () => {
  expect(validateCourse({"title":"  Docker Intro ","lessons":17,"enrolled":1293,"level":"beginner"})).toEqual({"ok":true,"data":{"title":"Docker Intro","lessons":17,"enrolled":1293,"level":"beginner"}});
});

test("requires a name", () => {
  expect(validateCourse({"title":"   ","lessons":17,"enrolled":1293,"level":"beginner"})).toEqual({"ok":false,"errors":[{"field":"title","message":"must be 1-40 characters"}]});
});

test("checks number ranges", () => {
  expect(validateCourse({"title":"  Docker Intro ","lessons":5,"enrolled":1293,"level":"beginner"})).toEqual({"ok":false,"errors":[{"field":"lessons","message":"must be a number from 6 to 48"}]});
});

test("rejects wrong types", () => {
  expect(validateCourse({"title":"  Docker Intro ","lessons":"6","enrolled":1293,"level":"beginner"})).toEqual({"ok":false,"errors":[{"field":"lessons","message":"must be a number from 6 to 48"}]});
});

test("reports every problem at once", () => {
  expect(validateCourse({"title":"","level":"nope"})).toEqual({"ok":false,"errors":[{"field":"title","message":"must be 1-40 characters"},{"field":"lessons","message":"must be a number from 6 to 48"},{"field":"enrolled","message":"must be a number from 12 to 4800"},{"field":"level","message":"must be one of beginner, intermediate, advanced"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateCourse({"title":"  Docker Intro ","lessons":17,"enrolled":1293,"level":"beginner","ownerId":99})).toEqual({"ok":true,"data":{"title":"Docker Intro","lessons":17,"enrolled":1293,"level":"beginner"}});
});

test("rejects null", () => {
  expect(validateCourse(null)).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
