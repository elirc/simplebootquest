// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = hotels.map((x) => ({ ...x }));
  return () => { hotels.length = 0; hotels.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("computes stats", async () => {
  const res = await request(app).get("/hotels/stats");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"count":8,"totalStars":21,"averageStars":3});
});
