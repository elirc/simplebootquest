test('does not mutate the input', () => {
  const before = JSON.stringify(PLANTS);
  topPlantsByWaterEveryDays(PLANTS, 1);
  expect(JSON.stringify(PLANTS)).toBe(before);
});

test("with 1", () => {
  expect(topPlantsByWaterEveryDays(PLANTS, 1)).toEqual(["Peace Lily"]);
});

test("with 3", () => {
  expect(topPlantsByWaterEveryDays(PLANTS, 3)).toEqual(["Peace Lily","Orchid","Mint"]);
});

test("with 0", () => {
  expect(topPlantsByWaterEveryDays(PLANTS, 0)).toEqual([]);
});
