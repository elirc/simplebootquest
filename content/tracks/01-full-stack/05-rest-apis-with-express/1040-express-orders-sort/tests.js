// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = orders.map((x) => ({ ...x }));
  return () => { orders.length = 0; orders.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("sorted desc", async () => {
  const res = await request(app).get("/orders?sort=totalCents&order=desc");
  expect(res.body).toEqual(["B-200","B-201","C-300","C-301","E-500","A-101","A-100","E-501"]);
});

test("sorted by name", async () => {
  const res = await request(app).get("/orders?sort=code");
  expect(res.body).toEqual(["A-100","A-101","B-200","B-201","C-300","C-301","E-500","E-501"]);
});

test("rejects unknown fields", async () => {
  const res = await request(app).get("/orders?sort=password");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Cannot sort by password"});
});
