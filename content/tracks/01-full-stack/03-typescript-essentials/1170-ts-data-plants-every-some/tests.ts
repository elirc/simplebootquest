const PLANTS = [
  {id: 1, name: "Mint", waterEveryDays: 7, heightCm: 62, light: "low", petSafe: false},
  {id: 2, name: "Orchid", waterEveryDays: 6, heightCm: 103, light: "medium", petSafe: false},
  {id: 3, name: "Peace Lily", waterEveryDays: 17, heightCm: 32, light: "low", petSafe: false},
  {id: 4, name: "Aloe", waterEveryDays: 6, heightCm: 75, light: "low", petSafe: false},
  {id: 5, name: "Snake Plant", waterEveryDays: 6, heightCm: 67, light: "medium", petSafe: true},
  {id: 6, name: "Cactus", waterEveryDays: 6, heightCm: 23, light: "bright", petSafe: true},
  {id: 7, name: "Fern", waterEveryDays: 17, heightCm: 145, light: "medium", petSafe: true},
  {id: 8, name: "Monstera", waterEveryDays: 3, heightCm: 115, light: "low", petSafe: true}
];

test("with 6", () => {
  expect(allPlantsUnder(PLANTS, 6)).toEqual(false);
});

test("with 18", () => {
  expect(allPlantsUnder(PLANTS, 18)).toEqual(true);
});

test("with 17", () => {
  expect(allPlantsUnder(PLANTS, 17)).toEqual(false);
});
