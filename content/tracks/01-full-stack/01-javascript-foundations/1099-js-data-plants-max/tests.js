const PLANTS = [
  {id: 1, name: "Basil", waterEveryDays: 19, heightCm: 102, light: "low", petSafe: true},
  {id: 2, name: "Mint", waterEveryDays: 3, heightCm: 37, light: "bright", petSafe: true},
  {id: 3, name: "Fern", waterEveryDays: 13, heightCm: 48, light: "low", petSafe: true},
  {id: 4, name: "Snake Plant", waterEveryDays: 13, heightCm: 44, light: "low", petSafe: false},
  {id: 5, name: "Orchid", waterEveryDays: 20, heightCm: 102, light: "medium", petSafe: false},
  {id: 6, name: "Ivy", waterEveryDays: 2, heightCm: 10, light: "low", petSafe: false},
  {id: 7, name: "Monstera", waterEveryDays: 13, heightCm: 84, light: "bright", petSafe: true},
  {id: 8, name: "Lavender", waterEveryDays: 2, heightCm: 134, light: "low", petSafe: true}
];

test("an empty list", () => {
  expect(highestWaterEveryDays([])).toEqual(null);
});

test("all plants", () => {
  expect(highestWaterEveryDays(PLANTS)).toEqual("Orchid");
});
