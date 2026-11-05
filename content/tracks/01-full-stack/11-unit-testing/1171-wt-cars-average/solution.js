test("an empty list", () => {
  expect(averageKm([])).toEqual(null);
});

test("all cars", () => {
  expect(averageKm(CARS)).toEqual(75398);
});
