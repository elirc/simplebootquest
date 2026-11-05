const PLANTS = [
  {id: 1, name: "Ivy", waterEveryDays: 20, heightCm: 29, light: "medium", petSafe: false},
  {id: 2, name: "Snake Plant", waterEveryDays: 5, heightCm: 74, light: "bright", petSafe: true},
  {id: 3, name: "Bonsai", waterEveryDays: 10, heightCm: 80, light: "bright", petSafe: false},
  {id: 4, name: "Basil", waterEveryDays: 21, heightCm: 92, light: "bright", petSafe: true},
  {id: 5, name: "Orchid", waterEveryDays: 4, heightCm: 80, light: "low", petSafe: true},
  {id: 6, name: "Lavender", waterEveryDays: 16, heightCm: 19, light: "bright", petSafe: false},
  {id: 7, name: "Cactus", waterEveryDays: 3, heightCm: 127, light: "bright", petSafe: false},
  {id: 8, name: "Mint", waterEveryDays: 13, heightCm: 32, light: "medium", petSafe: true}
];

test("with \"low\"", () => {
  expect(countPlantsByLight(PLANTS, "low")).toEqual(1);
});

test("with \"medium\"", () => {
  expect(countPlantsByLight(PLANTS, "medium")).toEqual(2);
});

test("with \"bright\"", () => {
  expect(countPlantsByLight(PLANTS, "bright")).toEqual(5);
});

test("with \"nope\"", () => {
  expect(countPlantsByLight(PLANTS, "nope")).toEqual(0);
});
