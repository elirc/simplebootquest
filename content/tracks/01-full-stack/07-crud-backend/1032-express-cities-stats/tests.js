// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = cities.map((x) => ({ ...x }));
  return () => { cities.length = 0; cities.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("computes stats", async () => {
  const res = await request(app).get("/cities/stats");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"count":8,"totalPopulation":29440,"averagePopulation":3680});
});
