test("accepts a valid body (trimmed)", () => {
  expect(validateWorkout({"label":"  Fri yoga ","minutes":53,"calories":327,"kind":"strength"})).toEqual({"ok":true,"data":{"label":"Fri yoga","minutes":53,"calories":327,"kind":"strength"}});
});

test("requires a name", () => {
  expect(validateWorkout({"label":"   ","minutes":53,"calories":327,"kind":"strength"})).toEqual({"ok":false,"errors":[{"field":"label","message":"must be 1-40 characters"}]});
});

test("checks number ranges", () => {
  expect(validateWorkout({"label":"  Fri yoga ","minutes":14,"calories":327,"kind":"strength"})).toEqual({"ok":false,"errors":[{"field":"minutes","message":"must be a number from 15 to 120"}]});
});

test("rejects wrong types", () => {
  expect(validateWorkout({"label":"  Fri yoga ","minutes":"15","calories":327,"kind":"strength"})).toEqual({"ok":false,"errors":[{"field":"minutes","message":"must be a number from 15 to 120"}]});
});

test("reports every problem at once", () => {
  expect(validateWorkout({"label":"","kind":"nope"})).toEqual({"ok":false,"errors":[{"field":"label","message":"must be 1-40 characters"},{"field":"minutes","message":"must be a number from 15 to 120"},{"field":"calories","message":"must be a number from 80 to 900"},{"field":"kind","message":"must be one of cardio, strength, mobility"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateWorkout({"label":"  Fri yoga ","minutes":53,"calories":327,"kind":"strength","ownerId":99})).toEqual({"ok":true,"data":{"label":"Fri yoga","minutes":53,"calories":327,"kind":"strength"}});
});

test("rejects null", () => {
  expect(validateWorkout(null)).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
