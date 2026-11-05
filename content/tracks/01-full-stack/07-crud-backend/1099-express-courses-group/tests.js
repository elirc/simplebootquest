// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = courses.map((x) => ({ ...x }));
  return () => { courses.length = 0; courses.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("groups", async () => {
  const res = await request(app).get("/courses/by-level");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"intermediate":4,"beginner":3,"advanced":1});
});
