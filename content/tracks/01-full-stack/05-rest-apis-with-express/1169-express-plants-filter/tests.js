// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = plants.map((x) => ({ ...x }));
  return () => { plants.length = 0; plants.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("filtered", async () => {
  const res = await request(app).get("/plants?light=medium");
  expect(res.status).toBe(200);
  expect(res.body).toEqual([{"id":2,"name":"Fern","waterEveryDays":3,"heightCm":112,"light":"medium","petSafe":true},{"id":3,"name":"Orchid","waterEveryDays":8,"heightCm":5,"light":"medium","petSafe":true},{"id":5,"name":"Monstera","waterEveryDays":18,"heightCm":54,"light":"medium","petSafe":false}]);
});

test("no filter", async () => {
  const res = await request(app).get("/plants");
  expect(res.body).toEqual([{"id":1,"name":"Cactus","waterEveryDays":11,"heightCm":11,"light":"low","petSafe":false},{"id":2,"name":"Fern","waterEveryDays":3,"heightCm":112,"light":"medium","petSafe":true},{"id":3,"name":"Orchid","waterEveryDays":8,"heightCm":5,"light":"medium","petSafe":true},{"id":4,"name":"Peace Lily","waterEveryDays":5,"heightCm":69,"light":"low","petSafe":false},{"id":5,"name":"Monstera","waterEveryDays":18,"heightCm":54,"light":"medium","petSafe":false},{"id":6,"name":"Lavender","waterEveryDays":10,"heightCm":116,"light":"low","petSafe":true},{"id":7,"name":"Basil","waterEveryDays":12,"heightCm":63,"light":"bright","petSafe":false},{"id":8,"name":"Aloe","waterEveryDays":19,"heightCm":11,"light":"low","petSafe":false}]);
});

test("no matches", async () => {
  const res = await request(app).get("/plants?light=nope");
  expect(res.body).toEqual([]);
});
