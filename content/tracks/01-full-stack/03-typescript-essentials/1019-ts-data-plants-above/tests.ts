const PLANTS = [
  {id: 1, name: "Lavender", waterEveryDays: 13, heightCm: 13, light: "bright", petSafe: false},
  {id: 2, name: "Snake Plant", waterEveryDays: 7, heightCm: 145, light: "bright", petSafe: true},
  {id: 3, name: "Monstera", waterEveryDays: 8, heightCm: 12, light: "medium", petSafe: true},
  {id: 4, name: "Cactus", waterEveryDays: 14, heightCm: 102, light: "medium", petSafe: true},
  {id: 5, name: "Aloe", waterEveryDays: 9, heightCm: 73, light: "bright", petSafe: true},
  {id: 6, name: "Basil", waterEveryDays: 11, heightCm: 144, light: "low", petSafe: true},
  {id: 7, name: "Orchid", waterEveryDays: 7, heightCm: 104, light: "low", petSafe: true},
  {id: 8, name: "Ivy", waterEveryDays: 8, heightCm: 153, light: "medium", petSafe: true}
];

test("with 73", () => {
  expect(plantsAbove(PLANTS, 73)).toEqual(["Snake Plant","Cactus","Basil","Orchid","Ivy"]);
});

test("with 104", () => {
  expect(plantsAbove(PLANTS, 104)).toEqual(["Snake Plant","Basil","Ivy"]);
});

test("with 999999", () => {
  expect(plantsAbove(PLANTS, 999999)).toEqual([]);
});
