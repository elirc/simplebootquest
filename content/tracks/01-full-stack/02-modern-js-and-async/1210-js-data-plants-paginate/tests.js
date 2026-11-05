const PLANTS = [
  {id: 1, name: "Bonsai", waterEveryDays: 13, heightCm: 82, light: "low", petSafe: false},
  {id: 2, name: "Basil", waterEveryDays: 8, heightCm: 116, light: "bright", petSafe: true},
  {id: 3, name: "Aloe", waterEveryDays: 18, heightCm: 16, light: "medium", petSafe: false},
  {id: 4, name: "Fern", waterEveryDays: 14, heightCm: 91, light: "low", petSafe: false},
  {id: 5, name: "Snake Plant", waterEveryDays: 11, heightCm: 143, light: "medium", petSafe: true},
  {id: 6, name: "Mint", waterEveryDays: 16, heightCm: 16, light: "low", petSafe: false},
  {id: 7, name: "Orchid", waterEveryDays: 13, heightCm: 112, light: "low", petSafe: false},
  {id: 8, name: "Lavender", waterEveryDays: 19, heightCm: 65, light: "medium", petSafe: false}
];

test("with 1, 3", () => {
  expect(pageOfPlants(PLANTS, 1, 3)).toEqual({"items":["Bonsai","Basil","Aloe"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfPlants(PLANTS, 2, 3)).toEqual({"items":["Fern","Snake Plant","Mint"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfPlants(PLANTS, 3, 3)).toEqual({"items":["Orchid","Lavender"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfPlants(PLANTS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
