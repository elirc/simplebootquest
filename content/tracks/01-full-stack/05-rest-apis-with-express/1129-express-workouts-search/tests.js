// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = workouts.map((x) => ({ ...x }));
  return () => { workouts.length = 0; workouts.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("finds matches", async () => {
  const res = await request(app).get("/workouts/search?q=tu");
  expect(res.status).toBe(200);
  expect(res.body).toEqual(["Tue swim","Tue run"]);
});

test("requires q", async () => {
  const res = await request(app).get("/workouts/search?q=%20");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"q is required"});
});
