test('does not mutate the input', () => {
  const before = JSON.stringify(PLANTS);
  bumpWaterEveryDays(PLANTS, "low", 10);
  expect(JSON.stringify(PLANTS)).toBe(before);
});

test("with \"low\", 10", () => {
  expect(bumpWaterEveryDays(PLANTS, "low", 10)).toEqual([{"id":1,"name":"Peace Lily","waterEveryDays":17,"heightCm":155,"light":"medium","petSafe":false},{"id":2,"name":"Snake Plant","waterEveryDays":21,"heightCm":51,"light":"low","petSafe":true},{"id":3,"name":"Monstera","waterEveryDays":6,"heightCm":110,"light":"bright","petSafe":true},{"id":4,"name":"Aloe","waterEveryDays":12,"heightCm":26,"light":"bright","petSafe":false},{"id":5,"name":"Fern","waterEveryDays":16,"heightCm":127,"light":"medium","petSafe":false},{"id":6,"name":"Lavender","waterEveryDays":17,"heightCm":73,"light":"bright","petSafe":true},{"id":7,"name":"Basil","waterEveryDays":18,"heightCm":151,"light":"low","petSafe":true},{"id":8,"name":"Bonsai","waterEveryDays":18,"heightCm":115,"light":"medium","petSafe":true}]);
});

test("with \"medium\", 1", () => {
  expect(bumpWaterEveryDays(PLANTS, "medium", 1)).toEqual([{"id":1,"name":"Peace Lily","waterEveryDays":18,"heightCm":155,"light":"medium","petSafe":false},{"id":2,"name":"Snake Plant","waterEveryDays":11,"heightCm":51,"light":"low","petSafe":true},{"id":3,"name":"Monstera","waterEveryDays":6,"heightCm":110,"light":"bright","petSafe":true},{"id":4,"name":"Aloe","waterEveryDays":12,"heightCm":26,"light":"bright","petSafe":false},{"id":5,"name":"Fern","waterEveryDays":17,"heightCm":127,"light":"medium","petSafe":false},{"id":6,"name":"Lavender","waterEveryDays":17,"heightCm":73,"light":"bright","petSafe":true},{"id":7,"name":"Basil","waterEveryDays":8,"heightCm":151,"light":"low","petSafe":true},{"id":8,"name":"Bonsai","waterEveryDays":19,"heightCm":115,"light":"medium","petSafe":true}]);
});
