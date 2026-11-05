// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = tasks.map((x) => ({ ...x }));
  return () => { tasks.length = 0; tasks.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("updates allowed fields only", async () => {
  const res = await request(app).patch("/tasks/3").send({"priority":42,"id":99,"hacked":true});
  expect(res.status).toBe(200);
  expect(res.body).toEqual({"id":3,"title":"Design schema","estimate":3,"priority":42,"status":"doing","assignee":"ada","blocked":true});
});

test("missing", async () => {
  const res = await request(app).patch("/tasks/999").send({"priority":1});
  expect(res.status).toBe(404);
  expect(res.body).toEqual({"error":"Not found"});
});
