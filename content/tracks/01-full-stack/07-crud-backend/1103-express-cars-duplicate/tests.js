// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = cars.map((x) => ({ ...x }));
  return () => { cars.length = 0; cars.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates new", async () => {
  const res = await request(app).post("/cars").send({"model":"Unique One"});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"model":"Unique One"});
});

test("rejects duplicates", async () => {
  const res = await request(app).post("/cars").send({"model":"POLO"});
  expect(res.status).toBe(409);
  expect(res.body).toEqual({"error":"Car already exists"});
});
