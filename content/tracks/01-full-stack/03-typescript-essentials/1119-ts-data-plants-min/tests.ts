const PLANTS = [
  {id: 1, name: "Mint", waterEveryDays: 2, heightCm: 99, light: "bright", petSafe: true},
  {id: 2, name: "Ivy", waterEveryDays: 21, heightCm: 27, light: "medium", petSafe: false},
  {id: 3, name: "Peace Lily", waterEveryDays: 19, heightCm: 46, light: "medium", petSafe: true},
  {id: 4, name: "Snake Plant", waterEveryDays: 10, heightCm: 47, light: "low", petSafe: false},
  {id: 5, name: "Fern", waterEveryDays: 18, heightCm: 117, light: "bright", petSafe: true},
  {id: 6, name: "Aloe", waterEveryDays: 1, heightCm: 135, light: "low", petSafe: true},
  {id: 7, name: "Basil", waterEveryDays: 17, heightCm: 132, light: "medium", petSafe: false},
  {id: 8, name: "Lavender", waterEveryDays: 12, heightCm: 109, light: "bright", petSafe: false}
];

test("an empty list", () => {
  expect(lowestWaterEveryDays([])).toEqual(null);
});

test("all plants", () => {
  expect(lowestWaterEveryDays(PLANTS)).toEqual("Aloe");
});
