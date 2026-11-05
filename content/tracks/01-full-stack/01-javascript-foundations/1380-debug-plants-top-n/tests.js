const PLANTS = [
  {id: 1, name: "Basil", waterEveryDays: 8, heightCm: 22, light: "low", petSafe: true},
  {id: 2, name: "Aloe", waterEveryDays: 19, heightCm: 131, light: "bright", petSafe: true},
  {id: 3, name: "Cactus", waterEveryDays: 15, heightCm: 30, light: "medium", petSafe: false},
  {id: 4, name: "Peace Lily", waterEveryDays: 3, heightCm: 109, light: "low", petSafe: true},
  {id: 5, name: "Mint", waterEveryDays: 4, heightCm: 151, light: "bright", petSafe: false},
  {id: 6, name: "Monstera", waterEveryDays: 15, heightCm: 40, light: "bright", petSafe: true},
  {id: 7, name: "Lavender", waterEveryDays: 15, heightCm: 118, light: "medium", petSafe: false},
  {id: 8, name: "Snake Plant", waterEveryDays: 13, heightCm: 26, light: "low", petSafe: true}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(PLANTS);
  topPlantsByWaterEveryDays(PLANTS, 1);
  expect(JSON.stringify(PLANTS)).toBe(before);
});

test("with 1", () => {
  expect(topPlantsByWaterEveryDays(PLANTS, 1)).toEqual(["Aloe"]);
});

test("with 3", () => {
  expect(topPlantsByWaterEveryDays(PLANTS, 3)).toEqual(["Aloe","Cactus","Monstera"]);
});

test("with 0", () => {
  expect(topPlantsByWaterEveryDays(PLANTS, 0)).toEqual([]);
});
