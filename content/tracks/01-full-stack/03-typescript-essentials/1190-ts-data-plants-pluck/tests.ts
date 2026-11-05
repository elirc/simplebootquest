const PLANTS = [
  {id: 1, name: "Orchid", waterEveryDays: 12, heightCm: 32, light: "bright", petSafe: false},
  {id: 2, name: "Snake Plant", waterEveryDays: 18, heightCm: 56, light: "bright", petSafe: false},
  {id: 3, name: "Cactus", waterEveryDays: 13, heightCm: 136, light: "medium", petSafe: true},
  {id: 4, name: "Peace Lily", waterEveryDays: 6, heightCm: 77, light: "medium", petSafe: true},
  {id: 5, name: "Fern", waterEveryDays: 16, heightCm: 13, light: "bright", petSafe: false},
  {id: 6, name: "Lavender", waterEveryDays: 20, heightCm: 104, light: "medium", petSafe: false},
  {id: 7, name: "Ivy", waterEveryDays: 2, heightCm: 80, light: "bright", petSafe: true},
  {id: 8, name: "Mint", waterEveryDays: 14, heightCm: 22, light: "low", petSafe: false}
];

test("an empty list", () => {
  expect(summarisePlants([])).toEqual([]);
});

test("all plants", () => {
  expect(summarisePlants(PLANTS)).toEqual([{"id":1,"name":"Orchid","heightCm":32},{"id":2,"name":"Snake Plant","heightCm":56},{"id":3,"name":"Cactus","heightCm":136},{"id":4,"name":"Peace Lily","heightCm":77},{"id":5,"name":"Fern","heightCm":13},{"id":6,"name":"Lavender","heightCm":104},{"id":7,"name":"Ivy","heightCm":80},{"id":8,"name":"Mint","heightCm":22}]);
});
