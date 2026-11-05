const PLANTS = [
  {id: 1, name: "Bonsai", waterEveryDays: 12, heightCm: 82, light: "medium", petSafe: true},
  {id: 2, name: "Peace Lily", waterEveryDays: 3, heightCm: 8, light: "low", petSafe: false},
  {id: 3, name: "Ivy", waterEveryDays: 11, heightCm: 33, light: "bright", petSafe: false},
  {id: 4, name: "Aloe", waterEveryDays: 10, heightCm: 65, light: "bright", petSafe: false},
  {id: 5, name: "Snake Plant", waterEveryDays: 8, heightCm: 98, light: "bright", petSafe: false},
  {id: 6, name: "Monstera", waterEveryDays: 12, heightCm: 45, light: "low", petSafe: true},
  {id: 7, name: "Mint", waterEveryDays: 18, heightCm: 61, light: "medium", petSafe: false},
  {id: 8, name: "Orchid", waterEveryDays: 5, heightCm: 88, light: "medium", petSafe: false}
];

test("with 45", () => {
  expect(plantsAbove(PLANTS, 45)).toEqual(["Bonsai","Aloe","Snake Plant","Mint","Orchid"]);
});

test("with 65", () => {
  expect(plantsAbove(PLANTS, 65)).toEqual(["Bonsai","Snake Plant","Orchid"]);
});

test("with 999999", () => {
  expect(plantsAbove(PLANTS, 999999)).toEqual([]);
});
