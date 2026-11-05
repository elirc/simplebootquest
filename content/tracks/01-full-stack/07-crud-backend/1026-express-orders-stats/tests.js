// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = orders.map((x) => ({ ...x }));
  return () => { orders.length = 0; orders.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("computes stats", async () => {
  const res = await request(app).get("/orders/stats");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"count":8,"totalTotalCents":117452,"averageTotalCents":14682});
});
