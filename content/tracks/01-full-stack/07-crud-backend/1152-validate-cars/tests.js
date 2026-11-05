test("accepts a valid body (trimmed)", () => {
  expect(validateCar({"model":"  Clio ","priceK":28,"km":49785,"year":2015,"fuel":"petrol"})).toEqual({"ok":true,"data":{"model":"Clio","priceK":28,"km":49785,"year":2015,"fuel":"petrol"}});
});

test("requires a name", () => {
  expect(validateCar({"model":"   ","priceK":28,"km":49785,"year":2015,"fuel":"petrol"})).toEqual({"ok":false,"errors":[{"field":"model","message":"must be 1-40 characters"}]});
});

test("checks number ranges", () => {
  expect(validateCar({"model":"  Clio ","priceK":13,"km":49785,"year":2015,"fuel":"petrol"})).toEqual({"ok":false,"errors":[{"field":"priceK","message":"must be a number from 14 to 58"}]});
});

test("rejects wrong types", () => {
  expect(validateCar({"model":"  Clio ","priceK":"14","km":49785,"year":2015,"fuel":"petrol"})).toEqual({"ok":false,"errors":[{"field":"priceK","message":"must be a number from 14 to 58"}]});
});

test("reports every problem at once", () => {
  expect(validateCar({"model":"","fuel":"nope"})).toEqual({"ok":false,"errors":[{"field":"model","message":"must be 1-40 characters"},{"field":"priceK","message":"must be a number from 14 to 58"},{"field":"km","message":"must be a number from 0 to 180000"},{"field":"year","message":"must be a number from 2008 to 2024"},{"field":"fuel","message":"must be one of petrol, diesel, electric, hybrid"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateCar({"model":"  Clio ","priceK":28,"km":49785,"year":2015,"fuel":"petrol","ownerId":99})).toEqual({"ok":true,"data":{"model":"Clio","priceK":28,"km":49785,"year":2015,"fuel":"petrol"}});
});

test("rejects null", () => {
  expect(validateCar(null)).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
