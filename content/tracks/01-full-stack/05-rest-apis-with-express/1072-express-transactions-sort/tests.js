// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = transactions.map((x) => ({ ...x }));
  return () => { transactions.length = 0; transactions.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("sorted desc", async () => {
  const res = await request(app).get("/transactions?sort=amount&order=desc");
  expect(res.body).toEqual(["TX-10","TX-12","TX-06","TX-11","TX-05","TX-08","TX-01","TX-07"]);
});

test("sorted by name", async () => {
  const res = await request(app).get("/transactions?sort=reference");
  expect(res.body).toEqual(["TX-01","TX-05","TX-06","TX-07","TX-08","TX-10","TX-11","TX-12"]);
});

test("rejects unknown fields", async () => {
  const res = await request(app).get("/transactions?sort=password");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Cannot sort by password"});
});
