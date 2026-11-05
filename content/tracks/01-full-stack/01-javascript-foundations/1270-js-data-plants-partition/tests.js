const PLANTS = [
  {id: 1, name: "Peace Lily", waterEveryDays: 7, heightCm: 27, light: "medium", petSafe: false},
  {id: 2, name: "Cactus", waterEveryDays: 18, heightCm: 22, light: "medium", petSafe: false},
  {id: 3, name: "Snake Plant", waterEveryDays: 11, heightCm: 49, light: "bright", petSafe: true},
  {id: 4, name: "Aloe", waterEveryDays: 13, heightCm: 76, light: "medium", petSafe: false},
  {id: 5, name: "Basil", waterEveryDays: 11, heightCm: 16, light: "low", petSafe: true},
  {id: 6, name: "Orchid", waterEveryDays: 3, heightCm: 156, light: "bright", petSafe: false},
  {id: 7, name: "Fern", waterEveryDays: 19, heightCm: 40, light: "medium", petSafe: false},
  {id: 8, name: "Monstera", waterEveryDays: 20, heightCm: 13, light: "bright", petSafe: false}
];

test("an empty list", () => {
  expect(splitPlantsByPetSafe([])).toEqual({"yes":[],"no":[]});
});

test("all plants", () => {
  expect(splitPlantsByPetSafe(PLANTS)).toEqual({"yes":["Snake Plant","Basil"],"no":["Peace Lily","Cactus","Aloe","Orchid","Fern","Monstera"]});
});
