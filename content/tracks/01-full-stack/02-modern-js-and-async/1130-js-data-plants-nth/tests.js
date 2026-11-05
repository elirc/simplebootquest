const PLANTS = [
  {id: 1, name: "Mint", waterEveryDays: 4, heightCm: 128, light: "medium", petSafe: true},
  {id: 2, name: "Snake Plant", waterEveryDays: 13, heightCm: 109, light: "medium", petSafe: true},
  {id: 3, name: "Lavender", waterEveryDays: 4, heightCm: 62, light: "bright", petSafe: true},
  {id: 4, name: "Monstera", waterEveryDays: 20, heightCm: 37, light: "bright", petSafe: true},
  {id: 5, name: "Fern", waterEveryDays: 1, heightCm: 96, light: "medium", petSafe: false},
  {id: 6, name: "Ivy", waterEveryDays: 7, heightCm: 14, light: "bright", petSafe: false},
  {id: 7, name: "Orchid", waterEveryDays: 14, heightCm: 90, light: "medium", petSafe: true},
  {id: 8, name: "Bonsai", waterEveryDays: 4, heightCm: 35, light: "bright", petSafe: false}
];

test("with 1", () => {
  expect(nthByHeightCm(PLANTS, 1)).toEqual("Mint");
});

test("with 2", () => {
  expect(nthByHeightCm(PLANTS, 2)).toEqual("Snake Plant");
});

test("with 5", () => {
  expect(nthByHeightCm(PLANTS, 5)).toEqual("Lavender");
});

test("with 0", () => {
  expect(nthByHeightCm(PLANTS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByHeightCm(PLANTS, 99)).toEqual(null);
});
