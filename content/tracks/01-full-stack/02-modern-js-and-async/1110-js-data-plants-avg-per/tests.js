const PLANTS = [
  {id: 1, name: "Monstera", waterEveryDays: 5, heightCm: 63, light: "low", petSafe: true},
  {id: 2, name: "Peace Lily", waterEveryDays: 9, heightCm: 55, light: "medium", petSafe: false},
  {id: 3, name: "Mint", waterEveryDays: 2, heightCm: 60, light: "low", petSafe: true},
  {id: 4, name: "Fern", waterEveryDays: 14, heightCm: 119, light: "bright", petSafe: true},
  {id: 5, name: "Lavender", waterEveryDays: 4, heightCm: 42, light: "low", petSafe: true},
  {id: 6, name: "Aloe", waterEveryDays: 18, heightCm: 104, light: "medium", petSafe: true},
  {id: 7, name: "Orchid", waterEveryDays: 19, heightCm: 97, light: "medium", petSafe: true},
  {id: 8, name: "Ivy", waterEveryDays: 2, heightCm: 48, light: "bright", petSafe: true}
];

test("an empty list", () => {
  expect(averageWaterEveryDaysPerLight([])).toEqual({});
});

test("all plants", () => {
  expect(averageWaterEveryDaysPerLight(PLANTS)).toEqual({"low":4,"medium":15,"bright":8});
});
