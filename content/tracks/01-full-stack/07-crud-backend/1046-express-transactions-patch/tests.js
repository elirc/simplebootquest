// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = transactions.map((x) => ({ ...x }));
  return () => { transactions.length = 0; transactions.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("updates allowed fields only", async () => {
  const res = await request(app).patch("/transactions/3").send({"day":42,"id":99,"hacked":true});
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":3,"reference":"TX-08","amount":454,"day":42,"category":"salary"});
});

test("missing", async () => {
  const res = await request(app).patch("/transactions/999").send({"day":1});
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});
