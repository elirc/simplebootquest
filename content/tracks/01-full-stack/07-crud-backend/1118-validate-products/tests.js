test("accepts a valid body (trimmed)", () => {
  expect(validateProduct({"name":"  Webcam ","price":82,"stock":38,"category":"office"})).toEqual({"ok":true,"data":{"name":"Webcam","price":82,"stock":38,"category":"office"}});
});

test("requires a name", () => {
  expect(validateProduct({"name":"   ","price":82,"stock":38,"category":"office"})).toEqual({"ok":false,"errors":[{"field":"name","message":"must be 1-40 characters"}]});
});

test("checks number ranges", () => {
  expect(validateProduct({"name":"  Webcam ","price":2,"stock":38,"category":"office"})).toEqual({"ok":false,"errors":[{"field":"price","message":"must be a number from 3 to 120"}]});
});

test("rejects wrong types", () => {
  expect(validateProduct({"name":"  Webcam ","price":"3","stock":38,"category":"office"})).toEqual({"ok":false,"errors":[{"field":"price","message":"must be a number from 3 to 120"}]});
});

test("reports every problem at once", () => {
  expect(validateProduct({"name":"","category":"nope"})).toEqual({"ok":false,"errors":[{"field":"name","message":"must be 1-40 characters"},{"field":"price","message":"must be a number from 3 to 120"},{"field":"stock","message":"must be a number from 0 to 60"},{"field":"category","message":"must be one of office, tech, home"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateProduct({"name":"  Webcam ","price":82,"stock":38,"category":"office","ownerId":99})).toEqual({"ok":true,"data":{"name":"Webcam","price":82,"stock":38,"category":"office"}});
});

test("rejects null", () => {
  expect(validateProduct(null)).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
