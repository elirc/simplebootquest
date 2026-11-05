// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = students.map((x) => ({ ...x }));
  return () => { students.length = 0; students.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("computes stats", async () => {
  const res = await request(app).get("/students/stats");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"count":8,"totalScore":574,"averageScore":72});
});
