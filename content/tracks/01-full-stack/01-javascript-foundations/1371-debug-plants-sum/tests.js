const PLANTS = [
  {id: 1, name: "Basil", waterEveryDays: 5, heightCm: 27, light: "medium", petSafe: true},
  {id: 2, name: "Fern", waterEveryDays: 10, heightCm: 33, light: "medium", petSafe: false},
  {id: 3, name: "Snake Plant", waterEveryDays: 16, heightCm: 19, light: "medium", petSafe: true},
  {id: 4, name: "Peace Lily", waterEveryDays: 12, heightCm: 135, light: "medium", petSafe: false},
  {id: 5, name: "Ivy", waterEveryDays: 19, heightCm: 28, light: "bright", petSafe: true},
  {id: 6, name: "Cactus", waterEveryDays: 16, heightCm: 131, light: "low", petSafe: false},
  {id: 7, name: "Bonsai", waterEveryDays: 6, heightCm: 36, light: "medium", petSafe: true},
  {id: 8, name: "Monstera", waterEveryDays: 14, heightCm: 27, light: "low", petSafe: true}
];

test("an empty list", () => {
  expect(totalWaterEveryDays([])).toEqual(0);
});

test("all plants", () => {
  expect(totalWaterEveryDays(PLANTS)).toEqual(98);
});
