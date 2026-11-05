const PLANTS = [
  {id: 1, name: "Monstera", waterEveryDays: 7, heightCm: 132, light: "bright", petSafe: false},
  {id: 2, name: "Aloe", waterEveryDays: 7, heightCm: 156, light: "low", petSafe: false},
  {id: 3, name: "Orchid", waterEveryDays: 12, heightCm: 10, light: "bright", petSafe: true},
  {id: 4, name: "Cactus", waterEveryDays: 16, heightCm: 147, light: "medium", petSafe: true},
  {id: 5, name: "Basil", waterEveryDays: 18, heightCm: 92, light: "bright", petSafe: false},
  {id: 6, name: "Ivy", waterEveryDays: 10, heightCm: 10, light: "medium", petSafe: true},
  {id: 7, name: "Snake Plant", waterEveryDays: 14, heightCm: 21, light: "bright", petSafe: false},
  {id: 8, name: "Peace Lily", waterEveryDays: 14, heightCm: 143, light: "medium", petSafe: false}
];

test("an empty list", () => {
  expect(countPlantsPerLight([])).toEqual({});
});

test("all plants", () => {
  expect(countPlantsPerLight(PLANTS)).toEqual({"bright":4,"low":1,"medium":3});
});
