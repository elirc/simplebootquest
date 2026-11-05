const PLANTS = [
  {id: 1, name: "Fern", waterEveryDays: 7, heightCm: 53, light: "low", petSafe: false},
  {id: 2, name: "Monstera", waterEveryDays: 8, heightCm: 115, light: "bright", petSafe: true},
  {id: 3, name: "Ivy", waterEveryDays: 2, heightCm: 35, light: "medium", petSafe: false},
  {id: 4, name: "Lavender", waterEveryDays: 2, heightCm: 9, light: "medium", petSafe: false},
  {id: 5, name: "Snake Plant", waterEveryDays: 4, heightCm: 151, light: "low", petSafe: true},
  {id: 6, name: "Aloe", waterEveryDays: 17, heightCm: 22, light: "low", petSafe: true},
  {id: 7, name: "Mint", waterEveryDays: 13, heightCm: 45, light: "bright", petSafe: false},
  {id: 8, name: "Basil", waterEveryDays: 4, heightCm: 57, light: "medium", petSafe: true}
];

test("an empty list", () => {
  expect(summarisePlants([])).toEqual([]);
});

test("all plants", () => {
  expect(summarisePlants(PLANTS)).toEqual([{"id":1,"name":"Fern","waterEveryDays":7},{"id":2,"name":"Monstera","waterEveryDays":8},{"id":3,"name":"Ivy","waterEveryDays":2},{"id":4,"name":"Lavender","waterEveryDays":2},{"id":5,"name":"Snake Plant","waterEveryDays":4},{"id":6,"name":"Aloe","waterEveryDays":17},{"id":7,"name":"Mint","waterEveryDays":13},{"id":8,"name":"Basil","waterEveryDays":4}]);
});
