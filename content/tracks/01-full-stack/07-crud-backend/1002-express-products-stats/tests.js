// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = products.map((x) => ({ ...x }));
  return () => { products.length = 0; products.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("computes stats", async () => {
  const res = await request(app).get("/products/stats");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"count":8,"totalStock":226,"averageStock":28});
});
