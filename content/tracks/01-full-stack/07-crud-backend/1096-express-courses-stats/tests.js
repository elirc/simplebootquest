// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = courses.map((x) => ({ ...x }));
  return () => { courses.length = 0; courses.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("computes stats", async () => {
  const res = await request(app).get("/courses/stats");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"count":8,"totalEnrolled":19890,"averageEnrolled":2486});
});
