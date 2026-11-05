// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = plants.map((x) => ({ ...x }));
  return () => { plants.length = 0; plants.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("updates allowed fields only", async () => {
  const res = await request(app).patch("/plants/3").send({"waterEveryDays":42,"id":99,"hacked":true});
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":3,"name":"Orchid","waterEveryDays":42,"heightCm":5,"light":"medium","petSafe":true});
});

test("missing", async () => {
  const res = await request(app).patch("/plants/999").send({"waterEveryDays":1});
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});
