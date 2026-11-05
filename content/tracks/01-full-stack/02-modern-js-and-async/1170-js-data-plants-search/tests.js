const PLANTS = [
  {id: 1, name: "Aloe", waterEveryDays: 19, heightCm: 117, light: "medium", petSafe: false},
  {id: 2, name: "Orchid", waterEveryDays: 7, heightCm: 32, light: "bright", petSafe: false},
  {id: 3, name: "Monstera", waterEveryDays: 6, heightCm: 104, light: "medium", petSafe: true},
  {id: 4, name: "Mint", waterEveryDays: 16, heightCm: 85, light: "low", petSafe: true},
  {id: 5, name: "Ivy", waterEveryDays: 12, heightCm: 92, light: "low", petSafe: false},
  {id: 6, name: "Bonsai", waterEveryDays: 14, heightCm: 9, light: "medium", petSafe: false},
  {id: 7, name: "Fern", waterEveryDays: 1, heightCm: 145, light: "medium", petSafe: false},
  {id: 8, name: "Basil", waterEveryDays: 8, heightCm: 44, light: "bright", petSafe: false}
];

test("with \"on\"", () => {
  expect(searchPlants(PLANTS, "on")).toEqual(["Monstera","Bonsai"]);
});

test("with \"ON\"", () => {
  expect(searchPlants(PLANTS, "ON")).toEqual(["Monstera","Bonsai"]);
});

test("with \"  \"", () => {
  expect(searchPlants(PLANTS, "  ")).toEqual(["Aloe","Orchid","Monstera","Mint","Ivy","Bonsai","Fern","Basil"]);
});

test("with \"zzz\"", () => {
  expect(searchPlants(PLANTS, "zzz")).toEqual([]);
});
