const PLANTS = [
  {id: 1, name: "Fern", waterEveryDays: 15, heightCm: 146, light: "medium", petSafe: true},
  {id: 2, name: "Ivy", waterEveryDays: 13, heightCm: 112, light: "bright", petSafe: true},
  {id: 3, name: "Snake Plant", waterEveryDays: 5, heightCm: 143, light: "low", petSafe: false},
  {id: 4, name: "Monstera", waterEveryDays: 8, heightCm: 101, light: "medium", petSafe: true},
  {id: 5, name: "Lavender", waterEveryDays: 14, heightCm: 115, light: "bright", petSafe: true},
  {id: 6, name: "Mint", waterEveryDays: 13, heightCm: 51, light: "medium", petSafe: true},
  {id: 7, name: "Peace Lily", waterEveryDays: 15, heightCm: 65, light: "bright", petSafe: true},
  {id: 8, name: "Cactus", waterEveryDays: 11, heightCm: 30, light: "low", petSafe: false}
];

test("an empty list", () => {
  expect(plantsById([])).toEqual({});
});

test("all plants", () => {
  expect(plantsById(PLANTS)).toEqual({"1":"Fern","2":"Ivy","3":"Snake Plant","4":"Monstera","5":"Lavender","6":"Mint","7":"Peace Lily","8":"Cactus"});
});
