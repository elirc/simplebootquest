test("accepts a valid body (trimmed)", () => {
  expect(validateSong({"title":"  Static ","seconds":377,"plays":3526,"artist":"The Pines","mood":"dark"})).toEqual({"ok":true,"data":{"title":"Static","seconds":377,"plays":3526,"artist":"The Pines","mood":"dark"}});
});

test("requires a name", () => {
  expect(validateSong({"title":"   ","seconds":377,"plays":3526,"artist":"The Pines","mood":"dark"})).toEqual({"ok":false,"errors":[{"field":"title","message":"must be 1-40 characters"}]});
});

test("checks number ranges", () => {
  expect(validateSong({"title":"  Static ","seconds":119,"plays":3526,"artist":"The Pines","mood":"dark"})).toEqual({"ok":false,"errors":[{"field":"seconds","message":"must be a number from 120 to 420"}]});
});

test("rejects wrong types", () => {
  expect(validateSong({"title":"  Static ","seconds":"120","plays":3526,"artist":"The Pines","mood":"dark"})).toEqual({"ok":false,"errors":[{"field":"seconds","message":"must be a number from 120 to 420"}]});
});

test("reports every problem at once", () => {
  expect(validateSong({"title":"","artist":"nope"})).toEqual({"ok":false,"errors":[{"field":"title","message":"must be 1-40 characters"},{"field":"seconds","message":"must be a number from 120 to 420"},{"field":"plays","message":"must be a number from 10 to 9800"},{"field":"artist","message":"must be one of Nova, The Pines, Kairo"},{"field":"mood","message":"must be one of calm, happy, dark"}]});
});

test("strips unknown fields like ownerId", () => {
  expect(validateSong({"title":"  Static ","seconds":377,"plays":3526,"artist":"The Pines","mood":"dark","ownerId":99})).toEqual({"ok":true,"data":{"title":"Static","seconds":377,"plays":3526,"artist":"The Pines","mood":"dark"}});
});

test("rejects null", () => {
  expect(validateSong(null)).toEqual({"ok":false,"errors":[{"field":"_","message":"must be an object"}]});
});
