test("accepts a valid body (trimmed)", () => {
  expect(validateOrder({"code":"  A-101 ","totalCents":13840,"items":4,"status":"cancelled","country":"UK"})).toEqual({"ok":true,"data":{"code":"A-101","totalCents":13840,"items":4,"status":"cancelled","country":"UK"}});
});

test("requires a name", () => {
  expect(validateOrder({"code":"   ","totalCents":13840,"items":4,"status":"cancelled","country":"UK"})).toEqual({"ok":false,"errors":[{"field":"code","message":"must be 1-40 characters"}]});
});

test("checks number ranges", () => {
  expect(validateOrder({"code":"  A-101 ","totalCents":499,"items":4,"status":"cancelled","country":"UK"})).toEqual({"ok":false,"errors":[{"field":"totalCents","message":"must be a number from 500 to 25000"}]});
});

test("rejects wrong types", () => {
  expect(validateOrder({"code":"  A-101 ","totalCents":"500","items":4,"status":"cancelled","country":"UK"})).toEqual({"ok":false,"errors":[{"field":"totalCents","message":"must be a number from 500 to 25000"}]});
});

test("reports every problem at once", () => {
  expect(validateOrder({"code":"","status":"nope"})).toEqual({"ok":false,"errors":[{"field":"code","message":"must be 1-40 characters"},{"field":"totalCents","message":"must be a number from 500 to 25000"},{"field":"items","message":"must be a number from 1 to 9"},{"field":"status","message":"must be one of pending, paid, shipped, cancelled"},{"field":"country","message":"must be one of UK, US, DE"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateOrder({"code":"  A-101 ","totalCents":13840,"items":4,"status":"cancelled","country":"UK","ownerId":99})).toEqual({"ok":true,"data":{"code":"A-101","totalCents":13840,"items":4,"status":"cancelled","country":"UK"}});
});

test("rejects null", () => {
  expect(validateOrder(null)).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
