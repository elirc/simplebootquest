// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = workouts.map((x) => ({ ...x }));
  return () => { workouts.length = 0; workouts.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("updates allowed fields only", async () => {
  const res = await request(app).patch("/workouts/3").send({"calories":42,"id":99,"hacked":true});
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":3,"label":"Thu yoga","minutes":69,"calories":42,"kind":"mobility"});
});

test("missing", async () => {
  const res = await request(app).patch("/workouts/999").send({"calories":1});
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});
