test("accepts a valid body (trimmed)", () => {
  expect(validateRecipe({"name":"  Risotto ","minutes":83,"calories":343,"cuisine":"asian","difficulty":"easy"})).toEqual({"ok":true,"data":{"name":"Risotto","minutes":83,"calories":343,"cuisine":"asian","difficulty":"easy"}});
});

test("requires a name", () => {
  expect(validateRecipe({"name":"   ","minutes":83,"calories":343,"cuisine":"asian","difficulty":"easy"})).toEqual({"ok":false,"errors":[{"field":"name","message":"must be 1-40 characters"}]});
});

test("checks number ranges", () => {
  expect(validateRecipe({"name":"  Risotto ","minutes":9,"calories":343,"cuisine":"asian","difficulty":"easy"})).toEqual({"ok":false,"errors":[{"field":"minutes","message":"must be a number from 10 to 120"}]});
});

test("rejects wrong types", () => {
  expect(validateRecipe({"name":"  Risotto ","minutes":"10","calories":343,"cuisine":"asian","difficulty":"easy"})).toEqual({"ok":false,"errors":[{"field":"minutes","message":"must be a number from 10 to 120"}]});
});

test("reports every problem at once", () => {
  expect(validateRecipe({"name":"","cuisine":"nope"})).toEqual({"ok":false,"errors":[{"field":"name","message":"must be 1-40 characters"},{"field":"minutes","message":"must be a number from 10 to 120"},{"field":"calories","message":"must be a number from 180 to 950"},{"field":"cuisine","message":"must be one of italian, asian, mexican, middle-eastern"},{"field":"difficulty","message":"must be one of easy, medium, hard"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateRecipe({"name":"  Risotto ","minutes":83,"calories":343,"cuisine":"asian","difficulty":"easy","ownerId":99})).toEqual({"ok":true,"data":{"name":"Risotto","minutes":83,"calories":343,"cuisine":"asian","difficulty":"easy"}});
});

test("rejects null", () => {
  expect(validateRecipe(null)).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
