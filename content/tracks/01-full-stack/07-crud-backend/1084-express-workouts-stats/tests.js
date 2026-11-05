// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = workouts.map((x) => ({ ...x }));
  return () => { workouts.length = 0; workouts.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("computes stats", async () => {
  const res = await request(app).get("/workouts/stats");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"count":8,"totalCalories":4154,"averageCalories":519});
});
