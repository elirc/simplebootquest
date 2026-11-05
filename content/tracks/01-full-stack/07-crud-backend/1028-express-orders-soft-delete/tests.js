// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = orders.map((x) => ({ ...x }));
  return () => { orders.length = 0; orders.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("soft deletes", async () => {
  const res = await request(app).delete("/orders/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).get("/orders");
  expect(res2.body).toEqual(["E-500","A-100","C-301","B-201","B-200","A-101","E-501"]);
});

test("cannot delete twice", async () => {
  const res = await request(app).delete("/orders/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).delete("/orders/2");
  expect(res2.status).toBe(404);
  expect(res2.body).toEqual({"error":"Not found"});
});
