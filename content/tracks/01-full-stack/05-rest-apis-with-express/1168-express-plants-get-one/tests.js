// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = plants.map((x) => ({ ...x }));
  return () => { plants.length = 0; plants.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("found", async () => {
  const res = await request(app).get("/plants/2");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":2,"name":"Fern","waterEveryDays":3,"heightCm":112,"light":"medium","petSafe":true});
});

test("missing", async () => {
  const res = await request(app).get("/plants/999");
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});

test("invalid id", async () => {
  const res = await request(app).get("/plants/abc");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid id"});
});
