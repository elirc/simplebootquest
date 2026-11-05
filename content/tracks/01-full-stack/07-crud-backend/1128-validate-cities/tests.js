test("accepts a valid body (trimmed)", () => {
  expect(validateCity({"name":"  Turin ","population":7046,"avgTemp":22,"continent":"Europe"})).toEqual({"ok":true,"data":{"name":"Turin","population":7046,"avgTemp":22,"continent":"Europe"}});
});

test("requires a name", () => {
  expect(validateCity({"name":"   ","population":7046,"avgTemp":22,"continent":"Europe"})).toEqual({"ok":false,"errors":[{"field":"name","message":"must be 1-40 characters"}]});
});

test("checks number ranges", () => {
  expect(validateCity({"name":"  Turin ","population":299,"avgTemp":22,"continent":"Europe"})).toEqual({"ok":false,"errors":[{"field":"population","message":"must be a number from 300 to 9900"}]});
});

test("rejects wrong types", () => {
  expect(validateCity({"name":"  Turin ","population":"300","avgTemp":22,"continent":"Europe"})).toEqual({"ok":false,"errors":[{"field":"population","message":"must be a number from 300 to 9900"}]});
});

test("reports every problem at once", () => {
  expect(validateCity({"name":"","continent":"nope"})).toEqual({"ok":false,"errors":[{"field":"name","message":"must be 1-40 characters"},{"field":"population","message":"must be a number from 300 to 9900"},{"field":"avgTemp","message":"must be a number from 2 to 29"},{"field":"continent","message":"must be one of Europe, Africa, Americas, Asia, Oceania"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateCity({"name":"  Turin ","population":7046,"avgTemp":22,"continent":"Europe","ownerId":99})).toEqual({"ok":true,"data":{"name":"Turin","population":7046,"avgTemp":22,"continent":"Europe"}});
});

test("rejects null", () => {
  expect(validateCity(null)).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
