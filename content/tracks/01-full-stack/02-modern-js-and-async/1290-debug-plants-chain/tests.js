const PLANTS = [
  {id: 1, name: "Aloe", waterEveryDays: 8, heightCm: 75, light: "bright", petSafe: false},
  {id: 2, name: "Lavender", waterEveryDays: 17, heightCm: 87, light: "medium", petSafe: true},
  {id: 3, name: "Snake Plant", waterEveryDays: 3, heightCm: 26, light: "low", petSafe: true},
  {id: 4, name: "Cactus", waterEveryDays: 9, heightCm: 12, light: "low", petSafe: false},
  {id: 5, name: "Mint", waterEveryDays: 17, heightCm: 125, light: "medium", petSafe: false},
  {id: 6, name: "Orchid", waterEveryDays: 15, heightCm: 134, light: "medium", petSafe: true},
  {id: 7, name: "Fern", waterEveryDays: 4, heightCm: 22, light: "medium", petSafe: false},
  {id: 8, name: "Basil", waterEveryDays: 8, heightCm: 64, light: "medium", petSafe: false}
];

test("with \"low\"", () => {
  expect(plantsInLightRanked(PLANTS, "low")).toEqual(["Cactus","Snake Plant"]);
});

test("with \"medium\"", () => {
  expect(plantsInLightRanked(PLANTS, "medium")).toEqual(["Lavender","Mint","Orchid","Basil","Fern"]);
});

test("with \"bright\"", () => {
  expect(plantsInLightRanked(PLANTS, "bright")).toEqual(["Aloe"]);
});
