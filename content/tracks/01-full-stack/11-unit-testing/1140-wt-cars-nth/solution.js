test("with 1", () => {
  expect(nthByKm(CARS, 1)).toEqual("Prius");
});

test("with 2", () => {
  expect(nthByKm(CARS, 2)).toEqual("Leaf");
});

test("with 5", () => {
  expect(nthByKm(CARS, 5)).toEqual("Mazda3");
});

test("with 0", () => {
  expect(nthByKm(CARS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByKm(CARS, 99)).toEqual(null);
});
