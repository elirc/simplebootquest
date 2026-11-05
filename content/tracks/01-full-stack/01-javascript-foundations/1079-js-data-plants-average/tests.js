const PLANTS = [
  {id: 1, name: "Mint", waterEveryDays: 19, heightCm: 114, light: "bright", petSafe: true},
  {id: 2, name: "Fern", waterEveryDays: 3, heightCm: 159, light: "medium", petSafe: true},
  {id: 3, name: "Aloe", waterEveryDays: 19, heightCm: 106, light: "bright", petSafe: false},
  {id: 4, name: "Lavender", waterEveryDays: 8, heightCm: 24, light: "low", petSafe: true},
  {id: 5, name: "Bonsai", waterEveryDays: 10, heightCm: 22, light: "medium", petSafe: true},
  {id: 6, name: "Snake Plant", waterEveryDays: 13, heightCm: 100, light: "bright", petSafe: false},
  {id: 7, name: "Ivy", waterEveryDays: 4, heightCm: 31, light: "medium", petSafe: true},
  {id: 8, name: "Cactus", waterEveryDays: 14, heightCm: 70, light: "medium", petSafe: false}
];

test("an empty list", () => {
  expect(averageHeightCm([])).toEqual(null);
});

test("all plants", () => {
  expect(averageHeightCm(PLANTS)).toEqual(78.3);
});
