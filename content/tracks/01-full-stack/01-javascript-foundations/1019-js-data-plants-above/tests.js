const PLANTS = [
  {id: 1, name: "Mint", waterEveryDays: 16, heightCm: 63, light: "low", petSafe: true},
  {id: 2, name: "Fern", waterEveryDays: 18, heightCm: 61, light: "bright", petSafe: true},
  {id: 3, name: "Peace Lily", waterEveryDays: 5, heightCm: 17, light: "bright", petSafe: false},
  {id: 4, name: "Ivy", waterEveryDays: 15, heightCm: 16, light: "low", petSafe: true},
  {id: 5, name: "Bonsai", waterEveryDays: 4, heightCm: 44, light: "low", petSafe: false},
  {id: 6, name: "Lavender", waterEveryDays: 7, heightCm: 160, light: "bright", petSafe: false},
  {id: 7, name: "Orchid", waterEveryDays: 13, heightCm: 65, light: "bright", petSafe: true},
  {id: 8, name: "Cactus", waterEveryDays: 8, heightCm: 44, light: "low", petSafe: false}
];

test("with 44", () => {
  expect(plantsAbove(PLANTS, 44)).toEqual(["Mint","Fern","Lavender","Orchid"]);
});

test("with 61", () => {
  expect(plantsAbove(PLANTS, 61)).toEqual(["Mint","Lavender","Orchid"]);
});

test("with 999999", () => {
  expect(plantsAbove(PLANTS, 999999)).toEqual([]);
});
