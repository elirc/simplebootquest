// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = workouts.map((x) => ({ ...x }));
  return () => { workouts.length = 0; workouts.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates new", async () => {
  const res = await request(app).post("/workouts").send({"label":"Unique One"});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"label":"Unique One"});
});

test("rejects duplicates", async () => {
  const res = await request(app).post("/workouts").send({"label":"TUE SWIM"});
  expect(res.status).toBe(409);
  expect(res.body).toEqual({"error":"Workout already exists"});
});
