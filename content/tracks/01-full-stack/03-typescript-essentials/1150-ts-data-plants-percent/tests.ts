const PLANTS = [
  {id: 1, name: "Bonsai", waterEveryDays: 5, heightCm: 105, light: "low", petSafe: true},
  {id: 2, name: "Peace Lily", waterEveryDays: 20, heightCm: 52, light: "low", petSafe: false},
  {id: 3, name: "Snake Plant", waterEveryDays: 1, heightCm: 144, light: "medium", petSafe: false},
  {id: 4, name: "Aloe", waterEveryDays: 13, heightCm: 159, light: "low", petSafe: true},
  {id: 5, name: "Mint", waterEveryDays: 17, heightCm: 42, light: "low", petSafe: false},
  {id: 6, name: "Basil", waterEveryDays: 14, heightCm: 16, light: "low", petSafe: false},
  {id: 7, name: "Orchid", waterEveryDays: 6, heightCm: 109, light: "bright", petSafe: false},
  {id: 8, name: "Ivy", waterEveryDays: 12, heightCm: 36, light: "medium", petSafe: false}
];

test("an empty list", () => {
  expect(percentPetSafe([])).toEqual(0);
});

test("all plants", () => {
  expect(percentPetSafe(PLANTS)).toEqual(25);
});
