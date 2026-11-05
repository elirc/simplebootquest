const PLANTS = [
  {id: 1, name: "Fern", waterEveryDays: 11, heightCm: 152, light: "medium", petSafe: false},
  {id: 2, name: "Aloe", waterEveryDays: 14, heightCm: 108, light: "bright", petSafe: false},
  {id: 3, name: "Orchid", waterEveryDays: 12, heightCm: 139, light: "medium", petSafe: true},
  {id: 4, name: "Cactus", waterEveryDays: 6, heightCm: 100, light: "low", petSafe: true},
  {id: 5, name: "Peace Lily", waterEveryDays: 12, heightCm: 138, light: "medium", petSafe: false},
  {id: 6, name: "Ivy", waterEveryDays: 17, heightCm: 152, light: "medium", petSafe: false},
  {id: 7, name: "Basil", waterEveryDays: 10, heightCm: 90, light: "medium", petSafe: false},
  {id: 8, name: "Monstera", waterEveryDays: 8, heightCm: 61, light: "medium", petSafe: true}
];

test("an empty list", () => {
  expect(lowestHeightCm([])).toEqual(null);
});

test("all plants", () => {
  expect(lowestHeightCm(PLANTS)).toEqual("Monstera");
});
