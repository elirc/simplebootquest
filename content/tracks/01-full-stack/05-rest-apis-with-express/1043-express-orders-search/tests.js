// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = orders.map((x) => ({ ...x }));
  return () => { orders.length = 0; orders.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("finds matches", async () => {
  const res = await request(app).get("/orders/search?q=e-");
  expect(res.status).toBe(200);
  expect(res.body).toEqual(["E-500","E-501"]);
});

test("requires q", async () => {
  const res = await request(app).get("/orders/search?q=%20");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"q is required"});
});
