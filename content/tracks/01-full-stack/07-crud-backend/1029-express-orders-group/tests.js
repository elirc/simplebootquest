// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = orders.map((x) => ({ ...x }));
  return () => { orders.length = 0; orders.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("groups", async () => {
  const res = await request(app).get("/orders/by-country");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"UK":3,"DE":4,"US":1});
});
