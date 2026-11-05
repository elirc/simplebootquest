const PLANTS = [
  {id: 1, name: "Fern", waterEveryDays: 11, heightCm: 20, light: "low", petSafe: false},
  {id: 2, name: "Orchid", waterEveryDays: 5, heightCm: 109, light: "bright", petSafe: true},
  {id: 3, name: "Peace Lily", waterEveryDays: 9, heightCm: 6, light: "medium", petSafe: false},
  {id: 4, name: "Snake Plant", waterEveryDays: 18, heightCm: 69, light: "medium", petSafe: true},
  {id: 5, name: "Mint", waterEveryDays: 2, heightCm: 76, light: "bright", petSafe: false},
  {id: 6, name: "Bonsai", waterEveryDays: 3, heightCm: 7, light: "low", petSafe: false},
  {id: 7, name: "Cactus", waterEveryDays: 2, heightCm: 62, light: "low", petSafe: true},
  {id: 8, name: "Ivy", waterEveryDays: 13, heightCm: 152, light: "bright", petSafe: true}
];

test("with \"Cactus\"", () => {
  expect(waterEveryDaysOf(PLANTS, "Cactus")).toEqual(2);
});

test("with \"Nope\"", () => {
  expect(waterEveryDaysOf(PLANTS, "Nope")).toEqual(null);
});
