test("accepts a valid body (trimmed)", () => {
  expect(validateEvent({"name":"  Hackathon ","capacity":291,"registered":375,"format":"hybrid"})).toEqual({"ok":true,"data":{"name":"Hackathon","capacity":291,"registered":375,"format":"hybrid"}});
});

test("requires a name", () => {
  expect(validateEvent({"name":"   ","capacity":291,"registered":375,"format":"hybrid"})).toEqual({"ok":false,"errors":[{"field":"name","message":"must be 1-40 characters"}]});
});

test("checks number ranges", () => {
  expect(validateEvent({"name":"  Hackathon ","capacity":19,"registered":375,"format":"hybrid"})).toEqual({"ok":false,"errors":[{"field":"capacity","message":"must be a number from 20 to 400"}]});
});

test("rejects wrong types", () => {
  expect(validateEvent({"name":"  Hackathon ","capacity":"20","registered":375,"format":"hybrid"})).toEqual({"ok":false,"errors":[{"field":"capacity","message":"must be a number from 20 to 400"}]});
});

test("reports every problem at once", () => {
  expect(validateEvent({"name":"","format":"nope"})).toEqual({"ok":false,"errors":[{"field":"name","message":"must be 1-40 characters"},{"field":"capacity","message":"must be a number from 20 to 400"},{"field":"registered","message":"must be a number from 0 to 380"},{"field":"format","message":"must be one of in-person, online, hybrid"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateEvent({"name":"  Hackathon ","capacity":291,"registered":375,"format":"hybrid","ownerId":99})).toEqual({"ok":true,"data":{"name":"Hackathon","capacity":291,"registered":375,"format":"hybrid"}});
});

test("rejects null", () => {
  expect(validateEvent(null)).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
