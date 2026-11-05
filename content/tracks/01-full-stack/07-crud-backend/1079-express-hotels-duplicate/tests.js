// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = hotels.map((x) => ({ ...x }));
  return () => { hotels.length = 0; hotels.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates new", async () => {
  const res = await request(app).post("/hotels").send({"name":"Unique One"});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"name":"Unique One"});
});

test("rejects duplicates", async () => {
  const res = await request(app).post("/hotels").send({"name":"RIVERSIDE INN"});
  expect(res.status).toBe(409);
  expect(res.body).toEqual({"error":"Hotel already exists"});
});
