// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = plants.map((x) => ({ ...x }));
  return () => { plants.length = 0; plants.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("computes stats", async () => {
  const res = await request(app).get("/plants/stats");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"count":8,"totalWaterEveryDays":86,"averageWaterEveryDays":11});
});
