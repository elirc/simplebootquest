const PLANTS = [
  {id: 1, name: "Peace Lily", waterEveryDays: 20, heightCm: 84, light: "bright", petSafe: false},
  {id: 2, name: "Bonsai", waterEveryDays: 17, heightCm: 88, light: "bright", petSafe: true},
  {id: 3, name: "Cactus", waterEveryDays: 12, heightCm: 42, light: "medium", petSafe: false},
  {id: 4, name: "Aloe", waterEveryDays: 9, heightCm: 43, light: "low", petSafe: true},
  {id: 5, name: "Basil", waterEveryDays: 2, heightCm: 136, light: "low", petSafe: false},
  {id: 6, name: "Fern", waterEveryDays: 2, heightCm: 109, light: "medium", petSafe: false},
  {id: 7, name: "Ivy", waterEveryDays: 4, heightCm: 107, light: "low", petSafe: false},
  {id: 8, name: "Orchid", waterEveryDays: 20, heightCm: 137, light: "medium", petSafe: false}
];

test("an empty list", () => {
  expect(percentPetSafe([])).toEqual(0);
});

test("all plants", () => {
  expect(percentPetSafe(PLANTS)).toEqual(25);
});
