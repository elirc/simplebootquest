// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = products.map((x) => ({ ...x }));
  return () => { products.length = 0; products.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates new", async () => {
  const res = await request(app).post("/products").send({"name":"Unique One"});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"name":"Unique One"});
});

test("rejects duplicates", async () => {
  const res = await request(app).post("/products").send({"name":"BACKPACK"});
  expect(res.status).toBe(409);
  expect(res.body).toEqual({"error":"Product already exists"});
});
