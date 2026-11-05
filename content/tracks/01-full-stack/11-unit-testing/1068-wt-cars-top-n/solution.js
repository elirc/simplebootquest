test('does not mutate the input', () => {
  const before = JSON.stringify(CARS);
  topCarsByKm(CARS, 1);
  expect(JSON.stringify(CARS)).toBe(before);
});

test("with 1", () => {
  expect(topCarsByKm(CARS, 1)).toEqual(["Model 3"]);
});

test("with 3", () => {
  expect(topCarsByKm(CARS, 3)).toEqual(["Model 3","Mustang","Fiesta"]);
});

test("with 0", () => {
  expect(topCarsByKm(CARS, 0)).toEqual([]);
});
