const PLANTS = [
  {id: 1, name: "Ivy", waterEveryDays: 13, heightCm: 138, light: "low", petSafe: true},
  {id: 2, name: "Snake Plant", waterEveryDays: 11, heightCm: 159, light: "bright", petSafe: true},
  {id: 3, name: "Monstera", waterEveryDays: 5, heightCm: 126, light: "bright", petSafe: true},
  {id: 4, name: "Bonsai", waterEveryDays: 3, heightCm: 142, light: "medium", petSafe: true},
  {id: 5, name: "Orchid", waterEveryDays: 7, heightCm: 134, light: "low", petSafe: true},
  {id: 6, name: "Cactus", waterEveryDays: 10, heightCm: 72, light: "low", petSafe: true},
  {id: 7, name: "Basil", waterEveryDays: 10, heightCm: 33, light: "medium", petSafe: false},
  {id: 8, name: "Mint", waterEveryDays: 7, heightCm: 87, light: "medium", petSafe: false}
];

test("an empty list", () => {
  expect(highestHeightCm([])).toEqual(null);
});

test("all plants", () => {
  expect(highestHeightCm(PLANTS)).toEqual("Snake Plant");
});
