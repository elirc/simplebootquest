// Each test gets a fresh copy of the app and its data.
const fresh = () => {
  const original = tasks.map((x) => ({ ...x }));
  return () => { tasks.length = 0; tasks.push(...original.map((x) => ({ ...x }))); };
};
const reset = fresh();
beforeEach(() => reset());

test("soft deletes", async () => {
  const res = await request(app).delete("/tasks/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).get("/tasks");
  expect(res2.body).toEqual(["Refactor auth","Design schema","Fix CSS","Deploy API","Plan sprint","Write docs","Add caching"]);
});

test("cannot delete twice", async () => {
  const res = await request(app).delete("/tasks/2");
  expect(res.status).toBe(204);
  const res2 = await request(app).delete("/tasks/2");
  expect(res2.status).toBe(404);
  expect(res2.body).toEqual({"error":"Not found"});
});
