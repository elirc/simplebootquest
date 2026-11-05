// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = orders.map((x) => ({ ...x }));
  return () => { orders.length = 0; orders.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("deletes, then 404s", async () => {
  const res = await request(app).delete("/orders/1");
  expect(res.status).toBe(204);
  const res2 = await request(app).delete("/orders/1");
  expect(res2.status).toBe(404);
  expect(res2.body).toEqual({"error":"Not found"});
});

test("missing", async () => {
  const res = await request(app).delete("/orders/999");
  expect(res.status).toBe(404);
});
