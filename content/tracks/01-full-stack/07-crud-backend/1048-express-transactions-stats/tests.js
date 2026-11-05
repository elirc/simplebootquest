// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = transactions.map((x) => ({ ...x }));
  return () => { transactions.length = 0; transactions.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("computes stats", async () => {
  const res = await request(app).get("/transactions/stats");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"count":8,"totalDay":113,"averageDay":14});
});
