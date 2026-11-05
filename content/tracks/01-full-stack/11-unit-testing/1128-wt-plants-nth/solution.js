test("with 1", () => {
  expect(nthByHeightCm(PLANTS, 1)).toEqual("Mint");
});

test("with 2", () => {
  expect(nthByHeightCm(PLANTS, 2)).toEqual("Lavender");
});

test("with 5", () => {
  expect(nthByHeightCm(PLANTS, 5)).toEqual("Aloe");
});

test("with 0", () => {
  expect(nthByHeightCm(PLANTS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByHeightCm(PLANTS, 99)).toEqual(null);
});
