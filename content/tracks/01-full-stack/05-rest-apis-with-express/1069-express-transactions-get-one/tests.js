// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = transactions.map((x) => ({ ...x }));
  return () => { transactions.length = 0; transactions.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("found", async () => {
  const res = await request(app).get("/transactions/2");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":2,"reference":"TX-10","amount":1016,"day":9,"category":"rent"});
});

test("missing", async () => {
  const res = await request(app).get("/transactions/999");
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});

test("invalid id", async () => {
  const res = await request(app).get("/transactions/abc");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid id"});
});
