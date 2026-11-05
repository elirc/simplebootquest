const PLANTS = [
  {id: 1, name: "Lavender", waterEveryDays: 9, heightCm: 159, light: "bright", petSafe: false},
  {id: 2, name: "Aloe", waterEveryDays: 4, heightCm: 124, light: "bright", petSafe: true},
  {id: 3, name: "Monstera", waterEveryDays: 6, heightCm: 116, light: "low", petSafe: true},
  {id: 4, name: "Cactus", waterEveryDays: 19, heightCm: 150, light: "bright", petSafe: false},
  {id: 5, name: "Basil", waterEveryDays: 7, heightCm: 151, light: "bright", petSafe: false},
  {id: 6, name: "Mint", waterEveryDays: 20, heightCm: 27, light: "low", petSafe: true},
  {id: 7, name: "Ivy", waterEveryDays: 16, heightCm: 77, light: "bright", petSafe: true},
  {id: 8, name: "Snake Plant", waterEveryDays: 20, heightCm: 105, light: "medium", petSafe: false}
];

test("with \"low\"", () => {
  expect(countPlantsByLight(PLANTS, "low")).toEqual(2);
});

test("with \"medium\"", () => {
  expect(countPlantsByLight(PLANTS, "medium")).toEqual(1);
});

test("with \"bright\"", () => {
  expect(countPlantsByLight(PLANTS, "bright")).toEqual(5);
});

test("with \"nope\"", () => {
  expect(countPlantsByLight(PLANTS, "nope")).toEqual(0);
});
