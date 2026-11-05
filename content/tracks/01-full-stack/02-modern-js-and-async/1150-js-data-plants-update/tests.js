const PLANTS = [
  {id: 1, name: "Fern", waterEveryDays: 1, heightCm: 77, light: "medium", petSafe: true},
  {id: 2, name: "Bonsai", waterEveryDays: 17, heightCm: 49, light: "low", petSafe: false},
  {id: 3, name: "Peace Lily", waterEveryDays: 3, heightCm: 27, light: "bright", petSafe: true},
  {id: 4, name: "Orchid", waterEveryDays: 15, heightCm: 141, light: "bright", petSafe: false},
  {id: 5, name: "Monstera", waterEveryDays: 16, heightCm: 28, light: "low", petSafe: true},
  {id: 6, name: "Mint", waterEveryDays: 1, heightCm: 151, light: "bright", petSafe: false},
  {id: 7, name: "Basil", waterEveryDays: 4, heightCm: 40, light: "medium", petSafe: true},
  {id: 8, name: "Snake Plant", waterEveryDays: 14, heightCm: 134, light: "low", petSafe: true}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(PLANTS);
  bumpWaterEveryDays(PLANTS, "low", 10);
  expect(JSON.stringify(PLANTS)).toBe(before);
});

test("with \"low\", 10", () => {
  expect(bumpWaterEveryDays(PLANTS, "low", 10)).toEqual([{"id":1,"name":"Fern","waterEveryDays":1,"heightCm":77,"light":"medium","petSafe":true},{"id":2,"name":"Bonsai","waterEveryDays":27,"heightCm":49,"light":"low","petSafe":false},{"id":3,"name":"Peace Lily","waterEveryDays":3,"heightCm":27,"light":"bright","petSafe":true},{"id":4,"name":"Orchid","waterEveryDays":15,"heightCm":141,"light":"bright","petSafe":false},{"id":5,"name":"Monstera","waterEveryDays":26,"heightCm":28,"light":"low","petSafe":true},{"id":6,"name":"Mint","waterEveryDays":1,"heightCm":151,"light":"bright","petSafe":false},{"id":7,"name":"Basil","waterEveryDays":4,"heightCm":40,"light":"medium","petSafe":true},{"id":8,"name":"Snake Plant","waterEveryDays":24,"heightCm":134,"light":"low","petSafe":true}]);
});

test("with \"medium\", 1", () => {
  expect(bumpWaterEveryDays(PLANTS, "medium", 1)).toEqual([{"id":1,"name":"Fern","waterEveryDays":2,"heightCm":77,"light":"medium","petSafe":true},{"id":2,"name":"Bonsai","waterEveryDays":17,"heightCm":49,"light":"low","petSafe":false},{"id":3,"name":"Peace Lily","waterEveryDays":3,"heightCm":27,"light":"bright","petSafe":true},{"id":4,"name":"Orchid","waterEveryDays":15,"heightCm":141,"light":"bright","petSafe":false},{"id":5,"name":"Monstera","waterEveryDays":16,"heightCm":28,"light":"low","petSafe":true},{"id":6,"name":"Mint","waterEveryDays":1,"heightCm":151,"light":"bright","petSafe":false},{"id":7,"name":"Basil","waterEveryDays":5,"heightCm":40,"light":"medium","petSafe":true},{"id":8,"name":"Snake Plant","waterEveryDays":14,"heightCm":134,"light":"low","petSafe":true}]);
});
