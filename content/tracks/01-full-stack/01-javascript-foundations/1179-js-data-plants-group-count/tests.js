const PLANTS = [
  {id: 1, name: "Mint", waterEveryDays: 6, heightCm: 107, light: "medium", petSafe: false},
  {id: 2, name: "Snake Plant", waterEveryDays: 1, heightCm: 45, light: "medium", petSafe: true},
  {id: 3, name: "Orchid", waterEveryDays: 3, heightCm: 93, light: "low", petSafe: true},
  {id: 4, name: "Bonsai", waterEveryDays: 7, heightCm: 82, light: "low", petSafe: true},
  {id: 5, name: "Fern", waterEveryDays: 7, heightCm: 68, light: "medium", petSafe: true},
  {id: 6, name: "Lavender", waterEveryDays: 14, heightCm: 52, light: "bright", petSafe: true},
  {id: 7, name: "Basil", waterEveryDays: 21, heightCm: 155, light: "low", petSafe: false},
  {id: 8, name: "Peace Lily", waterEveryDays: 10, heightCm: 149, light: "low", petSafe: true}
];

test("an empty list", () => {
  expect(countPlantsPerLight([])).toEqual({});
});

test("all plants", () => {
  expect(countPlantsPerLight(PLANTS)).toEqual({"medium":3,"low":4,"bright":1});
});
