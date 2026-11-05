// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = workouts.map((x) => ({ ...x }));
  return () => { workouts.length = 0; workouts.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("soft deletes", async () => {
  const res = await request(app).delete("/workouts/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).get("/workouts");
  expect(res2.body).toEqual(["Tue swim","Thu yoga","Tue run","Wed lift","Sun walk","Sat ride","Thu ride"]);
});

test("cannot delete twice", async () => {
  const res = await request(app).delete("/workouts/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).delete("/workouts/2");
  expect(res2.status).toBe(404);
  expect(res2.body).toEqual({"error":"Not found"});
});
