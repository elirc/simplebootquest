const PLANTS = [
  {id: 1, name: "Orchid", waterEveryDays: 6, heightCm: 99, light: "medium", petSafe: true},
  {id: 2, name: "Cactus", waterEveryDays: 13, heightCm: 158, light: "low", petSafe: true},
  {id: 3, name: "Ivy", waterEveryDays: 19, heightCm: 61, light: "bright", petSafe: true},
  {id: 4, name: "Mint", waterEveryDays: 10, heightCm: 54, light: "low", petSafe: false},
  {id: 5, name: "Aloe", waterEveryDays: 12, heightCm: 49, light: "bright", petSafe: false},
  {id: 6, name: "Fern", waterEveryDays: 17, heightCm: 85, light: "medium", petSafe: true},
  {id: 7, name: "Lavender", waterEveryDays: 6, heightCm: 61, light: "bright", petSafe: true},
  {id: 8, name: "Basil", waterEveryDays: 15, heightCm: 90, light: "bright", petSafe: true}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(PLANTS);
  plantsByWaterEveryDays(PLANTS);
  expect(JSON.stringify(PLANTS)).toBe(before);
});

test("all plants", () => {
  expect(plantsByWaterEveryDays(PLANTS)).toEqual(["Orchid","Lavender","Mint","Aloe","Cactus","Basil","Fern","Ivy"]);
});
