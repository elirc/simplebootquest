// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = tasks.map((x) => ({ ...x }));
  return () => { tasks.length = 0; tasks.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("sorted desc", async () => {
  const res = await request(app).get("/tasks?sort=priority&order=desc");
  expect(res.body).toEqual(["Write docs","Refactor auth","Fix CSS","Add caching","Add search","Deploy API","Plan sprint","Design schema"]);
});

test("sorted by name", async () => {
  const res = await request(app).get("/tasks?sort=title");
  expect(res.body).toEqual(["Add caching","Add search","Deploy API","Design schema","Fix CSS","Plan sprint","Refactor auth","Write docs"]);
});

test("rejects unknown fields", async () => {
  const res = await request(app).get("/tasks?sort=password");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Cannot sort by password"});
});
