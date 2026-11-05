const PLANTS = [
  {id: 1, name: "Ivy", waterEveryDays: 7, heightCm: 32, light: "low", petSafe: true},
  {id: 2, name: "Aloe", waterEveryDays: 20, heightCm: 73, light: "bright", petSafe: false},
  {id: 3, name: "Monstera", waterEveryDays: 20, heightCm: 127, light: "medium", petSafe: false},
  {id: 4, name: "Basil", waterEveryDays: 15, heightCm: 31, light: "bright", petSafe: false},
  {id: 5, name: "Bonsai", waterEveryDays: 1, heightCm: 109, light: "bright", petSafe: false},
  {id: 6, name: "Mint", waterEveryDays: 11, heightCm: 112, light: "low", petSafe: false},
  {id: 7, name: "Cactus", waterEveryDays: 6, heightCm: 23, light: "low", petSafe: false},
  {id: 8, name: "Fern", waterEveryDays: 17, heightCm: 149, light: "low", petSafe: true}
];

test("an empty list", () => {
  expect(waterEveryDaysPerLight([])).toEqual({});
});

test("all plants", () => {
  expect(waterEveryDaysPerLight(PLANTS)).toEqual({"low":41,"bright":36,"medium":20});
});
