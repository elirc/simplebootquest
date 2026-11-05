test("accepts a valid body (trimmed)", () => {
  expect(validateTransaction({"reference":"  TX-12 ","amount":480,"day":21,"category":"salary"})).toEqual({"ok":true,"data":{"reference":"TX-12","amount":480,"day":21,"category":"salary"}});
});

test("requires a name", () => {
  expect(validateTransaction({"reference":"   ","amount":480,"day":21,"category":"salary"})).toEqual({"ok":false,"errors":[{"field":"reference","message":"must be 1-40 characters"}]});
});

test("checks number ranges", () => {
  expect(validateTransaction({"reference":"  TX-12 ","amount":-401,"day":21,"category":"salary"})).toEqual({"ok":false,"errors":[{"field":"amount","message":"must be a number from -400 to 1200"}]});
});

test("rejects wrong types", () => {
  expect(validateTransaction({"reference":"  TX-12 ","amount":"-400","day":21,"category":"salary"})).toEqual({"ok":false,"errors":[{"field":"amount","message":"must be a number from -400 to 1200"}]});
});

test("reports every problem at once", () => {
  expect(validateTransaction({"reference":"","category":"nope"})).toEqual({"ok":false,"errors":[{"field":"reference","message":"must be 1-40 characters"},{"field":"amount","message":"must be a number from -400 to 1200"},{"field":"day","message":"must be a number from 1 to 28"},{"field":"category","message":"must be one of food, rent, salary, travel, fun"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateTransaction({"reference":"  TX-12 ","amount":480,"day":21,"category":"salary","ownerId":99})).toEqual({"ok":true,"data":{"reference":"TX-12","amount":480,"day":21,"category":"salary"}});
});

test("rejects null", () => {
  expect(validateTransaction(null)).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
