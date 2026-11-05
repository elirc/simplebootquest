// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = events.map((x) => ({ ...x }));
  return () => { events.length = 0; events.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("computes stats", async () => {
  const res = await request(app).get("/events/stats");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"count":8,"totalCapacity":1543,"averageCapacity":193});
});
