test("with 1", () => {
  expect(nthByNightlyPrice(HOTELS, 1)).toEqual("Maple House");
});

test("with 2", () => {
  expect(nthByNightlyPrice(HOTELS, 2)).toEqual("Station Hotel");
});

test("with 5", () => {
  expect(nthByNightlyPrice(HOTELS, 5)).toEqual("Pine Lodge");
});

test("with 0", () => {
  expect(nthByNightlyPrice(HOTELS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByNightlyPrice(HOTELS, 99)).toEqual(null);
});
