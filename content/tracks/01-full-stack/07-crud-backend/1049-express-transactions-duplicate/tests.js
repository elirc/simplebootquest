// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = transactions.map((x) => ({ ...x }));
  return () => { transactions.length = 0; transactions.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates new", async () => {
  const res = await request(app).post("/transactions").send({"reference":"Unique One"});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"reference":"Unique One"});
});

test("rejects duplicates", async () => {
  const res = await request(app).post("/transactions").send({"reference":"TX-06"});
  expect(res.status).toBe(409);
  expect(res.body).toEqual({"error":"Transaction already exists"});
});
