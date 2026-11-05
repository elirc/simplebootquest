const PLANTS = [
  {id: 1, name: "Bonsai", waterEveryDays: 8, heightCm: 35, light: "medium", petSafe: false},
  {id: 2, name: "Aloe", waterEveryDays: 19, heightCm: 151, light: "low", petSafe: true},
  {id: 3, name: "Basil", waterEveryDays: 15, heightCm: 85, light: "medium", petSafe: true},
  {id: 4, name: "Orchid", waterEveryDays: 7, heightCm: 72, light: "bright", petSafe: false},
  {id: 5, name: "Fern", waterEveryDays: 20, heightCm: 42, light: "low", petSafe: false},
  {id: 6, name: "Ivy", waterEveryDays: 18, heightCm: 90, light: "medium", petSafe: true},
  {id: 7, name: "Lavender", waterEveryDays: 7, heightCm: 143, light: "medium", petSafe: true},
  {id: 8, name: "Cactus", waterEveryDays: 5, heightCm: 120, light: "bright", petSafe: false}
];

test("an empty list", () => {
  expect(distinctLights([])).toEqual([]);
});

test("all plants", () => {
  expect(distinctLights(PLANTS)).toEqual(["bright","low","medium"]);
});
