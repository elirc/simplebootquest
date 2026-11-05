// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = courses.map((x) => ({ ...x }));
  return () => { courses.length = 0; courses.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("updates allowed fields only", async () => {
  const res = await request(app).patch("/courses/3").send({"enrolled":42,"id":99,"hacked":true});
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":3,"title":"Docker Intro","lessons":29,"enrolled":42,"level":"intermediate"});
});

test("missing", async () => {
  const res = await request(app).patch("/courses/999").send({"enrolled":1});
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});
