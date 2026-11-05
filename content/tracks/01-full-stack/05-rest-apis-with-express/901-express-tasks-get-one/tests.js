// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = tasks.map((x) => ({ ...x }));
  return () => { tasks.length = 0; tasks.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("found", async () => {
  const res = await request(app).get("/tasks/2");
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":2,"title":"Add search","estimate":2,"priority":3,"status":"doing","assignee":"ada","blocked":false});
});

test("missing", async () => {
  const res = await request(app).get("/tasks/999");
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});

test("invalid id", async () => {
  const res = await request(app).get("/tasks/abc");
  expect(res.status).toBe(400);
  expect(res.body).toEqual({"error":"Invalid id"});
});
