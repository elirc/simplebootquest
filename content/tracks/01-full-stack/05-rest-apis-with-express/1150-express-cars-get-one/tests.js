// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = cars.map((x) => ({ ...x }));
  return () => { cars.length = 0; cars.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("found", async () => {
  const res = await request(app).get("/cars/2");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":2,"model":"Mazda3","priceK":42,"km":21941,"year":2011,"fuel":"hybrid"});
});

test("missing", async () => {
  const res = await request(app).get("/cars/999");
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});

test("invalid id", async () => {
  const res = await request(app).get("/cars/abc");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid id"});
});
