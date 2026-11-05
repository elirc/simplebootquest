// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = tickets.map((x) => ({ ...x }));
  return () => { tickets.length = 0; tickets.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("computes stats", async () => {
  const res = await request(app).get("/tickets/stats");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"count":8,"totalAgeHours":852,"averageAgeHours":107});
});
