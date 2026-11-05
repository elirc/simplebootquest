test("accepts a valid body (trimmed)", () => {
  expect(validatePlant({"name":"  Cactus ","waterEveryDays":13,"heightCm":74,"light":"low"})).toEqual({"ok":true,"data":{"name":"Cactus","waterEveryDays":13,"heightCm":74,"light":"low"}});
});

test("requires a name", () => {
  expect(validatePlant({"name":"   ","waterEveryDays":13,"heightCm":74,"light":"low"})).toEqual({"ok":false,"errors":[{"field":"name","message":"must be 1-40 characters"}]});
});

test("checks number ranges", () => {
  expect(validatePlant({"name":"  Cactus ","waterEveryDays":0,"heightCm":74,"light":"low"})).toEqual({"ok":false,"errors":[{"field":"waterEveryDays","message":"must be a number from 1 to 21"}]});
});

test("rejects wrong types", () => {
  expect(validatePlant({"name":"  Cactus ","waterEveryDays":"1","heightCm":74,"light":"low"})).toEqual({"ok":false,"errors":[{"field":"waterEveryDays","message":"must be a number from 1 to 21"}]});
});

test("reports every problem at once", () => {
  expect(validatePlant({"name":"","light":"nope"})).toEqual({"ok":false,"errors":[{"field":"name","message":"must be 1-40 characters"},{"field":"waterEveryDays","message":"must be a number from 1 to 21"},{"field":"heightCm","message":"must be a number from 5 to 160"},{"field":"light","message":"must be one of low, medium, bright"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validatePlant({"name":"  Cactus ","waterEveryDays":13,"heightCm":74,"light":"low","ownerId":99})).toEqual({"ok":true,"data":{"name":"Cactus","waterEveryDays":13,"heightCm":74,"light":"low"}});
});

test("rejects null", () => {
  expect(validatePlant(null)).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
