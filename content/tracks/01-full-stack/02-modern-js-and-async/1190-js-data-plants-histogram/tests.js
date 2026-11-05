const PLANTS = [
  {id: 1, name: "Ivy", waterEveryDays: 3, heightCm: 130, light: "bright", petSafe: false},
  {id: 2, name: "Fern", waterEveryDays: 2, heightCm: 157, light: "bright", petSafe: false},
  {id: 3, name: "Snake Plant", waterEveryDays: 2, heightCm: 90, light: "low", petSafe: true},
  {id: 4, name: "Cactus", waterEveryDays: 9, heightCm: 76, light: "medium", petSafe: true},
  {id: 5, name: "Peace Lily", waterEveryDays: 8, heightCm: 50, light: "medium", petSafe: false},
  {id: 6, name: "Aloe", waterEveryDays: 8, heightCm: 62, light: "bright", petSafe: false},
  {id: 7, name: "Monstera", waterEveryDays: 15, heightCm: 33, light: "medium", petSafe: true},
  {id: 8, name: "Orchid", waterEveryDays: 6, heightCm: 100, light: "low", petSafe: false}
];

test("with 5", () => {
  expect(waterEveryDaysHistogram(PLANTS, 5)).toEqual({"0":3,"5":4,"15":1});
});

test("with 10", () => {
  expect(waterEveryDaysHistogram(PLANTS, 10)).toEqual({"0":7,"10":1});
});
