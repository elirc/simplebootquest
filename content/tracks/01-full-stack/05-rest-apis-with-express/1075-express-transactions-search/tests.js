// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = transactions.map((x) => ({ ...x }));
  return () => { transactions.length = 0; transactions.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("finds matches", async () => {
  const res = await request(app).get("/transactions/search?q=tx");
  expect(res.status).toBe(200);
  expect(res.body).toEqual(["TX-06","TX-10","TX-08","TX-11","TX-07","TX-12","TX-01","TX-05"]);
});

test("requires q", async () => {
  const res = await request(app).get("/transactions/search?q=%20");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"q is required"});
});
