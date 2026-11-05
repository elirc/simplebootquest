// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = tasks.map((x) => ({ ...x }));
  return () => { tasks.length = 0; tasks.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("computes stats", async () => {
  const res = await request(app).get("/tasks/stats");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"count":8,"totalPriority":28,"averagePriority":4});
});
