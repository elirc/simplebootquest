test("accepts a valid body (trimmed)", () => {
  expect(validateStudent({"name":"  Luca ","score":42,"age":32,"course":"web"})).toEqual({"ok":true,"data":{"name":"Luca","score":42,"age":32,"course":"web"}});
});

test("requires a name", () => {
  expect(validateStudent({"name":"   ","score":42,"age":32,"course":"web"})).toEqual({"ok":false,"errors":[{"field":"name","message":"must be 1-40 characters"}]});
});

test("checks number ranges", () => {
  expect(validateStudent({"name":"  Luca ","score":30,"age":32,"course":"web"})).toEqual({"ok":false,"errors":[{"field":"score","message":"must be a number from 31 to 100"}]});
});

test("rejects wrong types", () => {
  expect(validateStudent({"name":"  Luca ","score":"31","age":32,"course":"web"})).toEqual({"ok":false,"errors":[{"field":"score","message":"must be a number from 31 to 100"}]});
});

test("reports every problem at once", () => {
  expect(validateStudent({"name":"","course":"nope"})).toEqual({"ok":false,"errors":[{"field":"name","message":"must be 1-40 characters"},{"field":"score","message":"must be a number from 31 to 100"},{"field":"age","message":"must be a number from 17 to 34"},{"field":"course","message":"must be one of web, data, design"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateStudent({"name":"  Luca ","score":42,"age":32,"course":"web","ownerId":99})).toEqual({"ok":true,"data":{"name":"Luca","score":42,"age":32,"course":"web"}});
});

test("rejects null", () => {
  expect(validateStudent(null)).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
