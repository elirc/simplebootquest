const PLANTS = [
  {id: 1, name: "Aloe", waterEveryDays: 4, heightCm: 113, light: "medium", petSafe: false},
  {id: 2, name: "Fern", waterEveryDays: 1, heightCm: 149, light: "low", petSafe: true},
  {id: 3, name: "Ivy", waterEveryDays: 3, heightCm: 108, light: "low", petSafe: false},
  {id: 4, name: "Snake Plant", waterEveryDays: 9, heightCm: 43, light: "low", petSafe: true},
  {id: 5, name: "Cactus", waterEveryDays: 13, heightCm: 101, light: "medium", petSafe: true},
  {id: 6, name: "Lavender", waterEveryDays: 17, heightCm: 32, light: "bright", petSafe: true},
  {id: 7, name: "Bonsai", waterEveryDays: 3, heightCm: 125, light: "medium", petSafe: false},
  {id: 8, name: "Basil", waterEveryDays: 10, heightCm: 63, light: "low", petSafe: false}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(PLANTS);
  plantsByWaterEveryDays(PLANTS);
  expect(JSON.stringify(PLANTS)).toBe(before);
});

test("all plants", () => {
  expect(plantsByWaterEveryDays(PLANTS)).toEqual(["Fern","Ivy","Bonsai","Aloe","Snake Plant","Basil","Cactus","Lavender"]);
});
