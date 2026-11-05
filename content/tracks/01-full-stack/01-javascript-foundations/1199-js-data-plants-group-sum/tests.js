const PLANTS = [
  {id: 1, name: "Bonsai", waterEveryDays: 20, heightCm: 45, light: "medium", petSafe: true},
  {id: 2, name: "Orchid", waterEveryDays: 17, heightCm: 87, light: "bright", petSafe: false},
  {id: 3, name: "Basil", waterEveryDays: 3, heightCm: 143, light: "low", petSafe: true},
  {id: 4, name: "Ivy", waterEveryDays: 4, heightCm: 130, light: "medium", petSafe: false},
  {id: 5, name: "Snake Plant", waterEveryDays: 10, heightCm: 34, light: "low", petSafe: false},
  {id: 6, name: "Lavender", waterEveryDays: 4, heightCm: 59, light: "medium", petSafe: false},
  {id: 7, name: "Mint", waterEveryDays: 18, heightCm: 44, light: "bright", petSafe: true},
  {id: 8, name: "Monstera", waterEveryDays: 5, heightCm: 13, light: "low", petSafe: false}
];

test("an empty list", () => {
  expect(heightCmPerLight([])).toEqual({});
});

test("all plants", () => {
  expect(heightCmPerLight(PLANTS)).toEqual({"medium":234,"bright":131,"low":190});
});
