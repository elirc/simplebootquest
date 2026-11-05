// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = workouts.map((x) => ({ ...x }));
  return () => { workouts.length = 0; workouts.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("creates", async () => {
  const res = await request(app).post("/workouts").send({"label":"Brand new","calories":5});
  expect(res.status).toBe(201);
  expect(res.body).toEqual({"id":9,"label":"Brand new","calories":5});
  expect(res.headers.location).toBe("/workouts/9");
});

test("missing name", async () => {
  const res = await request(app).post("/workouts").send({"calories":3});
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid workout"});
});

test("negative number", async () => {
  const res = await request(app).post("/workouts").send({"label":"x","calories":-1});
  expect(res.status).toBe(400);
});

test("wrong type", async () => {
  const res = await request(app).post("/workouts").send({"label":"x","calories":"5"});
  expect(res.status).toBe(400);
});
