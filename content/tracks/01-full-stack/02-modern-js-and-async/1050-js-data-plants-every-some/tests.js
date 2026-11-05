const PLANTS = [
  {id: 1, name: "Lavender", waterEveryDays: 4, heightCm: 17, light: "medium", petSafe: true},
  {id: 2, name: "Snake Plant", waterEveryDays: 18, heightCm: 159, light: "medium", petSafe: true},
  {id: 3, name: "Fern", waterEveryDays: 15, heightCm: 146, light: "medium", petSafe: false},
  {id: 4, name: "Mint", waterEveryDays: 16, heightCm: 114, light: "medium", petSafe: false},
  {id: 5, name: "Monstera", waterEveryDays: 5, heightCm: 86, light: "medium", petSafe: false},
  {id: 6, name: "Aloe", waterEveryDays: 12, heightCm: 99, light: "bright", petSafe: true},
  {id: 7, name: "Orchid", waterEveryDays: 14, heightCm: 142, light: "bright", petSafe: false},
  {id: 8, name: "Bonsai", waterEveryDays: 4, heightCm: 90, light: "bright", petSafe: true}
];

test("with 5", () => {
  expect(allPlantsUnder(PLANTS, 5)).toEqual(false);
});

test("with 19", () => {
  expect(allPlantsUnder(PLANTS, 19)).toEqual(true);
});

test("with 18", () => {
  expect(allPlantsUnder(PLANTS, 18)).toEqual(false);
});
