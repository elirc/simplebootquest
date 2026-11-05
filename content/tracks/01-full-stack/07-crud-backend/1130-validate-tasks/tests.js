test("accepts a valid body (trimmed)", () => {
  expect(validateTask({"title":"  Add caching ","estimate":12,"priority":3,"status":"doing","assignee":"ada"})).toEqual({"ok":true,"data":{"title":"Add caching","estimate":12,"priority":3,"status":"doing","assignee":"ada"}});
});

test("requires a name", () => {
  expect(validateTask({"title":"   ","estimate":12,"priority":3,"status":"doing","assignee":"ada"})).toEqual({"ok":false,"errors":[{"field":"title","message":"must be 1-40 characters"}]});
});

test("checks number ranges", () => {
  expect(validateTask({"title":"  Add caching ","estimate":0,"priority":3,"status":"doing","assignee":"ada"})).toEqual({"ok":false,"errors":[{"field":"estimate","message":"must be a number from 1 to 16"}]});
});

test("rejects wrong types", () => {
  expect(validateTask({"title":"  Add caching ","estimate":"1","priority":3,"status":"doing","assignee":"ada"})).toEqual({"ok":false,"errors":[{"field":"estimate","message":"must be a number from 1 to 16"}]});
});

test("reports every problem at once", () => {
  expect(validateTask({"title":"","status":"nope"})).toEqual({"ok":false,"errors":[{"field":"title","message":"must be 1-40 characters"},{"field":"estimate","message":"must be a number from 1 to 16"},{"field":"priority","message":"must be a number from 1 to 5"},{"field":"status","message":"must be one of todo, doing, done"},{"field":"assignee","message":"must be one of ada, grace, linus"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateTask({"title":"  Add caching ","estimate":12,"priority":3,"status":"doing","assignee":"ada","ownerId":99})).toEqual({"ok":true,"data":{"title":"Add caching","estimate":12,"priority":3,"status":"doing","assignee":"ada"}});
});

test("rejects null", () => {
  expect(validateTask(null)).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
