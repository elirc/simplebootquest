// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = workouts.map((x) => ({ ...x }));
  return () => { workouts.length = 0; workouts.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("works normally", async () => {
  const res = await request(app).get("/workouts/1");
  expect(res.status).toBe(200);
});

test("errors become safe 500s", async () => {
  const res = await request(app).get("/workouts/0");
  expect(res.status).toBe(500);
  expect(res.body).toEqual({"error":"Internal server error"});
});

test("unknown routes get JSON 404s", async () => {
  const res = await request(app).get("/nope");
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Route not found"});
});
