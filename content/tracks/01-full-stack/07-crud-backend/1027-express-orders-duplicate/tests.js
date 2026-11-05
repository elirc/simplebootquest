// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = orders.map((x) => ({ ...x }));
  return () => { orders.length = 0; orders.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates new", async () => {
  const res = await request(app).post("/orders").send({"code":"Unique One"});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"code":"Unique One"});
});

test("rejects duplicates", async () => {
  const res = await request(app).post("/orders").send({"code":"E-500"});
  expect(res.status).toBe(409);
  expect(res.body).toEqual({"error":"Order already exists"});
});
