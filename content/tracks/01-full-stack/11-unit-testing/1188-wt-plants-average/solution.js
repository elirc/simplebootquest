test("an empty list", () => {
  expect(averageWaterEveryDays([])).toEqual(null);
});

test("all plants", () => {
  expect(averageWaterEveryDays(PLANTS)).toEqual(14.4);
});
