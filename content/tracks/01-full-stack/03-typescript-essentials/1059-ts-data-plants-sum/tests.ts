const PLANTS = [
  {id: 1, name: "Ivy", waterEveryDays: 4, heightCm: 37, light: "bright", petSafe: true},
  {id: 2, name: "Basil", waterEveryDays: 11, heightCm: 56, light: "low", petSafe: false},
  {id: 3, name: "Mint", waterEveryDays: 19, heightCm: 101, light: "bright", petSafe: false},
  {id: 4, name: "Snake Plant", waterEveryDays: 2, heightCm: 19, light: "bright", petSafe: false},
  {id: 5, name: "Fern", waterEveryDays: 8, heightCm: 115, light: "low", petSafe: false},
  {id: 6, name: "Lavender", waterEveryDays: 7, heightCm: 17, light: "low", petSafe: true},
  {id: 7, name: "Orchid", waterEveryDays: 12, heightCm: 108, light: "bright", petSafe: false},
  {id: 8, name: "Cactus", waterEveryDays: 10, heightCm: 98, light: "bright", petSafe: true}
];

test("an empty list", () => {
  expect(totalWaterEveryDays([])).toEqual(0);
});

test("all plants", () => {
  expect(totalWaterEveryDays(PLANTS)).toEqual(73);
});
