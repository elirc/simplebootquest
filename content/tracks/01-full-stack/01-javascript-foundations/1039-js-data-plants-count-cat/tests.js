const PLANTS = [
  {id: 1, name: "Lavender", waterEveryDays: 11, heightCm: 118, light: "low", petSafe: false},
  {id: 2, name: "Orchid", waterEveryDays: 8, heightCm: 6, light: "low", petSafe: false},
  {id: 3, name: "Bonsai", waterEveryDays: 13, heightCm: 93, light: "medium", petSafe: true},
  {id: 4, name: "Snake Plant", waterEveryDays: 4, heightCm: 44, light: "low", petSafe: true},
  {id: 5, name: "Fern", waterEveryDays: 12, heightCm: 72, light: "low", petSafe: true},
  {id: 6, name: "Peace Lily", waterEveryDays: 11, heightCm: 92, light: "low", petSafe: false},
  {id: 7, name: "Mint", waterEveryDays: 8, heightCm: 52, light: "medium", petSafe: false},
  {id: 8, name: "Monstera", waterEveryDays: 20, heightCm: 126, light: "low", petSafe: true}
];

test("with \"low\"", () => {
  expect(countPlantsByLight(PLANTS, "low")).toEqual(6);
});

test("with \"medium\"", () => {
  expect(countPlantsByLight(PLANTS, "medium")).toEqual(2);
});

test("with \"bright\"", () => {
  expect(countPlantsByLight(PLANTS, "bright")).toEqual(0);
});

test("with \"nope\"", () => {
  expect(countPlantsByLight(PLANTS, "nope")).toEqual(0);
});
