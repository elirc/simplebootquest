const PLANTS = [
  {id: 1, name: "Peace Lily", waterEveryDays: 5, heightCm: 145, light: "bright", petSafe: true},
  {id: 2, name: "Fern", waterEveryDays: 11, heightCm: 129, light: "medium", petSafe: false},
  {id: 3, name: "Orchid", waterEveryDays: 15, heightCm: 63, light: "low", petSafe: false},
  {id: 4, name: "Monstera", waterEveryDays: 10, heightCm: 91, light: "bright", petSafe: true},
  {id: 5, name: "Snake Plant", waterEveryDays: 3, heightCm: 21, light: "low", petSafe: false},
  {id: 6, name: "Lavender", waterEveryDays: 18, heightCm: 67, light: "bright", petSafe: false},
  {id: 7, name: "Basil", waterEveryDays: 9, heightCm: 14, light: "medium", petSafe: false},
  {id: 8, name: "Aloe", waterEveryDays: 14, heightCm: 36, light: "bright", petSafe: true}
];

test("an empty list", () => {
  expect(averageHeightCm([])).toEqual(null);
});

test("all plants", () => {
  expect(averageHeightCm(PLANTS)).toEqual(70.8);
});
