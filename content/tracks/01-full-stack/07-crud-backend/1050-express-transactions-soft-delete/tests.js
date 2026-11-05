// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = transactions.map((x) => ({ ...x }));
  return () => { transactions.length = 0; transactions.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("soft deletes", async () => {
  const res = await request(app).delete("/transactions/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).get("/transactions");
  expect(res2.body).toEqual(["TX-06","TX-08","TX-11","TX-07","TX-12","TX-01","TX-05"]);
});

test("cannot delete twice", async () => {
  const res = await request(app).delete("/transactions/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).delete("/transactions/2");
  expect(res2.status).toBe(404);
  expect(res2.body).toEqual({"error":"Not found"});
});
