const BEFORE = [
  {id: 1, name: "Snake Plant", waterEveryDays: 10, heightCm: 121, light: "bright", petSafe: false},
  {id: 2, name: "Orchid", waterEveryDays: 21, heightCm: 142, light: "low", petSafe: false},
  {id: 3, name: "Aloe", waterEveryDays: 13, heightCm: 22, light: "low", petSafe: true},
  {id: 4, name: "Bonsai", waterEveryDays: 20, heightCm: 63, light: "bright", petSafe: false},
  {id: 5, name: "Cactus", waterEveryDays: 7, heightCm: 76, light: "medium", petSafe: false},
  {id: 6, name: "Lavender", waterEveryDays: 15, heightCm: 139, light: "bright", petSafe: true},
  {id: 7, name: "Ivy", waterEveryDays: 18, heightCm: 109, light: "medium", petSafe: true},
  {id: 8, name: "Peace Lily", waterEveryDays: 15, heightCm: 63, light: "medium", petSafe: true}
];
const AFTER = [
  {id: 1, name: "Snake Plant", waterEveryDays: 10, heightCm: 121, light: "bright", petSafe: false},
  {id: 2, name: "Orchid", waterEveryDays: 28, heightCm: 142, light: "low", petSafe: false},
  {id: 3, name: "Aloe", waterEveryDays: 13, heightCm: 22, light: "low", petSafe: true},
  {id: 4, name: "Bonsai", waterEveryDays: 20, heightCm: 63, light: "bright", petSafe: false},
  {id: 5, name: "Cactus", waterEveryDays: 14, heightCm: 76, light: "medium", petSafe: false},
  {id: 6, name: "Lavender", waterEveryDays: 15, heightCm: 139, light: "bright", petSafe: true},
  {id: 7, name: "Ivy", waterEveryDays: 18, heightCm: 109, light: "medium", petSafe: true},
  {id: 8, name: "Peace Lily", waterEveryDays: 22, heightCm: 63, light: "medium", petSafe: true}
];

test("finds changed ids", () => {
  expect(waterEveryDaysChanges(BEFORE, AFTER)).toEqual([2,5,8]);
});

test("no changes", () => {
  expect(waterEveryDaysChanges(BEFORE, BEFORE)).toEqual([]);
});
