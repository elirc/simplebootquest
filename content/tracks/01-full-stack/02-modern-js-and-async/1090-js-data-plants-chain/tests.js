const PLANTS = [
  {id: 1, name: "Bonsai", waterEveryDays: 15, heightCm: 73, light: "bright", petSafe: false},
  {id: 2, name: "Monstera", waterEveryDays: 5, heightCm: 98, light: "bright", petSafe: true},
  {id: 3, name: "Lavender", waterEveryDays: 10, heightCm: 12, light: "bright", petSafe: false},
  {id: 4, name: "Basil", waterEveryDays: 18, heightCm: 139, light: "low", petSafe: true},
  {id: 5, name: "Mint", waterEveryDays: 18, heightCm: 82, light: "bright", petSafe: true},
  {id: 6, name: "Peace Lily", waterEveryDays: 14, heightCm: 37, light: "medium", petSafe: true},
  {id: 7, name: "Aloe", waterEveryDays: 16, heightCm: 42, light: "medium", petSafe: false},
  {id: 8, name: "Snake Plant", waterEveryDays: 18, heightCm: 23, light: "bright", petSafe: false}
];

test("with \"low\"", () => {
  expect(plantsInLightRanked(PLANTS, "low")).toEqual(["Basil"]);
});

test("with \"medium\"", () => {
  expect(plantsInLightRanked(PLANTS, "medium")).toEqual(["Aloe","Peace Lily"]);
});

test("with \"bright\"", () => {
  expect(plantsInLightRanked(PLANTS, "bright")).toEqual(["Monstera","Mint","Bonsai","Snake Plant","Lavender"]);
});
