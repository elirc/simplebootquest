const PLANTS = [
  {id: 1, name: "Basil", waterEveryDays: 20, heightCm: 57, light: "bright", petSafe: true},
  {id: 2, name: "Bonsai", waterEveryDays: 21, heightCm: 60, light: "bright", petSafe: false},
  {id: 3, name: "Peace Lily", waterEveryDays: 15, heightCm: 34, light: "low", petSafe: false},
  {id: 4, name: "Aloe", waterEveryDays: 14, heightCm: 101, light: "low", petSafe: true},
  {id: 5, name: "Orchid", waterEveryDays: 19, heightCm: 97, light: "medium", petSafe: false},
  {id: 6, name: "Ivy", waterEveryDays: 20, heightCm: 125, light: "medium", petSafe: false},
  {id: 7, name: "Fern", waterEveryDays: 7, heightCm: 118, light: "low", petSafe: true},
  {id: 8, name: "Snake Plant", waterEveryDays: 12, heightCm: 31, light: "bright", petSafe: true}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(PLANTS);
  topPlantsByWaterEveryDays(PLANTS, 1);
  expect(JSON.stringify(PLANTS)).toBe(before);
});

test("with 1", () => {
  expect(topPlantsByWaterEveryDays(PLANTS, 1)).toEqual(["Bonsai"]);
});

test("with 3", () => {
  expect(topPlantsByWaterEveryDays(PLANTS, 3)).toEqual(["Bonsai","Basil","Ivy"]);
});

test("with 0", () => {
  expect(topPlantsByWaterEveryDays(PLANTS, 0)).toEqual([]);
});
