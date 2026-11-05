// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = flights.map((x) => ({ ...x }));
  return () => { flights.length = 0; flights.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("computes stats", async () => {
  const res = await request(app).get("/flights/stats");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"count":8,"totalDurationMin":4139,"averageDurationMin":517});
});
