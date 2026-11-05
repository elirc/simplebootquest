const PLANTS = [
  {id: 1, name: "Basil", waterEveryDays: 14, heightCm: 137, light: "low", petSafe: true},
  {id: 2, name: "Mint", waterEveryDays: 15, heightCm: 53, light: "medium", petSafe: true},
  {id: 3, name: "Orchid", waterEveryDays: 10, heightCm: 95, light: "medium", petSafe: true},
  {id: 4, name: "Lavender", waterEveryDays: 9, heightCm: 110, light: "low", petSafe: true},
  {id: 5, name: "Fern", waterEveryDays: 1, heightCm: 134, light: "bright", petSafe: false},
  {id: 6, name: "Monstera", waterEveryDays: 5, heightCm: 84, light: "low", petSafe: false},
  {id: 7, name: "Snake Plant", waterEveryDays: 4, heightCm: 155, light: "low", petSafe: false},
  {id: 8, name: "Peace Lily", waterEveryDays: 8, heightCm: 112, light: "medium", petSafe: true}
];

test("an empty list", () => {
  expect(averageHeightCmPerLight([])).toEqual({});
});

test("all plants", () => {
  expect(averageHeightCmPerLight(PLANTS)).toEqual({"low":122,"medium":87,"bright":134});
});
