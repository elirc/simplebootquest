const PLANTS = [
  {id: 1, name: "Basil", waterEveryDays: 8, heightCm: 86, light: "medium", petSafe: false},
  {id: 2, name: "Ivy", waterEveryDays: 4, heightCm: 103, light: "low", petSafe: true},
  {id: 3, name: "Monstera", waterEveryDays: 15, heightCm: 104, light: "medium", petSafe: true},
  {id: 4, name: "Aloe", waterEveryDays: 6, heightCm: 114, light: "bright", petSafe: true},
  {id: 5, name: "Fern", waterEveryDays: 15, heightCm: 127, light: "low", petSafe: true},
  {id: 6, name: "Orchid", waterEveryDays: 14, heightCm: 68, light: "medium", petSafe: false},
  {id: 7, name: "Mint", waterEveryDays: 11, heightCm: 47, light: "low", petSafe: true},
  {id: 8, name: "Bonsai", waterEveryDays: 4, heightCm: 29, light: "medium", petSafe: true}
];

test("with 68, 103", () => {
  expect(plantsInRange(PLANTS, 68, 103)).toEqual(["Basil","Ivy","Orchid"]);
});

test("with 103, 104", () => {
  expect(plantsInRange(PLANTS, 103, 104)).toEqual(["Ivy","Monstera"]);
});

test("with 68, 68", () => {
  expect(plantsInRange(PLANTS, 68, 68)).toEqual(["Orchid"]);
});
