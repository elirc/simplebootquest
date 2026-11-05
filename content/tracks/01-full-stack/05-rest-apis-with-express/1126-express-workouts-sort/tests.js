// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = workouts.map((x) => ({ ...x }));
  return () => { workouts.length = 0; workouts.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("sorted desc", async () => {
  const res = await request(app).get("/workouts?sort=calories&order=desc");
  expect(res.body).toEqual(["Thu ride","Tue swim","Tue run","Thu yoga","Wed lift","Sun walk","Sat ride","Mon run"]);
});

test("sorted by name", async () => {
  const res = await request(app).get("/workouts?sort=label");
  expect(res.body).toEqual(["Mon run","Sat ride","Sun walk","Thu ride","Thu yoga","Tue run","Tue swim","Wed lift"]);
});

test("rejects unknown fields", async () => {
  const res = await request(app).get("/workouts?sort=password");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Cannot sort by password"});
});
