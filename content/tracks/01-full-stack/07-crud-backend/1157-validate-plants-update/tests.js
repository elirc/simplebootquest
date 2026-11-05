test("an empty update is fine", () => {
  expect(validatePlantUpdate({})).toEqual({"ok":true,"data":{}});
});

test("updates one field", () => {
  expect(validatePlantUpdate({"waterEveryDays":1})).toEqual({"ok":true,"data":{"waterEveryDays":1}});
});

test("still validates provided fields", () => {
  expect(validatePlantUpdate({"waterEveryDays":22})).toEqual({"ok":false,"errors":[{"field":"waterEveryDays","message":"must be a number from 1 to 21"}]});
});

test("rejects unknown categories", () => {
  expect(validatePlantUpdate({"light":"nope"})).toEqual({"ok":false,"errors":[{"field":"light","message":"must be one of low, medium, bright"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validatePlantUpdate({"name":"New","ownerId":99,"role":"admin"})).toEqual({"ok":true,"data":{"name":"New"}});
});

test("rejects non-objects", () => {
  expect(validatePlantUpdate([1,2])).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
