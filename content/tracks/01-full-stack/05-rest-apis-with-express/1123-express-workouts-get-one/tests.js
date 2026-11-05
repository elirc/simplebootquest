// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = workouts.map((x) => ({ ...x }));
  return () => { workouts.length = 0; workouts.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("found", async () => {
  const res = await request(app).get("/workouts/2");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":2,"label":"Mon run","minutes":60,"calories":283,"kind":"strength"});
});

test("missing", async () => {
  const res = await request(app).get("/workouts/999");
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});

test("invalid id", async () => {
  const res = await request(app).get("/workouts/abc");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid id"});
});
