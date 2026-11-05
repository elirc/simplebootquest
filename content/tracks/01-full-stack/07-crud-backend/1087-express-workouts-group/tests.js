// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = workouts.map((x) => ({ ...x }));
  return () => { workouts.length = 0; workouts.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("groups", async () => {
  const res = await request(app).get("/workouts/by-kind");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"strength":3,"mobility":3,"cardio":2});
});
