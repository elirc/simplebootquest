const PLANTS = [
  {id: 1, name: "Snake Plant", waterEveryDays: 9, heightCm: 100, light: "medium", petSafe: true},
  {id: 2, name: "Ivy", waterEveryDays: 8, heightCm: 25, light: "bright", petSafe: true},
  {id: 3, name: "Cactus", waterEveryDays: 7, heightCm: 146, light: "bright", petSafe: true},
  {id: 4, name: "Peace Lily", waterEveryDays: 12, heightCm: 8, light: "low", petSafe: true},
  {id: 5, name: "Monstera", waterEveryDays: 10, heightCm: 66, light: "bright", petSafe: true},
  {id: 6, name: "Bonsai", waterEveryDays: 16, heightCm: 81, light: "low", petSafe: true},
  {id: 7, name: "Fern", waterEveryDays: 19, heightCm: 70, light: "bright", petSafe: false},
  {id: 8, name: "Basil", waterEveryDays: 9, heightCm: 62, light: "medium", petSafe: false}
];

test("with 40", () => {
  expect(heightCmHistogram(PLANTS, 40)).toEqual({"0":2,"40":3,"80":2,"120":1});
});

test("with 80", () => {
  expect(heightCmHistogram(PLANTS, 80)).toEqual({"0":5,"80":3});
});
