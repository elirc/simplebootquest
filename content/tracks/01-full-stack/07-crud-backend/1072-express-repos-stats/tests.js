// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = repos.map((x) => ({ ...x }));
  return () => { repos.length = 0; repos.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("computes stats", async () => {
  const res = await request(app).get("/repos/stats");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"count":8,"totalStars":25874,"averageStars":3234});
});
