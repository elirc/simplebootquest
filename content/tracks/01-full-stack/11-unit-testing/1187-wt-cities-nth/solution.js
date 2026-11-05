test("with 1", () => {
  expect(nthByAvgTemp(CITIES, 1)).toEqual("Seoul");
});

test("with 2", () => {
  expect(nthByAvgTemp(CITIES, 2)).toEqual("Hanoi");
});

test("with 5", () => {
  expect(nthByAvgTemp(CITIES, 5)).toEqual("Perth");
});

test("with 0", () => {
  expect(nthByAvgTemp(CITIES, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByAvgTemp(CITIES, 99)).toEqual(null);
});
