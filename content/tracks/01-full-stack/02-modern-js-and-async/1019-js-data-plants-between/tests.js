const PLANTS = [
  {id: 1, name: "Peace Lily", waterEveryDays: 7, heightCm: 93, light: "medium", petSafe: true},
  {id: 2, name: "Snake Plant", waterEveryDays: 8, heightCm: 62, light: "bright", petSafe: true},
  {id: 3, name: "Bonsai", waterEveryDays: 13, heightCm: 13, light: "medium", petSafe: false},
  {id: 4, name: "Basil", waterEveryDays: 17, heightCm: 79, light: "bright", petSafe: false},
  {id: 5, name: "Ivy", waterEveryDays: 20, heightCm: 111, light: "low", petSafe: false},
  {id: 6, name: "Monstera", waterEveryDays: 15, heightCm: 28, light: "medium", petSafe: true},
  {id: 7, name: "Orchid", waterEveryDays: 6, heightCm: 93, light: "bright", petSafe: false},
  {id: 8, name: "Mint", waterEveryDays: 4, heightCm: 54, light: "bright", petSafe: false}
];

test("with 54, 79", () => {
  expect(plantsInRange(PLANTS, 54, 79)).toEqual(["Snake Plant","Basil","Mint"]);
});

test("with 79, 93", () => {
  expect(plantsInRange(PLANTS, 79, 93)).toEqual(["Peace Lily","Basil","Orchid"]);
});

test("with 54, 54", () => {
  expect(plantsInRange(PLANTS, 54, 54)).toEqual(["Mint"]);
});
